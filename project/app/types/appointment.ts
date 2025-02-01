export interface AppointmentFormData {
  patientId: string;
  date: string;
  time: string;
  type: 'checkup' | 'follow-up' | 'emergency';
  notes?: string;
}

export interface NewAppointmentProps {
  patientId?: string;
}