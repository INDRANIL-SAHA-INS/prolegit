import { Appointment } from '../types/appointment';

export const appointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'John Doe',
    date: '2023-10-20',
    time: '09:00',
    type: 'checkup',
    status: 'scheduled'
  },
  {
    id: '2',
    patientId: '2',
    patientName: 'Jane Smith',
    date: '2023-10-20',
    time: '10:30',
    type: 'follow-up',
    status: 'scheduled'
  }
];