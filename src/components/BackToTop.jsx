import { ArrowUp } from "lucide-react";

const BackToTop = ({ show, onClick }) => {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      aria-label="Back to top"
      className="
        fixed bottom-8 right-8 z-40
        p-4 rounded-full
        bg-[#3F72AF] text-[#F9F7F7]
        shadow-md
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg hover:bg-[#2F5F99]

        dark:bg-[#161616] dark:text-[#F9F7F7]
        dark:hover:bg-[#1F1F1F]
      "
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop;
