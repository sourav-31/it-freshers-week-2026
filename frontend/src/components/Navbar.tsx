import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Share2, Check } from 'lucide-react';
import { feedback } from '../utils/feedback';

interface NavbarProps {
  onOpenRSVP: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRSVP }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sound is permanently enabled — no user toggle needed
  useEffect(() => {
    feedback.setSoundEnabled(true);
  }, []);

  const handleShare = async () => {
    feedback.vibrate(15);
    feedback.playClickSound();
    const shareData = {
      title: "IT Branch Fresher's Week 2026",
      text: "🔥 Check out the official schedule and countdown for IT Branch Fresher's Week 2026 & Grand Freshers' Party!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'COUNTDOWN', href: '#countdown' },
    { label: 'EVENTS', href: '#events' },
    { label: 'PARTY', href: '#party' },
    { label: 'ABOUT', href: '#about' },
    { label: 'HELPDESK', href: '#help' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-nav transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#home" 
          className="flex items-center space-x-2.5 group"
          onClick={() => {
            feedback.vibrate(12);
            feedback.playClickSound();
          }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-base shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-white/20 group-hover:scale-105 transition-transform">
            <span className="font-space">IT</span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-outfit font-black tracking-wider text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors">
                FRESHER'S '26
              </span>
              <span className="hidden xs:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 border border-blue-400/30">
                OFFICIAL
              </span>
            </div>
            <p className="text-[10px] text-blue-300/70 font-medium tracking-tight">
              Dept. of Information Technology
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-semibold tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                feedback.vibrate(10);
                feedback.playClickSound();
              }}
              className="hover:text-blue-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          
          {/* Quick Share Button */}
          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Share this website"
            aria-label="Share Event Link"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </button>

          {/* CTA: Count Me In */}
          <button
            onClick={() => {
              feedback.vibrate(20);
              feedback.playClickSound();
              onOpenRSVP();
            }}
            className="hidden sm:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/40 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>COUNT ME IN</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              feedback.vibrate(15);
              feedback.playClickSound();
            }}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 md:hidden hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-x-0 border-b border-t-0 border-blue-500/20 px-5 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  feedback.vibrate(10);
                  feedback.playClickSound();
                }}
                className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/20 hover:text-blue-300 hover:bg-blue-900/40 transition-colors text-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRSVP();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>COUNT ME IN • CELEBRATE</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
