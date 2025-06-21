import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Stethoscope, Brain, Scale, Network, Shield } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Life Care Planning",
      description: "Comprehensive life care plans for personal injury cases with detailed medical projections.",
      image:
        "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      features: ["Future medical needs assessment", "Cost projections and analysis", "Expert testimony support"],
    },
    {
      icon: Stethoscope,
      title: "Medical Summary & Projections",
      description: "Detailed medical summaries and future care projections for legal proceedings.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      features: ["Comprehensive medical record review", "Treatment timeline analysis", "Future care recommendations"],
    },
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced AI technology for enhanced diagnostic accuracy and efficiency.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      features: ["Machine learning analysis", "Pattern recognition", "Predictive modeling"],
    },
    {
      icon: Scale,
      title: "Legal Support Services",
      description: "Expert medical testimony and litigation support for personal injury cases.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      features: ["Expert witness testimony", "Case documentation support", "Litigation consulting"],
    },
    {
      icon: Network,
      title: "Workflow Automation",
      description: "Streamlined processes using n8n automation for efficient case management.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      features: ["Process automation", "Data integration", "Efficiency optimization"],
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensuring all services meet the highest regulatory and ethical standards.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      features: ["HIPAA compliance", "Quality assurance", "Ethical guidelines"],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare solutions designed specifically for personal injury cases, powered by advanced
            technology and medical expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 transform hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
