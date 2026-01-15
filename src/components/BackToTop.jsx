import { ArrowUp } from "lucide-react";

const BackToTop = ({ show, onClick }) => {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-40"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
