'use client';
import { PatientReport } from '@/app/types/patient';

interface ReportsListProps {
  reports: PatientReport[];
  onEditReport: (report: PatientReport) => void;
}

export default function ReportsList({ reports, onEditReport }: ReportsListProps) {
  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <div key={report.id} className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{report.type}</h3>
              <p className="text-sm text-gray-500">{report.date}</p>
            </div>
            <button
              onClick={() => onEditReport(report)}
              className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
            >
              Edit Report
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gray-700">Diagnosis</h4>
              <p className="text-gray-600">{report.diagnosis}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700">Prescription</h4>
              <p className="text-gray-600">{report.prescription}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700">Doctor's Notes</h4>
              <p className="text-gray-600">{report.doctorNotes}</p>
            </div>
            
            {report.attachments && report.attachments.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-700">Attachments</h4>
                <div className="flex gap-2 mt-2">
                  {report.attachments.map((attachment, index) => (
                    <a
                      key={index}
                      href={attachment}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Document {index + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}