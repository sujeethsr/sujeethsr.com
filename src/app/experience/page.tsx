import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Experience from '@/components/experience';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Experience | Sujeeth Sundarajan Rajkumar",
  description: "Professional experience of Sujeeth Sundarajan Rajkumar — AI Engineer at TechMentee, Inc. building production-grade LLM applications, RAG pipelines, and Agentic AI systems.",
  keywords: [
    "Sujeeth Sundarajan Rajkumar",
    "AI Engineer experience",
    "TechMentee",
    "LLM Engineer",
    "RAG pipelines",
    "Agentic AI",
    "Machine Learning Engineer",
    "Software Engineer",
    "University of Texas Arlington",
  ],
  alternates: {
    canonical: "https://sujeethsr.com/experience",
  },
  openGraph: {
    title: "Experience | Sujeeth Sundarajan Rajkumar",
    description: "Professional experience of Sujeeth Sundarajan Rajkumar — AI Engineer at TechMentee, Inc. building production-grade LLM applications, RAG pipelines, and Agentic AI systems.",
    url: "https://sujeethsr.com/experience",
    type: "website",
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Experience />
      <Footer />
    </div>
  );
}