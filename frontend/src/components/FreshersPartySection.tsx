import React from 'react';
import { 
  PartyPopper, 
  Crown, 
  Clock, 
  MapPin, 
  Shirt, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_CONFIG } from '../data/eventConfig';
import { feedback } from '../utils/feedback';

interface FreshersPartySectionProps {
  onRSVP: () => void;
}

export const FreshersPartySection: React.FC<FreshersPartySectionProps> = ({ onRSVP }) => {
  const { partyDetails } = EVENT_CONFIG;

  const triggerPartyConfetti = () => {
    feedback.vibratePattern([20, 30, 20]);
    feedback.playCelebrationChime();
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#ec4899', '#3b82f6', '#38bdf8', '#ffffff'],
    });
    onRSVP();
  };

  return (
    <section id="party" className="py-12 px-4 max-w-5xl mx-auto scroll-mt-16">
      
      {/* Container with Party Neon Aesthetic */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#1a083d] via-[#0d0926] to-[#120524] border-2 border-purple-500/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(168,85,247,0.25)] overflow-hidden">
        
        {/* Ambient Neon Lasers */}
        <div 
          className="absolute -top-32 -right-32 w-80 h-80 bg-pink-600/20 rounded-full blur-[90px] pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-600/20 rounded-full blur-[90px] pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Section Pill */}
        <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Crown className="w-3.5 h-3.5 text-pink-400 animate-bounce" />
            <span>THE CLIMAX OF FRESHER'S WEEK</span>
          </span>
        </div>

        {/* Main Party Title */}
        <div className="text-center sm:text-left mb-6">
          <h2 className="font-outfit font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
            {partyDetails.title}
          </h2>
          <p className="font-space text-sm sm:text-base text-pink-300 font-semibold mt-1 tracking-wide">
            {partyDetails.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {partyDetails.description}
          </p>
        </div>

        {/* Key Event Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          
          <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-start space-x-3">
            <Clock className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase font-bold text-purple-300 block">Date & Timing</span>
              <span className="text-xs font-bold text-white block">{partyDetails.date}</span>
              <span className="text-[11px] text-slate-300">{partyDetails.timing}</span>
              <span className="text-[10px] text-pink-300 font-medium block mt-0.5">Report by: {partyDetails.reportingTime}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase font-bold text-purple-300 block">Venue Location</span>
              <span className="text-xs font-bold text-white block">{partyDetails.venue}</span>
              <span className="text-[11px] text-slate-300">Auditorium & Grand Lawn</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-start space-x-3">
            <Shirt className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase font-bold text-purple-300 block">Dress Code</span>
              <span className="text-xs font-bold text-white block">{partyDetails.dressCode}</span>
            </div>
          </div>

        </div>

        {/* Party Highlights Bento Box */}
        <div className="my-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>Party Night Highlights</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {partyDetails.highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center space-x-2.5 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-8 pt-6 border-t border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left text-xs text-purple-200/80">
            <p><strong>Note for Freshers:</strong> Mr. & Ms. Fresher 2026 will be officially crowned during this evening!</p>
          </div>

          <button
            onClick={triggerPartyConfetti}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(236,72,153,0.5)] border border-pink-400/40 active:scale-95 transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <PartyPopper className="w-4 h-4" />
            <span>COUNT ME IN FOR THE PARTY</span>
          </button>
        </div>

      </div>

    </section>
  );
};
