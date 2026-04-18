import { useEffect, useRef } from "react";

interface BackgroundMusicProps {
  src: string;
  volume?: number;
  loop?: boolean;
  stop?: boolean;
  onEnded?: () => void;
}

export function BackgroundMusic({
  src,
  volume = 0.3,
  loop = true,
  stop = false,
  onEnded,
}: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = loop;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Audio play failed:", error);
        document.addEventListener("click", playAudio, { once: true });
      }
    };

    if (stop) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      playAudio();
    }

    return () => {
      document.removeEventListener("click", playAudio);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [src, volume, loop, stop]);

  return <audio ref={audioRef} src={src} preload="auto" className="hidden" onEnded={onEnded} />;
}
