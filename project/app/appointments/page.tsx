'use client';
import { useState } from 'react';
import AppointmentCalendar from '../components/appointments/Calendar';
import AppointmentList from '../components/appointments/AppointmentList';
import AddAppointmentButton from '../components/appointments/AddAppointmentButton';
import { appointments as initialAppointments } from '../data/appointments';
import { Appointment } from '../types/appointment';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleStatusChange = (id: string, status: 'completed' | 'cancelled') => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status } : apt
    ));
  };

  const filteredAppointments = appointments.filter(apt => 
    apt.date === selectedDate.toISOString().split('T')[0] &&
    apt.status === 'scheduled'
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <AddAppointmentButton />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <AppointmentCalendar
            onDateSelect={handleDateSelect}
            appointments={appointments}
          />
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-4">
            Appointments for {selectedDate.toLocaleDateString()}
          </h2>
          <AppointmentList
            appointments={filteredAppointments}
            onStatusChange={handleStatusChange}
          />
        </div>
      </div>
    </div>
  );
}