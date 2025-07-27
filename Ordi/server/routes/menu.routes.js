import express from 'express';
import {
  getAllMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from '../controllers/menu.controller.js';

const router = express.Router();

router.get('/', getAllMenuItems);         // Customer
router.post('/', addMenuItem);            // Admin
router.put('/:id', updateMenuItem);       // Admin
router.delete('/:id', deleteMenuItem);    // Admin

export default router;
