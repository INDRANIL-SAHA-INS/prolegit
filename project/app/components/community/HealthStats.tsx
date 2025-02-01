'use client';
import { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const regions = ['All Regions', 'North District', 'South District', 'East District', 'West District'];

export default function HealthStats() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  // Simulated data for different regions
  const getRegionData = (region: string) => {
    const baseData = {
      diseaseData: {
        labels: ['Diabetes', 'Hypertension', 'Heart Disease', 'Respiratory Issues', 'Others'],
        datasets: [{
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            'rgba(99, 102, 241, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(251, 146, 60, 0.8)',
            'rgba(147, 51, 234, 0.8)',
            'rgba(107, 114, 128, 0.8)',
          ]
        }]
      },
      monthlyVisits: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Patient Visits',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: 'rgba(99, 102, 241, 0.5)',
          borderColor: 'rgba(99, 102, 241, 1)',
          borderWidth: 2,
        }]
      }
    };

    // Modify data based on region
    if (region !== 'All Regions') {
      const modifier = Math.random() * 0.5 + 0.75;
      baseData.diseaseData.datasets[0].data = baseData.diseaseData.datasets[0].data.map(
        value => Math.round(value * modifier)
      );
      baseData.monthlyVisits.datasets[0].data = baseData.monthlyVisits.datasets[0].data.map(
        value => Math.round(value * modifier)
      );
    }

    return baseData;
  };

  const currentData = getRegionData(selectedRegion);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
    animation: {
      duration: 750,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Health Statistics</h2>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Disease Distribution</h3>
          <Doughnut data={currentData.diseaseData} options={options} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Monthly Patient Visits</h3>
          <Bar data={currentData.monthlyVisits} options={options} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-800">Total Patients</h4>
            <span className="text-blue-600 text-lg font-bold">2,547</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-800">Recovery Rate</h4>
            <span className="text-green-600 text-lg font-bold">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-800">Critical Cases</h4>
            <span className="text-red-600 text-lg font-bold">124</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-600 h-2 rounded-full" style={{ width: '15%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}