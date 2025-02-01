'use client';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search by Name, Age, Region..."
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}