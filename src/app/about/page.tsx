import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import About from '@/components/about';

export const metadata = {
  alternates: { canonical: "https://sujeethsr.com/about" },
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