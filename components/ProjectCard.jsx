// components/ProjectCard.jsx
'use client';
import { useState } from 'react';

export default function ProjectCard({ title, date, description, imageSrc, skills, authors }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-purple-200 bg-opacity-60 border-2 border-purple-950 shadow-purple-950/30 shadow-lg rounded-2xl p-4 flex flex-col items-center gap-4">
      <img
        src={imageSrc}
        alt={`${title} preview`}
        className="w-4/5 h-105 rounded-xl border-2 border-purple-950 object-cover"
      />
      {/* Header clickable area */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full max-w-3xl cursor-pointer select-none flex items-center justify-between"
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen);
          }
        }}
      >
        <div>
          <h3 className="text-xl font-bold lowercase text-purple-950">{title}</h3>
          <p className="text-sm text-purple-800 lowercase">{date}</p>
        </div>
        <svg
          className={`w-6 h-6 text-purple-950 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown content */}
      <div
        className={`w-full max-w-3xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-base text-black lowercase mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-950 bg-opacity-30 border border-white text-white text-xs px-3 py-1 rounded-full lowercase"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-xs text-purple-800 lowercase">team: {authors}</p>
      </div>
    </div>
  );
}
