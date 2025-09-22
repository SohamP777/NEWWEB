import { useEffect } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa'
import { useToast } from '../../context/ToastContext'

export default function Toast({ id, message, type = 'info' }) {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [id, removeToast])

  const icons = {
    success: FaCheckCircle,
    error: FaExclamationCircle,
    warning: FaExclamationCircle,
    info: FaInfoCircle
  }

  const colors = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700'
  }

  const Icon = icons[type]

  return (
    <div className={`flex items-center p-4 mb-4 border rounded-lg ${colors[type]} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300`}>
      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
      <div className="flex-1">{message}</div>
      <button onClick={() => removeToast(id)} className="ml-4 text-gray-500 hover:text-gray-700">
        <FaTimes className="w-4 h-4" />
      </button>
    </div>
  )
}