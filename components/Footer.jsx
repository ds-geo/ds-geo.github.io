// components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full flex justify-center py-6">
      <div className="bg-purple-950 text-white py-4 px-8 rounded-2xl shadow-md flex flex-col items-center gap-2 text-sm w-[95%] max-w-[2000px]">
        <div>© 2025 Damita George 💌 🌈. All rights reserved.</div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/damita-sara-george"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ds-geo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
