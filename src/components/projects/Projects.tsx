// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import ComingSoonCard from './ComingSoonCard';
import personalInfo from '@/data/personal-info.json';
import { Rocket } from 'lucide-react';

interface Project {
  readonly id: number;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly longDescription: string;
  readonly technologies: readonly string[];
  readonly github: string;
  readonly featured: boolean;
  readonly categories: readonly string[];
  readonly image: string;
  readonly status: string;
  readonly priority?: number;
}

const Projects: React.FC = () => {
  // Use actual projects from personal data and sort by priority
  const projects: readonly Project[] = personalInfo.projects
    .slice() // Create a copy to avoid mutating the original array
    .sort((a, b) => {
      // Sort by priority (lower number = higher priority)
      // Projects without priority go to the end
      const priorityA = a.priority ?? 999;
      const priorityB = b.priority ?? 999;
      return priorityA - priorityB;
    });

  // Fixed category list — covers current and planned future project types.
  // Add a new category here any time, even before a project uses it.
  const categories = [
    'All',
    'AI/ML',
    'LLM Applications',
    'Agentic AI',
    'Fullstack Development',
    'Open Source',
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center">
            <div className="relative w-28 h-28 flex-shrink-0 animate-researchFloat">
              <div className="absolute inset-2 rounded-2xl bg-background/70 border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.25)]" />

              <div className="absolute top-6 left-8 w-12 h-2 rounded-full bg-primary/80" />
              <div className="absolute top-11 left-8 w-16 h-1.5 rounded-full bg-muted-foreground/45" />
              <div className="absolute top-[60px] left-8 w-10 h-1.5 rounded-full bg-muted-foreground/35" />

              <div className="absolute bottom-6 left-8 flex items-end gap-1">
                <span className="w-1.5 h-4 bg-primary animate-typingBar" />
                <span className="w-1.5 h-4 bg-primary/70 animate-typingBar delay-100" />
                <span className="w-1.5 h-4 bg-primary/40 animate-typingBar delay-200" />
              </div>

              <div className="absolute -top-1 right-2 w-3 h-3 rounded-full bg-primary animate-orbitOne" />
              <div className="absolute bottom-2 -left-1 w-2.5 h-2.5 rounded-full bg-accent animate-orbitTwo" />
              <div className="absolute -right-1 bottom-8 w-2 h-2 rounded-full bg-green-400 animate-orbitThree" />

              <div className="absolute -right-2 -bottom-1 text-2xl animate-ideaPop">
                🚀
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Each one solves a specific problem — see the write-up for the details.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter - CLIENT COMPONENT FOR INTERACTIVITY */}
        <ProjectFilter categories={categories} />

        {/* Projects Grid - ALL PROJECTS SERVER-RENDERED FOR SEO */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {projects.length < 3 && <ComingSoonCard />}
        </div>

      </div>
    </section>
  );
};

export default Projects;
