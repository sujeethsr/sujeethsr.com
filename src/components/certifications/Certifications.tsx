// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import CertificationCard from './CertificationCard';
import CallToAction from './CallToAction';
import personalInfo from '@/data/personal-info.json';

interface Certificate {
  readonly url: string;
  readonly title: string;
  readonly year: string;
  readonly credentialId: string;
}

interface Certification {
  readonly id: number;
  readonly title: string;
  readonly provider: string;
  readonly year: string;
  readonly description: string;
  readonly certificates?: readonly Certificate[];
  readonly skills: readonly string[];
}

const Certifications: React.FC = () => {
  const certifications: readonly Certification[] = personalInfo.certifications;

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center">
            {/* Floating certification animation */}
            <div className="relative w-24 h-24 animate-certFloat flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-background/60 border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.25)] backdrop-blur-sm" />

              <div className="absolute top-5 left-5 w-14 h-2 rounded-full bg-primary/70" />
              <div className="absolute top-10 left-5 w-10 h-1.5 rounded-full bg-muted-foreground/50" />
              <div className="absolute top-14 left-5 w-12 h-1.5 rounded-full bg-muted-foreground/40" />

              <div className="absolute -right-2 -top-2 w-10 h-10 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center animate-certPulse shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                ✅
              </div>

              <div className="absolute -left-3 bottom-0 text-2xl animate-trophySpin">
                🏆
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
                Professional <span className="gradient-text">Certifications</span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Continuous learning and professional development in cutting-edge technologies
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        <CallToAction />
      </div>
    </section>
  );
};

export default Certifications;