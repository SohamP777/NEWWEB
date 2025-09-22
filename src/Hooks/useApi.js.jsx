import { useState, useCallback } from 'react'
import axios from 'axios'

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (config) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        ...config
      })
      return response.data
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, error, request }
}