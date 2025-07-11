'use client';


import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const bulletPoints = [
 "💻 diving into a new coding project like it’s a side quest i gotta finish",
 "🏋️‍♀️ gymming or 🏃‍♀️ going for a run to clear my head (and maybe break a sweat)",
 "🍵 reading with a matcha in hand — am i giving up boba for matcha? potentially.",
 "🔧 debugging life, code, and sometimes just my own thoughts (fun fact: i’m a philosophy minor!)",
];


export default function HomePage() {
 const [index, setIndex] = useState(0);


 function handleNext() {
   setIndex((index + 1) % bulletPoints.length);
 }


 function handlePrev() {
   setIndex((index - 1 + bulletPoints.length) % bulletPoints.length);
 }


 return (
   <section className="text-center max-w-3xl mx-auto px-4 py-16 lowercase text-purple-950">
     <div className="relative w-full max-w-[550px] aspect-[11/8] mx-auto mb-8 -mt-12 rounded-3xl overflow-hidden border-4 border-purple-950 shadow-lg">
       <Image
         src="/homeheadshot.png"
         alt="Damita George"
         fill
         className="object-cover"
         priority
       />
     </div>


     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-londrina mb-6">
      Hi! I’m Damita George.
      </h1>


     <p className="text-xl mb-4">
       i’m a junior majoring in computer science at cornell, hoping to use tech to foster inclusivity 💌 and reduce barriers 🌈.
     </p>


     <p className="text-xl mb-4">you can find me:</p>


     <div className="mb-10 flex flex-col sm:flex-row items-center justify-center max-w-[1100px] mx-auto gap-4">
       <button
         onClick={handlePrev}
         className="p-2 rounded-full bg-purple-950 text-white hover:scale-110 transition"
         aria-label="Previous bullet point"
       >
         <ChevronLeft size={28} strokeWidth={3} />
       </button>


       <div className="w-full rounded-xl p-6 flex-grow bg-[rgba(233,213,255,0.6)] shadow-[0_4px_10px_rgba(76,29,149,0.7)] border-2 border-purple-950">
         <div className="text-xl bullet-point min-h-[3.5rem] transition-opacity duration-500 ease-in-out">
           {bulletPoints[index]}
         </div>
       </div>


       <button
         onClick={handleNext}
         className="p-2 rounded-full bg-purple-950 text-white hover:scale-110 transition"
         aria-label="Next bullet point"
       >
         <ChevronRight size={28} strokeWidth={3} />
       </button>
     </div>


     <p className="text-center text-xl mb-4">explore more:</p>


     <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">

       <Link
         href="/about"
         className="px-6 py-3 bg-[rgba(233,213,255,0.6)] shadow-[0_4px_10px_rgba(76,29,149,0.7)] border-2 border-purple-950 rounded-xl text-purple-950 hover:bg-purple-950 hover:text-white transition no-underline"
       >
         Learn more about me
       </Link>
       <Link
         href="/projects"
         className="px-6 py-3 bg-[rgba(233,213,255,0.6)] shadow-[0_4px_10px_rgba(76,29,149,0.7)] border-2 border-purple-950 rounded-xl text-purple-950 hover:bg-purple-950 hover:text-white transition no-underline"
       >
         Projects
       </Link>
       <Link
         href="/resume"
         className="px-6 py-3 bg-[rgba(233,213,255,0.6)] shadow-[0_4px_10px_rgba(76,29,149,0.7)] border-2 border-purple-950 rounded-xl text-purple-950 hover:bg-purple-950 hover:text-white transition no-underline"
       >
         Resume
       </Link>
     </div>
   </section>
 );
}
