import Express from 'express';
import Specialty from '../models/Specialty';

class SpecialtyController {
    async index(req: Express.Request, res: Express.Response) {
        const specialties = await Specialty.find();
        if (!specialties) {
            return res.status(400).json([]);
        } else {
            return res.json(specialties);
        };
    }

    async show(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        const specialty = await Specialty.findById(_id);
        if (specialty) {
            return res.json(specialty);
        } else {
            return res.status(400).json({ message: 'Specialty not found' });
        }
    }

    async store(req: Express.Request, res: Express.Response) {
        try {
            const specialty = await Specialty.create(req.body);
            return res.json(specialty);
        } catch (err) {
            return res.status(400).json({ message: 'Error creating new Specialty' });
        };
    }
};

export default new SpecialtyController();