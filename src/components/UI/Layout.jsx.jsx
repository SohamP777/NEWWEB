import Navbar from './Navbar'
import Footer from './Footer'
import Toast from './Toast'
import { useToast } from '../../context/ToastContext'

export default function Layout({ children }) {
  const { toasts } = useToast()
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </div>
  )
}