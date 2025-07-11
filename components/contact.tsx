"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import GoogleMap from "@/components/google-map";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Life Care Planning");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //   const redirectToWhatsApp = () => {
  //     if (!firstName || !lastName || !email || !phone || !message) {
  //       alert("Please fill in all the required fields.");
  //       return;
  //     }

  //     const fullMessage = `
  // Name: ${firstName} ${lastName}
  // Email: ${email}
  // Phone: ${phone}
  // Service Needed: ${service}
  // Message: ${message}
  //     `.trim();

  //     const phoneNumber = "918146004250"; // Replace with your number
  //     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //       fullMessage
  //     )}`;
  //     window.open(whatsappURL, "_blank");
  //   };

  const handleContactSubmit = async () => {
    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isValidPhone = (phone: string) => /^[\d\s()+-]{7,20}$/.test(phone); // allows digits, spaces, +, (), -, and length between 7–20

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setLoading(true); // Disable button

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            service,
            message,
            owner: "piyush@qgucmso.com",
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("Your message has been sent successfully!");

      // Optionally clear form fields here
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setService("Life Care Planning");
      setMessage("");
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you have questions about our services or are ready to
              discuss a case, our dedicated team is here to support you.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Headquarters</h4>
                  <p className="text-gray-600">
                    10780 Santa Monica Blvd Suite 210, <br /> West Los Angeles,
                    CA 90025, USA
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a
                    href="tel:+14847645271"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +1 484-764-5271
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:admin@qgucmso.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    admin@qgucmso.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Website</h4>
                  <a
                    href="https://www.theqgucmso.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.theqgucmso.com
                  </a>
                </div>
              </div>
            </div>

            <GoogleMap />
          </div>

          <div data-aos="fade-up">
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  Request Consultation
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and our team will respond within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Life Care Planning</option>
                    <option>Medical Summary & Projections</option>
                    <option>Specialized Medical Diagnostics</option>
                    <option>Advanced Healthcare Solutions</option>
                    <option>Regulatory Compliance & Ethics</option>
                    <option>Employee Well-being</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Please describe your case or inquiry..."
                  ></textarea>
                </div>

                <Button
                  onClick={handleContactSubmit}
                  disabled={loading}
                  className="w-full gradient-bg hover:bg-blue-700 font-bold text-white transform hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Send Message"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
