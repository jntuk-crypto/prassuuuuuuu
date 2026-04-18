interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-2.5 rounded-full transition-all duration-500 ${
            i < current ? "w-8 bg-primary" : i === current ? "w-8 bg-rose-soft" : "w-2.5 bg-muted"
          }`}
        />
      ))}
      <span className="ml-2 font-body text-xs text-muted-foreground">
        {current + 1} / {total}
      </span>
    </div>
  );
}
