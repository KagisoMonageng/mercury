import{ prisma } from "../config/db.js";

export const createReservation = async (req, res) => {
  try {
    const { customer, people, date, time, notes } = req.body;

    const reservation = await prisma.reservation.create({
      data: {
        people,
        date: new Date(date),
        time,
        notes,
        customer: {
          create: {
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
          },
        },
      },
      include: {
        customer: true, // include full customer object in response
      },
    });

    req.io.emit('new_reservation', reservation);
    res.status(201).json(reservation);
  } catch (err) {
    console.error('❌ Failed to create reservation:', err);
    res.status(500).json({ error: 'Reservation failed' });
  }
};


export const updateReservationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'confirmed', 'cancelled', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const reservation = await prisma.reservation.update({
      where: { id: Number(id) },
      data: { status },
    });

    req.io.emit('updateReservationStatus', reservation);
    res.status(200).json(reservation);
  } catch (err) {
    console.error('❌ Error updating reservation status:', err);
    res.status(500).json({ error: 'Failed to update reservation status' });
  }
};
