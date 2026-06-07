import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Sujeeth Sundarajan Rajkumar",
  description: "Get in touch with Sujeeth Sundarajan Rajkumar — open to AI Engineering, Generative AI, and intelligent product development opportunities.",
  alternates: { canonical: "https://sujeethsr.com/contact" },
  openGraph: {
    title: "Contact | Sujeeth Sundarajan Rajkumar",
    description: "Get in touch with Sujeeth Sundarajan Rajkumar — open to AI Engineering, Generative AI, and intelligent product development opportunities.",
    url: "https://sujeethsr.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}