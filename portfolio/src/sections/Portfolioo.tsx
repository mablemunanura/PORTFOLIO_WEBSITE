import { useState } from "react";
import { X } from "lucide-react";
import Port from "../assets/PortfolioWebsite.png";
import Restaurant1 from "../assets/Restaurant 1.png";
import ToDo1 from "../assets/To Do 1.png";
import ToDoVid from "../assets/To do video.mp4"

// Example projects
type Project = {
  title: string;
  description: string;
  image: string; // local import or URL
  category: string;
  video?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "To do App",
    description: "Record and organize your tasks efficiently.",
    image: ToDo1,
    category: "App Development",
    video: ToDoVid,
  },
  {
    title: "Portfolio Website",
    description: "Minimalist, responsive, and clean design.",
    image: Port,
    category: "Web Development",
    link: "#",
  },
  {
    title: "Restaurant Menu App",
    description: "Well designed and intuitive restaurant menu app interface.",
    image: Restaurant1,
    category: "UI/UX Design",
  },
];

const categories = ["All", "Web Development", "App Development", "UI/UX Design"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
                ${
                  selectedCategory === cat
                    ? "bg-[#BB9476] text-white cursor-default border border-[#BB9476]"
                    : "bg-white/80 text-gray-700 border border-gray-300 hover:bg-[#BB9476] hover:text-white cursor-pointer"
                }`}
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
              className="bg-white/20 backdrop-blur-md border border-gray-300 rounded-2xl overflow-hidden transform hover:scale-105 transition-all flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#264E36] font-semibold text-lg mb-1">
                  {project.title}
                </h3>
                {/* Category badge below title */}
                <span className="bg-gray-200/80 text-gray-600 text-xs px-2 py-1 rounded-full inline-block mb-3">
                  {project.category}
                </span>
                <p className="text-gray-700 mb-6 flex-1">{project.description}</p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="px-5 py-2 rounded-full bg-[#BB9476] text-white font-semibold border border-[#9e785c] transition hover:bg-[#a17860] hover:scale-105 w-fit"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative border border-gray-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <X size={20} className="text-gray-700" />
            </button>

            <h3 className="text-[#264E36] text-2xl font-semibold mb-2">
              {activeProject.title}
            </h3>
            <span className="bg-gray-200/80 text-gray-600 text-sm px-2 py-1 rounded-full inline-block mb-4">
              {activeProject.category}
            </span>
            <p className="text-gray-700 mb-4">{activeProject.description}</p>
            {activeProject.link && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full bg-[#264E36] text-white font-semibold hover:bg-[#1f3a27] transition"
              >
                Visit Link
              </a>
            )}
            {activeProject.video && (
              <video
                src={activeProject.video}
                controls
                className="mt-4 w-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
