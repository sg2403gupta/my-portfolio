import { Menu, X } from "lucide-react";

const Navbar = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  return (
    <nav
      className="
        fixed top-0 w-full z-50 mt-1
        bg-[#F9F7F7] dark:bg-[#0F0F0F]
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="
              text-2xl sm:text-3xl md:text-4xl font-bold
              text-[#112D4E] dark:text-[#F9F7F7]
              transition-all duration-300
              hover:-translate-y-0.5
            "
          >
            Shubham Gupta
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            {["home", "about", "projects", "certificates", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`
                    relative capitalize text-sm lg:text-base font-medium
                    transition-colors duration-300
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-[#3F72AF]
                    after:transition-all after:duration-300
                    hover:after:w-full
                    ${
                      activeSection === item
                        ? "text-[#3F72AF] after:w-full"
                        : "text-[#112D4E] dark:text-[#F9F7F7]/70"
                    }
                  `}
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#112D4E] dark:text-[#F9F7F7]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
            md:hidden border-t
            bg-[#DBE2EF] dark:bg-[#161616]
            border-[#3F72AF]/20
            animate-slideDown
          "
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            {["home", "about", "projects", "certificates", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`
                    block w-full text-left px-4 py-3 rounded-lg capitalize
                    text-base font-medium
                    transition-all duration-300
                    ${
                      activeSection === item
                        ? "bg-[#3F72AF]/20 text-[#3F72AF]"
                        : "text-[#112D4E] dark:text-[#F9F7F7]/70 hover:bg-[#3F72AF]/10"
                    }
                  `}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
