'use client';

import { UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="h-16 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold text-gray-900">Welcome back, Dr. Smith!</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <UserCircleIcon className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-700">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}