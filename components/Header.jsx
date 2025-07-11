// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  const navItems = ['home', 'projects', 'resume', 'about'];

  return (
    <header className="w-full flex justify-center px-4 py-4">
      <nav className="bg-purple-950 text-white py-3 px-6 sm:px-8 rounded-2xl shadow-md flex flex-wrap justify-center gap-4 sm:gap-10 tracking-widest lowercase w-full max-w-[2000px]">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item === 'home' ? '/' : `/${item}`}
            className="hover:underline text-sm sm:text-base"
          >
            ⋆˙⟡ {item} ⋆˙⟡
          </Link>
        ))}
      </nav>
    </header>
  );
}
