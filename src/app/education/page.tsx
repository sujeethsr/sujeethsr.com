import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Education from '@/components/education/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Education | Sujeeth Sundarajan Rajkumar",
  description: "Educational background of Sujeeth Sundarajan Rajkumar — MS in Computer Science from University of Texas at Arlington.",
  alternates: { canonical: "https://sujeethsr.com/education" },
  openGraph: {
    title: "Education | Sujeeth Sundarajan Rajkumar",
    description: "Educational background of Sujeeth Sundarajan Rajkumar — MS in Computer Science from University of Texas at Arlington.",
    url: "https://sujeethsr.com/education",
    type: "website",
  },
};

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Education />
      <Footer />
    </div>
  );
}