'use client';
import { useState } from 'react';
import AppointmentModal from './AppointmentModal';

export default function AddAppointmentButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        onClick={() => setIsModalOpen(true)}
      >
        Add Appointment
      </button>
      
      {isModalOpen && (
        <AppointmentModal 
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}