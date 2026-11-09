import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, HelpCircle } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventConfig';
import { feedback } from '../utils/feedback';

export const ContactSection: React.FC = () => {
  return (
    <section id="help" className="py-12 px-4 max-w-6xl mx-auto scroll-mt-16">
      {/* Anchor alias so #contact also smoothly scrolls here */}
      <div id="contact" className="-mt-16 pt-16" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>SENIOR HELPDESK & SUPPORT</span>
        </div>
        <h2 className="font-outfit font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
          NEED HELP? CONTACT YOUR SENIORS
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2 leading-relaxed">
          Any doubts about the events, schedule, college life, or just feeling lost? Don't hesitate to reach out! We are all here to welcome and guide you.
        </p>
      </div>

      {/* Coordinators Grid — 5 Coordinators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {EVENT_CONFIG.team.map((member) => {
          const cleanPhone = member.phone.replace(/[^0-9]/g, '');
          const waUrl = member.whatsappLink || `https://wa.me/${cleanPhone}`;

          return (
            <div
              key={member.id}
              className="p-5 rounded-3xl glass-card border border-blue-500/25 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all"
            >
              <div>
                {/* Avatar and Year Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 border border-cyan-400/40 flex items-center justify-center font-outfit font-black text-white text-base shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                    {member.avatarText}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-900/60 text-cyan-300 border border-blue-400/30">
                    {member.year}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="font-outfit font-black text-lg text-white tracking-wide">
                  {member.name}
                </h3>
                <p className="text-xs text-cyan-300/90 font-semibold tracking-wide">
                  {member.role}
                </p>

                {/* Contact Info List */}
                <div className="mt-3.5 space-y-2 text-xs text-slate-300">
                  {/* Phone */}
                  <a
                    href={`tel:${cleanPhone}`}
                    onClick={() => feedback.vibrate(10)}
                    className="flex items-center space-x-2 text-slate-300 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-950/70 border border-blue-500/30 text-cyan-400 group-hover:border-cyan-400/50">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{member.phone}</span>
                  </a>

                  {/* Email (only if provided) */}
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      onClick={() => feedback.vibrate(10)}
                      className="flex items-center space-x-2 text-slate-300 hover:text-cyan-300 transition-colors group truncate"
                    >
                      <div className="p-1.5 rounded-lg bg-blue-950/70 border border-blue-500/30 text-cyan-400 group-hover:border-cyan-400/50 shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium truncate">{member.email}</span>
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Action Buttons: WhatsApp, Call, Instagram */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-2">
                {/* WhatsApp Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => feedback.vibrate(12)}
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                {/* Call Button */}
                <a
                  href={`tel:${cleanPhone}`}
                  onClick={() => feedback.vibrate(10)}
                  className="py-2 px-3 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center space-x-1 border border-blue-400/30 shadow-md transition-all cursor-pointer active:scale-95"
                  title={`Call ${member.name}`}
                  aria-label={`Call ${member.name}`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xs:inline">Call</span>
                </a>

                {/* Instagram Button (only if provided) */}
                {member.instagram ? (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => feedback.vibrate(10)}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer active:scale-95"
                    title={`${member.name} on Instagram`}
                    aria-label={`${member.name} on Instagram`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* College Campus Address Box */}
      <div className="mt-10 p-5 rounded-3xl glass-card border border-blue-500/30 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center space-x-2 text-cyan-300 font-bold text-xs uppercase tracking-wider mb-1">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span>FESTIVAL VENUE</span>
        </div>
        <h4 className="font-outfit font-bold text-base sm:text-lg text-white">
          CGIT Bilaspur
        </h4>
        <p className="text-xs text-slate-300/80 mt-0.5">
          Department of Information Technology & Central Campus • Bilaspur, Chhattisgarh
        </p>
        <a
          href="https://maps.google.com/?q=CGIT+Bilaspur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-cyan-200 text-xs font-semibold border border-blue-400/30 transition-all"
        >
          Open Location in Google Maps →
        </a>
      </div>
    </section>
  );
};
