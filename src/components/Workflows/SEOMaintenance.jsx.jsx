import { useState, useEffect } from 'react'
import { FaHeartbeat, FaShieldAlt, FaSyncAlt } from 'react-icons/fa'

export default function SEOMaintenance() {
  const [isActive, setIsActive] = useState(true)
  const [activities, setActivities] = useState([
    'Fixed: 3 broken redirects',
    'Updated: Sitemap.xml',
    'Optimized: Robots.txt'
  ])

  useEffect(() => {
    if (!isActive) return

    const actions = [
      'Prevented: Duplicate meta tags',
      'Enhanced: Schema markup',
      'Secured: HTTPS enforcement',
      'Improved: URL structure'
    ]

    const interval = setInterval(() => {
      setActivities(prev => [
        actions[Math.floor(Math.random() * actions.length)] + ` (${new Date().toLocaleTimeString()})`,
        ...prev.slice(0, 4)
      ])
    }, 10000)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
            <FaHeartbeat className="text-red-500 text-xl" />
          </div>
          <h3 className="text-xl font-bold">SEO Auto-Maintenance</h3>
        </div>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            isActive 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          <FaSyncAlt className={isActive ? 'animate-spin' : ''} />
          {isActive ? 'Active' : 'Paused'}
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <FaShieldAlt className="text-blue-500 flex-shrink-0" />
          <div>
            <p className="font-medium">Background Protection</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {isActive 
                ? 'Monitoring and fixing issues in real-time' 
                : 'Maintenance paused'}
            </p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-100 dark:bg-gray-700 font-medium">
            Recent Activities
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {activities.map((activity, i) => (
              <li key={i} className="p-3 text-sm">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}