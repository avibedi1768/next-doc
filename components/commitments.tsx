import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Shield, Brain } from "lucide-react"

export default function Commitments() {
  const commitments = [
    {
      icon: Users,
      title: "Employee Well-Being",
      description:
        "Providing opportunities for growth, inclusivity, and a supportive work culture where professionals can thrive.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description:
        "Delivering superior healthcare solutions tailored to our clients' specific needs with unwavering quality.",
    },
    {
      icon: Shield,
      title: "Ethical Standards",
      description:
        "Upholding the highest ethical standards and regulatory compliance in all our operations and services.",
    },
    {
      icon: Brain,
      title: "Innovation",
      description:
        "Continuously improving through technological innovation, training, and embracing cutting-edge solutions.",
    },
  ]

  return (
    <section id="commitments" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Commitments</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Quality Guard MSO, our commitments are centered on integrity, innovation, and community. We are dedicated
            to fostering excellence in everything we do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {commitments.map((commitment, index) => (
            <Card
              key={index}
              className="text-center bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-800 text-lg sm:text-xl">{commitment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{commitment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
