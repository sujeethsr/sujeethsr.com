import Navigation from '@/components/navigation';
import personalInfo from '@/data/personal-info.json';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = personalInfo.publications.filter(
    (pub) => pub.category === 'blog'
  );

  return (
    <div className="h-screen flex flex-col overflow-hidden pt-16">
      <Navigation />

      {/* Fixed height content area — no page scroll */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex flex-col h-full">

          {/* Header — stays fixed */}
          <div className="text-center mb-10 flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <BookOpen size={14} className="text-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Latest <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts on AI engineering, LLMs, and building
              production-grade intelligent systems.
            </p>
          </div>

          {/* Articles — scrolls internally */}
          <div className="flex-1 overflow-y-auto scrollbar-custom pr-2 space-y-4">
            {blogPosts.map((post) => (
              <a key={post.title} href={post.url} target="_blank" rel="noopener noreferrer" className="block glass-card p-6 rounded-xl group hover:border-primary/40 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                        {post.venue}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={11} className="text-primary/70" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>

          {/* Medium link — stays fixed at bottom */}
          <div className="text-center pt-6 flex-shrink-0">
            <a href="https://medium.com/@sujeethsr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-300 text-sm font-medium">
              View all articles on Medium
              <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
