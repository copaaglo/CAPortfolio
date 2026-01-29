export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  isHardware?: boolean;
};

export const projects: Project[] = [
  {
    title: "Ticket Prices Web Scraper",
    description:
      "An automated ticket aggregation system that scrapes SeatGeek and Ticketmaster to highlight the cheapest event prices across platforms.",
    tech: ["Python", "Flask", "API", "Automation", "Vercel"],
    highlights: [
      "Built an automated ticket aggregation system by scraping SeatGeek and Ticketmaster using Python, resulting in a unified dataset that highlights the cheapest event prices across platforms.",
      "Designed a modular backend using structured scraper classes and request parsing, resulting in scalable data collection for concerts and sports events.",
    ],
  },
  {
    title: "Restaurant Discovery App",
    description:
      "A cross-platform mobile app enabling a swipe-based algorithm for restaurants powered by real-time location.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "API", "LLM"],
    highlights: [
      "Developing and finalizing a cross-platform mobile app using React Native, Expo, and Expo Router, enabling a swipe-based algorithm for restaurants powered by the user's real-time location.",
      "Implemented sign-up and gated sign-in flows using TypeScript, JavaScript, and Node.js-backed logic.",
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing engineering projects, skills, and academic experience.",
    tech: ["React", "TypeScript", "CSS", "Vite", "Node.js", "Vercel"],
    highlights: [
      "Built a responsive personal portfolio website primarily using React, CSS and TypeScript enabling a professional platform that showcases my engineering projects, skills, and academic experience to recruiters.",
    ],
  },
  {
    title: "8-bit CPU Design",
    description:
      "A custom 8-bit CPU designed and simulated from scratch as part of a computer architecture project.",
    tech: ["VHDL", "Digital Logic", "FSM", "Quartus II"],
    highlights: [
      "Designed the core CPU components including the ALU and control logic",
      "Used a finite state machine to manage instruction execution",
      "Tested and validated the design through simulation",
    ],
    isHardware: true,
  },
];
