import { User } from "lucide-react";

const About = ({ isVisible, skills }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div
        className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${
          isVisible.about
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex items-center justify-center mb-10 sm:mb-16">
          <User size={36} className="text-blue-600 mr-3 sm:w-12 sm:h-12" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I am a passionate fresher MERN stack developer with strong
              hands-on experience in building full-stack web applications using
              modern JavaScript technologies. I focus on writing clean,
              maintainable code and creating responsive, user-friendly
              interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              I have worked on multiple academic and personal projects involving
              RESTful APIs, backend logic, database integration, and frontend
              development. I am eager to learn, grow, and contribute to
              real-world software solutions in a professional environment.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transform hover:scale-110 hover:bg-blue-700 hover:rotate-3 transition-all duration-300 shadow-sm"
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
