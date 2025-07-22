
'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const Navigation = dynamic(() => import('@/components/navigation'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/hero-section'), { ssr: false });
const FeatureCards = dynamic(() => import('@/components/feature-cards'), { ssr: false });
const InfographicSection = dynamic(() => import('@/components/infographic-section'), { ssr: false });
const EvidenceSection = dynamic(() => import('@/components/evidence-section'), { ssr: false });
const PracticalTools = dynamic(() => import('@/components/practical-tools'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

// Loading component
const LoadingSection = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg">טוען תוכן...</p>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>

      {/* Hero Section */}
      <section id="hero">
        <Suspense fallback={<LoadingSection />}>
          <HeroSection />
        </Suspense>
      </section>

      {/* Main Features */}
      <section id="main-content">
        <Suspense fallback={<LoadingSection />}>
          <FeatureCards />
        </Suspense>
      </section>

      {/* Statistics and Infographics */}
      <section id="statistics">
        <Suspense fallback={<LoadingSection />}>
          <InfographicSection />
        </Suspense>
      </section>

      {/* Evidence-Based Research */}
      <section id="evidence">
        <Suspense fallback={<LoadingSection />}>
          <EvidenceSection />
        </Suspense>
      </section>

      {/* Practical Tools */}
      <section id="tools">
        <Suspense fallback={<LoadingSection />}>
          <PracticalTools />
        </Suspense>
      </section>

      {/* Contact & Footer */}
      <section id="contact">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </section>
    </div>
  );
}
