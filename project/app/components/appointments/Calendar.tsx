'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { motion, AnimatePresence } from 'framer-motion';

interface AppointmentCalendarProps {
  onDateSelect: (date: Date) => void;
  appointments: { date: string; patientName: string; time: string; type: string }[];
}

export default function AppointmentCalendar({ onDateSelect, appointments }: AppointmentCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedDateAppointments, setSelectedDateAppointments] = useState<typeof appointments>([]);

  const handleDateChange = (date: Value) => {
    setSelectedDate(date);
    if (date instanceof Date) {
      onDateSelect(date);
      const dateStr = date.toISOString().split('T')[0];
      const filteredAppointments = appointments.filter(apt => apt.date === dateStr);
      setSelectedDateAppointments(filteredAppointments);
    }
  };

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="w-full border-none"
            tileClassName={({ date }) => {
              const hasAppointments = appointments.some(
                apt => apt.date === date.toISOString().split('T')[0]
              );
              return `${hasAppointments ? 'bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100' : ''} rounded-lg transition-colors`;
            }}
          />
        </div>
      </div>

      <div className="w-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDate?.toString()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-4">
              {selectedDate instanceof Date
                ? selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : 'Select a date'}
            </h3>
            <div className="space-y-3">
              {selectedDateAppointments.length > 0 ? (
                selectedDateAppointments.map((apt, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{apt.patientName}</p>
                        <p className="text-sm text-gray-500">{apt.type}</p>
                      </div>
                      <p className="text-blue-600 font-medium">{apt.time}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No appointments for this date</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}