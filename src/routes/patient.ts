import express from 'express';
import PatientController from '../app/controllers/PatientController';

const router = express.Router();

router.route('/')
    .all()
    .get(PatientController.index)
    .post(PatientController.store);

router.route('/:_id')
    .all()
    .get(PatientController.show)
    .put(PatientController.update)
    .delete(PatientController.delete);

export default router;

