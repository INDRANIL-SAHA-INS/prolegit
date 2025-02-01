'use client';

interface CurrentVisitData {
  reason: string;
  symptoms: string;
  vitals: {
    bloodPressure: string;
    heartRate: string;
    temperature: string;
  };
  diagnosis: string;
}

interface CurrentVisitProps {
  data: CurrentVisitData;
  onChange: (data: CurrentVisitData) => void;
}

export default function CurrentVisit({ data, onChange }: CurrentVisitProps) {
  const handleVitalsChange = (field: keyof typeof data.vitals, value: string) => {
    onChange({
      ...data,
      vitals: {
        ...data.vitals,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Reason for Visit *
        </label>
        <textarea
          required
          value={data.reason}
          onChange={(e) => onChange({ ...data, reason: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Symptoms *
        </label>
        <textarea
          required
          value={data.symptoms}
          onChange={(e) => onChange({ ...data, symptoms: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={3}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Vitals</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Blood Pressure *
            </label>
            <input
              type="text"
              required
              value={data.vitals.bloodPressure}
              onChange={(e) => handleVitalsChange('bloodPressure', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="120/80"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Heart Rate *
            </label>
            <input
              type="text"
              required
              value={data.vitals.heartRate}
              onChange={(e) => handleVitalsChange('heartRate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="72 bpm"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Temperature *
            </label>
            <input
              type="text"
              required
              value={data.vitals.temperature}
              onChange={(e) => handleVitalsChange('temperature', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="98.6°F"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Initial Diagnosis
        </label>
        <textarea
          value={data.diagnosis}
          onChange={(e) => onChange({ ...data, diagnosis: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={3}
        />
      </div>
    </div>
  );
}