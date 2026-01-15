import { Menu, X } from "lucide-react";

const Navbar = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Name */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold animated-gradient-text text-gray-900 dark:text-white">
            Shubham Gupta
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            {["home", "about", "projects", "certificates", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm lg:text-base font-medium transition-all duration-300 ${
                    activeSection === item
                      ? "text-blue-600"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu (THIS WAS MISSING) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {["home", "about", "projects", "certificates", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize text-base font-medium transition-all duration-300 ${
                    activeSection === item
                      ? "bg-blue-50 dark:bg-gray-800 text-blue-600"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
