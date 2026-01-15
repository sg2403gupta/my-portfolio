const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div
            className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping"
            style={{
              animation:
                "pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          ></div>
          <div
            className="relative w-32 h-32 border-t-4 border-blue-600 rounded-full"
            style={{ animation: "spin 1s linear infinite" }}
          ></div>
        </div>
        <h2 className="text-2xl font-bold animated-gradient-text">
          Loading Portfolio...
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
