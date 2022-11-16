import Express from "express";
import Doctor from "../models/Doctor";

class DoctorController {
    async index(req: Express.Request, res: Express.Response) {
        const doctors = await Doctor.find().populate("specialty");
        if (!doctors) {
            return res.status(400).json([]);
        } else {
            return res.json(doctors);
        };
    }

    async show(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        const doctor = await Doctor.findById(_id).populate("specialty");
        if (doctor) {
            return res.json(doctor);
        } else {
            return res.status(400).json({ message: 'Doctor not found' });
        }
    }

    async store(req: Express.Request, res: Express.Response) {
        try {
            const doctor = await Doctor.create(req.body);
            return res.json(doctor);
        } catch (err) {
            return res.status(400).json({ message: 'Error creating new Doctor' });
        };
    }

    async update(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        try {
            const doctor = await Doctor.updateOne({ _id }, { $set: { ...req.body } });
            res.status(200).json(doctor);
        } catch (err) {
            res.status(400).json({ message: 'Error updating Doctor' });
        }
    }

    async delete(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        try {
            const doctor = await Doctor.deleteOne({ _id });
            res.status(200).json(doctor);
        } catch(err) {
            res.status(400).json({ message: 'Error deleting Doctor' });
        }
    } 
}

export default new DoctorController();