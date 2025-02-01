'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Patient, PatientReport } from '@/app/types/patient';
import VitalsChart from '@/app/components/patients/PatientProfile/VitalsChart';
import ReportsList from '@/app/components/patients/PatientProfile/ReportsList';
import AddReportForm from '@/app/components/patients/PatientProfile/AddReportForm';
import { patients } from '@/app/data/patients';

export default function PatientProfile({ params }: { params: { id: string } }) {
  const router = useRouter();
  const patient = patients.find(p => p.id === params.id);
  const [showAddReport, setShowAddReport] = useState(false);
  const [selectedReport, setSelectedReport] = useState<PatientReport | null>(null);

  if (!patient) {
    return (
      <div className="p-6">
        <p>Patient not found</p>
      </div>
    );
  }

  const handleEditReport = (report: PatientReport) => {
    setSelectedReport(report);
    setShowAddReport(true);
  };

  const handleAddReport = (reportData: Omit<PatientReport, 'id'>) => {
    // In a real app, this would make an API call to save the report
    console.log('Saving report:', reportData);
    setShowAddReport(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Patients
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">{patient.name}</h1>
                <p className="text-gray-600">
                  {patient.age} years • {patient.gender}
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full ${
                patient.criticality === 'high' ? 'bg-red-100 text-red-800' :
                patient.criticality === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {patient.criticality.charAt(0).toUpperCase() + patient.criticality.slice(1)} Risk
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Contact Information</h3>
                <p className="mt-1">{patient.contactInfo.phone}</p>
                {patient.contactInfo.email && <p>{patient.contactInfo.email}</p>}
                <p>{patient.contactInfo.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Medical History</h3>
                <div className="mt-1">
                  {patient.chronicIllness?.map((illness, index) => (
                    <span
                      key={illness}
                      className="inline-block px-2 py-1 mr-2 mb-2 text-sm bg-gray-100 rounded"
                    >
                      {illness}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button
                onClick={() => setShowAddReport(true)}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Add New Report
              </button>
              <button
                onClick={() => router.push(`/appointments/new?patientId=${patient.id}`)}
                className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {patient.vitalHistory && (
        <div className="mb-8">
          <VitalsChart vitalHistory={patient.vitalHistory} />
        </div>
      )}

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Medical Reports</h2>
        </div>
        {showAddReport ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <AddReportForm
              onSubmit={handleAddReport}
              onCancel={() => setShowAddReport(false)}
            />
          </div>
        ) : (
          <ReportsList
            reports={patient.reports || []}
            onEditReport={handleEditReport}
          />
        )}
      </div>
    </div>
  );
}