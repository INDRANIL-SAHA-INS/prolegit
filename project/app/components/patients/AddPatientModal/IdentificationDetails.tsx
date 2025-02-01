'use client';

interface IdentificationData {
  patientId: string;
  governmentId: string;
}

interface IdentificationDetailsProps {
  data: IdentificationData;
  onChange: (data: IdentificationData) => void;
}

export default function IdentificationDetails({ data, onChange }: IdentificationDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Patient ID
        </label>
        <input
          type="text"
          value={data.patientId}
          onChange={(e) => onChange({ ...data, patientId: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Auto-generated if left empty"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Government ID
        </label>
        <input
          type="text"
          value={data.governmentId}
          onChange={(e) => onChange({ ...data, governmentId: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}