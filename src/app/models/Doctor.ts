import Appointment from "./Appointment";
import { Schema, model } from 'mongoose';
import { DoctorSchemaType } from '../../types';

const DoctorSchema = new Schema<DoctorSchemaType>({
    name: {
        type: String,
        required: true
    },
    identifier: {
        type: String,
        required: true
    },
    specialty: {
        type: Schema.Types.ObjectId,
        ref: 'Specialty',
        required: true
    }
});

DoctorSchema.pre('deleteOne', function(next) {
    Appointment.deleteMany({ patient: this._id }).exec();
    next();
})

const Doctor = model('Doctor', DoctorSchema);

export default Doctor;