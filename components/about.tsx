import { CheckCircle, Users, Clock, MapPin, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Quality Guard MSO
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quality Guard MSO is a distinguished organization in the life care
            planning and healthcare sector, committed to delivering specialized
            diagnostic services and expert medical summaries tailored to
            personal injury and long-term care needs.
          </p>
        </div>

        {/* Image & Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div data-aos="fade-up" className="animate-fade-in-up">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg transform -rotate-3 opacity-20"></div>
              <img
                src="https://img.freepik.com/free-photo/close-up-doctor-holding-red-heart_23-2149191363.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_items_boosted&w=740"
                alt="Medical professionals collaborating on life care planning and patient assessment at Quality Guard MSO"
                className="relative h-full w-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="animate-slide-in-right">
            <h3
              data-aos="fade-down"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
            >
              Excellence Through Innovation and Integrity
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Quality Guard MSO combines clinical expertise with innovative
              solutions to deliver accurate, ethical, and compliant healthcare
              planning. Our services are built on regulatory excellence,
              technology, and compassion.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We foster a culture of inclusivity and growth—empowering our
              professionals to thrive while delivering impactful solutions to
              the legal, medical, and patient communities we serve.
            </p>
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Regulatory Compliance
                </span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Ethical Practice
                </span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Advanced Technology
                </span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Expert Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { icon: Users, number: "50+", label: "Professionals" },
            { icon: Clock, number: "2023", label: "Founded" },
            { icon: MapPin, number: "Las Vegas", label: "Headquarters" },
            { icon: Star, number: "Excellence", label: "Our Standard" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="fade-up"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                {stat.number}
              </h4>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
