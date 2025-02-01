import HealthStats from '../components/community/HealthStats';

export default function CommunityPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Community Health Overview</h1>
        <p className="text-gray-600">Analysis and insights of health trends in your region</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-blue-600">2,500+</h3>
          <p className="text-gray-600">Active Patients</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-600">85%</h3>
          <p className="text-gray-600">Treatment Success Rate</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-600">12</h3>
          <p className="text-gray-600">Healthcare Programs</p>
        </div>
      </div>

      <HealthStats />

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Key Health Insights</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800">Rising Diabetes Cases</h3>
            <p className="text-blue-600">30% increase in diabetes cases among adults aged 40-50 years</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-800">Vaccination Success</h3>
            <p className="text-green-600">90% of children under 5 years fully vaccinated</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium text-yellow-800">Preventive Care</h3>
            <p className="text-yellow-600">Regular health check-ups increased by 25% this quarter</p>
          </div>
        </div>
      </div>
    </div>
  );
}