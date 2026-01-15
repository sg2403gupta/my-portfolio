import { Award, ExternalLink } from "lucide-react";

const Certificates = ({ isVisible, certificates = [], setSelectedImage }) => {
  return (
    <section
      id="certificates"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible?.certificates
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex items-center justify-center mb-10 sm:mb-16">
          <Award size={36} className="text-blue-600 mr-3 sm:w-12 sm:h-12" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Certificates
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 overflow-hidden"
            >
              <div
                className="h-40 sm:h-48 overflow-hidden"
                onClick={() => setSelectedImage?.(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-start">
                  <Award
                    className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div className="w-full">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1 text-sm sm:text-base">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-2">
                      {cert.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4">
                      {cert.description}
                    </p>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition-all duration-300 text-sm sm:text-base"
                      >
                        View Certificate{" "}
                        <ExternalLink size={16} className="ml-2" />
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
