export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle paper grain — single warm tint, no gradients, no grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(28, 25, 23, 0.6) 0.5px, transparent 0.5px)",
          backgroundSize: '3px 3px',
        }}
      />
    </div>
  );
}
