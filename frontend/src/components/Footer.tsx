import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventConfig';
import { feedback } from '../utils/feedback';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    feedback.vibrate(10);
    feedback.playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-10 pb-20 sm:pb-12 px-4 border-t border-blue-900/30 text-center relative overflow-hidden bg-[#02050e]">
      
      {/* Background Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-900/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto relative z-10 space-y-4">
        
        {/* Brand Icon */}
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 border border-cyan-400/30 text-white font-space font-black text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)]">
          IT
        </div>

        <div>
          <h3 className="font-outfit font-black text-xl text-white tracking-wider uppercase">
            {EVENT_CONFIG.title}
          </h3>
          <p className="text-xs text-blue-300 font-semibold tracking-wider mt-0.5">
            {EVENT_CONFIG.department}
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Chattisgarh Institute of Technology, Bilaspur
          </p>
        </div>

        {/* The Exact Required Quote */}
        <div className="py-2 inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs sm:text-sm font-bold text-slate-200">
          <span>MADE WITH</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          <span>BY THE IT BRANCH</span>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400/80 border-t border-white/10 gap-2">
          <p>© 2026 IT Branch Freshers' Week. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-cyan-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
