type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

type Education = {
  degree: string;
  institution: string;
  period: string;
};

const experiences: Experience[] = [
  {
    title: "Full stack developer",
    company: "Freelance",
    period: "Nov 2024 - Present",
    description:
      "Developed responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated with designers to implement UI/UX improvements.",
  },
  {
    title: "Software Engineering Intern",
    company: " Kiira Motors Corporation",
    period: "Jun 2025 - Jul 2025",
    description:
      "Assisted in building a full-stack web application using Go (Gin), React and PostgreSQL, implementing RESTful APIs and database schemas.",
  },
];

const education: Education[] = [
  {
    degree: "BSc Software Engineering",
    institution: "Makerere University",
    period: "2023 - Present",
  },
  {
    degree: "Uganda Advanced Certificate of Education",
    institution: "King's College, Budo",
    period: "2020 - 2022",
  },
];

function Resume() {
  return (
    <section className="w-screen min-h-screen bg-[#f7f5f3] px-6 md:px-20 py-16">
      {/* Title */}
      <h2 className="mb-12 text-3xl font-bold text-center text-[#264E36] text-shadow-lg">
        Resume
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">

        {/* LEFT COLUMN: Summary + Education */}
        <div className="flex-1 space-y-12">

          {/* SUMMARY */}
          <div className="relative">
            
            <h3 className="text-xl md:text-2xl font-semibold text-[#264E36] mb-3">
              Summary
            </h3>
            <div className="relative pl-4 border-l-2 border-[#BB9476] ml-3">
                <p className="text-gray-700 text-base md:text-md leading-relaxed ml-2">
                    Energetic and determined individual with excellent communication, teamwork, and leadership skills. Highly adaptable, organized, and creative in problem-solving.
                    Passionate about collaborating with others to deliver meaningful results and continuously learning new approaches and technologies. Quick to take initiative and thrive in dynamic environments.
                </p>
                <div className="mt-4 ml-2">
                    <a
                        href="/MABLE TUSIIME (CV).pdf"
                        download="MABLE TUSIIME (CV).pdf"
                        className="inline-block px-5 py-2 bg-[#264E36] text-white font-medium rounded hover:bg-[#BB9476] transition"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#264E36] mb-6">
              Education
            </h3>
            <div className="relative border-l-2 border-[#BB9476] ml-3 pl-2">
              {education.map((edu, index) => (
                <div key={index} className="mb-8 ml-6 relative">
                    <div className="absolute -left-5 top-2 h-2 w-2 bg-[#BB9476] rounded-full" />
                    <p className="font-semibold text-gray-950 text-base md:text-lg">{edu.degree}</p>
                    <p className="text-gray-600 italic text-sm md:text-sm">{edu.institution}</p>
                    <p className="text-gray-500 italic text-xs md:text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Experience */}
        <div className="flex-1 space-y-12">
          <h3 className="text-xl md:text-2xl font-semibold text-[#264E36] mb-6">
            Experience
          </h3>
          <div className="relative border-l-2 border-[#BB9476] ml-3 pl-2">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 ml-6 relative">
                <div className="absolute -left-5 top-2 h-2 w-2 bg-[#BB9476] rounded-full" />
                    <p className="font-semibold text-gray-950 text-base md:text-lg">{exp.title}</p>
                    <p className="text-gray-600 italic text-sm md:text-sm">{exp.company}</p>
                    <p className="text-gray-500 italic text-xs md:text-sm">{exp.period}</p>
                    <p className="mt-1.5 text-gray-700 text-sm md:text-base leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;
