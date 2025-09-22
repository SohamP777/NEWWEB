import { FaCheck, FaCrown, FaRocket, FaBuilding, FaStar, FaSyncAlt, FaShield, FaChartLine, FaCog, FaUsers } from 'react-icons/fa'

const plans = [
  {
    name: 'Starter Plan',
    price: '$29',
    period: '/month',
    description: 'Perfect for small businesses and personal websites',
    features: [
      'Up to 5 websites',
      'Basic AI Automation (1 provider)',
      'Google PageSpeed integration',
      'Manual fix application',
      'Basic analytics',
      'Email support'
    ],
    annualPrice: '$278/year',
    popular: false,
    icon: FaRocket
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing businesses and agencies',
    features: [
      'Up to 25 websites',
      'Full AI analysis (OpenAI + Anthropic + Mistral)',
      'Complete Google API suite',
      'Automated fix application',
      'Real-time performance monitoring',
      'Priority support',
      'White-hat compliance enforcement'
    ],
    annualPrice: '$950/year',
    popular: true,
    icon: FaCrown
  },
  {
    name: 'Agency',
    price: '$199',
    period: '/month',
    description: 'For agencies managing multiple clients',
    features: [
      'Unlimited websites',
      'Full AI analysis (all 3 providers)',
      'White-label options',
      'API access',
      'Advanced analytics',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 support'
    ],
    annualPrice: '$1,910/year',
    popular: false,
    icon: FaBuilding
  },
  {
    name: 'Enterprise',
    price: '$499',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited everything',
      'Custom AI model training',
      'Enterprise-grade security',
      'SLA guarantees',
      'Custom development',
      'On-premise deployment options',
      'Dedicated engineering support',
      'Training & onboarding'
    ],
    annualPrice: '$4,790/year',
    popular: false,
    icon: FaStar
  }
]

const featuresComparison = [
  {
    feature: 'AI Providers',
    starter: '1 provider',
    professional: 'OpenAI + Anthropic + Mistral',
    agency: 'OpenAI + Anthropic + Mistral',
    enterprise: 'Custom AI models + All providers'
  },
  {
    feature: 'Google Integration',
    starter: 'Basic',
    professional: 'Complete suite',
    agency: 'Complete suite + Advanced',
    enterprise: 'Enterprise API access'
  },
  {
    feature: 'Fix Automation',
    starter: 'Manual only',
    professional: 'Full automation',
    agency: 'Full automation + Custom rules',
    enterprise: 'AI-driven optimization'
  },
  {
    feature: 'Monitoring',
    starter: 'Basic',
    professional: 'Real-time',
    agency: 'Real-time + Alerts',
    enterprise: '24/7 monitoring + SLA'
  },
  {
    feature: 'White-hat Compliance',
    starter: 'Basic',
    professional: 'Full enforcement',
    agency: 'Full enforcement + Reporting',
    enterprise: 'Compliance certification'
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose the plan that fits your needs. All plans include our triple AI automation and white-hat compliance.
          </p>
          
          {/* Annual Discount Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white mb-8">
            <div className="flex items-center justify-center gap-3">
              <FaSyncAlt className="w-6 h-6" />
              <span className="text-lg font-semibold">Save 20% with annual billing!</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 ${
                plan.popular ? 'border-blue-500 relative' : 'border-gray-200 dark:border-gray-700'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg rounded-tr-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {plan.price}<span className="text-lg font-normal text-gray-600 dark:text-gray-300">{plan.period}</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {plan.annualPrice} (save 20%)
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            )
          })}
        </div>

        {/* Features Comparison Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Feature Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 font-semibold text-gray-900 dark:text-white">Feature</th>
                  <th className="text-center py-4 font-semibold text-gray-900 dark:text-white">Starter</th>
                  <th className="text-center py-4 font-semibold text-gray-900 dark:text-white">Professional</th>
                  <th className="text-center py-4 font-semibold text-gray-900 dark:text-white">Agency</th>
                  <th className="text-center py-4 font-semibold text-gray-900 dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featuresComparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 font-medium text-gray-900 dark:text-white">{item.feature}</td>
                    <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-300">{item.starter}</td>
                    <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-300">{item.professional}</td>
                    <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-300">{item.agency}</td>
                    <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-300">{item.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unique Selling Points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FaShield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">White-Hat Compliance</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              All optimizations follow Google's guidelines ensuring long-term ranking improvements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FaChartLine className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Triple AI Power</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Combining OpenAI, Anthropic, and Mistral for the most comprehensive SEO analysis available.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FaCog className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full Automation</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              From detection to implementation - everything happens automatically without manual work.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your SEO?</h3>
            <p className="mb-6 opacity-90">
              Join thousands of businesses using our triple AI automation platform
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <p className="text-sm opacity-80 mt-4">14-day free trial • No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  )
}