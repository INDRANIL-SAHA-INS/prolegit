'use client';

import { useState } from 'react';
import { 
  HomeIcon, 
  UserIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Patient Management', href: '/patients', icon: UserIcon },
  { name: 'Appointments', href: '/appointments', icon: CalendarIcon },
  { name: 'Community Health', href: '/community', icon: ChartBarIcon },
  { name: 'Chat', href: '/chat', icon: ChatBubbleLeftRightIcon },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex flex-col h-full">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <HomeIcon className="h-6 w-6 text-gray-700" />
          {isExpanded && (
            <ChevronRightIcon 
              className={`h-5 w-5 ml-2 text-gray-500 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          )}
        </button>

        <nav className="mt-5 flex-1">
          <div className="space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${
                    isActive ? 'text-blue-700' : 'text-gray-500'
                  }`} />
                  {isExpanded && (
                    <span className="ml-3 transition-opacity duration-200">
                      {item.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-4">
          <div className={`flex items-center ${isExpanded ? 'justify-between' : 'justify-center'}`}>
            <div className={`flex items-center ${!isExpanded && 'hidden'}`}>
              <div className="h-8 w-8 rounded-full bg-gray-200" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Dr. Smith</p>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}