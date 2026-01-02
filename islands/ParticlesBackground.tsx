import { useEffect, useRef } from "preact/hooks";
import { document } from "npm:postcss@8.4.35";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ripplesRef = useRef<Ripple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(
        100,
        Math.floor((innerWidth * innerHeight) / 15000),
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Ripples
      ripplesRef.current.forEach((ripple, index) => {
        ripple.radius += 5;
        ripple.alpha -= 0.02;

        if (ripple.alpha <= 0) {
          ripplesRef.current.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${ripple.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Blast particles away
        particles.forEach((particle) => {
          const dx = particle.x - ripple.x;
          const dy = particle.y - ripple.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // If particle is near the expanding ripple ring
          if (dist < ripple.radius + 20 && dist > ripple.radius - 20) {
            const angle = Math.atan2(dy, dx);
            const force = 2.0; // Stronger blast
            particle.vx += Math.cos(angle) * force;
            particle.vy += Math.sin(angle) * force;
          }
        });
      });

      // Draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Friction to slow them down after blast
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Keep a minimum movement
        if (Math.abs(particle.vx) < 0.2) {
          particle.vx += (Math.random() - 0.5) * 0.02;
        }
        if (Math.abs(particle.vy) < 0.2) {
          particle.vy += (Math.random() - 0.5) * 0.02;
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Mouse interaction (gentle push)
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * 0.02;
          particle.vy -= Math.sin(angle) * 0.02;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffff"; // primary color
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distDx = particle.x - p2.x;
          const distDy = particle.y - p2.y;
          const dist = Math.sqrt(distDx * distDx + distDy * distDy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 255, ${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 300,
        alpha: 1,
      });
    };

    addEventListener("resize", resizeCanvas);
    addEventListener("mousemove", handleMouseMove);
    // Add click listener to window or canvas?
    // Using window allows clicking through other elements if needed, but canvas is "pointer-events-none" in styles.
    // However, the user wants interactivity on click.
    // Since ParticlesBackground is z-0 and has pointer-events-none style in previous version, it won't receive clicks.
    // I MUST REMOVE pointer-events-none from the canvas class or attach listener to window.
    // Attaching to window is safer for "background" experience.
    addEventListener("click", handleClick);

    resizeCanvas();
    drawParticles();

    return () => {
      removeEventListener("resize", resizeCanvas);
      removeEventListener("mousemove", handleMouseMove);
      removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 ">
      </div>
      <canvas
        ref={canvasRef}
        class="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
      />
    </div>
  );
}
