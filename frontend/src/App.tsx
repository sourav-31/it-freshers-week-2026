import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountdownsSection } from './components/CountdownsSection';
import { EventTimeline } from './components/EventTimeline';
import { FreshersPartySection } from './components/FreshersPartySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BottomDock } from './components/BottomDock';
import { RSVPModal } from './components/RSVPModal';

export const App: React.FC = () => {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040814] text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Background Animated Canvas & Subtle Cyber Grid */}
      <AnimatedBackground />

      {/* Main Application Shell */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {/* Sticky Glass Navbar */}
        <Navbar onOpenRSVP={() => setIsRSVPOpen(true)} />

        <main className="flex-1 pb-16">
          {/* Hero Section */}
          <Hero
            onExploreWeek={() => scrollToSection('events')}
            onCountMeIn={() => setIsRSVPOpen(true)}
          />

          {/* TWO DYNAMIC COUNTDOWNS (Freshers' Week & Freshers' Party) */}
          <CountdownsSection />

          {/* 6-Day Event Timeline & Interactive Detail Modals */}
          <EventTimeline />

          {/* Special Freshers' Party Section */}
          <FreshersPartySection onRSVP={() => setIsRSVPOpen(true)} />

          {/* About Freshers' Week */}
          <AboutSection />

          {/* Senior Helpdesk & Organising Committee Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Mobile-First Bottom Floating Thumb Dock */}
      <BottomDock />

      {/* Interactive RSVP Celebration Modal */}
      <RSVPModal
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
      />
    </div>
  );
};

export default App;
