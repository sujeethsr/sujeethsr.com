import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Publications from '@/components/publications';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Publications | Sujeeth Sundarajan Rajkumar",
  description: "Research publications and blog posts by Sujeeth Sundarajan Rajkumar — IEEE published researcher and AI engineering writer on Medium and DEV Community.",
  alternates: { canonical: "https://sujeethsr.com/publications" },
  openGraph: {
    title: "Publications | Sujeeth Sundarajan Rajkumar",
    description: "Research publications and blog posts by Sujeeth Sundarajan Rajkumar — IEEE published researcher and AI engineering writer on Medium and DEV Community.",
    url: "https://sujeethsr.com/publications",
    type: "website",
  },
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Publications />
      <Footer />
    </div>
  );
}