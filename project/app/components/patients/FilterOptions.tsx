'use client';
import { PatientFilters } from '@/app/types/patient';

interface FilterOptionsProps {
  onFilterChange: (filters: Partial<PatientFilters>) => void;
}

export default function FilterOptions({ onFilterChange }: FilterOptionsProps) {
  return (
    <div className="flex gap-4">
      <select
        className="px-4 py-2 rounded-lg border border-gray-300"
        onChange={(e) => onFilterChange({ region: e.target.value })}
      >
        <option value="">All Regions</option>
        <option value="North District">North District</option>
        <option value="South District">South District</option>
      </select>

      <select
        className="px-4 py-2 rounded-lg border border-gray-300"
        onChange={(e) => onFilterChange({ chronicIllness: e.target.value })}
      >
        <option value="">All Illnesses</option>
        <option value="Diabetes">Diabetes</option>
        <option value="Hypertension">Hypertension</option>
        <option value="Asthma">Asthma</option>
      </select>

      <select
        className="px-4 py-2 rounded-lg border border-gray-300"
        onChange={(e) => onFilterChange({ criticality: e.target.value })}
      >
        <option value="">All Criticality</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}