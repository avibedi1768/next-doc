import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, ShieldCheck, Cpu } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Users,
      title: "Employee Growth & Diversity",
      description:
        "We foster an inclusive, collaborative environment where professionals grow and thrive together.",
      imageKeyword: "diverse medical team collaboration",
    },
    {
      icon: Award,
      title: "High-Quality Service",
      description:
        "Dedicated to delivering specialized healthcare solutions that are reliable, efficient, and patient-centered.",
      imageKeyword: "healthcare excellence team patient care",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Compliance",
      description:
        "We strictly adhere to ethical practices and regulatory standards across all medical and diagnostic services.",
      imageKeyword: "medical ethics compliance healthcare law",
    },
    {
      icon: Cpu,
      title: "Innovation & Improvement",
      description:
        "We continually enhance services through cutting-edge technology and ongoing training of our staff.",
      imageKeyword: "healthcare technology innovation training",
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
