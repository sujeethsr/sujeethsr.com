import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Projects | Sujeeth Sundarajan Rajkumar",
  description: "AI/ML projects by Sujeeth Sundarajan Rajkumar — LLM applications, RAG pipelines, and Agentic AI systems.",
  keywords: [
    "Sujeeth Sundarajan Rajkumar",
    "AI projects",
    "LLM projects",
    "RAG pipeline",
    "Agentic AI",
    "Machine Learning projects",
  ],
  alternates: {
    canonical: "https://sujeethsr.com/projects",
  },
  openGraph: {
    title: "Projects | Sujeeth Sundarajan Rajkumar",
    description: "AI/ML projects by Sujeeth Sundarajan Rajkumar — LLM applications, RAG pipelines, and Agentic AI systems.",
    url: "https://sujeethsr.com/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Projects />
      <Footer />
    </div>
  );
}