import React, { useEffect, useRef } from 'react';

interface DotPortraitProps {
  sourceImageUrl?: string;
  className?: string;
}

export const DotPortrait: React.FC<DotPortraitProps> = ({
  sourceImageUrl = '/arshad-original-transparent.png',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = sourceImageUrl;

    let animationFrame = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let mouseX = -10000;
    let mouseY = -10000;
    let mouseActive = false;

    type Particle = {
      nx: number;
      ny: number;
      r: number;
      g: number;
      b: number;
      a: number;
      luminance: number;
      size: number;
      x: number;
      y: number;
      tx: number;
      ty: number;
      vx: number;
      vy: number;
      phase: number;
    };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const buildParticles = () => {
      /*
        This is the same idea as my_dot_portrait_small.html:
        the portrait is sampled and rebuilt using thousands of dots.

        Lower STEP = more dots.
        2.2 = very detailed.
        2.6 = lighter/faster.
      */
      const STEP = 2;
      const MAX_SAMPLE_WIDTH = 650;

      const scale = Math.min(1, MAX_SAMPLE_WIDTH / image.naturalWidth);
      const sampleWidth = Math.max(1, Math.floor(image.naturalWidth * scale));
      const sampleHeight = Math.max(1, Math.floor(image.naturalHeight * scale));

      const offscreen = document.createElement('canvas');
      offscreen.width = sampleWidth;
      offscreen.height = sampleHeight;

      const offCtx = offscreen.getContext('2d', {
        willReadFrequently: true,
      });

      if (!offCtx) return;

      offCtx.clearRect(0, 0, sampleWidth, sampleHeight);
      offCtx.drawImage(image, 0, 0, sampleWidth, sampleHeight);

      const pixels = offCtx.getImageData(
        0,
        0,
        sampleWidth,
        sampleHeight
      ).data;

      const candidates: Particle[] = [];

      for (let y = 0; y < sampleHeight; y += STEP) {
        for (let x = 0; x < sampleWidth; x += STEP) {
          const px = Math.floor(x);
          const py = Math.floor(y);
          const index = (py * sampleWidth + px) * 4;

          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const a = pixels[index + 3];

          // Ignore transparent background.
          if (a < 35) continue;

          const luminance =
            (r * 0.299 + g * 0.587 + b * 0.114) / 255;

          /*
            Keep more particles in dark/detail areas,
            while still retaining lighter facial/shirt areas.
          */
          const keepProbability =
            0.52 + (1 - luminance) * 0.48;

          if (Math.random() > keepProbability) continue;

          candidates.push({
            nx: x / sampleWidth,
            ny: y / sampleHeight,
            r,
            g,
            b,
            a,
            luminance,
            size: 0.55 + (1 - luminance) * 1.35,
            x: 0,
            y: 0,
            tx: 0,
            ty: 0,
            vx: 0,
            vy: 0,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      // Prevent very large particle counts on slower devices.
      const MAX_PARTICLES = 50000;

      if (candidates.length > MAX_PARTICLES) {
        for (let i = candidates.length - 1; i > MAX_PARTICLES; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [candidates[i], candidates[j]] = [
            candidates[j],
            candidates[i],
          ];
        }

        candidates.length = MAX_PARTICLES;
      }

      particles = candidates;
      layoutParticles(true);
    };

    const layoutParticles = (initial = false) => {
      const imageAspect =
        image.naturalWidth / image.naturalHeight;

      /*
        Keep the complete portrait inside the existing Hero image area.
      */
      const availableWidth = width * 0.98;
      const availableHeight = height * 0.98;

      let drawWidth = availableWidth;
      let drawHeight = drawWidth / imageAspect;

      if (drawHeight > availableHeight) {
        drawHeight = availableHeight;
        drawWidth = drawHeight * imageAspect;
      }

      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2;

      for (const particle of particles) {
        particle.tx =
          (offsetX + particle.nx * drawWidth) * dpr;
        particle.ty =
          (offsetY + particle.ny * drawHeight) * dpr;

        if (initial) {
          particle.x =
            particle.tx + (Math.random() - 0.5) * 35 * dpr;
          particle.y =
            particle.ty + (Math.random() - 0.5) * 35 * dpr;
        }
      }
    };

    const animate = (time = 0) => {
      animationFrame = requestAnimationFrame(animate);

      if (!width || !height || !particles.length) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        let targetX = particle.tx;
        let targetY = particle.ty;

        // Interactive particle repulsion.
        if (mouseActive) {
          const dx = particle.x - mouseX * dpr;
          const dy = particle.y - mouseY * dpr;
          const distance = Math.hypot(dx, dy);
          const radius = 115 * dpr;

          if (distance < radius && distance > 0.01) {
            const force =
              (1 - distance / radius) * 20 * dpr;

            targetX += (dx / distance) * force;
            targetY += (dy / distance) * force;
          }
        }

        // Smoothly return particles to the portrait.
        particle.vx += (targetX - particle.x) * 0.045;
        particle.vy += (targetY - particle.y) * 0.045;

        particle.vx *= 0.82;
        particle.vy *= 0.82;

        particle.x += particle.vx;
        particle.y += particle.vy;

        const wobble =
          Math.sin(time * 0.0007 + particle.phase) *
          0.12 *
          dpr;

        ctx.beginPath();

        ctx.arc(
          particle.x + wobble,
          particle.y,
          particle.size * dpr,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(
          ${particle.r},
          ${particle.g},
          ${particle.b},
          ${Math.min(1, particle.a / 255)}
        )`;

        ctx.fill();
      }
    };

    const handleResize = () => {
      resize();
      layoutParticles();
    };

    const getMousePosition = (
      event: MouseEvent | Touch
    ) => {
      const rect = canvas.getBoundingClientRect();

      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const handleMouseMove = (event: MouseEvent) => {
      getMousePosition(event);
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!event.touches[0]) return;

      getMousePosition(event.touches[0]);
      mouseActive = true;
    };

    const handleTouchEnd = () => {
      mouseActive = false;
    };

    const startPortrait = () => {
      resize();
      buildParticles();
      animate();
    };

    if (image.complete && image.naturalWidth > 0) {
      startPortrait();
    } else {
      image.onload = startPortrait;
    }

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    });
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [sourceImageUrl]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full h-[430px] sm:h-[500px] lg:h-[540px] ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-label="Interactive dot portrait of Arshad TV"
      />
    </div>
  );
};
