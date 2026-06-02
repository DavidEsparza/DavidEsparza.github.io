import { useEffect, useRef } from "react";

function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateCanvasSize();

    // Get CSS variables for particle colors
    const getParticleColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const particleColor = styles.getPropertyValue('--particle-color').trim() || 'rgba(180, 184, 189, 0.5)';
      const particleStrokeBase = styles.getPropertyValue('--particle-stroke-base').trim() || '180, 184, 189';
      return { particleColor, particleStrokeBase };
    };

    // Simple particle system
    const particles = [];
    const particleCount = 550;
    const maxX = canvas.width / 1.25; // Left third of the page

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * maxX,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.8) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 3 + 2,
      });
    }

    function animate() {
      // Get fresh colors on each frame to support theme changes
      const { particleColor, particleStrokeBase } = getParticleColors();
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Keep particles in left third
        if (particle.x < 0 || particle.x > maxX) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.strokeStyle = `rgba(${particleStrokeBase}, ${0.6 * (1 - distance / 150)})`;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}

export default ParticlesBackground;
