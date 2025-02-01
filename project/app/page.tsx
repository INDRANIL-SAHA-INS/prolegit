import AppointmentCalendar from './components/Calendar';
import UpcomingAppointments from './components/UpcomingAppointments';
import CommunityHealth from './components/CommunityHealth';

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <AppointmentCalendar />
        <UpcomingAppointments />
      </div>
      <div>
        <CommunityHealth />
      </div>
    </div>
  );
}