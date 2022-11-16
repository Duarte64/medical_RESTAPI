import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import patientsRouter from './routes/patient';
import specialtiesRouter from './routes/specialty';
import doctorsRouter from './routes/doctor';
import appointmentsRouter from './routes/appointment';

const app = express();

app.use(express.json());

app.use(cors({origin: process.env.FRONTEND_URL}));

app.use('/api/patients', patientsRouter);
app.use('/api/specialties', specialtiesRouter);
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to DB!')
});

app.listen(5000, () => console.log('Server started'));