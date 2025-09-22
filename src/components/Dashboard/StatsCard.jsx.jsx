import { FaChartLine, FaSearch, FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function StatsCard({ title, value, change, icon, isPositive = true }) {
  const Icon = icon || FaChartLine
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
      <div className="flex items-center">
        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
      {change && (
        <div className={`mt-2 flex items-center text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositive ? (
            <FaArrowUp className="w-4 h-4 mr-1" />
          ) : (
            <FaArrowDown className="w-4 h-4 mr-1" />
          )}
          <span>{change}% from last week</span>
        </div>
      )}
    </div>
  )
}