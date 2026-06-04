import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Publications from '@/components/publications';

export const metadata = {
  alternates: { canonical: "https://sujeethsr.com/publications" },
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