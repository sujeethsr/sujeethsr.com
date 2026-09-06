'use client';

import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, Youtube, Mail, ArrowDown, BadgeCheck } from "lucide-react";
import { useTheme } from "next-themes";
import ScrollButton from "../ScrollButton";
import personalInfo from "@/data/personal-info.json";
import Image from "next/image";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const DevToIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
  </svg>
);

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; radius: number;
      speedX: number; speedY: number; opacity: number;
    }[] = [];

    const count = 80;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `hsla(220, 90%, 85%, ${p.opacity + 0.3})`
          : `hsla(220, 80%, 45%, ${p.opacity * 0.6})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `hsla(220, 90%, 85%, ${0.15 * (1 - dist / 100)})`
              : `hsla(220, 80%, 45%, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      <ParticleBackground />

      {/* Light mode background */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #93c5fd, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #bfdbfe, transparent)' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />
      </div>

      {/* Dark mode background */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-6 z-10">
        {/* Photo */}
        <div className="w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
          <Image
            src={personalInfo.personal.profileImage}
            alt={personalInfo.personal.name}
            width={192}
            height={256}
            className="w-full h-full object-cover object-top scale-110"
            priority
          />
        </div>

        {/* Name + Badge */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center justify-center gap-2 sm:gap-3">
            <span className="gradient-text">{personalInfo.personal.name}</span>
            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-green-500/15 border border-green-500/40 shadow-[0_0_18px_rgba(34,197,94,0.45)] flex-shrink-0">
              <BadgeCheck size={18} className="sm:w-6 sm:h-6 text-green-500 stroke-[2.8]" />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium">
            {personalInfo.personal.tagline}
          </p>
        </div>

        {/* Bio */}
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
          {personalInfo.personal.bio}
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a href={personalInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href={personalInfo.social.github.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href={personalInfo.social.medium.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Medium">
            <MediumIcon />
          </a>
          <a href={personalInfo.social.devto.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="DEV.to">
            <DevToIcon />
          </a>
          <a href={personalInfo.social.youtube.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="YouTube">
            <Youtube size={22} />
          </a>
          <a href={personalInfo.social.instagram.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href={personalInfo.social.email} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>

        {/* CTA */}
        <ScrollButton
          targetId="contact"
          className="glow-button font-semibold px-8 py-3 inline-flex items-center justify-center rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90"
          ariaLabel="Scroll to contact section"
        >
          Get In Touch
        </ScrollButton>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ScrollButton
          targetId="projects"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          ariaLabel="Scroll to projects section"
        >
          <ArrowDown size={35} />
        </ScrollButton>
      </div>
    </section>
  );
};

export default Hero;
