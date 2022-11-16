import express from 'express';
import AppointmentController from '../app/controllers/AppointmentController';

const router = express.Router();

router.route('/')
    .all()
    .get(AppointmentController.index)
    .post(AppointmentController.store);

router.route('/:_id')
    .all()
    .get(AppointmentController.show)
    .put(AppointmentController.update)
    .delete(AppointmentController.delete);

export default router;

