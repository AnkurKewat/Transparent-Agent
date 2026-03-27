import React from 'react';
import { HERO_CONTENT } from '../data/mockData';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-4xl pt-16 mb-24">
      <div className="inline-flex gap-2 items-center px-3 py-1 mb-6 border-l-2 rounded-sm bg-obsidian-lighter border-neon-cyan">
        <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-neon-cyan">
          {HERO_CONTENT.status}
        </span>
      </div>
      <h1 className="mb-8 text-6xl font-extrabold tracking-tighter md:text-8xl bg-gradient-to-br from-alabaster to-alabaster/20 bg-clip-text text-transparent">
        {HERO_CONTENT.title} <br/>
        <span className="text-neon-cyan">{HERO_CONTENT.titleAccent}</span>
      </h1>
      <p className="max-w-2xl mb-10 text-xl leading-relaxed text-alabaster/70">
        {HERO_CONTENT.description}
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all rounded-sm bg-neon-cyan text-obsidian hover:opacity-90">
          {HERO_CONTENT.ctaPrimary}
        </button>
        <button className="px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all border rounded-sm bg-obsidian-lighter/30 backdrop-blur border-alabaster/10 text-alabaster hover:bg-obsidian-lighter/50 font-headline">
          {HERO_CONTENT.ctaSecondary}
        </button>
      </div>
    </section>
  );
};
