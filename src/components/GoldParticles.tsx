import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";

export default function GoldParticles() {
  const [config, setConfig] = useState<"full" | "light" | "off">("full");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    setConfig(reduced ? "off" : mobile ? "light" : "full");
  }, []);

  if (config === "off") return null;

  const count = config === "light" ? 14 : 40;

  return (
    <Particles
      id="gold-particles"
      className="absolute inset-0 pointer-events-none"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: { value: count, density: { enable: true, width: 1200, height: 800 } },
          color: { value: ["#D4AF37", "#F5E6A3", "#B8960C"] },
          opacity: { value: { min: 0.1, max: 0.5 } },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: config === "light" ? 0.35 : 0.5,
            direction: "none",
            outModes: { default: "out" },
          },
          twinkle: {
            particles: { enable: true, frequency: 0.05, opacity: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
