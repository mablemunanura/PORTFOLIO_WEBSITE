import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiGo, SiKotlin } from "react-icons/si";
import { Figma, Braces } from "lucide-react";

type Skill = {
  title: string;
  description?: string;
  level: number;
};

const skills: Skill[] = [
  { title: "Front End Development", description: "HTML, CSS, JavaScript, React", level: 100 },
  { title: "Back End Development", description: "Java, Python, Golang", level: 90 },
  { title: "UI/UX Design", description: "Figma Design, UX Research", level: 90 },
  { title: "Requirements Engineering", description: "Requirements gathering & documentation", level: 80 },
  { title: "Database Management", description: "MySQL, PostgreSQL", level: 90 },
  { title: "Mobile App Development", description: "Kotlin", level: 80 },
];

const techIcons = [
  FaCode,
  Braces,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  SiGo,
  SiKotlin,
  FaDatabase,
  Figma,
];

function Skills() {
  const leftColumnIcons = techIcons.slice(0, 6);
  const rightColumnIcons = techIcons.slice(6);

  return (
    <section className="w-screen min-h-screen bg-[#f7f5f3] px-6 md:px-20 py-16">
      <h2 className="mb-14 text-3xl font-bold text-center text-[#264E36] text-shadow-lg">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">

        {/* ICON CLOUD */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full md:w-64">

          {/* Desktop: two columns filling height */}
          <div className="hidden md:flex flex-col justify-between h-full">
            {leftColumnIcons.map((Icon, index) => (
              <div
                key={index}
                className="hover:text-[#BB9476]/80 text-[#264E36] hover:scale-125 transition-all duration-300"
              >
                <Icon size={48} />
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col justify-between h-full mt-6">
            {rightColumnIcons.map((Icon, index) => (
              <div
                key={index}
                className="hover:text-[#BB9476]/80 text-[#264E36] hover:scale-125 transition-all duration-300"
              >
                <Icon size={48} />
              </div>
            ))}
          </div>

          {/* Mobile: two rows (6 + 5) filling width */}
          <div className="flex flex-col md:hidden gap-8 w-full mb-10">
            <div className="flex justify-center flex-wrap gap-6 w-full">
              {leftColumnIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="hover:text-[#BB9476]/80 text-[#264E36] hover:scale-110 transition-all duration-300 flex-1 flex justify-center"
                >
                  <Icon size={28} />
                </div>
              ))}
            </div>
            <div className="flex justify-center flex-wrap gap-6 w-full">
              {rightColumnIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="hover:text-[#BB9476]/80 text-[#264E36] hover:scale-110 transition-all duration-300 flex-1 flex justify-center"
                >
                  <Icon size={28} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SKILLS */}
        <div className="flex-1 space-y-12 md:space-y-16">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="mb-2 text-lg font-semibold text-black">
                {skill.title}{" "}
                {skill.description && (
                  <span className="text-sm font-normal text-gray-500">
                    ({skill.description})
                  </span>
                )}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-full h-2.5 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#BB9476] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
