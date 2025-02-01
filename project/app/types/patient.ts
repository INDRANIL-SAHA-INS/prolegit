export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  region: string;
  chronicIllness?: string[];
  criticality: 'high' | 'medium' | 'low';
  lastAppointment?: string;
  contactInfo: {
    phone: string;
    email?: string;
    address: string;
  };
  reports?: PatientReport[];
  vitalHistory?: VitalHistory[];
}

export interface PatientReport {
  id: string;
  date: string;
  type: string;
  diagnosis: string;
  prescription: string;
  doctorNotes: string;
  attachments?: string[];
}

export interface VitalHistory {
  date: string;
  bloodPressure: string;
  heartRate: number;
  temperature: number;
  weight: number;
}

export interface PatientFilters {
  region?: string;
  chronicIllness?: string;
  criticality?: string;
  searchQuery?: string;
}