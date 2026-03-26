'use client';

import React from 'react';
import { Gamepad2, Rocket, Flame, Sparkles } from 'lucide-react';
import { MainName } from '@/lib/helper';
import { ThemeToggle } from '@/components/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 font-bold text-2xl text-indigo-600 dark:text-indigo-400 shrink-0 cursor-pointer hover:opacity-80 transition-opacity" aria-label={`${MainName} Home`}>
            <Gamepad2 className="w-8 h-8" />
            <span className="hidden sm:inline-block">{MainName}</span>
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-10 overflow-visible no-scrollbar py-2 ml-auto">
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <a
                href="/new_games"
                className="group flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-300 dark:hover:border-indigo-400/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-xl font-semibold text-indigo-700 dark:text-indigo-200 hover:text-indigo-900 dark:hover:text-white shadow-sm dark:shadow-md hover:shadow-indigo-200 dark:hover:shadow-indigo-900/40 hover:scale-105 transition-all duration-300 shrink-0 text-sm sm:text-base backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse text-indigo-500 dark:text-indigo-300" />
                <span>New Games</span>
              </a>
              <a
                href="/hot_games"
                className="group flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-500/30 hover:border-rose-300 dark:hover:border-rose-400/60 hover:bg-rose-100 dark:hover:bg-rose-900/60 rounded-xl font-semibold text-rose-700 dark:text-rose-200 hover:text-rose-900 dark:hover:text-white shadow-sm dark:shadow-md hover:shadow-rose-200 dark:hover:shadow-rose-900/40 hover:scale-105 transition-all duration-300 shrink-0 text-sm sm:text-base backdrop-blur-sm"
              >
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse text-rose-500 dark:text-rose-300" />
                <span>Hot Games</span>
              </a>
              <ThemeToggle />
            </div>
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
      <footer className="border-t border-border bg-background py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
          <p>&copy; {new Date().getFullYear()} {MainName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
