"use client";
// app/projects/page.jsx
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  // 1 — Forkcast (May 2025) — most recent
  {
    title: "forkcast 🍴",
    date: "may 2026",
    description:
      "a natural language restaurant recommendation system built on the uber eats dataset. features a hybrid retrieval pipeline combining tf-idf, svd, and sentence embeddings for reranking, with rag-generated explanations grounded in retrieved results. includes a concept panel visualizing latent semantic dimensions, menu-level match explanations, dietary filtering, and typo tolerance.",
    imageSrc: "/projects/forkcast.png",
    skills: [
      "python",
      "react",
      "tf-idf",
      "svd",
      "sentence embeddings",
      "rag",
      "prompt engineering",
      "information retrieval",
      "nlp",
    ],
    authors: "damita george, abigail joseph, kelly zhang",
  },

  // 2 — Volunteer Hub (Oct 2025)
  {
    title: "volunteer hub 🤝",
    date: "oct 2025",
    description:
      "a volunteer management platform built at jp morgan's code for good hackathon for the youth sports science institute. centralizes volunteer opportunity tracking and sign-ups, with user authentication, a gamified leaderboard system, a resource page with google maps integration, and a real-time calendar view.",
    imageSrc: "/projects/volent.png",
    skills: [
      "next.js",
      "react 19",
      "tailwind css",
      "supabase",
      "supabase rest api",
      "google maps api",
      "react-big-calendar",
    ],
    authors:
      "damita george, kevin chen, sai barath, joyce zou, jessica ikino, sujan katari",
  },

  // 3 — Portfolio Website (July 2025)
  {
    title: "portfolio website 🌐",
    date: "july 2025",
    description:
      "a responsive personal site built with next.js and tailwind css to showcase my projects and experiences. features animated bullets, custom fonts, and a clean pastel layout across dedicated pages for about, resume, and projects.",
    imageSrc: "/projects/portfolio-pic.png",
    skills: [
      "next.js",
      "tailwind css",
      "component-based design",
      "responsive layout",
      "custom fonts",
    ],
    authors: "damita george",
  },

  // 4 — Pet Garden Simulator (Dec 2024)
  {
    title: "pet garden simulator 🐾",
    date: "dec 2024",
    description:
      "a terminal-based ascii art game where users adopt and care for a digital pet. features daily objectives, an in-game shop, four minigames, and custom pet states for happiness, energy, health, and bond.",
    imageSrc: "/projects/pet-simulator.png",
    skills: [
      "OCaml",
      "functional design",
      "state management",
      "user interaction",
      "modular programming",
      "terminal-based UI",
    ],
    authors:
      "damita george, abigail joseph, harshini lakshminarayanan, tanya paul",
  },

  // 5 — Groupchat (Nov 2024)
  {
    title: "groupchat 💬",
    date: "nov 2024",
    description:
      "a real-time terminal-based group messaging application built in ocaml using the lwt asynchronous programming library. users connect via ip and port to exchange messages in a shared chatroom, with the server handling broadcasting, joins, and disconnects.",
    imageSrc: "/projects/gc-ocaml.png",
    skills: [
      "OCaml",
      "Lwt",
      "Unix sockets",
      "concurrency",
      "client-server architecture",
      "error handling",
    ],
    authors: "solo project: damita george",
  },

  // 6 — Brushed Motor Controller (2024)
  {
    title: "brushed motor controller (bdc) ⚙️",
    date: "2024",
    description:
      "a high-reliability pcb controlling brushed dc motors on cornell mars rover. integrates stm32g474ret6 and can-fd communication. supports remote motor start/stop, adjustable speed, and fault feedback reporting.",
    imageSrc: "/projects/bdc-board.png",
    skills: [
      "pcb design",
      "embedded systems",
      "stm32 microcontroller",
      "can-fd protocol",
      "motor control",
    ],
    authors: "damita george",
  },

  // 7 — Battery Monitoring Board (2023–24)
  {
    title: "battery monitoring board 🔋",
    date: "2023–24",
    description:
      "a custom-designed pcb for cornell mars rover's power system with real-time current and voltage monitoring. includes ina232 amplifier and stm32 microcontroller with i2c support. tested as a documented backup for future rover integration.",
    imageSrc: "/projects/battery-monitoring.png",
    skills: [
      "pcb design",
      "circuit schematic",
      "embedded systems",
      "power monitoring",
      "i2c protocol",
    ],
    authors: "damita george, varija mehta",
  },

  // 8 — Interactive Image Selector (May 2024)
  {
    title: "interactive image selector 🖼️",
    date: "may 2024",
    description:
      "a desktop image editor that enables users to trace and extract subjects using point-to-point or edge-following tools. implemented dijkstra's algorithm with a custom min-heap priority queue to compute shortest paths over pixel graphs. built a responsive gui with java swing.",
    imageSrc: "/projects/intelligent-scissors.png",
    skills: [
      "java",
      "dijkstra's algorithm",
      "swing gui",
      "image processing",
      "graph algorithms",
      "custom data structures",
    ],
    authors: "damita george, abigail joseph, prof. curran muhlberger",
  },

  // 9 — Alien Invaders (Dec 2023)
  {
    title: "alien invaders 👾",
    date: "dec 2023",
    description:
      "a retro-style space invaders clone with multiple levels, smooth animations, collision detection, and win/loss states. built in python using the kivy framework with a focus on clean architecture and responsive gameplay.",
    imageSrc: "/projects/alieninvaders.png",
    skills: [
      "python",
      "kivy",
      "object-oriented design",
      "event-driven programming",
      "gameplay mechanics",
    ],
    authors: "damita george, abigail joseph, prof. walker white",
  },

  // 10 — Connectn (Nov 2023)
  {
    title: "connectn 🎯",
    date: "nov 2023",
    description:
      "a customizable connect-4-inspired game featuring dynamic board sizes, adjustable win conditions, and an optional AI opponent. built in python with a focus on modular design, win detection logic, and clean CLI interaction. supports human vs. human and human vs. computer gameplay.",
    imageSrc: "/projects/connectn.png",
    skills: [
      "python",
      "object-oriented design",
      "game logic",
      "minimax AI",
      "unit testing",
      "command-line interface",
    ],
    authors: "damita george, abigail joseph, prof. walker white",
  },
];

