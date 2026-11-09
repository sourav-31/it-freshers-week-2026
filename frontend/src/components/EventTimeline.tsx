import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { EVENT_CONFIG, type EventDetail } from '../data/eventConfig';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';
import { feedback } from '../utils/feedback';

export const EventTimeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);
  const [filterId, setFilterId] = useState<number | 'all'>('all');

  const filteredEvents = filterId === 'all'
    ? EVENT_CONFIG.events
    : EVENT_CONFIG.events.filter(e => e.id === filterId);

  return (
    <section id="events" className="py-12 px-4 max-w-5xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
          <span>11 — 16 NOVEMBER 2026</span>
        </div>
        <h2 className="font-outfit font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
          THE WEEK LINE-UP
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-medium mt-2">
          Six days. Six experiences. Countless memories. Tap any card to open the interactive event brief.
        </p>
      </div>

      {/* Mobile-Friendly Date Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center space-x-1.5 overflow-x-auto no-scrollbar pb-3 mb-6 px-1">
        <button
          onClick={() => {
            feedback.vibrate(10);
            feedback.playClickSound();
            setFilterId('all');
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            filterId === 'all'
              ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-cyan-400/40'
              : 'bg-slate-900/60 text-slate-300 hover:text-white border border-white/10'
          }`}
        >
          All 6 Days
        </button>

        {EVENT_CONFIG.events.map((ev) => (
          <button
            key={ev.id}
            onClick={() => {
              feedback.vibrate(10);
              feedback.playClickSound();
              setFilterId(ev.id);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterId === ev.id
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-cyan-400/40'
                : 'bg-slate-900/60 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            {ev.date}
          </button>
        ))}
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        
        {/* Vertical Timeline Guide on Mobile & Tablet */}
        <div 
          className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 timeline-line opacity-40 pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              onSelect={(ev) => setSelectedEvent(ev)}
            />
          ))}
        </div>
      </div>

      {/* Helper Prompt */}
      <div className="text-center mt-6 text-xs text-blue-300/70 font-medium">
        💡 Tap any card above to view dress codes, venues, schedules & what to bring.
      </div>

      {/* Interactive Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

    </section>
  );
};
