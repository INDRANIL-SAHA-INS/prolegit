'use client';
import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import IdentificationDetails from './IdentificationDetails';
import MedicalHistory from './MedicalHistory';
import CurrentVisit from './CurrentVisit';

interface AddPatientModalProps {
  onClose: () => void;
}

export default function AddPatientModal({ onClose }: AddPatientModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    personalInfo: {
      fullName: '',
      dateOfBirth: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      emergencyContact: {
        name: '',
        relationship: '',
        phone: ''
      }
    },
    // Identification Details
    identificationDetails: {
      patientId: '',
      governmentId: ''
    },
    // Medical History
    medicalHistory: {
      chronicConditions: [],
      pastIllnesses: [],
      medications: [],
      allergies: [],
      familyHistory: '',
      immunizations: [],
      substanceUse: {
        alcohol: false,
        tobacco: false,
        drugs: false
      }
    },
    // Current Visit
    currentVisit: {
      reason: '',
      symptoms: '',
      vitals: {
        bloodPressure: '',
        heartRate: '',
        temperature: ''
      },
      diagnosis: ''
    }
  });

  const handleSubmit = async () => {
    // Here you would make an API call to save the patient data
    console.log('Patient data:', formData);
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            data={formData.personalInfo}
            onChange={(data) => setFormData({ ...formData, personalInfo: data })}
          />
        );
      case 2:
        return (
          <IdentificationDetails
            data={formData.identificationDetails}
            onChange={(data) => setFormData({ ...formData, identificationDetails: data })}
          />
        );
      case 3:
        return (
          <MedicalHistory
            data={formData.medicalHistory}
            onChange={(data) => setFormData({ ...formData, medicalHistory: data })}
          />
        );
      case 4:
        return (
          <CurrentVisit
            data={formData.currentVisit}
            onChange={(data) => setFormData({ ...formData, currentVisit: data })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Add New Patient</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <div className="flex gap-6">
          <div className="w-64 shrink-0">
            <div className="space-y-2">
              {['Personal Information', 'Identification', 'Medical History', 'Current Visit'].map((title, index) => (
                <button
                  key={title}
                  onClick={() => setStep(index + 1)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    step === index + 1
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            {renderStep()}

            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
                >
                  Save Patient
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}