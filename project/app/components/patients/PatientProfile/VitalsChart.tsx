'use client';
import { Line } from 'react-chartjs-2';
import { VitalHistory } from '@/app/types/patient';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface VitalsChartProps {
  vitalHistory: VitalHistory[];
}

export default function VitalsChart({ vitalHistory }: VitalsChartProps) {
  const dates = vitalHistory.map(record => record.date);
  const heartRates = vitalHistory.map(record => record.heartRate);
  const bloodPressureSystolic = vitalHistory.map(record => parseInt(record.bloodPressure.split('/')[0]));
  const bloodPressureDiastolic = vitalHistory.map(record => parseInt(record.bloodPressure.split('/')[1]));
  const temperatures = vitalHistory.map(record => record.temperature);
  const weights = vitalHistory.map(record => record.weight);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Patient Vitals History',
        font: {
          size: 16,
          weight: 'bold',
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const vitalSigns = {
    labels: dates,
    datasets: [
      {
        label: 'Heart Rate (bpm)',
        data: heartRates,
        borderColor: 'rgb(234, 88, 12)',
        backgroundColor: 'rgba(234, 88, 12, 0.5)',
        tension: 0.4
      },
      {
        label: 'Systolic BP (mmHg)',
        data: bloodPressureSystolic,
        borderColor: 'rgb(22, 163, 74)',
        backgroundColor: 'rgba(22, 163, 74, 0.5)',
        tension: 0.4
      },
      {
        label: 'Diastolic BP (mmHg)',
        data: bloodPressureDiastolic,
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.5)',
        tension: 0.4
      }
    ]
  };

  const bodyMetrics = {
    labels: dates,
    datasets: [
      {
        label: 'Temperature (°F)',
        data: temperatures,
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        tension: 0.4,
        yAxisID: 'temperature'
      },
      {
        label: 'Weight (kg)',
        data: weights,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
        yAxisID: 'weight'
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Vital Signs</h3>
        <Line options={options} data={vitalSigns} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Body Metrics</h3>
        <Line 
          options={{
            ...options,
            scales: {
              ...options.scales,
              temperature: {
                type: 'linear',
                position: 'left',
                title: {
                  display: true,
                  text: 'Temperature (°F)'
                }
              },
              weight: {
                type: 'linear',
                position: 'right',
                title: {
                  display: true,
                  text: 'Weight (kg)'
                }
              }
            }
          }} 
          data={bodyMetrics} 
        />
      </div>
    </div>
  );
}