import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ darkMode, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-8 left-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-40"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
