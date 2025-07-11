// pages/projects.js
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <h1 className="text-6xl text-purple-950 font-londrina mb-8 text-center lowercase">
        what have i been working on?
      </h1>
      <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-10">
        i’m a student and many of these projects were created for coursework—so they fall under academic integrity policies and i can't share code publicly. feel free to reach out if you're interested in seeing demos or specific code samples! my{" "}
        <a href="https://github.com/ds-geo" className="underline hover:text-purple-800" target="_blank" rel="noopener noreferrer">
          github
        </a>{" "}
        only contains personal projects.
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* 1 — Portfolio Website (July 2025) */}
        <div className="w-full sm:w-1/2 md:w-2/7">
          <ProjectCard
            title="portfolio website 🌐"
            date="july 2025"
            description="a responsive personal site built with next.js and tailwind css to showcase my projects and experiences. features animated bullets, custom fonts, and a clean pastel layout across dedicated pages for about, resume, and projects."
            imageSrc="/projects/portfolio-pic.png"
            skills={[
              "next.js",
              "tailwind css",
              "component-based design",
              "responsive layout",
              "custom fonts",
            ]}
            authors="damita george"
          />
        </div>

        {/* 2 — Groupchat (Nov 2024) */}
        <div className="w-full sm:w-1/2 md:w-2/7">
          <ProjectCard
            title="groupchat 💬"
            date="nov 2024"
            description="a real-time terminal-based group messaging application built in ocaml using the lwt asynchronous programming library. users connect via ip and port to exchange messages in a shared chatroom, with the server handling broadcasting, joins, and disconnects."
            imageSrc="/projects/gc-ocaml.png"
            skills={[
              "OCaml",
              "Lwt",
              "Unix sockets",
              "concurrency",
              "client-server architecture",
              "error handling",
            ]}
            authors="solo project: damita george"
          />
        </div>

        {/* 3 — Pet Garden Simulator (Dec 2024) */}
        <div className="w-full sm:w-1/2 md:w-2/7">
          <ProjectCard
            title="pet garden simulator 🐾"
            date="dec 2024"
            description="a terminal-based ascii art game where users adopt and care for a digital pet. features daily objectives, an in-game shop, four minigames, and custom pet states for happiness, energy, health, and bond."
            imageSrc="/projects/pet-simulator.png"
            skills={[
              "OCaml",
              "functional design",
              "state management",
              "user interaction",
              "modular programming",
              "terminal-based UI",
            ]}
            authors="damita george, abigail joseph, harshini lakshminarayanan, tanya paul"
          />
        </div>

        {/* 4 — Brushed Motor Controller (2024) */}
        <div className="w-full sm:w-1/2 md:w-2/7">
          <ProjectCard
            title="brushed motor controller (bdc) ⚙️"
            date="2024"
            description="a high-reliability pcb controlling brushed dc motors on cornell mars rover. integrates stm32g474ret6 and can-fd communication. supports remote motor start/stop, adjustable speed, and fault feedback reporting."
            imageSrc="/projects/bdc-board.png"
            skills={[
              "pcb design",
              "embedded systems",
              "stm32 microcontroller",
              "can-fd protocol",
              "motor control",
            ]}
            authors="damita george"
          />
        </div>

        {/* 5 — Battery Monitoring Board (2023–24) */}
        <div className="w-full sm:w-1/2 md:w-2/7">
          <ProjectCard
            title="battery monitoring board 🔋"
            date="2023–24"
            description="a custom-designed pcb for cornell mars rover’s power system with real-time current and voltage monitoring. includes ina232 amplifier and stm32 microcontroller with i2c support. tested as a documented backup for future rover integration."
            imageSrc="/projects/battery-monitoring.png"
            skills={[
              "pcb design",
              "circuit schematic",
              "embedded systems",
              "power monitoring",
              "i2c protocol",
            ]}
            authors="damita george, varija mehta"
          />
        </div>

        {/* 6 — Alien Invaders (Dec 2023) */}
        <div className="w-full sm:w-1/2 md:w-2/7">
          <ProjectCard
            title="alien invaders 👾"
            date="dec 2023"
            description="a retro-style space invaders clone with multiple levels, smooth animations, collision detection, and win/loss states. built in python using the kivy framework with a focus on clean architecture and responsive gameplay."
            imageSrc="/projects/alieninvaders.png"
            skills={[
              "python",
              "kivy",
              "object-oriented design",
              "event-driven programming",
              "gameplay mechanics",
            ]}
            authors="damita george, abigail joseph, prof. walker white"
          />
        </div>

        {/* 7 — Connectn (Nov 2023) */}
        <div className="w-full sm:w-1/2 md:w-2/7">
          <ProjectCard
            title="connectn 🎯"
            date="nov 2023"
            description="a customizable connect-4-inspired game featuring dynamic board sizes, adjustable win conditions, and an optional AI opponent. built in python with a focus on modular design, win detection logic, and clean CLI interaction. supports human vs. human and human vs. computer gameplay."
            imageSrc="/projects/connectn.png"
            skills={[
              "python",
              "object-oriented design",
              "game logic",
              "minimax AI",
              "unit testing",
              "command-line interface",
            ]}
            authors="damita george, abigail joseph, prof. walker white"
          />
        </div>

        {/* 8 — Interactive Image Selector (May 2024) */}
        <div className="w-full sm:w-1/2 md:w-2/7">
          <ProjectCard
            title="interactive image selector 🖼️"
            date="may 2024"
            description="a desktop image editor that enables users to trace and extract subjects using point-to-point or edge-following tools. implemented dijkstra’s algorithm with a custom min-heap priority queue to compute shortest paths over pixel graphs. built a responsive gui with java swing."
            imageSrc="/projects/intelligent-scissors.png"
            skills={[
              "java",
              "dijkstra’s algorithm",
              "swing gui",
              "image processing",
              "graph algorithms",
              "custom data structures",
            ]}
            authors="damita george, abigail joseph, prof. curran muhlberger"
          />
        </div>
      </div>
    </div>
  );
}
