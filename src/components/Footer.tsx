import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-6 items-center px-12 py-12 mt-20 border-t md:flex-row md:justify-between bg-obsidian border-alabaster/10">
      <div className="font-mono text-[10px] opacity-60 text-alabaster/50 uppercase tracking-widest">
        © 2026 NEURAL_CORE_TRANS_AGENT
      </div>
      <div className="flex gap-10">
        {['NEURAL_ARCHITECTURE', 'TRANSPARENCY_REPORT', 'API_RESOURCES'].map(link => (
          <a key={link} href="#" className="font-mono text-[10px] uppercase text-alabaster/60 hover:text-neon-cyan underline decoration-neon-cyan/30">
            {link}
          </a>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-neon-violet"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-obsidian-lighter"></div>
      </div>
    </footer>
  );
};
