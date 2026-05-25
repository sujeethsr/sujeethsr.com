// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  logo: string;
  coursework?: string[];
}

const Education: React.FC = () => {
  const education: EducationItem[] = personalInfo.education;

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-primary/10 rotate-45 float-animation animate-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-accent/10 rotate-12 float-animation animate-delay-4000"></div>
        <div className="absolute top-2/3 left-1/3 w-16 h-16 border border-primary/5 -rotate-12 float-animation animate-delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8 lg:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center">
            <div className="relative w-24 h-24 flex-shrink-0 animate-eduFloat flex items-center justify-center">
              <GraduationCap
                size={70}
                strokeWidth={2.4}
                className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.65)]"
              />

              <div className="absolute right-[19px] top-[38px] w-[3px] h-7 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.75)]" />

              <div className="absolute right-[14px] top-[63px] w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.85)]" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
                Academic <span className="gradient-text">Foundation</span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Graduate and undergraduate studies in computer science with a focus on AI,
                software engineering, data systems, and scalable application development.
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"></div>

          <div className="space-y-8 lg:space-y-12">
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-12 md:pl-16">
                <div className="absolute left-[9px] md:left-[17px] top-8 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_18px_rgba(59,130,246,0.85)] z-10"></div>

                <div className="absolute left-4 md:left-6 top-[38px] w-8 h-px bg-primary/40"></div>

                <div className="glass-card rounded-xl border border-primary/20 bg-background/40 backdrop-blur-sm p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-foreground">
                            {edu.degree}
                          </h3>

                          <p className="text-primary font-semibold mt-1">
                            {edu.institution}
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium w-fit md:ml-4">
                          <GraduationCap size={15} />
                          GPA: {edu.gpa}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={15} />
                          <span>{edu.duration}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin size={15} />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className="mt-5">
                          <p className="text-sm font-medium text-foreground mb-3">
                            Relevant Coursework
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;