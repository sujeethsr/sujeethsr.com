import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { TooltipProvider } from '@/components/ui/tooltip';
import { publicUrl } from "@/constants";
import personalInfo from "@/data/personal-info.json";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const myUrl = process.env.NEXT_PUBLIC_SITE_URL || publicUrl;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: personalInfo.seo.title,
  description: personalInfo.seo.description,
  keywords: personalInfo.seo.keywords,
  authors: [{ name: personalInfo.personal.name, url: personalInfo.social.linkedin.url }],
  creator: personalInfo.personal.name,
  publisher: personalInfo.personal.name,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  verification: {
    google: personalInfo.seo.googleSiteVerification,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(myUrl),
  alternates: {
    canonical: myUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: myUrl,
    title: personalInfo.seo.title,
    description: personalInfo.seo.description,
    siteName: personalInfo.personal.name,
    images: [{
      url: personalInfo.seo.ogImage,
      alt: personalInfo.seo.title,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: personalInfo.seo.title,
    description: personalInfo.seo.description,
    images: [personalInfo.seo.ogImage],
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": personalInfo.personal.name,
              "jobTitle": personalInfo.personal.title,
              "worksFor": {
                "@type": "Organization",
                "name": personalInfo.personal.company
              },
              "email": personalInfo.personal.email,
              "url": myUrl,
              "sameAs": [
                personalInfo.social.linkedin.url,
                personalInfo.social.github.url,
                personalInfo.social.medium.url
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Large Language Models",
                "Retrieval-Augmented Generation",
                "Agentic AI",
                "Python",
                "FastAPI",
                "Cloud Computing"
              ],
              "keywords": personalInfo.seo.keywords,
            })
          }}
        />
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem={false}
  disableTransitionOnChange
>
          <QueryProvider>
            <TooltipProvider>
              {children}
              <ToastProvider />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;