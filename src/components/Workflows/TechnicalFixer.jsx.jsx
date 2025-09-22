import { useState } from 'react'
import { FaServer, FaMobileAlt, FaBolt } from 'react-icons/fa'

const fixes = [
  { id: 1, name: 'Canonical Tags', icon: <FaServer />, time: '2s' },
  { id: 2, name: 'Mobile Rendering', icon: <FaMobileAlt />, time: '5s' },
  { id: 3, name: 'Page Speed', icon: <FaBolt />, time: '8s' }
]

export default function TechnicalFixer() {
  const [activeFix, setActiveFix] = useState(null)
  const [fixedItems, setFixedItems] = useState([])

  const runFixes = async () => {
    for (const fix of fixes) {
      setActiveFix(fix.id)
      await new Promise(resolve => setTimeout(resolve, parseInt(fix.time) * 1000))
      setFixedItems(prev => [...prev, fix.id])
    }
    setActiveFix(null)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-6">Technical SEO Auto-Repair</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {fixes.map((fix) => (
          <div 
            key={fix.id}
            className={`p-4 rounded-lg border ${
              fixedItems.includes(fix.id)
                ? 'border-green-500 bg-green-50 dark:bg-green-900/10'
                : activeFix === fix.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10 animate-pulse'
                  : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div className="text-2xl mb-2 text-gray-600 dark:text-gray-300">
              {fix.icon}
            </div>
            <h4 className="font-medium">{fix.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {fixedItems.includes(fix.id) ? (
                <span className="text-green-500">Fixed</span>
              ) : (
                `~${fix.time}`
              )}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={runFixes}
        disabled={activeFix !== null || fixedItems.length === fixes.length}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold disabled:opacity-50"
      >
        {fixedItems.length === fixes.length 
          ? 'All Issues Fixed' 
          : activeFix !== null 
            ? 'Fixing...' 
            : 'Run Auto-Repair'}
      </button>
    </div>
  )
}