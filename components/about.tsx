import { CheckCircle, Users, Clock, MapPin, Star } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Quality Guard MSO</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A distinguished organization in life care planning and healthcare sectors, dedicated to providing
            specialized medical and diagnostic services tailored for personal injury cases.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg transform -rotate-3 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
                alt="Medical professionals collaborating on life care planning and patient assessment"
                className="relative rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="animate-slide-in-right">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Innovation Meets Medical Excellence</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Quality Guard MSO stands out as a leader in the healthcare field, consistently delivering reliable and
              efficient healthcare solutions. We leverage advanced technology and a team of skilled medical
              professionals to maintain the highest standards of medical excellence.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our organization places significant emphasis on employee growth, diversity, and well-being, fostering a
              collaborative environment where professionals can thrive while serving the community effectively.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Regulatory Compliance</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Ethical Practice</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Advanced Technology</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Expert Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: Users, number: "50+", label: "Medical Professionals" },
            { icon: Clock, number: "2023", label: "Founded" },
            { icon: MapPin, number: "Las Vegas", label: "Headquarters" },
            { icon: Star, number: "Excellence", label: "Our Standard" },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">{stat.number}</h4>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
