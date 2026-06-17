import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import ExperiencePreview from "@/components/experience/ExperiencePreview";
import Education from '@/components/education/Education';
import Publications from '@/components/publications';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export const metadata = {
  alternates: { canonical: "https://sujeethsr.com" },
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ExperiencePreview />
      <Education />
      <Publications />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;