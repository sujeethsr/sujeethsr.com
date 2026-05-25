import React from 'react';
import PublicationCategoryFilter from './PublicationCategoryFilter';
import PublicationCard from './PublicationCard';
import EmptyState from './EmptyState';
import personalInfo from '@/data/personal-info.json';

const Publications: React.FC = () => {
  return (
    <section
      id="publications"
      className="py-16 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                💡
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
                Publications & <span className="gradient-text">Writing</span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Research contributions and technical insights
              </p>
            </div>
          </div>
        </div>

        <PublicationCategoryFilter publications={personalInfo.publications} />

        <div
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          id="publications-grid"
        >
          {personalInfo.publications.map((publication) => (
            <PublicationCard
              key={publication.title}
              publication={publication}
            />
          ))}
        </div>

        <EmptyState />
      </div>
    </section>
  );
};

export default Publications;