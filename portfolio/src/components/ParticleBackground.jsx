import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
      options={{
        fullScreen: {
          enable: false,
        },
  background: { color: { value: "#0d0d0d" } },
  particles: {
    color: { value: "#ffffff" },
    move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "bounce" } },
    number: { value: 120, density: { enable: true, area: 800 } },
    size: { value: { min: 0.5, max: 2 } },
    opacity: { value: 0.8 },
    shape: { type: "circle" },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" },
    },
    modes: {
      bubble: { distance: 100, size: 4, duration: 2, opacity: 0.5 },
    },
  },
  detectRetina: true,
}


}
    />
  );
}
