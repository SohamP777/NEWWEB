import { useState, useEffect } from 'react'
import { FaTachometerAlt, FaImage, FaCode } from 'react-icons/fa'

export default function SpeedOptimizer() {
  const [optimizations, setOptimizations] = useState([
    { id: 1, name: 'Image Compression', icon: <FaImage />, status: 'pending' },
    { id: 2, name: 'Lazy Loading', icon: <FaImage />, status: 'pending' },
    { id: 3, name: 'Code Minification', icon: <FaCode />, status: 'pending' }
  ])
  const [score, setScore] = useState(68)

  const runOptimizations = async () => {
    for (const opt of optimizations) {
      setOptimizations(prev => 
        prev.map(item => 
          item.id === opt.id ? { ...item, status: 'running' } : item
        )
      )
      await new Promise(resolve => setTimeout(resolve, 2000))
      setOptimizations(prev => 
        prev.map(item => 
          item.id === opt.id ? { ...item, status: 'complete' } : item
        )
      )
      setScore(prev => Math.min(100, prev + 10))
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <FaTachometerAlt className="text-purple-500 text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Page Speed Boost</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Current Score: <span className="font-bold">{score}/100</span>
          </p>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        {optimizations.map((opt) => (
          <div key={opt.id} className="flex items-center gap-3 p-3 border rounded-lg">
            <div className={`p-2 rounded-full ${
              opt.status === 'complete' 
                ? 'bg-green-100 text-green-500' 
                : opt.status === 'running'
                  ? 'bg-blue-100 text-blue-500 animate-pulse'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
            }`}>
              {opt.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{opt.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {opt.status === 'complete' 
                  ? 'Optimized' 
                  : opt.status === 'running' 
                    ? 'Applying...' 
                    : 'Pending'}
              </p>
            </div>
            {opt.status === 'complete' && (
              <span className="text-green-500 text-sm font-medium">+10pts</span>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={runOptimizations}
        disabled={optimizations.every(opt => opt.status === 'complete')}
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg disabled:opacity-50"
      >
        {optimizations.every(opt => opt.status === 'complete') 
          ? 'Speed Optimized' 
          : 'Run Speed Boost'}
      </button>
    </div>
  )
}