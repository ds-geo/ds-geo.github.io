'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 py-6 text-center">
        <h2 className="font-londrina text-5xl sm:text-6xl text-purple-950 lowercase">
          how'd i get here?
        </h2>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 lowercase text-purple-950 text-base sm:text-lg md:text-xl text-center">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mb-6">
          <Image
            src="/about/about2.png"
            alt="About image 1"
            width={350}
            height={350}
            className="rounded-xl object-cover border-4 border-purple-950 w-full sm:w-[300px] h-auto"
          />
          <Image
            src="/about/about1.png"
            alt="About image 2"
            width={350}
            height={350}
            className="rounded-xl object-cover border-4 border-purple-950 w-full sm:w-[300px] h-auto"
          />
          <Image
            src="/about/about3.png"
            alt="About image 3"
            width={350}
            height={350}
            className="rounded-xl object-cover border-4 border-purple-950 w-full sm:w-[300px] h-auto"
          />
        </div>

        <p className="mb-4">
          growing up in bangalore, singapore, and the bay area — each buzzing with innovation and tech energy — i couldn’t help but get hooked on problem-solving and building things that actually matter. whether it was bangalore’s fast-moving tech scene, singapore’s slick digital infrastructure, or silicon valley’s nonstop startup vibe, i was inspired by everyone around me using technology to shape the future{' '}
          <span role="img" aria-label="globe">🌍</span>.
        </p>

        <p className="mb-4">
          that curiosity naturally pulled me toward computer science. it felt like the perfect way to mix creativity, logic, and real-world impact all in one place. at cornell, i’ve chased that passion by diving into hands-on projects like working with the mars rover team{' '}
          <span role="img" aria-label="rocket">🚀</span>, doing robotics research at the emprisE lab, and developing interactive visualization dashboards during my internship at lawrence livermore national lab 🔬.
        </p>

        <p>
          i’ve also loved giving back by mentoring young girls in coding through women in computing. plus, applying machine learning in a real-world setting during my internship at hipaas inc. really showed me how cs goes beyond just writing code — it’s a powerful tool for exploration, equity, and empowerment{' '}
          <span role="img" aria-label="sparkles">✨</span>.
        </p>
      </section>
    </>
  );
}
