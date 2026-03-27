import React from 'react';
import { TERMINAL_LOGS } from '../data/mockData';

export const TerminalSidebar: React.FC = () => {
  return (
    <aside className="hidden sticky top-0 flex-col px-6 py-8 w-80 h-screen border-l bg-obsidian lg:flex border-alabaster/10">
      <div className="mb-8">
        <div className="flex gap-2 items-center mb-1 font-bold text-neon-violet">
          <span className="text-sm material-symbols-outlined">terminal</span>
          <span className="font-mono text-xs tracking-tight uppercase">REASONING_CONSOLE</span>
        </div>
        <div className="font-mono text-[10px] opacity-60 text-alabaster/50">V2.0.4-STABLE</div>
      </div>
      
      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="flex flex-col gap-3 font-mono text-[11px] leading-tight">
          {TERMINAL_LOGS.map((log, index) => (
            log.thought ? (
              <div key={index} className="flex flex-col gap-1 my-2 ml-4 border-l pl-3 border-alabaster/20">
                <span className="text-alabaster/40 text-[10px]">THOUGHT: "{log.thought}"</span>
              </div>
            ) : (
              <div key={index} className={`flex gap-2 ${log.animate ? 'animate-pulse text-neon-cyan' : 'text-alabaster/60'}`}>
                <span className="opacity-50">[{log.time}]</span>
                <span className={log.type === 'violet' ? 'text-neon-violet' : log.type === 'error' ? 'text-red-400' : ''}>
                  {log.message}
                </span>
              </div>
            )
          ))}
        </div>
      </div>

      <div className="flex flex-col pt-6 mt-8 border-t border-alabaster/10">
        {['LOGIC_STREAM', 'MEMORY_MAP', 'BIAS_ANALYSIS', 'NEURAL_PATH'].map((item, index) => (
          <a
            key={item}
            href="#"
            className={`flex items-center gap-3 py-3 px-4 transition-all duration-200 ${
              index === 0 ? 'bg-obsidian-lighter text-neon-cyan border-l-4 border-neon-cyan' : 'text-alabaster/60 hover:bg-obsidian-lighter/50 hover:translate-x-1'
            }`}
          >
            <span className="text-sm material-symbols-outlined">
              {['terminal', 'memory', 'security', 'psychology'][index]}
            </span>
            <span className="font-mono text-xs tracking-tight uppercase">{item}</span>
          </a>
        ))}
      </div>
      
      <button className="py-4 mt-8 w-full text-[10px] font-bold tracking-widest uppercase rounded-sm bg-neon-cyan text-obsidian hover:opacity-90">
        INITIATE_DEBUG
      </button>
    </aside>
  );
};
