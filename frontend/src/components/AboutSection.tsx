import React from 'react';
import { Users, Heart, Compass, Home, Sparkles, ShieldCheck } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventConfig';

export const AboutSection: React.FC = () => {
  const renderPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-pink-400" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'home':
        return <Home className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-12 px-4 max-w-5xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>MORE THAN AN EVENT</span>
        </div>
        <h2 className="font-outfit font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
          {EVENT_CONFIG.aboutHeading}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2 max-w-xl mx-auto">
          College is not just about classrooms and lectures. It's about the people you meet, the stories you write, and the memories you'll cherish forever.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {EVENT_CONFIG.aboutPillars.map((pillar, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl glass-card border border-blue-500/20 flex flex-col justify-between hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {renderPillarIcon(pillar.icon)}
              </div>
              <h3 className="font-outfit font-bold text-base text-white mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
              0{index + 1} • CORE PILLAR
            </div>
          </div>
        ))}
      </div>

      {/* Senior Mentorship & Zero Ragging Guarantee */}
      <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/70 to-indigo-950/60 border border-blue-400/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-blue-600/30 border border-cyan-400/40 text-cyan-300 shrink-0">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
              100% Friendly, Positive & Safe Environment
            </h4>
            <p className="text-xs text-slate-300/80 mt-0.5">
              Strictly zero-ragging campus policy. Only mentorship, friendship, and celebration!
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <span className="text-[11px] font-mono text-cyan-300 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-400/30">
            CIT Bilaspur • IT Dept
          </span>
        </div>
      </div>

    </section>
  );
};
