export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
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
  },
];
