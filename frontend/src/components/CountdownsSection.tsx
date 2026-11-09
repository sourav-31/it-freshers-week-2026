import React, { useState, useEffect } from 'react';
import { Sparkles, PartyPopper, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_CONFIG } from '../data/eventConfig';
import { feedback } from '../utils/feedback';

interface TimeCalculated {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  isLive: boolean;
}

export const CountdownsSection: React.FC = () => {
  const calculateTime = (isoString: string, eventDurationHours: number = 6): TimeCalculated => {
    try {
      const targetTime = new Date(isoString).getTime();
      const currentTime = Date.now();
      const diff = targetTime - currentTime;

      if (isNaN(targetTime)) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false, isLive: false };
      }

      // Check if event is currently live (within duration window)
      const durationMs = eventDurationHours * 60 * 60 * 1000;
      if (diff <= 0) {
        if (Math.abs(diff) < durationMs) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false, isLive: true };
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true, isLive: false };
        }
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        isCompleted: false,
        isLive: false,
      };
    } catch {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false, isLive: false };
    }
  };

  const [weekTime, setWeekTime] = useState<TimeCalculated>(() =>
    calculateTime(EVENT_CONFIG.weekTargetISO, 144) // 6 days
  );

  const [partyTime, setPartyTime] = useState<TimeCalculated>(() =>
    calculateTime(EVENT_CONFIG.partyTargetISO, 8)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setWeekTime(calculateTime(EVENT_CONFIG.weekTargetISO, 144));
      setPartyTime(calculateTime(EVENT_CONFIG.partyTargetISO, 8));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDigit = (val: number) => String(val).padStart(2, '0');

  const triggerCelebration = () => {
    feedback.vibratePattern([30, 50, 30]);
    feedback.playCelebrationChime();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#3b82f6', '#818cf8', '#c084fc', '#ffffff'],
    });
  };

  return (
    <section id="countdown" className="py-10 px-4 max-w-5xl mx-auto scroll-mt-16">

      {/* =========================================================================
          COUNTDOWN 1: FRESHERS' WEEK (HIGHEST VISUAL PRIORITY)
         ========================================================================= */}
      <div className="relative p-6 sm:p-10 rounded-3xl glass-card border-2 border-blue-500/40 shadow-[0_0_50px_rgba(37,99,235,0.25)] overflow-hidden mb-8">

        {/* Background Gradient Lights */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Priority Badge */}
        <div className="flex items-center justify-center space-x-2 mb-3">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>PRIMARY COUNTDOWN • NOVEMBER 11, 2026</span>
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="font-outfit font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            {EVENT_CONFIG.weekCountdownHeading}
          </h2>
          <p className="text-sm sm:text-base text-blue-200/90 font-medium mt-2">
            {EVENT_CONFIG.weekCountdownSubtitle}
          </p>
        </div>

        {/* Countdown Dial Displays */}
        {weekTime.isLive ? (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-blue-950/80 border border-emerald-500/50 text-center animate-pulse">
            <h3 className="font-outfit font-extrabold text-2xl sm:text-4xl text-emerald-300">
              IT'S TIME! LET THE CELEBRATION BEGIN!
            </h3>
            <p className="text-sm text-emerald-200 mt-2">
              Freshers' Week 2026 is officially LIVE. Head to the venue!
            </p>
          </div>
        ) : weekTime.isCompleted ? (
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700 text-center">
            <h3 className="font-outfit font-bold text-xl sm:text-2xl text-slate-300">
              Freshers' Week 2026 has concluded!
            </h3>
            <p className="text-sm text-slate-400 mt-1">Thank you for making memories with us.</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
            {/* Days */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0e214d]/90 to-[#071333]/95 border border-blue-400/35 shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
              <span className="font-space font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight glow-text-cyan">
                {formatDigit(weekTime.days)}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-300/80 mt-1 sm:mt-2">
                DAYS
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0e214d]/90 to-[#071333]/95 border border-blue-400/35 shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
              <span className="font-space font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight glow-text-cyan">
                {formatDigit(weekTime.hours)}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-300/80 mt-1 sm:mt-2">
                HOURS
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0e214d]/90 to-[#071333]/95 border border-blue-400/35 shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
              <span className="font-space font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight glow-text-cyan">
                {formatDigit(weekTime.minutes)}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-300/80 mt-1 sm:mt-2">
                MINUTES
              </span>
            </div>

            {/* Seconds (Active Pulse) */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#12285a]/90 to-[#09183d]/95 border border-cyan-400/50 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              <span className="font-space font-black text-3xl sm:text-5xl lg:text-6xl text-cyan-300 tracking-tight glow-text-cyan animate-pulse">
                {formatDigit(weekTime.seconds)}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-200 mt-1 sm:mt-2">
                SECONDS
              </span>
            </div>
          </div>
        )}

        {/* Footer / Hype Button */}
        <div className="mt-6 pt-4 border-t border-blue-500/20 flex items-center justify-center text-xs">
          <button
            onClick={triggerCelebration}
            className="flex items-center space-x-1 text-cyan-300 hover:text-white font-semibold underline underline-offset-4 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hype the Countdown</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          COUNTDOWN 2: FRESHERS' PARTY (Visually Distinct & Party Themed)
         ========================================================================= */}
      <div className="relative p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#160b33]/85 via-[#0d0926]/90 to-[#12072e]/90 border border-purple-500/30 shadow-[0_0_35px_rgba(139,92,246,0.2)] overflow-hidden">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Party Info Left Column */}
          <div className="text-center sm:text-left max-w-sm">
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-[11px] font-bold uppercase tracking-wider mb-2">
              <PartyPopper className="w-3 h-3 text-pink-400" />
              <span>THE GRAND FINALE</span>
            </div>
            <h3 className="font-outfit font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
              {EVENT_CONFIG.partyCountdownHeading}
            </h3>
            <p className="text-xs text-purple-200/80 mt-1">
              {EVENT_CONFIG.partyCountdownSubtitle}
            </p>
          </div>

          {/* Party Countdown 4 Dials */}
          {partyTime.isLive ? (
            <div className="p-3.5 rounded-xl bg-purple-900/50 border border-purple-400 text-center animate-pulse">
              <span className="font-bold text-sm text-purple-200">
                🎉 THE PARTY IS HAPPENING NOW!
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 text-center w-full sm:w-auto">
              <div className="p-2 sm:p-3 rounded-xl bg-purple-950/70 border border-purple-500/30 min-w-[55px] sm:min-w-[65px]">
                <span className="font-space font-extrabold text-lg sm:text-2xl text-purple-200 block">
                  {formatDigit(partyTime.days)}
                </span>
                <span className="text-[9px] font-semibold text-purple-400/80 uppercase">
                  DAYS
                </span>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-purple-950/70 border border-purple-500/30 min-w-[55px] sm:min-w-[65px]">
                <span className="font-space font-extrabold text-lg sm:text-2xl text-purple-200 block">
                  {formatDigit(partyTime.hours)}
                </span>
                <span className="text-[9px] font-semibold text-purple-400/80 uppercase">
                  HOURS
                </span>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-purple-950/70 border border-purple-500/30 min-w-[55px] sm:min-w-[65px]">
                <span className="font-space font-extrabold text-lg sm:text-2xl text-purple-200 block">
                  {formatDigit(partyTime.minutes)}
                </span>
                <span className="text-[9px] font-semibold text-purple-400/80 uppercase">
                  MINS
                </span>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-purple-950/70 border border-pink-500/40 min-w-[55px] sm:min-w-[65px]">
                <span className="font-space font-extrabold text-lg sm:text-2xl text-pink-300 block animate-pulse">
                  {formatDigit(partyTime.seconds)}
                </span>
                <span className="text-[9px] font-semibold text-pink-400/80 uppercase">
                  SECS
                </span>
              </div>
            </div>
          )}

        </div>

        <div className="mt-3 pt-2.5 border-t border-purple-900/40 text-[11px] text-purple-300/70 text-center sm:text-left flex items-center justify-between">
          <span>Party Date: <strong>16 Nov 2026, 09:00 AM IST</strong></span>
          <span className="hidden sm:inline">DJ Beats • Crowning • Dinner</span>
        </div>
      </div>

    </section>
  );
};
