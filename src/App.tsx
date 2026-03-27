import * as React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueGrid } from './components/ValueGrid';
import { TerminalSidebar } from './components/TerminalSidebar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-alabaster selection:bg-neon-cyan/30">
      <Navbar />
      
      {/* Decorative Gradient Line */}
      <div className="bg-gradient-to-r from-obsidian via-alabaster/10 to-obsidian h-[1px] w-full fixed top-[72px] z-50"></div>
      
      <main className="flex pt-[73px]">
        {/* Content Canvas */}
        <div className="flex-1 px-12 py-16 scroll-smooth">
          <Hero />
          <ValueGrid />
          
          {/* Bottom Call to Action Section */}
          <section className="p-12 mb-24 rounded-lg bg-gradient-to-br from-neon-cyan/5 to-neon-violet/5 border border-alabaster/5 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to initiate the protocol?</h2>
            <p className="text-alabaster/60 mb-8 max-w-xl mx-auto">
              Deployment of your bespoke AI agent takes less than 24 hours. Join the transparency revolution.
            </p>
            <button className="px-12 py-4 bg-neon-cyan text-obsidian font-bold rounded-sm tracking-widest uppercase hover:opacity-90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              INITIATE_DEPLOYMENT_V2
            </button>
          </section>
        </div>

        {/* Terminal Sidebar */}
        <TerminalSidebar />
      </main>

      <Footer />

      {/* Mobile Nav Anchor (Simplified for this concept) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-obsidian/90 backdrop-blur-lg border-t border-alabaster/10 flex justify-around py-4 z-50">
        <span className="material-symbols-outlined text-neon-cyan">terminal</span>
        <span className="material-symbols-outlined text-alabaster/40">memory</span>
        <span className="material-symbols-outlined text-alabaster/40">security</span>
      </div>
    </div>
  );
}

export default App;
