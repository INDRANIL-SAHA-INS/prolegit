'use client';
import { useState } from 'react';
import AddPatientModal from './AddPatientModal';

export default function AddPatientButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        onClick={() => setIsModalOpen(true)}
      >
        Add Patient
      </button>
      
      {isModalOpen && (
        <AddPatientModal 
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}