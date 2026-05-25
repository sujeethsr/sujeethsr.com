import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Education from '@/components/education/Education';

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Education />
      <Footer />
    </div>
  );
}