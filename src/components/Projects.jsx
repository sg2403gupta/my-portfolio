import { Briefcase, ExternalLink } from "lucide-react";

const Projects = ({ isVisible, projects, setSelectedImage }) => {
  return (
    <section
      id="projects"
      className="
        min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20
        bg-[#F9F7F7] dark:bg-[#0F0F0F]
      "
    >
      <div
        className={`
          max-w-7xl mx-auto
          transition-all duration-700 ease-out
          ${
            isVisible.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-center mb-14">
          <Briefcase className="w-9 h-9 mr-3 text-[#3F72AF]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
            Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group rounded-xl overflow-hidden
                bg-[#DBE2EF] dark:bg-[#161616]
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Image */}
              <div
                className="h-48 sm:h-56 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#112D4E] dark:text-[#F9F7F7] mb-3">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-[#112D4E]/80 dark:text-[#F9F7F7]/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 rounded-md text-xs font-medium
                        bg-[#F9F7F7]/70 dark:bg-[#0F0F0F]
                        text-[#112D4E] dark:text-[#F9F7F7]/80
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-sm sm:text-base font-semibold
                    text-[#3F72AF]
                    transition-colors duration-300
                    hover:underline
                  "
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
