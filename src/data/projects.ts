export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Ticket Prices Web Scraper",
    description:
      "An automated ticket aggregation system that scrapes SeatGeek and Ticketmaster to highlight the cheapest event prices across platforms.",
    tech: ["Python", "Flask", "API", "Automation", "Vercel"],
    highlights: [
      "Built an automated aggregation system using Python for SeatGeek and Ticketmaster",
      "Designed a modular backend with structured scraper classes and request parsing",
      "Implemented scheduled scraping using automation scripts for up-to-date pricing",
      "Integrated a frontend interface using JavaScript and HTML/CSS deployed on Vercel",
    ],
  },
  {
    title: "Restaurant Discovery App",
    description:
      "A cross-platform mobile app enabling a swipe-based algorithm for restaurants powered by real-time location.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "API", "LLM"],
    highlights: [
      "Developing a cross-platform mobile app using React Native and Expo Router",
      "Implemented sign-up and gated sign-in flows using Node.js-backed logic",
      "Developed location-aware recommendations using device geolocation and external APIs",
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing engineering projects, skills, and academic experience.",
    tech: ["React", "TypeScript", "CSS", "Vite", "Node.js", "Vercel"],
    highlights: [
      "Built using React, CSS, and TypeScript for a professional engineering showcase",
      "Designed a modular UI using component-based architecture for scalability",
      "Deployed using Vercel and Git-based workflows for continuous updates",
    ],
  },
  {
    title: "8-bit CPU Design",
    description:
      "A custom 8-bit CPU designed and simulated from scratch as part of a computer architecture project.",
    tech: ["VHDL", "Digital Logic", "FSM", "Quartus II"],
    highlights: [
      "Designed core CPU components including the ALU and control logic",
      "Used a finite state machine to manage instruction execution",
      "Tested and validated the design through simulation in Quartus II",
    ],
  },
];
