'use client';
import { useState } from 'react';
import SearchBar from '../components/patients/SearchBar';
import FilterOptions from '../components/patients/FilterOptions';
import PatientList from '../components/patients/PatientList';
import AddPatientButton from '../components/patients/AddPatientButton';
import { patients as initialPatients } from '../data/patients';
import { PatientFilters, Patient } from '../types/patient';

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [filters, setFilters] = useState<PatientFilters>({});

  const handleSearch = (query: string) => {
    if (!query) {
      setPatients(initialPatients);
      return;
    }

    const filtered = initialPatients.filter(patient => 
      patient.name.toLowerCase().includes(query.toLowerCase()) ||
      patient.region.toLowerCase().includes(query.toLowerCase()) ||
      patient.age.toString().includes(query)
    );
    setPatients(filtered);
  };

  const handleFilterChange = (newFilters: Partial<PatientFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);

    let filtered = [...initialPatients];

    if (updatedFilters.region) {
      filtered = filtered.filter(p => p.region === updatedFilters.region);
    }
    if (updatedFilters.chronicIllness) {
      filtered = filtered.filter(p => p.chronicIllness?.includes(updatedFilters.chronicIllness!));
    }
    if (updatedFilters.criticality) {
      filtered = filtered.filter(p => p.criticality === updatedFilters.criticality);
    }

    setPatients(filtered);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patient Management</h1>
        <AddPatientButton />
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <SearchBar onSearch={handleSearch} />
          </div>
          <FilterOptions onFilterChange={handleFilterChange} />
        </div>

        <PatientList patients={patients} />
      </div>
    </div>
  );
}