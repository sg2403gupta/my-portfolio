const ParticlesBackground = ({ particles }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="
            absolute rounded-full
            bg-[#3F72AF]/20
            dark:bg-[#3F72AF]/10
          "
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
