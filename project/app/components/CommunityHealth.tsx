'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { communityHealthData } from '../data/chartData';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CommunityHealth() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Community Health Overview</h2>
      <Pie data={communityHealthData} />
    </div>
  );
}