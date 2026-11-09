import React from 'react';
import { Sparkles, ArrowDown, Calendar, Flame, PartyPopper } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventConfig';
import { feedback } from '../utils/feedback';

interface HeroProps {
  onExploreWeek: () => void;
  onCountMeIn: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWeek, onCountMeIn }) => {
  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-12 sm:pb-16 px-4 text-center overflow-hidden flex flex-col items-center">
      {/* Background Glow Spheres */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[500px] bg-gradient-to-tr from-blue-700/30 via-indigo-600/20 to-cyan-400/15 rounded-full blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Floating Decorative Tags */}
      <div className="absolute top-8 left-2 sm:left-12 animate-float-gentle opacity-80 pointer-events-none hidden xs:block">
        <div className="px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center space-x-1.5 text-xs text-blue-200">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-space font-semibold">6 Epic Days</span>
        </div>
      </div>

      <div className="absolute top-14 right-2 sm:right-12 animate-float-gentle opacity-80 pointer-events-none hidden xs:block" style={{ animationDelay: '1.5s' }}>
        <div className="px-3 py-1.5 rounded-full bg-indigo-950/60 border border-purple-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center space-x-1.5 text-xs text-purple-200">
          <PartyPopper className="w-3.5 h-3.5 text-pink-400" />
          <span className="font-space font-semibold">Grand Party</span>
        </div>
      </div>

      {/* Sub-Header / Presenter Badge */}
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-950/80 via-blue-900/60 to-indigo-950/80 border border-blue-400/35 text-cyan-300 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.25)] mb-4">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
        <span>{EVENT_CONFIG.presents}</span>
      </div>

      {/* Main Title — event name hidden as V_____ until reveal */}
      <div className="relative my-2 sm:my-4 max-w-4xl">
        <h1 className="font-outfit font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[1.05]">
          <span className="bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
            FRESHER'S
          </span>{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent glow-text-cyan">
            WEEK 2026
          </span>
        </h1>
        {/* Hidden event name teaser */}
        <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-400/30 shadow-[0_0_20px_rgba(37,99,235,0.3)] max-w-full">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-300/80">
            The Event is called
          </span>
          <span className="font-outfit font-black text-sm sm:text-lg tracking-widest text-cyan-200 glow-text-cyan px-1">
            {EVENT_CONFIG.hiddenEventName}
          </span>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-300/80">
            — Reveal Coming Soon ✦
          </span>
        </div>
      </div>

      {/* Catchy Headline */}
      <div className="my-3 max-w-xl sm:max-w-2xl px-2">
        <h2 className="font-space font-bold text-lg sm:text-2xl text-blue-200 tracking-wide glow-text-blue leading-snug">
          “{EVENT_CONFIG.heroHeadline}”
        </h2>
      </div>

      {/* Supporting Text */}
      <p className="text-sm sm:text-base text-slate-300/90 max-w-lg mx-auto leading-relaxed px-4 my-2 font-normal">
        {EVENT_CONFIG.heroSubtitle}
      </p>

      {/* Quick Info Pill */}
      <div className="flex items-center space-x-2 sm:space-x-3 my-4 py-2 px-4 sm:px-5 rounded-2xl bg-slate-900/70 border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.2)]">
        <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
        <span className="text-xs sm:text-sm font-semibold text-slate-200">
          11 Nov – 16 Nov, 2026
        </span>
        <span className="text-blue-500">•</span>
        <span className="text-xs sm:text-sm font-medium text-blue-300 flex items-center space-x-1">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>CGIT Bilaspur</span>
        </span>
      </div>

      {/* Hero CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 w-full max-w-xs sm:max-w-md px-2">
        {/* Explore The Week */}
        <button
          onClick={() => {
            feedback.vibrate(15);
            feedback.playClickSound();
            onExploreWeek();
          }}
          className="w-full sm:w-auto flex-1 flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-cyan-400/40 active:scale-95 transition-all cursor-pointer"
        >
          <span>EXPLORE THE WEEK</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>

        {/* Count Me In */}
        <button
          onClick={() => {
            feedback.vibrate(20);
            feedback.playClickSound();
            onCountMeIn();
          }}
          className="w-full sm:w-auto flex-1 flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 text-cyan-300 hover:text-white font-bold text-sm tracking-wider uppercase border border-blue-500/40 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.2)] active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>COUNT ME IN</span>
        </button>
      </div>
    </section>
  );
};
