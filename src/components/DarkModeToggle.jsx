import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ darkMode, toggle }) => {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="
        fixed bottom-8 left-8 z-40
        p-4 rounded-full
        bg-[#3F72AF] text-[#F9F7F7]
        shadow-md
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg hover:bg-[#2F5F99]

        dark:bg-[#161616] dark:text-[#F9F7F7]
        dark:hover:bg-[#1F1F1F]
      "
    >
      {darkMode ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
};

export default DarkModeToggle;
