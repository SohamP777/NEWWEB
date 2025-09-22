import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function HealthScore() {
  const score = 84
  const issues = [
    { type: 'Critical', count: 2, color: 'red' },
    { type: 'Warnings', count: 5, color: 'yellow' },
    { type: 'Optimized', count: 28, color: 'green' }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">SEO Health Score</h3>
      
      <div className="flex items-center gap-6">
        <div className="w-24 h-24">
          <CircularProgressbar
            value={score}
            text={`${score}`}
            styles={buildStyles({
              pathColor: `rgba(16, 185, 129, ${score / 100})`,
              textColor: '#1e293b',
              trailColor: '#e2e8f0',
              textSize: '24px'
            })}
          />
        </div>
        
        <div className="flex-1 space-y-2">
          {issues.map((issue) => (
            <div key={issue.type} className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">{issue.type}</span>
              <span className={`text-sm font-bold ${
                issue.color === 'red' ? 'text-red-500' : 
                issue.color === 'yellow' ? 'text-yellow-500' : 'text-green-500'
              }`}>
                {issue.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
        <p className="text-sm text-blue-600 dark:text-blue-300 text-center">
          Next auto-scan in <span className="font-bold">2h 15m</span>
        </p>
      </div>
    </div>
  )
}