import { useEffect, useMemo, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const targetDate = useMemo(() => new Date("2026-08-15T18:00:00+08:00"), []);

  const calculateTimeLeft = (): TimeLeft => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {blocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="glass-card w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center gold-glow">
            <span className="font-display text-2xl sm:text-3xl font-bold text-gold">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-xs sm:text-sm text-gold-light/70 font-body tracking-wider uppercase">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
