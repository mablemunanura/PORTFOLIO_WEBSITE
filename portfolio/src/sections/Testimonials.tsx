import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  photo: string;
  message: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  { name: "John Doe", role: "Software Engineer", photo: "/testimonials/john.png", message: "Mable is incredibly talented and delivers quality work efficiently.", rating: 5 },
  { name: "Jane Smith", role: "UI/UX Designer", photo: "/testimonials/jane.png", message: "Working with Mable was seamless; her attention to detail is excellent.", rating: 4 },
  { name: "Michael Lee", role: "Project Manager", photo: "/testimonials/michael.png", message: "Highly recommend Mable for web and app development projects!", rating: 5 },
  { name: "Emily Davis", role: "Product Designer", photo: "/testimonials/emily.png", message: "Her creativity and problem-solving skills are outstanding.", rating: 4 },
  { name: "Sara Connor", role: "Frontend Developer", photo: "/testimonials/sara.png", message: "Professional and efficient; delivered exactly what was needed.", rating: 5 },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-20 bg-[#f7f5f3] flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#264E36] mb-12 text-center text-shadow-lg">Testimonials</h2>

      <div className="relative flex items-center justify-center w-full max-w-4xl">
        {/* Left fading card (hidden on small screens) */}
        <div className="hidden md:flex absolute left-0 w-56 h-56 bg-white/20 backdrop-blur-md border border-gray-300 shadow-lg rounded-2xl p-6 flex-col items-center justify-center text-center opacity-30 transform -translate-x-1/2 transition-all duration-500">
          <p className="text-gray-400 text-sm">
            "{testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].message}"
          </p>
        </div>

        {/* Right fading card (hidden on small screens) */}
        <div className="hidden md:flex absolute right-0 w-56 h-56 bg-white/20 backdrop-blur-md border border-gray-300 shadow-lg rounded-2xl p-6 flex-col items-center justify-center text-center opacity-30 transform translate-x-1/2 transition-all duration-500">
          <p className="text-gray-400 text-sm">
            "{testimonials[(currentIndex + 1) % testimonials.length].message}"
          </p>
        </div>

        {/* Center card */}
        <div className="bg-white/20 backdrop-blur-md border border-gray-300 shadow-lg rounded-2xl p-6 w-72 sm:w-80 h-72 sm:h-80 flex flex-col items-center justify-center text-center transition-all duration-500 z-10">
          <img
            src={testimonials[currentIndex].photo}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover"
          />
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            "{testimonials[currentIndex].message}"
          </p>
          <div className="flex justify-center mb-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={idx < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"}
                size={16}
              />
            ))}
          </div>
          <h3 className="text-[#264E36] font-semibold text-sm sm:text-base">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-[#BB9476] text-xs sm:text-sm">{testimonials[currentIndex].role}</p>
        </div>

        {/* Buttons */}
        <button
          onClick={prev}
          className="absolute -left-4 md:-left-15 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#BB9476] hover:bg-[#a17860] shadow-md animate-bounce transition"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button
          onClick={next}
          className="absolute -right-4 md:-right-15 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#BB9476] hover:bg-[#a17860] shadow-md animate-bounce transition"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </section>
  );
}
