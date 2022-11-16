import express from 'express';
import DoctorController from '../app/controllers/DoctorController';

const router = express.Router();

router.route('/')
    .all()
    .get(DoctorController.index)
    .post(DoctorController.store);

router.route('/:_id')
    .all()
    .get(DoctorController.show)
    .put(DoctorController.update)
    .delete(DoctorController.delete);

export default router;