export default function ProjectsPage() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <div className="py-8 px-4 md:px-8">
      <h1 className="text-6xl text-purple-950 font-londrina mb-8 text-center lowercase">
        what have i been working on?
      </h1>
      <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-10">
        i'm a student and many of these projects were created for coursework—so
        they fall under academic integrity policies and i can't share code
        publicly. feel free to reach out if you're interested in seeing demos
        and specific code samples! check out my{" "}
        <a
          href="https://github.com/ds-geo"
          className="underline hover:text-purple-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{" "}
        here! 
      </p>

      {/* Carousel */}
      <div className="flex items-start justify-center gap-4">
        {/* Left arrow */}
        <button
          onClick={() => scroll(-1)}
          aria-label="scroll left"
          className="mt-4 p-2 rounded-full bg-purple-950 text-white hover:scale-110 transition disabled:opacity-20 disabled:cursor-not-allowed flex-shrink-0"
          disabled={!canScrollLeft}
        >
          <ChevronLeft size={28} strokeWidth={3} />
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <div key={i} className="flex-shrink-0 w-96">
              <ProjectCard
                title={project.title}
                date={project.date}
                description={project.description}
                imageSrc={project.imageSrc}
                skills={project.skills}
                authors={project.authors}
              />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll(1)}
          aria-label="scroll right"
          className="mt-4 p-2 rounded-full bg-purple-950 text-white hover:scale-110 transition disabled:opacity-20 disabled:cursor-not-allowed flex-shrink-0"
          disabled={!canScrollRight}
        >
          <ChevronRight size={28} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}