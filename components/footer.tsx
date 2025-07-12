"use client";

import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Quality Guard MSO</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Expert life care planning and medical services for personal injury
              cases. Delivering specialized healthcare solutions with integrity
              and excellence since 2023.
            </p>

            {/* <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors text-sm block text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors text-sm block text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors text-sm block text-left"
                >
                  Our Services
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-400 hover:text-white transition-colors text-sm block text-left"
                >
                  Testimonials
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => scrollToSection("core-values")}
                  className="text-gray-400 hover:text-white transition-colors text-sm block text-left"
                >
                  Core Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors text-sm block text-left"
                >
                  Contact Us
                </button>
              </li>
              {/* <li>
                <a
                  href="#careers"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Life Care Planning
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Medical Summary & Projections
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Specialized Medical Diagnostics
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Advanced Healthcare Solutions
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Regulatory Compliance & Ethics
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Employee Well-being
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    {/* 3200 Las Vegas Blvd S<br />
                    Las Vegas, NV 89109
                    <br />
                    United States */}
                    10780 Santa Monica Blvd Suite 210, West Los Angeles, CA
                    90025, USA
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+14847645271"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +1 484-764-5271
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:admin@qgucmso.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  admin@qgucmso.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="https://www.theqgucmso.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  www.theqgucmso.com
                </a>
              </div>

              {/* <div className="pt-4 border-t border-gray-800">
                <p className="text-gray-500 text-xs mb-2">Business Hours:</p>
                <p className="text-gray-400 text-sm">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}

        {/* <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-4 text-blue-400">
                Certifications & Compliance
              </h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• HIPAA Compliant</li>
                <li>• Joint Commission Accredited</li>
                <li>• ISO 27001 Certified</li>
                <li>• Nevada State Licensed</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-blue-400">
                Professional Memberships
              </h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  • International Association of Rehabilitation Professionals
                </li>
                <li>• American Medical Association</li>
                <li>• Nevada Trial Lawyers Association</li>
                <li>• Commission on Health Care Certification</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-blue-400">Resources</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#case-studies"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#white-papers"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    White Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Industry Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#forms"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Client Forms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-gray-500">
                © 2025 Quality Guard MSO. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <span className="text-gray-700">|</span>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-700">|</span>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Powered by</span>
              <span className="text-blue-400 font-semibold">
                <a href="https://datakernels.in" target="_blank">
                  Data Kernels
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
