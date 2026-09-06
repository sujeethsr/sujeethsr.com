import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Education from '@/components/education/Education';
import Publications from '@/components/publications';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Experience from '@/components/experience/Experience';
import HashScrollHandler from '@/components/HashScrollHandler';

export const metadata = {
  alternates: { canonical: "https://sujeethsr.com" },
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HashScrollHandler />
      <Hero />
      <Experience/>
      <Education />
      <Projects />
      <Publications />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;