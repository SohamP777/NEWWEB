import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import SEO from '../../components/seo/SEO'
import SignupForm from '../../components/auth/SignupForm'

export default function SignupPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/dashboard')
  }, [user, navigate])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <SEO title="Sign Up | SEO Nova" />
      <SignupForm />
    </div>
  )
}