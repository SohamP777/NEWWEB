import { useState } from 'react'
import { FaRobot, FaCheck } from 'react-icons/fa'

const steps = [
  { id: 1, name: 'Analyzing content structure', duration: 1500 },
  { id: 2, name: 'Optimizing heading hierarchy', duration: 2000 },
  { id: 3, name: 'Enhancing keyword density', duration: 1800 },
  { id: 4, name: 'Generating semantic variations', duration: 2500 }
]

export default function ContentOptimizer() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const runOptimization = async () => {
    for (const step of steps) {
      setCurrentStep(step.id)
      await new Promise(resolve => setTimeout(resolve, step.duration))
    }
    setIsComplete(true)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <FaRobot className="text-blue-500 text-xl" />
        </div>
        <h3 className="text-xl font-bold">Smart Content Rewrite</h3>
      </div>
      
      <div className="space-y-4 mb-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              currentStep > step.id || isComplete 
                ? 'bg-green-100 text-green-500' 
                : currentStep === step.id 
                  ? 'bg-blue-100 text-blue-500 animate-pulse' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
            }`}>
              {currentStep > step.id || isComplete ? <FaCheck /> : step.id}
            </div>
            <p className={currentStep === step.id ? 'font-medium' : ''}>
              {step.name}
              {currentStep === step.id && (
                <span className="ml-2 inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              )}
            </p>
          </div>
        ))}
      </div>

      {!isComplete ? (
        <button
          onClick={runOptimization}
          disabled={currentStep > 0}
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50"
        >
          {currentStep === 0 ? 'Start Automatic Rewrite' : 'Optimizing...'}
        </button>
      ) : (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center gap-3">
          <FaCheck className="text-green-500 flex-shrink-0" />
          <div>
            <p className="font-medium">Content optimized!</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Estimated ranking boost: <span className="font-bold">+15%</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}