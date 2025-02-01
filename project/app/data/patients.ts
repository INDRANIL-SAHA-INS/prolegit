import { Patient } from '../types/patient';

export const patients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    region: 'North District',
    chronicIllness: ['Diabetes', 'Hypertension'],
    criticality: 'high',
    lastAppointment: '2023-10-15',
    contactInfo: {
      phone: '+1234567890',
      email: 'john@example.com',
      address: '123 Main St, North District'
    },
    reports: [
      {
        id: '1',
        date: '2023-10-15',
        type: 'Regular Checkup',
        diagnosis: 'Blood sugar levels elevated',
        prescription: 'Metformin 500mg',
        doctorNotes: 'Patient needs to maintain strict diet control'
      }
    ],
    vitalHistory: [
      {
        date: '2023-10-15',
        bloodPressure: '140/90',
        heartRate: 75,
        temperature: 98.6,
        weight: 80
      },
      {
        date: '2023-09-15',
        bloodPressure: '138/88',
        heartRate: 72,
        temperature: 98.4,
        weight: 82
      }
    ]
  }
];