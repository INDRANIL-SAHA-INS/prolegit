import { appointments } from '../data/appointments';
import { getCriticalityColor } from '../utils/colors';

export default function UpcomingAppointments() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white p-4 rounded-lg shadow flex items-center space-x-4"
          >
            <div className={`w-3 h-3 rounded-full ${getCriticalityColor(appointment.criticality)}`} />
            <div>
              <h3 className="font-medium">{appointment.patientName}</h3>
              <p className="text-sm text-gray-500">
                {appointment.age} indra • {appointment.gender}
              </p>
            </div>
            <div className="ml-auto">
              <p className="text-sm font-medium">{appointment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}