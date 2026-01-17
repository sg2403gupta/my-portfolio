const ScrollProgress = ({ scrollProgress }) => {
  return (
    <div
      className="
        fixed top-0 left-0 w-full h-1 z-50
        bg-[#DBE2EF] dark:bg-[#161616]
      "
    >
      <div
        className="
          h-full
          bg-[#3F72AF]
          transition-all duration-300 ease-out
        "
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
