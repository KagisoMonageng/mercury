export const initSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`🟢 New client: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });

    // Listen to new orders
    socket.on('new_order', (order) => {
      console.log('🧾 New order received in kitchen:', order);
      // Here, emit to kitchen-specific room, display UI, etc.
    });

    // Listen to order status updates
    socket.on('order_status_update', (order) => {
      console.log('🔄 Order status updated:', order);
      // Here, emit to kitchen-specific room, display UI, etc.
    });

    // Listen to new orders
    socket.on('new_reservation', (reservation) => {
      console.log('🧾 New reservation received at reception:', reservation);
    });

    // Listen to reservation status updates
    socket.on('updateReservationStatus', (reservation) => {
      console.log('🔄 Reservation status updated:', reservation);
      // Here, emit to reception-specific room, display UI, etc.
    });
  });
};