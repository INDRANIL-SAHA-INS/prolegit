'use client';
import { Appointment } from '@/app/types/appointment';

interface AppointmentListProps {
  appointments: Appointment[];
  onStatusChange: (id: string, status: 'completed' | 'cancelled') => void;
}

export default function AppointmentList({ appointments, onStatusChange }: AppointmentListProps) {
  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div>
            <h3 className="font-medium">{appointment.patientName}</h3>
            <p className="text-sm text-gray-500">
              {appointment.time} • {appointment.type}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onStatusChange(appointment.id, 'completed')}
              className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200"
            >
              Complete
            </button>
            <button
              onClick={() => onStatusChange(appointment.id, 'cancelled')}
              className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-md hover:bg-red-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}