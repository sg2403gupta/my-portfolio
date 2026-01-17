import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 sm:py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4 sm:mb-6 text-sm sm:text-base">
          © 2025 Shubham Gupta. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 sm:space-x-8">
          <a
            href="https://github.com/sg2403gupta"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={28} className="sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-gupta-a2855b236/"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} className="sm:w-8 sm:h-8" />
          </a>
          <a
            href="mailto:shubham.gupta.stack@gmail.com"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={28} className="sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
