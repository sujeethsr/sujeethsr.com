import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Experience from '@/components/experience/Experience';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Experience | Sujeeth Sundarajan Rajkumar",
  description: "Professional experience and career journey of Sujeeth Sundarajan Rajkumar — AI Engineer specializing in LLM applications, RAG pipelines, and Agentic AI.",
  keywords: [
    "Sujeeth Sundarajan Rajkumar",
    "AI Engineer experience",
    "career",
    "professional journey",
  ],
  alternates: {
    canonical: "https://sujeethsr.com/experience",
  },
  openGraph: {
    title: "Experience | Sujeeth Sundarajan Rajkumar",
    description: "Professional experience and career journey of Sujeeth Sundarajan Rajkumar.",
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
