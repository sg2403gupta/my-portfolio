import { User } from "lucide-react";

const About = ({ isVisible, skills }) => {
  return (
    <section
      id="about"
      className="
        min-h-screen flex items-center px-4 py-16
        bg-[#F9F7F7] dark:bg-[#0F0F0F]
      "
    >
      <div
        className={`
          max-w-7xl mx-auto w-full
          transition-all duration-700 ease-out
          ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <User className="w-9 h-9 mr-3 text-[#3F72AF]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Who I Am */}
          <div
            className="
              rounded-xl p-6 sm:p-8
              bg-[#DBE2EF] dark:bg-[#161616]
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            <h3 className="text-2xl font-semibold text-[#112D4E] dark:text-[#F9F7F7] mb-4">
              Who I Am
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-[#112D4E]/80 dark:text-[#F9F7F7]/80 mb-4">
              I am a passionate fresher MERN stack developer with hands-on
              experience building full-stack applications using modern
              JavaScript technologies. I focus on clean, maintainable code and
              responsive user interfaces.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#112D4E]/80 dark:text-[#F9F7F7]/80">
              I’ve worked on academic and personal projects involving REST APIs,
              backend logic, database integration, and frontend development. I’m
              eager to learn and contribute to real-world software solutions.
            </p>
          </div>

          {/* Skills */}
          <div
            className="
              rounded-xl p-6 sm:p-8
              bg-[#DBE2EF] dark:bg-[#161616]
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            <h3 className="text-2xl font-semibold text-[#112D4E] dark:text-[#F9F7F7] mb-6">
              Skills & Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="
                    px-4 py-2 rounded-lg text-sm font-medium
                    bg-[#3F72AF] text-[#F9F7F7]
                    transition-transform duration-200
                    hover:scale-105 hover:bg-[#2F5F99]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
