import {Schema, model} from 'mongoose';
import { SpecialtySchemaType } from '../../types';

const SpecialtySchema = new Schema<SpecialtySchemaType>({
    name: {
        type: String,
        required: true
    }
});

const Specialty = model('Specialty', SpecialtySchema);

export default Specialty;