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
      "Built an automated ticket aggregation system by scraping SeatGeek and Ticketmaster using Python, resulting in a unified dataset that highlights the cheapest event prices across platforms.",
      "Designed a modular backend using structured scraper classes and request parsing, resulting in scalable data collection for concerts and sports events.",
      "Implemented scheduled scraping using automation scripts, resulting in up-to-date pricing without manual user input.",
      "Integrated a frontend interface using JavaScript and HTML/CSS and Vercel for deployment resulting in an accessible tool for comparing ticket prices in real time.",
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
      "Developed location-aware recommendations using device geolocation and external APIs, delivering nearby restaurants as interactive cards tailored to each user's.",
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing engineering projects, skills, and academic experience.",
    tech: ["React", "TypeScript", "CSS", "Vite", "Node.js", "Vercel"],
    highlights: [
      "Built a responsive personal portfolio website primarily using React, CSS and TypeScript enabling a professional platform that showcases my engineering projects, skills, and academic experience to recruiters.",
      "Designed a modular UI using component-based architecture, props, and state, allowing sections such as projects, contact, and about pages to scale cleanly as content grows.",
      "Deployed and maintained the site using Vercel and Git-based workflows, ensuring a continuously updated, in alignment with industry practices.",
    ],
  },
];
