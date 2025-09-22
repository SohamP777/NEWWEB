import { useState } from 'react'

export default function DiffViewer({ oldValue, newValue, splitView = true }) {
  const [viewMode, setViewMode] = useState(splitView ? 'split' : 'unified')

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-700 p-3 flex justify-between items-center">
        <div className="flex gap-2">
          <button 
            onClick={() => setViewMode('split')} 
            className={`px-3 py-1 text-sm rounded ${viewMode === 'split' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600'}`}
          >
            Split View
          </button>
          <button 
            onClick={() => setViewMode('unified')} 
            className={`px-3 py-1 text-sm rounded ${viewMode === 'unified' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600'}`}
          >
            Unified
          </button>
        </div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-800">
        {viewMode === 'split' ? (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Original</h4>
              <pre className="text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded overflow-x-auto">
                {oldValue}
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Optimized</h4>
              <pre className="text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded overflow-x-auto">
                {newValue}
              </pre>
            </div>
          </div>
        ) : (
          <div>
            <pre className="text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded overflow-x-auto">
              {newValue}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}