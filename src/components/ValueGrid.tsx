import React from 'react';
import { VALUE_CARDS } from '../data/mockData';

export const ValueGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-12 gap-6 mb-24">
      {VALUE_CARDS.map((card, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden p-8 rounded-lg ${
            card.image ? 'col-span-12 md:col-span-8 bg-obsidian-lighter/20 border border-alabaster/10 aspect-[2/1] md:aspect-auto' : 
            card.percentage ? 'col-span-12 md:col-span-4 bg-obsidian-lighter/40 flex flex-col justify-between' :
            'col-span-12 md:col-span-4 bg-obsidian-lighter/20 border-l-4 border-neon-violet'
          }`}
        >
          {card.image && (
            <div className="absolute top-0 right-0 z-0 w-1/2 h-full opacity-20 hover:opacity-30 transition-opacity">
              <img src={card.image} alt={card.title} className="object-cover w-full h-full" />
            </div>
          )}
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              {card.module && <span className="block mb-4 font-mono text-xs text-neon-violet/70">{card.module}</span>}
              {card.icon && <span className="block mb-4 text-4xl material-symbols-outlined text-neon-violet">{card.icon}</span>}
              <h3 className="mb-4 text-3xl font-bold text-alabaster">{card.title}</h3>
              <p className="mb-6 max-w-md text-alabaster/60 text-sm">
                {card.description}
              </p>
            </div>

            {card.metrics && (
              <div className="flex gap-4 items-center font-mono text-xs text-neon-cyan">
                {card.metrics.map(m => (
                  <span key={m} className="px-3 py-2 bg-neon-cyan/10 rounded border border-neon-cyan/20">{m}</span>
                ))}
              </div>
            )}

            {card.percentage && (
              <div className="mt-8">
                <div className="mb-2 text-5xl font-extrabold text-neon-cyan">{card.percentage}%</div>
                <div className="w-full h-1 bg-obsidian-lighter">
                  <div className="h-full bg-neon-cyan" style={{ width: `${card.percentage}%` }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
