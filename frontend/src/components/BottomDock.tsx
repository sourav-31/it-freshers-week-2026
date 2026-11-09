import React from 'react';
import { Clock, Calendar, PartyPopper, MessageCircle, ArrowUp } from 'lucide-react';
import { feedback } from '../utils/feedback';

export const BottomDock: React.FC = () => {
  const scrollTo = (id: string) => {
    feedback.vibrate(12);
    feedback.playClickSound();
    const el = document.getElementById(id) || document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-sm sm:hidden">
      <nav 
        className="flex items-center justify-around py-2 px-3 rounded-2xl bg-[#071333]/90 backdrop-blur-xl border border-blue-400/35 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(37,99,235,0.3)]"
        aria-label="Mobile Quick Navigation"
      >
        <button
          onClick={() => {
            feedback.vibrate(10);
            feedback.playClickSound();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Top</span>
        </button>

        <button
          onClick={() => scrollTo('countdown')}
          className="flex flex-col items-center justify-center p-1.5 text-cyan-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Jump to countdown"
        >
          <Clock className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-bold mt-0.5 text-cyan-200">Timer</span>
        </button>

        <button
          onClick={() => scrollTo('events')}
          className="flex flex-col items-center justify-center p-1.5 text-blue-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Jump to events"
        >
          <Calendar className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-bold mt-0.5 text-blue-200">Events</span>
        </button>

        <button
          onClick={() => scrollTo('party')}
          className="flex flex-col items-center justify-center p-1.5 text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
          aria-label="Jump to party"
        >
          <PartyPopper className="w-4 h-4 text-pink-400" />
          <span className="text-[10px] font-bold mt-0.5 text-pink-300">Party</span>
        </button>

        <button
          onClick={() => scrollTo('help')}
          className="flex flex-col items-center justify-center p-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Jump to helpdesk"
        >
          <MessageCircle className="w-4 h-4 text-slate-300" />
          <span className="text-[10px] font-medium mt-0.5">Help</span>
        </button>
      </nav>
    </div>
  );
};
