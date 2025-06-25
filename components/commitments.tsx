import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, ShieldCheck, Cpu } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Users,
      title: "People-Centered Culture",
      description:
        "We prioritize the growth, well-being, and inclusivity of every team member, empowering a supportive and diverse environment.",
      imageKeyword: "diverse happy healthcare team working together",
    },
    {
      icon: Award,
      title: "Excellence in Care",
      description:
        "We are driven to deliver high-quality, specialized healthcare services that are reliable, innovative, and client-focused.",
      imageKeyword: "healthcare professionals providing top quality service",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Compliance",
      description:
        "We operate with ethical integrity and strict adherence to regulatory guidelines across all areas of healthcare and diagnostics.",
      imageKeyword: "medical ethics law compliance documentation",
    },
    {
      icon: Cpu,
      title: "Innovation & Continuous Improvement",
      description:
        "We embrace advanced technologies and training to evolve with the future of healthcare and provide forward-thinking solutions.",
      imageKeyword: "modern medical technology and learning environment",
    },
  ];

  return (
    <section id="core-values" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Quality Guard MSO, we stand for excellence, compliance,
            innovation, and empowering our people—all while serving the
            healthcare community with integrity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-800 text-lg sm:text-xl">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
