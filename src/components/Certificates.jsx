import { Award, ExternalLink } from "lucide-react";

const Certificates = ({ isVisible, certificates = [], setSelectedImage }) => {
  return (
    <section
      id="certificates"
      className="
        min-h-screen px-4 py-16
        bg-[#F9F7F7] dark:bg-[#0F0F0F]
      "
    >
      <div
        className={`
          max-w-7xl mx-auto
          transition-all duration-700 ease-out
          ${
            isVisible?.certificates
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-center mb-14">
          <Award className="w-9 h-9 mr-3 text-[#3F72AF]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
            Certificates
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
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
                className="h-44 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage?.(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Award
                    className="text-[#3F72AF] mt-1 flex-shrink-0"
                    size={22}
                  />

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#112D4E] dark:text-[#F9F7F7] mb-1">
                      {cert.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#3F72AF] mb-1">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-[#112D4E]/60 dark:text-[#F9F7F7]/60 mb-2">
                      {cert.date}
                    </p>

                    <p className="text-sm text-[#112D4E]/80 dark:text-[#F9F7F7]/80 mb-4">
                      {cert.description}
                    </p>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          text-sm font-semibold
                          text-[#3F72AF]
                          hover:underline
                        "
                      >
                        View Certificate
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
