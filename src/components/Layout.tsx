'use client';

import React from 'react';
import { Gamepad2, Rocket } from 'lucide-react';
import { MainName } from '@/lib/helper';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    const headings = Array.from(document.querySelectorAll('h2'));
    const element = headings[index];

    if (element) {
      const headerOffset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-400 shrink-0 cursor-pointer hover:opacity-80 transition-opacity" aria-label={`${MainName} Home`}>
            <Gamepad2 className="w-7 h-7" />
            <span className="hidden sm:inline-block">{MainName}</span>
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-1 ml-auto">
            <a
              href="/all_games"
              className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold text-white shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 shrink-0 text-xs sm:text-sm"
            >
              <Rocket className="w-3.5 h-3.5 sm:w-4 h-4 group-hover:animate-pulse" />
              <span>All Games</span>
            </a>
            <a
              href="#introduction"
              onClick={(e) => scrollToSection(e, 0)}
              className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors shrink-0 whitespace-nowrap"
            >
              Introduction
            </a>
            <a
              href="#how-to-play"
              onClick={(e) => scrollToSection(e, 1)}
              className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors shrink-0 whitespace-nowrap"
            >
              How to Play
            </a>
            <a
              href="#tips"
              onClick={(e) => scrollToSection(e, 2)}
              className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors shrink-0 whitespace-nowrap"
            >
              Tips
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, 3)}
              className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors shrink-0 whitespace-nowrap"
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-6 md:py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
          <p>&copy; {new Date().getFullYear()} {MainName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
