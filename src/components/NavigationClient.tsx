'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationClient() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="hidden md:flex items-center gap-8 text-base font-medium">
      <Link
        href="/"
        className={`relative transition-all duration-300 hover:scale-110 ${
          isActive('/')
            ? 'text-[var(--text-primary)] text-lg font-bold after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-1 after:bg-[var(--text-primary)] after:rounded-full'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        Forside
      </Link>
      <Link
        href="/services"
        className={`relative transition-all duration-300 hover:scale-110 ${
          isActive('/services')
            ? 'text-[var(--text-primary)] text-lg font-bold after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-1 after:bg-[var(--text-primary)] after:rounded-full'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        Services
      </Link>
      <Link
        href="/portfolio"
        className={`relative transition-all duration-300 hover:scale-110 ${
          isActive('/portfolio')
            ? 'text-[var(--text-primary)] text-lg font-bold after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-1 after:bg-[var(--text-primary)] after:rounded-full'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        Portfolio
      </Link>
      <Link
        href="/about"
        className={`relative transition-all duration-300 hover:scale-110 ${
          isActive('/about')
            ? 'text-[var(--text-primary)] text-lg font-bold after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-1 after:bg-[var(--text-primary)] after:rounded-full'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        Om os
      </Link>
      <Link href="/contact" className="ml-2 chrome-button">
        Kontakt
      </Link>
    </div>
  );
}