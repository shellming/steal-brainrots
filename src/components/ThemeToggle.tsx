'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-16" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative inline-flex h-9 w-16 items-center rounded-full bg-slate-200 dark:bg-indigo-950/50 border-2 border-slate-300 dark:border-indigo-500/50 transition-all duration-500 p-1 hover:border-slate-400 dark:hover:border-indigo-400 shadow-inner active:scale-95"
      aria-label="Toggle theme"
    >
      <div
        className={`
          flex h-6 w-6 items-center justify-center rounded-full transition-all duration-500 ease-in-out
          ${isDark 
            ? 'translate-x-7 bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)]' 
            : 'translate-x-0 bg-white shadow-md shadow-amber-200/50'
          }
        `}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-indigo-100" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" />
        )}
      </div>
      
      {/* Background Icons for visualization */}
      <Sun className={`absolute left-1.5 h-3.5 w-3.5 transition-opacity duration-300 ${isDark ? 'opacity-40 text-slate-500' : 'opacity-0'}`} />
      <Moon className={`absolute right-1.5 h-3.5 w-3.5 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-40 text-slate-400'}`} />
    </button>
  );
}
