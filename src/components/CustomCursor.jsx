const CustomCursor = ({ cursorPos, cursorTrail }) => {
  return (
    <>
      {/* Main Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      {/* Cursor Trail */}
      {cursorTrail.map((trail, i) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: ((i + 1) / cursorTrail.length) * 0.45,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
