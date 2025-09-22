import { useState } from 'react'
import { FaMagic, FaCopy } from 'react-icons/fa'

export default function ContentRewriter() {
  const [originalText, setOriginalText] = useState('')
  const [optimizedText, setOptimizedText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const rewriteContent = async () => {
    setIsLoading(true)
    // Simulate AI API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setOptimizedText(`**SEO-optimized version:**\n${originalText.replace(/website/gi, 'professional web platform')} 
      \n\nKeywords added: "SEO tools", "ranking boost"`)
    setIsLoading(false)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <FaMagic /> AI Content Optimizer
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Original Content</label>
          <textarea
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            className="w-full h-64 p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Paste your content here..."
          />
        </div>
        <div>
          <label className="block mb-2">Optimized Content</label>
          <div className="h-64 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 overflow-auto">
            {optimizedText || <span className="text-gray-400">Output will appear here</span>}
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button
          onClick={rewriteContent}
          disabled={!originalText || isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg disabled:opacity-50"
        >
          {isLoading ? 'Optimizing...' : 'Rewrite for SEO'}
        </button>
        {optimizedText && (
          <button
            onClick={() => navigator.clipboard.writeText(optimizedText)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
          >
            <FaCopy /> Copy
          </button>
        )}
      </div>
    </div>
  )
}