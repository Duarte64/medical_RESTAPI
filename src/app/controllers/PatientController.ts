import Express from 'express';
import Patient from "../models/Patient";

class PatientController {
    async index(req: Express.Request, res: Express.Response) {
        const patients = await Patient.find();
        if (!patients) {
            return res.status(400).json([]);
        } else {
            return res.json(patients);
        };
    }

    async show(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        const patient = await Patient.findById(_id);
        if (patient) {
            return res.json(patient);
        } else {
            return res.status(400).json({ message: 'Patient not found' });
        }
    }

    async store(req: Express.Request, res: Express.Response) {
        try {
            const patient = await Patient.create(req.body);
            return res.json(patient);
        } catch (err) {
            return res.status(400).json({ message: 'Error creating new Patient' });
        };
    }

    async update(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        try {
            const patient = await Patient.updateOne({ _id }, { $set: { ...req.body } });
            res.status(200).json(patient);
        } catch (err) {
            res.status(400).json({ message: 'Error updating Patient' });
        }
    }

    async delete(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        try {
            const patient = await Patient.deleteOne({ _id });
            res.status(200).json(patient);
        } catch(err) {
            res.status(400).json({ message: 'Error deleting Patient' });
        }
    }
}

export default new PatientController();