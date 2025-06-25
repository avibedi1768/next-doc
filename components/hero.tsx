"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Phone } from "lucide-react";

const slides = [
  {
    img: "https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191362.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_hybrid&w=740",
    heading: "Delivering Specialized Life Care Planning",
    text: "We provide personalized medical diagnostics and projections tailored to injury cases with precision and integrity.",
  },
  {
    img: "https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_items_boosted&w=740",
    heading: "Ethical, Compliant & Technology-Driven",
    text: "Our processes are rooted in regulatory compliance, supported by advanced healthcare technology and expert teams.",
  },
  {
    img: "https://img.freepik.com/free-photo/group-medics-hospital_23-2147763792.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_hybrid&w=740",
    heading: "Empowering Professionals, Supporting Clients",
    text: "We foster a collaborative environment for our skilled professionals to deliver consistent, reliable, and ethical care.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-2xl text-white">
              <h1
                data-aos="fade-down"
                className="text-3xl sm:text-5xl font-bold mb-6"
              >
                {slide.heading}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg sm:text-xl mb-8"
              >
                {slide.text}
              </p>
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
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
          </div>
        </div>
      ))}

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-white" : "bg-white/50"
            } transition-all`}
          />
        ))}
      </div>
    </section>
  );
}
