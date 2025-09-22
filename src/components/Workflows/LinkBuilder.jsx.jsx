import { useState } from 'react'
import { FaLink, FaProjectDiagram } from 'react-icons/fa'

export default function LinkBuilder() {
  const [progress, setProgress] = useState(0)
  const [linksAdded, setLinksAdded] = useState(0)

  const buildLinks = async () => {
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i)
      await new Promise(resolve => setTimeout(resolve, 800))
      if (i % 30 === 0) setLinksAdded(prev => prev + 3)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
          <FaProjectDiagram className="text-indigo-500 text-xl" />
        </div>
        <h3 className="text-xl font-bold">Smart Link Builder</h3>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Internal Links</span>
          <span className="text-sm font-bold">{linksAdded} added</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-300">Anchor Texts</p>
          <p className="font-bold">12 optimized</p>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-300">Link Depth</p>
          <p className="font-bold">{progress > 50 ? '3 clicks' : 'Analyzing...'}</p>
        </div>
      </div>

      <button
        onClick={buildLinks}
        disabled={progress === 100}
        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold disabled:opacity-50"
      >
        {progress === 0 
          ? 'Build Links Automatically' 
          : progress === 100 
            ? 'Link Network Optimized' 
            : 'Building...'}
      </button>
    </div>
  )
}