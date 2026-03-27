import React from 'react';
import { NAV_LINKS } from '../data/mockData';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-12 py-4 shadow-xl bg-obsidian/80 backdrop-blur-xl">
      <div className="font-mono text-xl font-black tracking-widest text-neon-cyan">
        TRANSPARENT_AGENT
      </div>
      <div className="hidden gap-8 items-center md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`font-sans text-sm font-bold uppercase tracking-tighter transition-colors ${
              link.active ? 'border-b-2 border-neon-cyan pb-1 text-neon-cyan' : 'text-alabaster/60 hover:text-neon-cyan'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <span className="p-2 transition-all rounded cursor-pointer material-symbols-outlined text-neon-cyan hover:bg-obsidian-lighter">
          monitor_heart
        </span>
        <span className="p-2 transition-all rounded cursor-pointer material-symbols-outlined text-neon-cyan hover:bg-obsidian-lighter">
          settings
        </span>
      </div>
    </nav>
  );
};
