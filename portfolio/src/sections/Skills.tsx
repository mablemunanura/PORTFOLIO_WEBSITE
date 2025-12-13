type Skill = {
    title: string
    description?: string
    level: number
}

const skills: Skill[] = [
    {
        title: 'Front End Development',
        description: 'HTML, CSS, Javascript, React, Laravel',
        level: 100,
    },
    {
        title: 'Back End Development',
        description: 'Java, Python, Golang',
        level: 90,
    },
    {
        title: 'UI/UX Design',
        description: 'Figma Design, UX Research',
        level: 90,
    },
    {
        title: 'Requirements Engineering',
        description: 'Requirements gathering, analysis and documentation',
        level: 80,
    },
    {
        title: 'Database Management',
        description: 'MySQL, PostgreSQL',
        level: 90,
    },
    {
        title: 'Mobile App Development',
        description: 'Kotlin',
        level: 80,
    },
]

function Skills() {

  return (
    <section className="relative w-screen h-screen overflow-x-hidden overflow-y-scroll bg-[#f7f5f3] px-6 md:px-20 py-16">

        {/* Title */}
        <div className="mt-10 mb-10 font-bold text-3xl text-[#264E36] text-shadow-lg text-center">
          Skills
        </div>

        {/* Stats Section */}
        <div
          className="
            space-y-10 max-w-4xl mx-auto
          "
        >
            {skills.map((skill, index) => (
            <div key={index}>
                {/* Title */}
                <div className="mb-2">
                    {/*<div className="h-2 w-2 rounded-full bg-[#BB9476]"></div>*/}
                    <p className="font-semibold text-lg text-black max-sm:text-base">
                        {skill.title}{' '}
                        {skill.description && (
                            <span className="font-normal text-gray-500 text-sm max-sm:text-xs">
                                ({skill.description})
                            </span>
                        )}
                    </p>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-4">
                    <div className="w-full h-2.5 bg-gray-300 rounded-full overflow-hidden
                    max-sm:h-1.5">
                        <div className="h-full bg-[#BB9476] rounded-full" style={{width: `${skill.level}%` }}></div>
                        <span className="text-md font-medium text-gray-700">{skill.level}%</span>
                    </div>
                    <span className="text-md font-medium text-gray-600 max-sm:text-sm">{skill.level}%</span>
                </div>
            </div>
            ))}    
        </div>

    </section>
  )
}

export default Skills
