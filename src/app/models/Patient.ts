import Appointment from "./Appointment";
import { Schema, model } from "mongoose";
import { PatientSchemaType } from "../../types";

const schemaOpts = { 
    toJSON: {virtuals: true},
    id: false
};

const patientSchema = new Schema<PatientSchemaType>({
    name: {
        type: String, 
        required: true
    },
    document: {
        type: String, 
        required: true
    },
    tel: {
        type: String, 
        required: false
    },
    email: {
        type: String, 
        required: true
    },
    birthdate: {
        type: Date, 
        required: true
    }
}, schemaOpts);

patientSchema.virtual('age').get(function(this: PatientSchemaType) {
    const today = new Date();
    const birthDate = new Date(this.birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
});


patientSchema.pre('deleteOne', function(next) {
    Appointment.deleteMany({ patient: this._id }).exec();
    next();
})

const Patient = model('Patient', patientSchema);

export default Patient;