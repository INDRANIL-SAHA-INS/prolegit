'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import AppointmentForm from '@/app/components/appointments/AppointmentForm';

export default function NewAppointment() {
  const searchParams = useSearchParams();
  const patientId = searchParams.get('patientId');

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Schedule New Appointment</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <AppointmentForm initialPatientId={patientId || undefined} />
      </div>
    </div>
  );
}