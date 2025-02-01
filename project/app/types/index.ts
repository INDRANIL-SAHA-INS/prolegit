export interface Appointment {
  id: number;
  patientName: string;
  age: number;
  gender: string;
  time: string;
  criticality: 'high' | 'medium' | 'low';
}

export interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}