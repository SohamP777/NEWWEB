import { Doughnut } from 'react-chartjs-2'

const data = {
  labels: ['LCP', 'FID', 'CLS'],
  datasets: [{
    data: [82, 95, 76],
    backgroundColor: ['#4361ee', '#7209b7', '#3a0ca3'],
    borderWidth: 0
  }]
}

export default function WebVitals() {
  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 50) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Core Web Vitals</h3>
      <div className="flex items-center">
        <div className="w-24 h-24">
          <Doughnut 
            data={data} 
            options={{ cutout: '70%' }} 
          />
        </div>
        <div className="ml-4 space-y-1">
          {data.labels.map((label, i) => (
            <div key={label} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: data.datasets[0].backgroundColor[i] }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">{label}: </span>
              <span className={`text-sm font-bold ml-1 ${getScoreColor(data.datasets[0].data[i])}`}>
                {data.datasets[0].data[i]}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Scores update every 24 hours
      </p>
    </div>
  )
}