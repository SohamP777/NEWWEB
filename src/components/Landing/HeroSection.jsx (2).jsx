import { motion } from 'framer-motion'
import { FaBolt, FaLock } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = e.target.websiteUrl.value
    if (!url) return
    
    if (user) {
      navigate('/dashboard', { state: { url } })
    } else {
      navigate('/register', { state: { url } })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-white opacity-10 dark:to-gray-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 font-poppins text-gray-900 dark:text-white"
          >
            AI Powered SEO That <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works While You Sleep</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            SEO Nova's advanced AI analyzes and optimizes your website 24/7, ensuring 100% compliance with Google's guidelines while boosting your rankings automatically.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-2xl mx-auto border-l-4 border-blue-500"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Start Your SEO Transformation</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="websiteUrl" className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Enter Your Website URL
                </label>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    placeholder="https://yourwebsite.com"
                    required
                    className="flex-1 px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaBolt /> Start Optimizing
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 flex items-center justify-center gap-1">
                  <FaLock /> Your data is secure. We never share your information.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}