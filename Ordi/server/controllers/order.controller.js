import { prisma } from '../config/db.js';

export const createOrder = async (req, res) => {
  const { tableNumber, items } = req.body;
  try {
    const order = await prisma.order.create({
      data: {
        tableNumber,
        items: {
          create: items.map(item => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            instructions: item.instructions || null // Optional instructions
          }))
        }
      },
      include: {
        items: {
          include: {
            menuItem: true
          }
        }
      }
    });

    // Emit real-time order event to kitchen via Socket.IO
    req.io.emit('new_order', order);

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create order.' });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: {
            menuItem: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders.' });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const order = await prisma.order.update({
      where: { id: parseInt(id) },
      data: { status }
    });

    req.io.emit('order_status_update', order);

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update order status.' });
  }
};
