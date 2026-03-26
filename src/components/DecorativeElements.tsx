const blobs = [
  { top: "8%", left: "5%", size: 200, color: "bg-primary/8", animation: "animate-drift" },
  { top: "20%", right: "8%", size: 300, color: "bg-primary/5", animation: "animate-drift-slow" },
  { top: "55%", left: "2%", size: 180, color: "bg-warm-sand/10", animation: "animate-drift-slow" },
  { bottom: "15%", right: "5%", size: 250, color: "bg-warm-peach/8", animation: "animate-drift" },
  { top: "70%", left: "80%", size: 150, color: "bg-primary/6", animation: "animate-drift-slow" },
];

const DecorativeElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.color} ${blob.animation}`}
          style={{
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
            width: blob.size,
            height: blob.size,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DecorativeElements;
