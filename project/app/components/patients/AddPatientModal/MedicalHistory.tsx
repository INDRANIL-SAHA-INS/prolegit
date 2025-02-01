'use client';

interface MedicalHistoryData {
  chronicConditions: string[];
  pastIllnesses: string[];
  medications: string[];
  allergies: string[];
  familyHistory: string;
  immunizations: string[];
  substanceUse: {
    alcohol: boolean;
    tobacco: boolean;
    drugs: boolean;
  };
}

interface MedicalHistoryProps {
  data: MedicalHistoryData;
  onChange: (data: MedicalHistoryData) => void;
}

export default function MedicalHistory({ data, onChange }: MedicalHistoryProps) {
  const handleArrayChange = (field: keyof Pick<MedicalHistoryData, 'chronicConditions' | 'pastIllnesses' | 'medications' | 'allergies' | 'immunizations'>, value: string) => {
    onChange({
      ...data,
      [field]: value.split(',').map(item => item.trim())
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Chronic Conditions
        </label>
        <input
          type="text"
          value={data.chronicConditions.join(', ')}
          onChange={(e) => handleArrayChange('chronicConditions', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Separate conditions with commas"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Past Illnesses and Surgeries
        </label>
        <input
          type="text"
          value={data.pastIllnesses.join(', ')}
          onChange={(e) => handleArrayChange('pastIllnesses', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Separate items with commas"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Current Medications
        </label>
        <input
          type="text"
          value={data.medications.join(', ')}
          onChange={(e) => handleArrayChange('medications', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Separate medications with commas"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Allergies
        </label>
        <input
          type="text"
          value={data.allergies.join(', ')}
          onChange={(e) => handleArrayChange('allergies', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Separate allergies with commas"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Family Medical History
        </label>
        <textarea
          value={data.familyHistory}
          onChange={(e) => onChange({ ...data, familyHistory: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Immunization History
        </label>
        <input
          type="text"
          value={data.immunizations.join(', ')}
          onChange={(e) => handleArrayChange('immunizations', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Separate immunizations with commas"
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Substance Use</h3>
        <div className="space-y-2">
          {['alcohol', 'tobacco', 'drugs'].map((substance) => (
            <label key={substance} className="flex items-center">
              <input
                type="checkbox"
                checked={data.substanceUse[substance as keyof typeof data.substanceUse]}
                onChange={(e) => onChange({
                  ...data,
                  substanceUse: {
                    ...data.substanceUse,
                    [substance]: e.target.checked
                  }
                })}
                className="rounded border-gray-300 text-gray-800 focus:ring-gray-800"
              />
              <span className="ml-2 text-sm text-gray-700 capitalize">
                {substance}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}