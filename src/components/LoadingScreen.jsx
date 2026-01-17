const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F9F7F7] dark:bg-[#0F0F0F]">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Pulse ring */}
          <div
            className="
              absolute inset-0 rounded-full
              border-4 border-[#3F72AF]/30
              animate-ping
            "
          />

          {/* Spinner */}
          <div
            className="
              relative w-32 h-32 rounded-full
              border-t-4 border-[#3F72AF]
              animate-spin
            "
          />
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
          Loading Portfolio...
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
