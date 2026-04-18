interface CuteButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function CuteButton({ onClick, children }: CuteButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-8 rounded-full bg-primary px-8 py-3 font-body text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 animate-glow-pulse cursor-pointer"
    >
      {children}
    </button>
  );
}
