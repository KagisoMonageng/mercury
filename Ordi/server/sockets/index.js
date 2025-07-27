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
  });
};