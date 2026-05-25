import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Education from '@/components/education/Education';
//import Projects from '@/components/projects';
import Publications from '@/components/publications';
import Certifications from '@/components/certifications';

//  import Awards from '@/components/awards';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      {/*<Projects />*/}
      <Publications />
      <Certifications />
{/* <Awards /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
