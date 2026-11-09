# IT Branch Fresher's Week 2026 & Grand Freshers' Party
### Official Interactive Event Website • Department of Information Technology

A premium, modern, fully responsive mobile-first event website for **Information Technology (IT) Branch Fresher's Week 2026** and the **Grand Freshers' Party**.

---

## 🎨 Visual Design & Theme
- **Color Palette:** Deep Navy / Midnight Blue (`#040814`), Electric Blue (`#2563eb`, `#3b82f6`), Neon Cyan (`#06b6d4`, `#22d3ee`, `#38bdf8`), and Violet/Purple accents (`#7c3aed`, `#a855f7`).
- **Aesthetic:** Modern glassmorphism, glowing borders, smooth interactive canvas particle background, and rounded event cards.
- **Mobile-First Ergonomics:** Designed primarily for phone screens (360px–430px) with a 1-thumb bottom floating dock and native share support.
- **Event Name:** Displayed as `V_____` — name kept mysterious until the official reveal!

---

## 🚀 Key Features

1. **Hero Section:**
   - *IT BRANCH PRESENTS*
   - *FRESHER'S WEEK 2026*
   - Teaser Badge: `The Event is called V_____ — Reveal Coming Soon ✦`
   - Headline: *"A NEW CHAPTER. A NEW CONNECTION. A WEEK TO REMEMBER."*
   - Subtitle: *"Get ready for a week filled with friendship, challenges, fun and unforgettable memories."*
   - CTA Buttons: **EXPLORE THE WEEK** (smooth scroll) & **COUNT ME IN** (interactive celebration RSVP modal).

2. **TWO Dynamic Real-Time Countdowns (Independent):**
   - **Countdown 1: FRESHER'S WEEK (Highest Visual Priority):**
     - Target: `11 November 2026, 09:30 AM IST (Asia/Kolkata)`
     - Displays: Days, Hours, Minutes, Seconds with live pulse.
     - Headline: *"THE COUNTDOWN TO THE WEEK BEGINS!"*
     - Reaches zero state: *"IT'S TIME! LET THE CELEBRATION BEGIN!"*
   - **Countdown 2: THE GRAND FRESHERS' PARTY:**
     - Target: `16 November 2026, 05:00 PM IST (Asia/Kolkata)`
     - Displays: Days, Hours, Minutes, Seconds with party-themed styling.

3. **6-Day Event Lineup & Interactive Modals:**
   - Staggered timeline and individual cards for all 6 days:
     1. **11 Nov** – *Breaking the Ice*
     2. **12 Nov** – *Pixel Party*
     3. **13 Nov** – *Filmy Frenzy*
     4. **14 Nov** – *Double Trouble*
     5. **15 Nov** – *The Great Campus Chaos*
     6. **16 Nov** – *Mind Games & Mayhem*
   - **Interactive Modal on Card Tap:**
     - Event name, full date & day of week.
     - Theme & tagline.
     - Timing & Venue: *"To Be Announced Soon"*.
     - Dress Code: *"As you wish to come"*.
     - Rules & Instructions: *"Will be told before the event"*.
     - Motivational Quote for participation.
     - "Add to Calendar" (.ics export).

4. **Haptic Vibration & Web Audio Sound System:**
   - **Vibration API:** Subtle haptic feedback when tapping cards, opening modals, and pressing CTAs.
   - **Web Audio Sound Effects:** Synthesizes clicks, modal tones, and celebration arpeggios on the fly (permanently enabled, zero external audio asset dependencies).

5. **Special Freshers' Party Section:**
   - Party date, timing, venue, and highlights bento grid: Red Carpet, Crowning of Mr. & Ms. Fresher 2026, Live DJ Beats, and Celebratory Dinner.

6. **About Section:**
   - *"MORE THAN JUST A WEEK. IT'S THE BEGINNING OF SOMETHING BIG."*
   - 4 Core Pillars: Meeting new people, building friendships, exploring IT community, feeling at home.
   - 100% Zero-Ragging and mentorship assurance.

7. **Senior Helpdesk & Organising Committee:**
   - 2nd Year IT Senior Coordinators:
     - **Sourav Singh** (+91 62677 44177)
     - **Prayansh Sharma** (+91 91748 12759)
     - **Ankita Choure** (+91 74704 08390)
     - **Meeraj Ansari** (+91 78796 83529)
     - **Kunal Kant Gupta** (+91 74896 80154)
   - One-tap WhatsApp chat links, direct phone calling links, and Instagram profile links.
   - Official Footer: *"MADE WITH ❤️ BY THE IT BRANCH"*.

---

## 📁 Project Structure

```
├── .gitignore
├── netlify.toml                    # Netlify root build configuration
├── README.md
└── frontend/
    ├── netlify.toml                # Netlify frontend build configuration
    ├── package.json
    ├── vite.config.ts              # Vite + Tailwind v4 plugin
    ├── public/
    │   └── _redirects              # Netlify SPA routing fallback
    └── src/
        ├── App.tsx                 # Core page composition
        ├── index.css               # Tailwind CSS v4 + custom glass utilities
        ├── data/
        │   └── eventConfig.ts      # Centralized event & coordinator data
        ├── utils/
        │   └── feedback.ts         # Audio synthesis & haptic vibration
        └── components/
            ├── AboutSection.tsx        # 4 Pillars & Zero-Ragging banner
            ├── AnimatedBackground.tsx  # Dynamic canvas particles & grid
            ├── BottomDock.tsx          # Mobile floating 1-thumb nav
            ├── ContactSection.tsx      # Senior Helpdesk & WhatsApp links
            ├── CountdownsSection.tsx   # Two independent real-time timers
            ├── EventCard.tsx           # Glassmorphic event card
            ├── EventModal.tsx          # Animated event detail popup
            ├── EventTimeline.tsx       # 6-day interactive timeline
            ├── Footer.tsx              # "MADE WITH ❤️ BY THE IT BRANCH"
            ├── FreshersPartySection.tsx # Grand party bento & hype
            ├── Hero.tsx                # Hero section & V_____ teaser
            ├── Navbar.tsx              # Sticky glass navbar & share
            └── RSVPModal.tsx           # Celebration modal & ICS export
```

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Animations & Effects:** Web Audio API, Vibration API, Canvas Confetti, HTML5 Canvas
- **Deployment:** Netlify Ready (`netlify.toml` + `_redirects`)

---

## 🚀 Local Development

```bash
cd frontend
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

---

*Made with ❤️ by the IT Branch, Chattisgarh Institute of Technology (CIT), Bilaspur.*
