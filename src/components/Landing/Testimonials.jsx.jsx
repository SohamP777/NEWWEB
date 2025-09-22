import { FaStar, FaUser } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    content: 'SEO Nova transformed our organic traffic. We saw a 65% increase in just 3 months without any manual SEO work. The AI truly understands what Google wants.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'E-commerce Owner',
    content: 'As a small business owner, I don\'t have time for complex SEO. SEO Nova automated everything. Our conversion rates improved by 30% after implementing their optimizations.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Manager',
    content: 'The content optimization features are incredible. Our articles now rank for more keywords and stay within Google\'s guidelines. The readability improvements are noticeable.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See what our users say about SEO Nova
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                  <FaUser className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`w-4 h-4 ${
                    i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`} />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}