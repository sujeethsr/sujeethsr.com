import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import About from '@/components/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Sujeeth Sundarajan Rajkumar",
  description: "Learn about Sujeeth Sundarajan Rajkumar — AI Engineer specializing in LLMs, RAG pipelines, and Agentic AI. Based in Dallas-Fort Worth, TX.",
  alternates: { canonical: "https://sujeethsr.com/about" },
  openGraph: {
    title: "About | Sujeeth Sundarajan Rajkumar",
    description: "Learn about Sujeeth Sundarajan Rajkumar — AI Engineer specializing in LLMs, RAG pipelines, and Agentic AI. Based in Dallas-Fort Worth, TX.",
    url: "https://sujeethsr.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}