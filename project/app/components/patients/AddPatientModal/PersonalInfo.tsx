'use client';
import { useState } from 'react';

interface PersonalInfoData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

interface PersonalInfoProps {
  data: PersonalInfoData;
  onChange: (data: PersonalInfoData) => void;
}

export default function PersonalInfo({ data, onChange }: PersonalInfoProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={data.fullName}
            onChange={(e) => onChange({ ...data, fullName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth *
          </label>
          <input
            type="date"
            required
            value={data.dateOfBirth}
            onChange={(e) => onChange({ ...data, dateOfBirth: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gender *
        </label>
        <select
          required
          value={data.gender}
          onChange={(e) => onChange({ ...data, gender: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address *
        </label>
        <textarea
          required
          value={data.address}
          onChange={(e) => onChange({ ...data, address: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={2}
        />
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              required
              value={data.emergencyContact.name}
              onChange={(e) => onChange({
                ...data,
                emergencyContact: { ...data.emergencyContact, name: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Relationship *
            </label>
            <input
              type="text"
              required
              value={data.emergencyContact.relationship}
              onChange={(e) => onChange({
                ...data,
                emergencyContact: { ...data.emergencyContact, relationship: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={data.emergencyContact.phone}
            onChange={(e) => onChange({
              ...data,
              emergencyContact: { ...data.emergencyContact, phone: e.target.value }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}