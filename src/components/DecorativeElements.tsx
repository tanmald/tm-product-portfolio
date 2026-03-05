const elements = [
  { emoji: "🌸", top: "10%", left: "5%", size: "text-3xl", animation: "animate-float", rotate: "-12deg" },
  { emoji: "✦", top: "15%", right: "8%", size: "text-4xl", animation: "animate-float-slow", rotate: "15deg", color: "text-primary" },
  { emoji: "🌿", top: "60%", left: "3%", size: "text-2xl", animation: "animate-float-slow", rotate: "25deg" },
  { emoji: "→", top: "40%", right: "5%", size: "text-5xl", animation: "animate-float", rotate: "-8deg", color: "text-warm-orange" },
  { emoji: "⭐", bottom: "20%", left: "8%", size: "text-2xl", animation: "animate-float", rotate: "20deg" },
  { emoji: "🌺", bottom: "15%", right: "10%", size: "text-3xl", animation: "animate-float-slow", rotate: "-15deg" },
  { emoji: "◆", top: "75%", left: "92%", size: "text-2xl", animation: "animate-float", rotate: "45deg", color: "text-terracotta" },
  { emoji: "~", top: "30%", left: "12%", size: "text-4xl", animation: "animate-float-slow", rotate: "0deg", color: "text-sage" },
];

const DecorativeElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, i) => (
        <span
          key={i}
          className={`absolute ${el.size} ${el.animation} ${el.color || ""} opacity-40 select-none`}
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
            transform: `rotate(${el.rotate})`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {el.emoji}
        </span>
      ))}
    </div>
  );
};

export default DecorativeElements;
