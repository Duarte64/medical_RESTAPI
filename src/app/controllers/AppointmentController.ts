import Express from "express";
import Appointment from "../models/Appointment";

class AppointmentController {
    async index(req: Express.Request, res: Express.Response) {
        const appointments = await Appointment
            .find()
            .populate("doctor")
            .populate("patient")
            .populate("specialty");
        if (!appointments) {
            return res.status(400).json([]);
        } else {
            return res.json(appointments);
        };
    }

    async show(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        const appointment = await Appointment
            .findById(_id)
            .populate("doctor")
            .populate("patient")
            .populate("specialty");
        if (appointment) {
            return res.json(appointment);
        } else {
            return res.status(400).json({ message: 'Appointment not found' });
        }
    }

    async store(req: Express.Request, res: Express.Response) {
        try {
            const appointment = await Appointment.create(req.body);
            return res.json(appointment);
        } catch (err) {
            return res.status(400).json({ message: 'Error creating new Appointment' });
        };
    }

    async update(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        try {
            const appointment = await Appointment.updateOne({ _id }, { $set: { ...req.body } });
            res.status(200).json(appointment);
        } catch (err) {
            res.status(400).json({ message: 'Error updating Appointment' });
        }
    }

    async delete(req: Express.Request, res: Express.Response) {
        const { _id } = req.params;
        try {
            const appointment = await Appointment.deleteOne({ _id });
            res.status(200).json(appointment);
        } catch(err) {
            res.status(400).json({ message: 'Error deleting Appointment' });
        }
    } 
}

export default new AppointmentController();