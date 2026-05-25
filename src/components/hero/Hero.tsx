'use client';

import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, Youtube, Mail, ArrowDown, BadgeCheck} from "lucide-react";
import ScrollButton from "../ScrollButton";
import personalInfo from "@/data/personal-info.json";
import Image from "next/image";

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
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

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(220, 90%, 85%, ${p.opacity + 0.3})`;
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
            ctx.strokeStyle = `hsla(220, 90%, 85%, ${0.15 * (1 - dist / 100)})`;
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
  }, []);

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

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center space-y-6 z-10">
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

        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center justify-center gap-2 sm:gap-3">
            <span className="gradient-text">{personalInfo.personal.name}</span>

            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-green-500/15 border border-green-500/40 shadow-[0_0_18px_rgba(34,197,94,0.45)] flex-shrink-0">
              <BadgeCheck
                size={18}
                className="sm:w-6 sm:h-6 text-green-500 stroke-[2.8]"
              />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-medium">
            {personalInfo.personal.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
          {personalInfo.personal.bio}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
  href={personalInfo.social.youtube.url}
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
  aria-label="YouTube"
>
  <Youtube size={22} />
</a>

          <a
            href={personalInfo.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          <a
            href={personalInfo.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>

          <a
            href={personalInfo.social.email}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        <ScrollButton
          targetId="contact"
          className="glow-button font-semibold px-8 py-3 inline-flex items-center justify-center rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90"
          ariaLabel="Scroll to contact section"
        >
          Get In Touch
        </ScrollButton>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ScrollButton
          targetId="about"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          ariaLabel="Scroll to about section"
        >
          <ArrowDown size={35} />
        </ScrollButton>
      </div>
    </section>
  );
};

export default Hero;