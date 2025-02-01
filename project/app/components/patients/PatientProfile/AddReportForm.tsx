'use client';
import { useState } from 'react';
import { PatientReport } from '@/app/types/patient';

interface AddReportFormProps {
  onSubmit: (report: Omit<PatientReport, 'id'>) => void;
  onCancel: () => void;
}

export default function AddReportForm({ onSubmit, onCancel }: AddReportFormProps) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    type: '',
    diagnosis: '',
    prescription: '',
    doctorNotes: ''
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      const attachments: string[] = [];

      if (files) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const response = await fetch('/api/upload-url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              filename: file.name,
              contentType: file.type,
            }),
          });

          const { url, fields } = await response.json();
          const formData = new FormData();
          Object.entries(fields).forEach(([key, value]) => {
            formData.append(key, value as string);
          });
          formData.append('file', file);

          await fetch(url, {
            method: 'POST',
            body: formData,
          });

          attachments.push(`${url}/${fields.key}`);
        }
      }

      onSubmit({
        ...formData,
        attachments,
      });
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Type *</label>
        <input
          type="text"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Diagnosis *</label>
        <textarea
          value={formData.diagnosis}
          onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Prescription *</label>
        <textarea
          value={formData.prescription}
          onChange={(e) => setFormData({ ...formData, prescription: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Doctor's Notes</label>
        <textarea
          value={formData.doctorNotes}
          onChange={(e) => setFormData({ ...formData, doctorNotes: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Attachments</label>
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-gray-50 file:text-gray-700
            hover:file:bg-gray-100"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          disabled={uploading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
          disabled={uploading}
        >
          {uploading ? 'Saving...' : 'Save Report'}
        </button>
      </div>
    </form>
  );
}