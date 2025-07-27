import express from 'express';
import {
  createOrder,
  getAllOrders,
  updateOrderStatus
} from '../controllers/order.controller.js';

const router = express.Router();

router.get('/', getAllOrders);              // Admin/Kitchen
router.post('/', createOrder);             // Customer
router.put('/:id/status', updateOrderStatus); // Admin/Kitchen

export default router;