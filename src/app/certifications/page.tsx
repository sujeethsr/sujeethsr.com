import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Certifications from '@/components/certifications';

export const metadata = {
  alternates: { canonical: "https://sujeethsr.com/certifications" },
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