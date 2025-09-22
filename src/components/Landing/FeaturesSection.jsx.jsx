import { FaRobot, FaShieldAlt, FaBolt, FaTachometerAlt, FaFileAlt, FaTags } from 'react-icons/fa'

const features = [
  {
    icon: FaRobot,
    title: 'AI-Powered Optimization',
    description: 'Advanced algorithms analyze your content and structure to implement SEO best practices automatically.'
  },
  {
    icon: FaShieldAlt,
    title: 'Google Compliance',
    description: 'All optimizations strictly follow Google Search Essentials to ensure long-term ranking improvements.'
  },
  {
    icon: FaBolt,
    title: 'Instant Implementation',
    description: 'Get optimized HTML, CSS and content ready to deploy with a single click.'
  },
  {
    icon: FaTachometerAlt,
    title: 'Performance Focused',
    description: 'We optimize page speed, mobile responsiveness and core web vitals for better rankings.'
  },
  {
    icon: FaFileAlt,
    title: 'Content Enhancement',
    description: 'AI improves readability, semantic structure, and keyword usage without keyword stuffing.'
  },
  {
    icon: FaTags,
    title: 'Meta Optimization',
    description: 'Automatically generate compelling meta titles and descriptions that boost CTR.'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Automation</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our AI handles all aspects of on-page optimization while staying fully compliant with Google's guidelines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}