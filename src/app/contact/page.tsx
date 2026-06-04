import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Contact from '@/components/contact';

export const metadata = {
  alternates: { canonical: "https://sujeethsr.com/contact" },
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