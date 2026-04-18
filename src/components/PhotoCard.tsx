import { useState, useRef, useEffect } from "react";

interface PhotoCardProps {
  index: number;
  caption?: string;
  image?: string;
}

export function PhotoCard({ index, caption, image }: PhotoCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Add floating animation
    const floatAnimation = `
      @keyframes float-${index} {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(2deg); }
        50% { transform: translateY(-5px) rotate(-1deg); }
        75% { transform: translateY(-15px) rotate(1deg); }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = floatAnimation;
    document.head.appendChild(styleSheet);

    card.style.animation = `float-${index} 3s ease-in-out infinite`;
  }, [index]);

  const handleSwipe = (direction: "left" | "right") => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const currentTransform = card.style.transform || "translateX(0px)";
    const currentX = parseInt(currentTransform.replace(/[^\d-]/g, "")) || 0;

    if (direction === "left") {
      card.style.transform = `translateX(${currentX - 100}px) rotate(-5deg)`;
    } else {
      card.style.transform = `translateX(${currentX + 100}px) rotate(5deg)`;
    }

    setTimeout(() => {
      card.style.transform = "translateX(0px) rotate(0deg)";
    }, 300);
  };

  return (
    <div
      ref={cardRef}
      className={`group rounded-2xl bg-card p-3 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-up cursor-pointer ${
        isLiked ? "ring-4 ring-pink-300 ring-opacity-50" : ""
      }`}
      style={{
        animationDelay: `${index * 0.15}s`,
        animation: `float-${index} 3s ease-in-out infinite, fade-up 0.6s ease-out`,
        marginTop: index === 11 ? "10px" : "0px",
      }}
      onClick={() => setIsLiked(!isLiked)}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        const startX = touch.clientX;

        const handleTouchEnd = (e: TouchEvent) => {
          const touch = e.changedTouches[0];
          const endX = touch.clientX;
          const diff = endX - startX;

          if (Math.abs(diff) > 50) {
            handleSwipe(diff > 0 ? "right" : "left");
          }

          document.removeEventListener("touchend", handleTouchEnd);
        };

        document.addEventListener("touchend", handleTouchEnd);
      }}
    >
      <div className="aspect-square rounded-xl bg-muted flex items-center justify-center overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={caption || `Photo ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-muted-foreground font-body text-sm text-center px-4">
            📷 Add photo {index + 1} here
          </span>
        )}
        {/* Floating heart when liked */}
        {isLiked && (
          <div className="absolute top-2 right-2 animate-bounce">
            <span className="text-2xl">💕</span>
          </div>
        )}
      </div>
      {caption && (
        <p className="mt-2 text-center font-display text-lg text-foreground">{caption}</p>
      )}
    </div>
  );
}
