import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import SEO from '../../components/seo/SEO'
import DashboardStats from '../../components/dashboard/DashboardStats'
import UsageChart from '../../components/dashboard/UsageChart'
import RecentActivity from '../../components/dashboard/RecentActivity'
import WebsiteCard from '../../components/dashboard/WebsiteCard'

export default function DashboardPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user, navigate])

  // Check for URL from landing page
  useEffect(() => {
    if (location.state?.url) {
      // Handle the URL submission
      console.log('URL to analyze:', location.state.url)
    }
  }, [location.state])

  return (
    <>
      <SEO title="Dashboard | SEO Nova" />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">
          Welcome back, {user?.name}
        </h1>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">API Usage</h2>
              <UsageChart />
            </div>
          </div>
          
          <div>
            <RecentActivity />
          </div>
        </div>
        
        <div className="mt-8">
          <WebsiteCard />
        </div>
      </div>
    </>
  )
}