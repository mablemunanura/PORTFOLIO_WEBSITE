import { useState } from "react";

// Example projects
type Project = {
  title: string;
  description: string;
  image: string; // local import or URL
  category: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Music Recording App",
    description: "Record and organize your music tracks efficiently.",
    image: "/projects/music-app.png",
    category: "App Development",
    link: "#",
  },
  {
    title: "Employee Dashboard",
    description: "Manage employee data and requests with ease.",
    image: "/projects/dashboard.png",
    category: "Web Development",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist, responsive, and clean design.",
    image: "/projects/portfolio.png",
    category: "UI/UX Design",
    link: "#",
  },
  {
    title: "Autonomous Vehicle Simulator",
    description: "Perception module prototype for autonomous navigation.",
    image: "/projects/autonomous.png",
    category: "Software Development",
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with React & Go.",
    image: "/projects/ecommerce.png",
    category: "Web Development",
    link: "#",
  },
];

// Optional filter categories
const categories = ["All", "Web Development", "App Development", "UI/UX Design", "Software Development"];

export default function Portfolioo() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="min-h-screen px-6 py-20 bg-[#f7f5f3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264E36] mb-12 text-shadow-lg">
          Portfolio
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition
                ${selectedCategory === cat ? "bg-[#BB9476] text-white" : "bg-white/60 text-gray-700 hover:bg-[#BB9476] hover:text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/20 backdrop-blur-md border border-gray-300 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-[#264E36] font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-[#BB9476] font-semibold hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
