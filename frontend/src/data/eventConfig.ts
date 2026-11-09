/**
 * CENTRALIZED EVENT CONFIGURATION FILE
 * ====================================
 * Update all event dates, timings, venues, rules, announcements, 
 * party details, and coordinator contacts from this single file.
 */

export interface EventDetail {
  id: number;
  date: string;
  dayOfWeek: string;
  name: string;
  shortTagline: string;
  theme: string;
  dressCode: string;
  reportingTime: string;
  timing: string;
  venue: string;
  description: string;
  rules: string[];
  thingsToBring: string[];
  specialNotes: string;
  imageUrl: string;
  iconType: 'ice' | 'game' | 'film' | 'duo' | 'chaos' | 'mind';
  badgeColor: string;
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  type: 'urgent' | 'update' | 'guideline';
  message: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  year: string;
  phone: string;
  email?: string;
  whatsappLink: string;
  instagram?: string;
  avatarText: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export const EVENT_CONFIG = {
  // Brand & Titles
  department: 'DEPARTMENT OF INFORMATION TECHNOLOGY',
  presents: 'IT BRANCH PRESENTS',
  title: "FRESHER'S WEEK 2026",
  partyTitle: "THE GRAND FRESHERS' PARTY",

  // Event identity — name hidden until reveal
  hiddenEventName: 'V_____',
  
  // Hero Section
  heroHeadline: 'A NEW CHAPTER. A NEW CONNECTION. A WEEK TO REMEMBER.',
  heroSubtitle: 'Get ready for a week filled with friendship, challenges, fun and unforgettable memories.',
  
  // COUNTDOWN 1: FRESHERS' WEEK (Primary Focus)
  // Target: 11 November 2026, 09:30 AM IST
  weekTargetISO: '2026-11-11T09:30:00+05:30',
  weekCountdownHeading: 'THE COUNTDOWN TO THE WEEK BEGINS!',
  weekCountdownSubtitle: 'Your most unforgettable college memories are just around the corner.',

  // COUNTDOWN 2: FRESHERS' PARTY
  // Target: 16 November 2026, 05:00 PM IST
  partyTargetISO: '2026-11-16T17:00:00+05:30',
  partyCountdownHeading: "THE GRAND FRESHERS' PARTY COUNTDOWN",
  partyCountdownSubtitle: 'The grand finale celebration awaits you. Glitz, glamour, DJ and memories.',
  
  // Special Freshers' Party Section Details
  partyDetails: {
    title: "NEON NIGHTS: THE GRAND FRESHERS' PARTY 2026",
    tagline: 'Music • Crowning • Dinner • Unlimited Memories',
    date: '16 November 2026 (Monday)',
    timing: 'To Be Announced Soon',
    reportingTime: 'To Be Announced Soon',
    venue: 'To Be Announced Soon',
    dressCode: 'To Be Announced Soon',
    description: "The monumental climax of Freshers' Week! Step onto the red carpet for an evening of sensational student performances, the prestigious crowning of Mr. & Ms. Fresher 2026, a high-octane DJ celebration with stunning laser visuals, and a lavish celebratory dinner.",
    highlights: [
      'Red Carpet Photo Booths & 360 Video Booth',
      'The Official Crowning of Mr. & Ms. Fresher 2026',
      'Live Music & High-Voltage DJ Beats',
      'Celebratory Batch Dinner & Dessert Spread'
    ]
  },

  // About Section
  aboutHeading: "MORE THAN JUST A WEEK. IT'S THE BEGINNING OF SOMETHING BIG.",
  aboutPillars: [
    {
      title: 'Meet New People',
      desc: 'Step out of your comfort zone and find friends who will share your late-night coding sessions and campus memories.',
      icon: 'users'
    },
    {
      title: 'Build Lifelong Bonds',
      desc: 'Connect with supportive seniors who are ready to mentor, guide, and share honest college insights.',
      icon: 'heart'
    },
    {
      title: 'Explore IT Community',
      desc: 'Discover tech clubs, competitive coding rings, design societies, and cultural initiatives in the IT branch.',
      icon: 'compass'
    },
    {
      title: 'Feel At Home',
      desc: 'Zero ragging, zero awkwardness — pure celebration designed to make this college feel like your second home.',
      icon: 'home'
    }
  ],

  // 6-Day Event Schedule & Modal Details
  events: [
    {
      id: 1,
      date: '11 NOV',
      dayOfWeek: 'Wednesday',
      name: 'Breaking the Ice',
      shortTagline: 'Meet new people, make connections and break the awkward silence.',
      theme: 'Welcome, Mixer Games & Badge Reveals',
      dressCode: 'As you wish to come',
      reportingTime: 'To Be Announced Soon',
      timing: 'To Be Announced Soon',
      venue: 'To Be Announced Soon',
      description: "The official kickoff for Freshers' Week 2026! An energetic orientation and crowd-bonding morning packed with fun icebreaker games, mysterious identity badges, and team challenges designed to make every fresher feel welcomed.",
      rules: ['Will be told before the event'],
      thingsToBring: ['Yourself', 'Your brightest smile and infectious energy'],
      specialNotes: '"The secret of getting ahead is getting started. Take that first step and show the world what you\'re made of!" 🚀',
      imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
      iconType: 'ice' as const,
      badgeColor: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      date: '12 NOV',
      dayOfWeek: 'Thursday',
      name: 'Pixel Party',
      shortTagline: "Bring your game face. It's time for some friendly competition.",
      theme: 'Esports Tournament & Retro Arcade Chaos',
      dressCode: 'As you wish to come',
      reportingTime: 'To Be Announced Soon',
      timing: 'To Be Announced Soon',
      venue: 'To Be Announced Soon',
      description: 'Dive straight into digital adrenaline! Compete in fast-paced mobile esports tournaments, classic retro arcade battles, speed typing shootouts, and tech culture meme guessing rounds.',
      rules: ['Will be told before the event'],
      thingsToBring: ['Yourself', 'Your competitive spirit and charged phone'],
      specialNotes: '"Champions keep playing until they get it right. Level up, play bold, and make every pixel count!" 🎮',
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      iconType: 'game' as const,
      badgeColor: 'from-cyan-500 to-blue-600'
    },
    {
      id: 3,
      date: '13 NOV',
      dayOfWeek: 'Friday',
      name: 'Filmy Frenzy',
      shortTagline: 'Lights, camera, action! Step into a day full of movie madness.',
      theme: 'Cinema, Pop Culture & Red Carpet Extravaganza',
      dressCode: 'As you wish to come',
      reportingTime: 'To Be Announced Soon',
      timing: 'To Be Announced Soon',
      venue: 'To Be Announced Soon',
      description: 'The spotlight is on you! A cinematic carnival celebrating iconic movies, blockbuster dialogues, mimicry face-offs, the chaotic 10-second hook-step challenge, and character runway walks.',
      rules: ['Will be told before the event'],
      thingsToBring: ['Yourself', 'Your biggest personality and energy'],
      specialNotes: '"Life is not a rehearsal. Take the stage, own the spotlight, and let your story be worth watching!" 🎬',
      imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      iconType: 'film' as const,
      badgeColor: 'from-violet-500 to-purple-600'
    },
    {
      id: 4,
      date: '14 NOV',
      dayOfWeek: 'Saturday',
      name: 'Double Trouble',
      shortTagline: 'Team up with your partner and get ready for double the fun.',
      theme: 'Duo Chemistry, Coordination & Teamwork Games',
      dressCode: 'As you wish to come',
      reportingTime: 'To Be Announced Soon',
      timing: 'To Be Announced Soon',
      venue: 'To Be Announced Soon',
      description: 'Double the minds, double the laughs! Team up with a batchmate (or let our seniors pair you up) to tackle synchronized obstacle courses, blindfolded buddy relays, and rapid-fire duo telepathy questions.',
      rules: ['Will be told before the event'],
      thingsToBring: ['Yourself', 'A partner or willingness to find one'],
      specialNotes: '"Alone we can do so little; together we can do so much. Find your partner, sync your hearts, and conquer together!" 🤝',
      imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
      iconType: 'duo' as const,
      badgeColor: 'from-blue-600 to-indigo-600'
    },
    {
      id: 5,
      date: '15 NOV',
      dayOfWeek: 'Sunday',
      name: 'The Great Campus Chaos',
      shortTagline: 'Explore, discover and take on the ultimate campus challenge.',
      theme: 'Campus-Wide Scavenger Hunt & Mystery Quest',
      dressCode: 'As you wish to come',
      reportingTime: 'To Be Announced Soon',
      timing: 'To Be Announced Soon',
      venue: 'To Be Announced Soon',
      description: "The ultimate campus exploration adventure! Solve cryptic clues hidden around campus landmarks, uncover concealed puzzle pieces, interact with undercover senior agents, and sprint to claim the winner's trophy.",
      rules: ['Will be told before the event'],
      thingsToBring: ['Yourself', 'Your curiosity and energy'],
      specialNotes: '"Adventure is not outside; it\'s within. Explore every corner, crack every clue, and claim your victory!" 🧭',
      imageUrl: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=800&q=80',
      iconType: 'chaos' as const,
      badgeColor: 'from-amber-500 to-orange-600'
    },
    {
      id: 6,
      date: '16 NOV',
      dayOfWeek: 'Monday',
      name: 'Mind Games & Mayhem',
      shortTagline: 'Put your brain to the test. Expect twists, puzzles and surprises.',
      theme: 'Cryptic Ciphers, Speed Chess & Finale Climax',
      dressCode: 'As you wish to come',
      reportingTime: 'To Be Announced Soon',
      timing: 'To Be Announced Soon',
      venue: 'To Be Announced Soon',
      description: "Test your intellect under pressure! Speed chess duels, escape-room cipher puzzles, and rapid-fire logic gauntlets that crown the sharpest minds of the IT batch. Segues directly into the Grand Freshers' Party!",
      rules: ['Will be told before the event'],
      thingsToBring: ['Yourself', 'Your sharpest mind and strategic thinking'],
      specialNotes: '"The mind is not a vessel to be filled, but a fire to be kindled. Ignite your intellect and outsmart them all!" 🧠',
      imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80',
      iconType: 'mind' as const,
      badgeColor: 'from-purple-600 to-pink-600'
    }
  ] as EventDetail[],

  // Announcements / Important Notice Board
  announcements: [
    {
      id: 1,
      title: 'Reporting Desk Opens at 09:30 AM on Day 1',
      date: '10 Nov 2026',
      type: 'urgent' as const,
      message: 'Please arrive at the IT Seminar Hall desk by 09:30 AM to collect your Fresher welcome kit, batch badge, and day pass.'
    },
    {
      id: 2,
      title: 'Sneakers Mandatory for Day 5 (Campus Chaos)',
      date: '08 Nov 2026',
      type: 'guideline' as const,
      message: 'The campus scavenger hunt involves outdoor terrain. Heels or formal shoes are not permitted for safety reasons.'
    },
    {
      id: 3,
      title: 'Mr. & Ms. Fresher Nominations Opening Soon',
      date: '07 Nov 2026',
      type: 'update' as const,
      message: 'Active participation across the 6 days earns you bonus points toward the final title.'
    }
  ] as Announcement[],

  // Memories / Photo Gallery
  gallery: [
    {
      id: 1,
      title: 'Senior Welcome Jam',
      category: 'Celebration',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Pixel Party Arena',
      category: 'Gaming',
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Stage & Spotlight',
      category: 'Performances',
      imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Campus Scavenger Clues',
      category: 'Adventure',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Grand Party Lights',
      category: 'Party Night',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Batch Memories & Hugs',
      category: 'Bonding',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
    }
  ] as GalleryItem[],

  // Senior Helpdesk & Organising Committee (from Excel)
  team: [
    {
      id: 1,
      name: 'Sourav Singh',
      role: 'Senior Coordinator',
      year: '2nd Year IT',
      phone: '+91 62677 44177',
      email: 'souravsingh.rig@gmail.com',
      whatsappLink: 'https://wa.me/916267744177',
      instagram: 'https://www.instagram.com/sourav.xn?psln=MW1pM2F6cHFicG05cg==',
      avatarText: 'SS'
    },
    {
      id: 2,
      name: 'Prayansh Sharma',
      role: 'Senior Coordinator',
      year: '2nd Year IT',
      phone: '+91 91748 12759',
      email: 'prayanshsharmaffking@gmail.com',
      whatsappLink: 'https://wa.me/919174812759',
      instagram: 'https://www.instagram.com/prayanshsharma?vrfl=MTIyNTIzcDl1MWIxbg==',
      avatarText: 'PS'
    },
    {
      id: 3,
      name: 'Ankita Choure',
      role: 'Senior Coordinator',
      year: '2nd Year IT',
      phone: '+91 74704 08390',
      email: 'ankitaa.gec2025@gmail.com',
      whatsappLink: 'https://wa.me/917470408390',
      instagram: 'https://www.instagram.com/ankitachoure_?xtok=eDBmODkyYW0zbXR5',
      avatarText: 'AC'
    },
    {
      id: 4,
      name: 'Meeraj Ansari',
      role: 'Senior Coordinator',
      year: '2nd Year IT',
      phone: '+91 78796 83529',
      whatsappLink: 'https://wa.me/917879683529',
      avatarText: 'MA'
    },
    {
      id: 5,
      name: 'Kunal Kant Gupta',
      role: 'Senior Coordinator',
      year: '2nd Year IT',
      phone: '+91 74896 80154',
      whatsappLink: 'https://wa.me/917489680154',
      instagram: 'https://www.instagram.com/iankunal?obrf=dThndzRnZGlrency',
      avatarText: 'KG'
    }
  ] as TeamMember[],

  footerNote: 'MADE WITH ❤️ BY THE IT BRANCH'
};
