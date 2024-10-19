import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  // Callback to initialize tsparticles
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine); // Ensure the full tsparticles package is loaded
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container); // Container will be the loaded particles instance
  }, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit} // Use init callback
      loaded={particlesLoaded} // Use loaded callback
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: ["grab", "bubble"],
              parallax: { enable: true, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            grab: {
              distance: 200,
              line_linked: { opacity: 1 },
            },
            bubble: {
              distance: 250,
              size: 8,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            slow: {
              factor: 5,
              radius: 100,
            },
          },
        },
        particles: {
          color: {
            value: ["#f5d393", "#e68e2e", "#f0a500", "#ff5f00"],
          },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          shape: {
            type: "circle", // Only circles
          },
          size: {
            value: { min: 1, max: 7 },
            random: true,
          },
          detectRetina: true,
          zIndex: {
            value: -1, // Keeps particles in the background
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
