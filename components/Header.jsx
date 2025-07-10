// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  const navItems = ['home', 'projects', 'resume', 'about'];

  return (
    <header className="w-full flex justify-center py-6">
      <nav className="bg-purple-950 text-white py-3 px-8 rounded-2xl shadow-md flex space-x-10 tracking-widest lowercase w-[95%] max-w-[2000px] justify-center">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item === 'home' ? '/' : `/${item}`}
            className="hover:underline"
          >
            ⋆˙⟡ {item} ⋆˙⟡
          </Link>
        ))}
      </nav>
    </header>
  );
}
