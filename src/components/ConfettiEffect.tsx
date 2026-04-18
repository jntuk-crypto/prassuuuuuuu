import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
}

export function ConfettiEffect() {
  const [pieces, setPieces] = useState<Confetti[]>([]);

  useEffect(() => {
    const colors = ["💖", "💕", "🌸", "✨", "🩷", "💗", "🎀"];
    setPieces(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 16 + Math.random() * 20,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.color}
        </span>
      ))}
    </div>
  );
}
