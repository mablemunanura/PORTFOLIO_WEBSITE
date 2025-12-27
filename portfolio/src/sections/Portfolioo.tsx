import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Port1 from "../assets/Port 1.png";
import Port2 from "../assets/Port 2.png";
import Port3 from "../assets/Port 3.png";
import Port4 from "../assets/Port 4.png";
import Port5 from "../assets/Port 5.png";
import Port6 from "../assets/Port 6.png";
import Port7 from "../assets/Port 7.png";
import Port8 from "../assets/Port 8.png";
import Port9 from "../assets/Port 9.png";
import Restaurant1 from "../assets/Restaurant 1.png";
import Restaurant2 from "../assets/Restaurant 2.png";
import Restaurant3 from "../assets/Restaurant 3.png";
import Restaurant4 from "../assets/Restaurant 4.png";
import Restaurant5 from "../assets/Restaurant 5.png";
import Restaurant6 from "../assets/Restaurant 6.png";
import Restaurant7 from "../assets/Restaurant 7.png";
import Restaurant8 from "../assets/Restaurant 8.png";
import Restaurant9 from "../assets/Restaurant 9.png";
import ToDo1 from "../assets/To Do 1.png";
import ToDo2 from "../assets/To Do 2.png";
import ToDo3 from "../assets/To Do 3.png";
import ToDo4 from "../assets/To Do 4.png";
import ToDoVid from "../assets/To do video.mp4";

type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  images?: string[];
  video?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "To do App",
    description: "Record and organize your tasks efficiently.",
    image: ToDo1,
    category: "App Development",
    images: [ToDo1, ToDo2, ToDo3, ToDo4],
    video: ToDoVid,
  },
  {
    title: "Portfolio Website",
    description: "Minimalist, responsive, and clean design.",
    image: Port1,
    category: "Web Development",
    images: [Port1, Port2, Port3, Port4, Port5, Port6, Port7, Port8, Port9],
    link: "#",
  },
  {
    title: "Restaurant Menu App",
    description: "Well designed responsive and intuitive restaurant menu app interface.",
    image: Restaurant1,
    category: "UI/UX Design",
    images: [Restaurant1, Restaurant2, Restaurant3, Restaurant4, Restaurant5, Restaurant6, Restaurant7, Restaurant8, Restaurant9],
  },
];

const categories = ["All", "Web Development", "App Development", "UI/UX Design"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // zoom state
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const images = activeProject?.images ?? [];

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev! === images.length - 1 ? 0 : prev! + 1
    );
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev! === 0 ? images.length - 1 : prev! - 1
    );
  };

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
              className={`px-4 py-2 rounded-full border font-medium transition
                ${
                  selectedCategory === cat
                    ? "bg-[#BB9476] text-white border-[#BB9476]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-[#BB9476] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/30 backdrop-blur-md border border-gray-300 rounded-2xl overflow-hidden flex flex-col hover:scale-[1.02] transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#264E36] font-semibold text-lg mb-1">
                  {project.title}
                </h3>

                <span className="text-xs text-gray-600 bg-gray-200/80 px-2 py-1 rounded-full w-fit mb-3">
                  {project.category}
                </span>

                <p className="text-gray-700 mb-6 flex-1">
                  {project.description}
                </p>

                <button
                  onClick={() => setActiveProject(project)}
                  className="px-5 py-2 rounded-full bg-[#BB9476] text-white font-semibold border border-[#9e785c] hover:bg-[#a17860] transition w-fit"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-300">

            {/* Sticky close button (card corner) */}
            <button
              onClick={() => setActiveProject(null)}
              className="sticky top-4 ml-auto mr-4 mt-4 w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition z-20"
            >
              <X size={20} />
            </button>

            <div className="px-6 pb-6">
              <h3 className="text-2xl font-semibold text-[#264E36] mb-1">
                {activeProject.title}
              </h3>

              <span className="text-sm text-gray-600 bg-gray-200/80 px-2 py-1 rounded-full inline-block mb-4">
                {activeProject.category}
              </span>

              <p className="text-gray-700 mb-6">
                {activeProject.description}
              </p>

              {/* Scrollable thumbnails */}
              {images.length > 0 && (
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      onClick={() => setActiveImageIndex(i)}
                      className="h-40 flex-shrink-0 rounded-lg border border-gray-300 cursor-pointer hover:opacity-90 transition"
                    />
                  ))}
                </div>
              )}

              {activeProject.video && (
                <video
                  src={activeProject.video}
                  controls
                  className="mt-6 w-full rounded-lg border border-gray-300"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* IMAGE ZOOM WITH ARROWS + COUNTER */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
          <div className="relative flex items-center gap-4">

            {/* Left arrow */}
            <button
              onClick={prevImage}
              className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition"
            >
              <ChevronLeft />
            </button>

            {/* Image */}
            <div className="relative">
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition"
              >
                <X />
              </button>

              <img
                src={images[activeImageIndex]}
                alt=""
                className="max-h-[80vh] max-w-full rounded-xl"
              />

              {/* Counter */}
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {activeImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={nextImage}
              className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
