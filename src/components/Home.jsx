import { Code, Github, Linkedin, Mail } from "lucide-react";

const Home = ({ isVisible }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div
        className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible.home
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-8">
          <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-500 float-animation">
            <Code size={80} className="text-white sm:w-24 sm:h-24" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 fade-in-up">
          Hi, I'm <span className="text-blue-600">Shubham Gupta</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 fade-in-up">
          MERN Stack Developer
        </p>

        <div className="flex justify-center space-x-6 mt-10 fade-in-up">
          <a
            href="https://github.com/sg2403gupta"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-gupta-a2855b236/"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:shubham.gupta.stack@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
