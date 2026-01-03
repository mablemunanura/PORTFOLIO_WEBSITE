import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Jenny from "../assets/Jenny.jpg";
import Selina from "../assets/Selina.jpg";
import Josh from "../assets/Josh.jpeg";

type Testimonial = {
  name: string;
  role: string;
  photo: string;
  message: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Jennifer Bukenya Namyalo",
    role: "Software Engineer",
    photo: Jenny,
    message: "Mable is incredibly talented and delivers quality work efficiently.",
    rating: 5,
  },
  {
    name: "Wanyana Selina Masembe",
    role: "Software Developer",
    photo: Selina,
    message:
      "Mable is hardworking, detail-oriented, and dependable. She consistently delivers quality work, meets deadlines, and works well with others.",
    rating: 5,
  },
  {
    name: "Joshua Aryampa",
    role: "Software Engineer",
    photo: Josh,
    message: "Mable's professionalism stands out. She combines strong full-stack skills with exceptional UI/UX design to deliver outstanding work.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) =>
      i === 0 ? testimonials.length - 1 : i - 1
    );
  const next = () =>
    setCurrentIndex((i) =>
      i === testimonials.length - 1 ? 0 : i + 1
    );

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-20 bg-[#f7f5f3] flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#264E36] mb-12 text-center text-shadow-lg">
        Testimonials
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-4xl">
        {/* Left faded card */}
        <div className="hidden md:flex absolute left-0 w-56 h-56 bg-white/20 backdrop-blur-md border border-gray-300 shadow-lg rounded-2xl p-6 items-center justify-center text-center opacity-30 -translate-x-1/2">
          <p className="text-gray-400 text-sm">
            "
            {
              testimonials[
                (currentIndex - 1 + testimonials.length) %
                  testimonials.length
              ].message
            }
            "
          </p>
        </div>

        {/* Right faded card */}
        <div className="hidden md:flex absolute right-0 w-56 h-56 bg-white/20 backdrop-blur-md border border-gray-300 shadow-lg rounded-2xl p-6 items-center justify-center text-center opacity-30 translate-x-1/2">
          <p className="text-gray-400 text-sm">
            "
            {
              testimonials[
                (currentIndex + 1) % testimonials.length
              ].message
            }
            "
          </p>
        </div>

        {/* Center card */}
        <div className="bg-white/20 backdrop-blur-md border border-gray-300 shadow-lg rounded-2xl p-6 w-72 sm:w-80 h-72 sm:h-80 flex flex-col items-center justify-center text-center z-10">
          <img
            src={testimonials[currentIndex].photo}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 object-cover"
          />

          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            "{testimonials[currentIndex].message}"
          </p>

          <div className="flex justify-center mb-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                size={16}
                className={
                  idx < testimonials[currentIndex].rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <h3 className="text-[#264E36] font-semibold text-sm sm:text-base">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-[#BB9476] text-xs sm:text-sm">
            {testimonials[currentIndex].role}
          </p>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#BB9476] hover:bg-[#a17860] flex items-center justify-center shadow-md z-50"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        <button
          onClick={next}
          className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#BB9476] hover:bg-[#a17860] flex items-center justify-center shadow-md z-50"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </section>
  );
}
