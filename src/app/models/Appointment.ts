import { Schema, model } from "mongoose";
import { AppointmentSchemaType } from "../../types";

const AppointmentSchema = new Schema<AppointmentSchemaType>({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    specialty: {
        type: Schema.Types.ObjectId,
        ref: 'Specialty',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Appointment = model('Appointment', AppointmentSchema);

export default Appointment;

