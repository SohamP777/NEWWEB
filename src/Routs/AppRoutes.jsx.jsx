import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoadingSpinner from '../components/ui/LoadingSpinner'

const Home = lazy(() => import('../pages/Landing/LandingPage'))
const Login = lazy(() => import('../pages/Auth/LoginPage'))
const Register = lazy(() => import('../pages/Auth/SignupPage'))
const Dashboard = lazy(() => import('../pages/Dashboard/DashboardPage'))
const Tools = lazy(() => import('../pages/Tools/ToolsPage'))
const Pricing = lazy(() => import('../pages/Pricing/PricingPage'))
const Settings = lazy(() => import('../pages/Settings/SettingsPage'))
const ForgotPassword = lazy(() => import('../pages/Auth/ForgotPasswordPage'))

function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner fullPage />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/tools"
          element={
            <PrivateRoute>
              <Tools />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes