import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';

export default function AnalysisResult() {
  const issues = [
    { id: 1, title: 'Missing Meta Tags', status: 'critical' },
    { id: 2, title: 'Low Image Alt Text Coverage', status: 'warning' },
    { id: 3, title: 'Fast Page Load Speed', status: 'good' }
  ];

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">SEO Analysis Results</h3>
      <div className="space-y-3">
        {issues.map((issue) => (
          <div key={issue.id} className="flex items-start gap-3 p-3 border-b last:border-b-0">
            {issue.status === 'good' ? (
              <FaCheckCircle className="text-green-500 mt-1" />
            ) : issue.status === 'warning' ? (
              <FaInfoCircle className="text-yellow-500 mt-1" />
            ) : (
              <FaTimesCircle className="text-red-500 mt-1" />
            )}
            <div>
              <p className="font-medium">{issue.title}</p>
              <p className="text-sm text-gray-500">
                {issue.status === 'good'
                  ? 'No action needed'
                  : issue.status === 'warning'
                  ? 'Recommended improvement'
                  : 'Requires immediate attention'}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Generate Optimization Report
      </button>
    </div>
  );
}