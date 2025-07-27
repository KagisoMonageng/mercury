import express from 'express';
import { createReservation } from '../controllers/reservation.controller.js';
import { updateReservationStatus } from '../controllers/reservation.controller.js';

const router = express.Router();

router.post('/', createReservation);
router.put('/:id', updateReservationStatus);


export default router;