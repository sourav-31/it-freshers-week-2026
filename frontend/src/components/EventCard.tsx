import React from 'react';
import { 
  Sparkles, 
  Gamepad2, 
  Film, 
  Users2, 
  Compass, 
  Brain, 
  ArrowRight,
  Clock,
  MapPin
} from 'lucide-react';
import type { EventDetail } from '../data/eventConfig';
import { feedback } from '../utils/feedback';

interface EventCardProps {
  event: EventDetail;
  index?: number;
  onSelect: (event: EventDetail) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  const renderIcon = () => {
    switch (event.iconType) {
      case 'ice':
        return <Sparkles className="w-5 h-5 text-cyan-300" />;
      case 'game':
        return <Gamepad2 className="w-5 h-5 text-blue-300" />;
      case 'film':
        return <Film className="w-5 h-5 text-pink-300" />;
      case 'duo':
        return <Users2 className="w-5 h-5 text-indigo-300" />;
      case 'chaos':
        return <Compass className="w-5 h-5 text-amber-300" />;
      case 'mind':
        return <Brain className="w-5 h-5 text-purple-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-300" />;
    }
  };

  const handleCardClick = () => {
    feedback.vibrate(18);
    feedback.playCardOpenSound();
    onSelect(event);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative group rounded-3xl glass-card glass-card-hover p-4 sm:p-5 cursor-pointer select-none overflow-hidden transition-all duration-300 active:scale-[0.98] border border-blue-500/20"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`View details for ${event.name} on ${event.date}`}
    >
      {/* Background Accent Sheen */}
      <div 
        className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all pointer-events-none"
        aria-hidden="true" 
      />

      {/* Top Meta Header */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="flex items-center space-x-2">
          {/* Date Badge */}
          <span className="font-space font-extrabold text-xs sm:text-sm px-3 py-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)] border border-blue-400/30">
            {event.date}
          </span>
          <span className="text-[11px] font-semibold text-cyan-300 tracking-wide uppercase">
            {event.dayOfWeek}
          </span>
        </div>

        {/* Thematic Icon */}
        <div className="w-9 h-9 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.25)] group-hover:scale-110 group-hover:border-cyan-400/60 transition-all">
          {renderIcon()}
        </div>
      </div>

      {/* Event Name */}
      <div className="relative z-10 my-1.5">
        <h3 className="font-outfit font-black text-xl sm:text-2xl text-white tracking-tight group-hover:text-blue-200 transition-colors">
          {event.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300/90 font-medium italic mt-1 line-clamp-2">
          “{event.shortTagline}”
        </p>
      </div>

      {/* Venue & Time Quick Snippet */}
      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[11px] text-blue-300/80 mt-3 pt-2.5 border-t border-white/10 relative z-10">
        <div className="flex items-center space-x-1">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>{event.timing}</span>
        </div>
        <div className="flex items-center space-x-1">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span className="truncate max-w-[170px] sm:max-w-xs">{event.venue}</span>
        </div>
      </div>

      {/* EXPLORE EVENT Action Indicator */}
      <div className="flex items-center justify-between mt-3 pt-1 text-xs font-bold text-cyan-300 group-hover:text-white transition-colors relative z-10">
        <span className="tracking-wider uppercase text-[11px] flex items-center space-x-1">
          <span>EXPLORE EVENT</span>
        </span>
        <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-cyan-400/40 flex items-center justify-center group-hover:bg-blue-600 group-hover:translate-x-1 transition-all">
          <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:text-white" />
        </div>
      </div>

    </div>
  );
};
