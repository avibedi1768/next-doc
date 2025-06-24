"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Stethoscope, Menu, X } from "lucide-react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
// import Testimonials from "@/components/testimonials";
import Commitments from "@/components/commitments";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // const sections = ["home", "about", "services", "testimonials", "commitments", "contact"]
      const sections = ["home", "about", "services", "core-values", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getNavLinkClass = (section: string) => {
    return `transition-colors font-medium ${
      activeSection === section
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        data-aos="fade-down"
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm border-b z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Icon */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-bg rounded-lg flex items-center justify-center">
                <Stethoscope className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <button
                onClick={scrollToHome}
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src="/logo2.png"
                  alt="Quality Guard SMO - Lifecare Planning"
                  className="h-8 sm:h-10 w-auto"
                />
              </button>
            </div>

            {/* Navigation links and button (combined) */}
            <div className="flex items-center space-x-8">
              <nav className="hidden lg:flex space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className={getNavLinkClass("home")}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={getNavLinkClass("about")}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className={getNavLinkClass("services")}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("core-values")}
                  className={getNavLinkClass("core-values")}
                >
                  Core Values
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={getNavLinkClass("contact")}
                >
                  Contact
                </button>
              </nav>

              <Button
                onClick={scrollToContact}
                className="hidden sm:block gradient-bg hover:bg-blue-700 text-white"
              >
                Get Consultation
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t bg-white py-4 animate-fade-in-up">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className={`text-left ${getNavLinkClass("home")}`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`text-left ${getNavLinkClass("about")}`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className={`text-left ${getNavLinkClass("services")}`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("core-values")}
                  className={`text-left ${getNavLinkClass("core-values")}`}
                >
                  Core Values
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`text-left ${getNavLinkClass("contact")}`}
                >
                  Contact
                </button>
                <Button
                  onClick={scrollToContact}
                  className="gradient-bg hover:bg-blue-700 text-white w-full"
                >
                  Get Consultation
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <Hero />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <Commitments />
      <Contact />
      <Footer />

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}
