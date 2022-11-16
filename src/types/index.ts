export type SpecialtySchemaType = {
    name: string;
}

export type PatientSchemaType = {
    name: string;
    document: string;
    tel?: string;
    email: string;
    birthdate: Date;
}

export type DoctorSchemaType = {
    name: string;
    identifier: string;
    specialty: SpecialtySchemaType;
}

export type AppointmentSchemaType = {
    patient: PatientSchemaType;
    doctor: DoctorSchemaType;
    specialty: SpecialtySchemaType;
    date: Date;
    time: String;
    status: string;
}