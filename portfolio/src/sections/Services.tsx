import type { ReactNode } from "react";
import { Code, Server, Cpu, Smartphone } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const services: Service[] = [
  { title: "Web Development", description: "Responsive websites with React & Tailwind.", icon: <Code size={28} /> },
  { title: "Backend APIs", description: "Fast & secure APIs using Java, python and Go & Gin.", icon: <Server size={28} /> },
  { title: "Mobile Apps", description: "iOS & Android apps with smooth UX.", icon: <Smartphone size={28} /> },
  { title: "UI/UX Design", description: "User-centered interfaces with beautiful design.", icon: <Cpu size={28} /> },
  { title: "Software Development", description: "Complete software solutions tailored to your needs.", icon: <Code size={28} /> },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-3xl 
      bg-white/20 backdrop-blur-md border border-gray-300
      shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
      <div className="mb-4 text-[#BB9476]">{service.icon}</div>
      <h3 className="font-semibold text-[#264E36] text-lg mb-2">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#f7f5f3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264E36] mb-12 text-shadow-lg">
          My Services
        </h2>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* Second row: 2 staggered cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pl-[25%] mb-16">
          {services.slice(3).map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#264E36] mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-700 mb-6">
            Let's build something amazing! Reach out and let's start your project.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#BB9476] text-white px-6 py-3 rounded-full font-semibold
              hover:bg-[#A97C5B] transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
