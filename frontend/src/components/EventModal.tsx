import React, { useEffect } from 'react';
import { 
  X, 
  Clock, 
  MapPin, 
  Shirt, 
  CheckCircle2, 
  Briefcase, 
  Quote,
  CalendarPlus
} from 'lucide-react';
import type { EventDetail } from '../data/eventConfig';
import { feedback } from '../utils/feedback';

interface EventModalProps {
  event: EventDetail | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event]);

  if (!event) return null;

  const handleClose = () => {
    feedback.vibrate(12);
    feedback.playModalCloseSound();
    onClose();
  };

  const handleAddToCalendar = () => {
    feedback.vibrate(15);
    feedback.playClickSound();
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CIT Bilaspur//IT Freshers Week 2026//EN
BEGIN:VEVENT
SUMMARY:IT Freshers' Week 2026: ${event.name}
DESCRIPTION:${event.theme} | Dress: ${event.dressCode}
LOCATION:CIT Bilaspur
STATUS:TENTATIVE
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `IT_Freshers_${event.name.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-xl max-h-[92vh] flex flex-col rounded-3xl bg-gradient-to-b from-[#0d1c44] to-[#07102b] border border-blue-400/40 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(37,99,235,0.3)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Banner */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0">
          <img 
            src={event.imageUrl} 
            alt={event.name}
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c44] via-[#0d1c44]/60 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/20 text-white transition-all cursor-pointer shadow-lg active:scale-90"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Date & Day Badge */}
          <div className="absolute bottom-3 left-4 flex items-center space-x-2">
            <span className="px-3 py-1 rounded-xl bg-blue-600/90 text-white font-space font-extrabold text-xs sm:text-sm border border-cyan-400/40 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
              {event.date}
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-slate-900/80 text-cyan-300 font-semibold text-xs border border-white/10">
              {event.dayOfWeek}
            </span>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 no-scrollbar">
          
          {/* Title & Tagline */}
          <div>
            <h3 id="modal-title" className="font-outfit font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
              {event.name}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-300 font-medium italic mt-0.5">
              "{event.shortTagline}"
            </p>
          </div>

          {/* Key Quick Facts Grid — Timing, Venue, Dress Code, Theme */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {/* Timing */}
            <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-start space-x-2.5">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Timing</span>
                <span className="text-blue-200 font-semibold italic">{event.timing}</span>
              </div>
            </div>

            {/* Venue */}
            <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Venue</span>
                <span className="text-blue-200 font-semibold italic">{event.venue}</span>
              </div>
            </div>

            {/* Dress Code */}
            <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-start space-x-2.5">
              <Shirt className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Dress Code</span>
                <span className="text-white font-semibold">{event.dressCode}</span>
              </div>
            </div>

            {/* Things to Bring */}
            <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-start space-x-2.5">
              <Briefcase className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">What to Bring</span>
                <ul className="space-y-0.5">
                  {event.thingsToBring.map((item, idx) => (
                    <li key={idx} className="text-white font-medium text-xs flex items-center space-x-1">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 inline-block shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Rules & Instructions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Rules & Instructions</span>
            </h4>
            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-200 font-medium italic">
              {event.rules[0]}
            </div>
          </div>

          {/* Motivational Quote (was specialNotes) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-400/25 relative">
            <Quote className="w-7 h-7 text-blue-400/20 absolute top-2 left-2" />
            <p className="text-sm sm:text-base text-blue-100 font-semibold italic text-center leading-relaxed pl-4">
              {event.specialNotes}
            </p>
          </div>

        </div>

        {/* Modal Footer — only Add to Calendar */}
        <div className="p-3.5 sm:p-4 border-t border-blue-500/20 bg-[#07102b] flex items-center gap-2 shrink-0">
          <button
            onClick={handleAddToCalendar}
            className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wide shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>Add to Calendar</span>
          </button>

          <button
            onClick={handleClose}
            className="py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-white/10 active:scale-95 transition-all cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
