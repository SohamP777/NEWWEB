import { FaRocket } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your SEO?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that are improving their rankings with our automated SEO optimization platform
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
          >
            <FaRocket className="w-5 h-5 mr-2" />
            Start Free Trial
          </Link>
          
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            View Pricing
          </Link>
        </div>
        
        <p className="text-blue-100 text-sm mt-6">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  )
}