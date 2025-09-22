import { useState } from 'react'
import { FaCode, FaCopy } from 'react-icons/fa'

const schemaTemplates = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "",
    "description": "",
    "author": ""
  },
  product: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "",
    "description": "",
    "brand": ""
  }
}

export default function SchemaGenerator() {
  const [schemaType, setSchemaType] = useState('article')
  const [schemaData, setSchemaData] = useState(schemaTemplates.article)
  const [copied, setCopied] = useState(false)

  const handleInputChange = (key, value) => {
    setSchemaData(prev => ({ ...prev, [key]: value }))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(schemaData, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <FaCode /> Schema Markup Generator
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2">Schema Type</label>
          <select
            value={schemaType}
            onChange={(e) => {
              setSchemaType(e.target.value)
              setSchemaData(schemaTemplates[e.target.value])
            }}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option value="article">Article</option>
            <option value="product">Product</option>
          </select>

          {Object.entries(schemaData).map(([key, value]) => (
            key !== '@context' && key !== '@type' && (
              <div key={key} className="mt-3">
                <label className="block mb-1 capitalize">{key.replace('_', ' ')}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder={`Enter ${key}`}
                />
              </div>
            )
          ))}
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label>Generated JSON-LD</label>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
            >
              <FaCopy /> {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg overflow-auto h-64 text-sm">
            {JSON.stringify(schemaData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}