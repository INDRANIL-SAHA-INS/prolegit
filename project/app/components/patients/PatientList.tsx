'use client';
import { Patient } from '@/app/types/patient';
import Link from 'next/link';

interface PatientListProps {
  patients: Patient[];
}

export default function PatientList({ patients }: PatientListProps) {
  const getCriticalityColor = (criticality: string) => {
    switch (criticality) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-amber-500';
      default:
        return 'bg-emerald-500';
    }
  };

  return (
    <div className="mt-6">
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age/Gender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Region
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Visit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link 
                    href={`/patients/${patient.id}`}
                    className="flex items-center group"
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${getCriticalityColor(patient.criticality)} mr-3`} />
                    <div className="text-sm font-medium text-gray-900 group-hover:text-gray-600">
                      {patient.name}
                    </div>
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {patient.age} • {patient.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {patient.region}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {patient.lastAppointment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${patient.criticality === 'high' ? 'bg-red-100 text-red-800' : 
                    patient.criticality === 'medium' ? 'bg-amber-100 text-amber-800' : 
                    'bg-emerald-100 text-emerald-800'}`}>
                    {patient.criticality.charAt(0).toUpperCase() + patient.criticality.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}