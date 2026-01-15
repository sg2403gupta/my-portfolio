const CustomCursor = ({ cursorPos, cursorTrail }) => {
  return (
    <>
      {/* Main Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Cursor Trail */}
      {cursorTrail.map((trail, i) => (
        <div
          key={trail.id} // ✅ stable unique key
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: ((i + 1) / cursorTrail.length) * 0.5,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
