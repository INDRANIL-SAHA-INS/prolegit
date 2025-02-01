'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { appointments } from '../data/appointments';
import { Value } from 'react-calendar/dist/cjs/shared/types';

export default function AppointmentCalendar() {
  const [date, setDate] = useState<Value>(new Date());

  const handleDateChange = (value: Value) => {
    setDate(value);
    if (value instanceof Date) {
      const selectedDate = value.toISOString().split('T')[0];
      const dayAppointments = appointments.filter(apt => apt.date === selectedDate);
      console.log('Appointments for selected date:', dayAppointments);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Appointment Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="w-full border-none"
        tileClassName={({ date }) => {
          const hasAppointments = appointments.some(
            apt => apt.date === date.toISOString().split('T')[0]
          );
          return hasAppointments ? 'bg-gray-100 rounded-lg font-semibold' : '';
        }}
      />
    </div>
  );
}