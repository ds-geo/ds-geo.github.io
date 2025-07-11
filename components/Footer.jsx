// components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full flex justify-center px-4 py-6">
      <div className="bg-purple-950 text-white py-4 px-6 sm:px-8 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-sm w-full max-w-[2000px]">
        <div className="text-center sm:text-left">
          © 2025 Damita George 💌 🌈. All rights reserved.
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <a
            href="https://www.linkedin.com/in/damita-sara-george"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ds-geo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
