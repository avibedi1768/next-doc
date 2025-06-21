"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Phone, Award } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 sm:py-20 pt-24 sm:pt-32"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge className="bg-blue-100 text-blue-800 mb-4 text-xs sm:text-sm">
              Established 2023 • Las Vegas, Nevada
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Life Care Planning for
              <span className="gradient-text"> Personal Injury Cases</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Quality Guard MSO delivers specialized medical diagnostics, comprehensive life care planning, and advanced
              healthcare solutions with unwavering commitment to ethical practice and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="gradient-bg hover:bg-blue-700 text-white transform hover:scale-105 transition-all"
              >
                <FileText className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all"
                asChild
              >
                <a href="tel:+18000000000">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg transform rotate-3 opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
              alt="Medical professionals reviewing life care plans and legal documents"
              className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg animate-pulse-slow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">50+ Professionals</p>
                  <p className="text-xs sm:text-sm text-gray-600">Expert Medical Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
