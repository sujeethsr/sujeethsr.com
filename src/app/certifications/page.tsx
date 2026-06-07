import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Certifications from '@/components/certifications';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certifications | Sujeeth Sundarajan Rajkumar",
  description: "Professional certifications of Sujeeth Sundarajan Rajkumar — Coursera, Udemy, and Google certifications in Python, Data Analytics, and more.",
  alternates: { canonical: "https://sujeethsr.com/certifications" },
  openGraph: {
    title: "Certifications | Sujeeth Sundarajan Rajkumar",
    description: "Professional certifications of Sujeeth Sundarajan Rajkumar — Coursera, Udemy, and Google certifications in Python, Data Analytics, and more.",
    url: "https://sujeethsr.com/certifications",
    type: "website",
  },
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Certifications />
      <Footer />
    </div>
  );
}