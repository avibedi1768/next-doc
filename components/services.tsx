import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  FileText,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Users,
  Settings,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Life Care Planning",
      description:
        "Tailored plans that outline long-term medical and support needs for individuals in personal injury cases.",
      features: [
        "Future care projections",
        "Medical cost estimation",
        "Personalized injury assessments",
      ],
      image:
        "https://img.freepik.com/free-photo/close-up-hand-holding-pen-top-view_23-2149191371.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_items_boosted&w=740", // ← Replace with your own if needed
    },
    {
      icon: Stethoscope,
      title: "Medical Summary & Projections",
      description:
        "Detailed summaries and care projections for patients, supporting case evaluations and healthcare delivery.",
      features: [
        "Medical record consolidation",
        "Treatment timelines",
        "Care forecasting",
      ],
      image:
        "https://img.freepik.com/free-photo/medium-shot-doctor-filling-document-high-angle_23-2149355027.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_items_boosted&w=740",
    },
    {
      icon: HeartPulse,
      title: "Specialized Medical Diagnostics",
      description:
        "Advanced diagnostic evaluations customized to meet specific medical and legal case requirements.",
      features: [
        "Comprehensive health assessments",
        "Specialist-led diagnostics",
        "Report-ready insights",
      ],
      image:
        "https://img.freepik.com/free-photo/senior-couple-talking-with-their-doctor-while-he-is-showing-them-something-computer_637285-1487.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_items_boosted&w=740",
    },
    {
      icon: Settings,
      title: "Advanced Healthcare Solutions",
      description:
        "Innovative tools and methodologies for enhanced healthcare service delivery and planning.",
      features: [
        "Tech-enabled care strategies",
        "Efficiency-focused solutions",
        "Interdisciplinary support",
      ],
      image:
        "https://img.freepik.com/free-photo/specialist-working-with-medical-application_1134-638.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_items_boosted&w=740",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance & Ethics",
      description:
        "Strict adherence to healthcare regulations and ethical standards across all service lines.",
      features: [
        "Regulatory alignment",
        "Ethical decision frameworks",
        "Professional conduct protocols",
      ],
      image:
        "https://img.freepik.com/free-photo/entrepreneurs-working-together_1098-4026.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_items_boosted&w=740",
    },
    {
      icon: Users,
      title: "Employee Well-being",
      description:
        "Commitment to growth, diversity, and supportive environments for healthcare professionals.",
      features: [
        "Inclusive workplace culture",
        "Growth and development support",
        "Collaborative team practices",
      ],
      image:
        "https://img.freepik.com/free-photo/nurse-doctor-team-ready-work-day_23-2149309942.jpg?ga=GA1.1.1245176083.1750754511&semt=ais_items_boosted&w=740",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quality Guard MSO delivers specialized medical services with an
            unwavering focus on compliance, ethics, and personalized patient
            care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 transform hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
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
  );
}
