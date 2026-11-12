import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "framer-motion";

const palettes = {
  morning: ["184, 231, 173", "225, 194, 123", "119, 207, 165"],
  canopy: ["139, 218, 164", "211, 221, 143", "104, 194, 161"],
  harvest: ["239, 204, 123", "160, 218, 158", "221, 161, 98"],
  dusk: ["136, 209, 195", "215, 198, 124", "117, 184, 167"],
};

export default function CursorNeuralTrail({ mood }) {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(hover: none)").matches ||
      reduceMotion
    ) {
      return undefined;
    }

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return undefined;

    const colors = palettes[mood] ?? palettes.morning;
    const particles = [];
    const maxParticles = 48;
    const particleSpacing = 16;
    let frameId = 0;
    let lastFrame = 0;
    let lastPointer = null;
    let width = 0;
    let height = 0;

    const random = (min, max) => Math.random() * (max - min) + min;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timestamp) => {
      frameId = 0;
      const delta = Math.min((timestamp - (lastFrame || timestamp)) / 16.67, 2.5);
      lastFrame = timestamp;
      context.clearRect(0, 0, width, height);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.alpha -= particle.decay * delta;
        if (particle.alpha <= 0) particles.splice(index, 1);
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        for (let nextIndex = index + 1; nextIndex < Math.min(index + 5, particles.length); nextIndex += 1) {
          const next = particles[nextIndex];
          const distance = Math.hypot(next.x - particle.x, next.y - particle.y);
          if (distance > 54) continue;

          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(next.x, next.y);
          context.strokeStyle = `rgba(${particle.color}, ${Math.min(particle.alpha, next.alpha) * (1 - distance / 54) * 0.42})`;
          context.lineWidth = 0.8;
          context.stroke();
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 2.3, 0, Math.PI * 2);
        context.fillStyle = `rgba(${particle.color}, ${particle.alpha * 0.12})`;
        context.fill();

        context.beginPath();
        if (particle.square) {
          context.rect(particle.x - particle.radius, particle.y - particle.radius, particle.radius * 2, particle.radius * 2);
        } else {
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        }
        context.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
        context.fill();
      }

      if (particles.length > 0) frameId = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;
      const current = { x: event.clientX, y: event.clientY };
      if (!lastPointer) {
        lastPointer = current;
        return;
      }

      const dx = current.x - lastPointer.x;
      const dy = current.y - lastPointer.y;
      const distance = Math.hypot(dx, dy);
      const count = Math.min(Math.ceil(distance / particleSpacing), 4, maxParticles - particles.length);

      for (let index = 0; index < count; index += 1) {
        const progress = (index + 1) / count;
        particles.unshift({
          x: lastPointer.x + dx * progress + random(-2, 2),
          y: lastPointer.y + dy * progress + random(-2, 2),
          vx: random(-0.25, 0.25) + dx * 0.006,
          vy: random(-0.25, 0.25) + dy * 0.006,
          radius: random(1, 2.2),
          alpha: random(0.55, 0.9),
          decay: random(0.018, 0.027),
          color: colors[Math.floor(Math.random() * colors.length)],
          square: Math.random() > 0.76,
        });
      }
      if (particles.length > maxParticles) particles.length = maxParticles;

      lastPointer = current;
      if (particles.length > 0 && !frameId) frameId = window.requestAnimationFrame(draw);
    };

    const handlePointerLeave = () => {
      lastPointer = null;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      particles.length = 0;
    };
  }, [mood, reduceMotion]);

  return createPortal(
    <canvas ref={canvasRef} className="cursor-neural-trail" aria-hidden="true" />,
    document.body,
  );
}
