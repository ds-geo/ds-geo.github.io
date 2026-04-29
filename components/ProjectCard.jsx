// components/ProjectCard.jsx
'use client';
import { useState } from 'react';

export default function ProjectCard({
  title,
  date,
  description,
  imageSrc,
  skills,
  authors,
  link,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const cardContent = (
    <div className="bg-purple-200 bg-opacity-60 border-2 border-purple-950 shadow-purple-950/30 shadow-lg rounded-2xl p-4 flex flex-col items-center gap-4">
      <img
        src={imageSrc}
        alt={`${title} preview`}
        className="w-4/5 h-[420px] rounded-xl border-2 border-purple-950 object-cover object-top"
      />

      <div className="w-full flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold lowercase text-purple-950">
            {title}
          </h3>
          <p className="text-sm text-purple-800 lowercase">{date}</p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="text-sm text-white bg-purple-950 hover:bg-purple-800 transition px-4 py-1.5 rounded-full lowercase flex items-center gap-1.5"
        >
          {/* expand icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M16 3h3a2 2 0 0 1 2 2v3" />
            <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* preview card */}
      {cardContent}

      {/* modal = SAME CARD, just larger */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* expanded version of SAME card */}
            <div className="bg-purple-200 bg-opacity-60 border-2 border-purple-950 shadow-2xl rounded-2xl p-6 flex flex-col items-center gap-5">
              
              <img
                src={imageSrc}
                alt={`${title} preview`}
                className="w-4/5 h-[420px] rounded-xl border-2 border-purple-950 object-cover object-top"
              />

              <div className="w-full flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold lowercase text-purple-950">
                    {title}
                  </h3>
                  <p className="text-sm text-purple-800 lowercase">{date}</p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-white bg-purple-950 hover:bg-purple-800 transition px-4 py-1.5 rounded-full lowercase"
                >
                  close
                </button>
              </div>

              <p className="text-purple-950 lowercase text-center">
                {description}
              </p>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-950 underline underline-offset-2 hover:text-purple-700 lowercase"
                >
                  visit project →
                </a>
              )}

              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-950 text-white text-xs px-3 py-1 rounded-full lowercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-xs text-purple-800 lowercase">
                team: {authors}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
