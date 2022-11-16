import express from 'express';
import SpecialtyController from '../app/controllers/SpecialtyController';

const router = express.Router();

router.route('/')
    .all()
    .get(SpecialtyController.index)
    .post(SpecialtyController.store);

router.route('/:_id')
    .all()
    .get(SpecialtyController.show)

export default router;