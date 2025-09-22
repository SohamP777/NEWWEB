import { FaCheckCircle, FaSync, FaExclamationTriangle } from 'react-icons/fa'

const actions = [
  { id: 1, action: 'Optimized meta tags', time: '2 mins ago', type: 'success' },
  { id: 2, action: 'Fixed broken links', time: '1 hour ago', type: 'success' },
  { id: 3, action: 'Updated sitemap', time: '3 hours ago', type: 'success' },
  { id: 4, action: 'Detected slow page', time: '5 hours ago', type: 'warning' }
]

export default function ActionLog() {
  const getIcon = (type) => {
    switch (type) {
      case 'success': return FaCheckCircle
      case 'warning': return FaExclamationTriangle
      default: return FaSync
    }
  }

  const getColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-500'
      case 'warning': return 'text-yellow-500'
      default: return 'text-blue-500'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow h-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
      
      <div className="space-y-3">
        {actions.map((item) => {
          const Icon = getIcon(item.type)
          const color = getColor(item.type)
          
          return (
            <div key={item.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${color}`} />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{item.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
              </div>
            </div>
          )
        })}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
        View all activity →
      </button>
    </div>
  )
}