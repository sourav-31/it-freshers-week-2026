import React, { useState } from 'react';
import { X, Check, PartyPopper, CalendarPlus } from 'lucide-react';
import confetti from 'canvas-confetti';
import { feedback } from '../utils/feedback';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>(['all']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    feedback.vibrate(10);
    feedback.playModalCloseSound();
    onClose();
  };

  const handleToggleDay = (day: string) => {
    feedback.vibrate(10);
    feedback.playClickSound();
    if (day === 'all') {
      setSelectedDays(['all']);
    } else {
      let updated = selectedDays.filter(d => d !== 'all');
      if (updated.includes(day)) {
        updated = updated.filter(d => d !== day);
      } else {
        updated.push(day);
      }
      if (updated.length === 0) updated = ['all'];
      setSelectedDays(updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    feedback.vibratePattern([20, 40, 20]);
    feedback.playCelebrationChime();
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#3b82f6', '#ec4899', '#a855f7', '#ffffff']
    });
    setSubmitted(true);
  };

  const handleDownloadFullICS = () => {
    feedback.vibrate(12);
    feedback.playClickSound();
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CIT Bilaspur//IT Freshers Week 2026//EN
BEGIN:VEVENT
SUMMARY:IT Freshers' Week 2026 (Nov 11 - 16)
DESCRIPTION:The official 6-day Freshers' Week and Grand Freshers' Party hosted by IT Branch Seniors!
LOCATION:Chattisgarh Institute of Technology, Bilaspur
DTSTART:20261111T040000Z
DTEND:20261116T170000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `IT_Freshers_Week_2026_Full_Schedule.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md rounded-3xl glass-card border border-blue-400/40 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(59,130,246,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-white/10 cursor-pointer active:scale-90"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-outfit font-black text-2xl text-white">
              YOU'RE IN, {name ? name.toUpperCase() : 'FRESHER'}!
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xs mx-auto">
              Get ready for six incredible days of madness, games, and the Grand Freshers' Party. Your IT seniors can't wait to welcome you!
            </p>

            <div className="pt-2">
              <button
                onClick={handleDownloadFullICS}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider shadow-md transition-all cursor-pointer"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>Save Full Week to Calendar (.ics)</span>
              </button>
            </div>

            <button
              onClick={handleClose}
              className="text-xs text-slate-400 hover:text-white underline mt-2 cursor-pointer"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center space-x-2 text-cyan-300 mb-1">
              <PartyPopper className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                IT FRESHERS' WEEK 2026
              </span>
            </div>

            <h3 className="font-outfit font-black text-2xl text-white uppercase tracking-tight">
              COUNT ME IN!
            </h3>

            <p className="text-xs text-slate-300 mt-1 mb-4">
              Join your fellow 1st-year batchmates in celebrating the official Freshers' Week. No registration fees!
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Alex Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Which Events Are You Most Hyped For?
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  <button
                    type="button"
                    onClick={() => handleToggleDay('all')}
                    className={`p-2 rounded-lg border text-left font-semibold transition-all cursor-pointer ${
                      selectedDays.includes('all')
                        ? 'bg-blue-600 text-white border-cyan-400'
                        : 'bg-slate-900/60 text-slate-300 border-white/10'
                    }`}
                  >
                    ✨ All 6 Days + Party
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleDay('12 Nov')}
                    className={`p-2 rounded-lg border text-left font-semibold transition-all cursor-pointer ${
                      selectedDays.includes('12 Nov')
                        ? 'bg-blue-600 text-white border-cyan-400'
                        : 'bg-slate-900/60 text-slate-300 border-white/10'
                    }`}
                  >
                    🎮 Pixel Party (Gaming)
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleDay('13 Nov')}
                    className={`p-2 rounded-lg border text-left font-semibold transition-all cursor-pointer ${
                      selectedDays.includes('13 Nov')
                        ? 'bg-blue-600 text-white border-cyan-400'
                        : 'bg-slate-900/60 text-slate-300 border-white/10'
                    }`}
                  >
                    🎬 Filmy Frenzy
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleDay('16 Nov')}
                    className={`p-2 rounded-lg border text-left font-semibold transition-all cursor-pointer ${
                      selectedDays.includes('16 Nov')
                        ? 'bg-pink-600 text-white border-pink-400'
                        : 'bg-slate-900/60 text-slate-300 border-white/10'
                    }`}
                  >
                    👑 Grand Freshers' Party
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-cyan-400/40 active:scale-95 transition-all cursor-pointer"
              >
                CONFIRM MY EXCITEMENT • LET'S GO!
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
