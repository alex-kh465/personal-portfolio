import { motion } from 'framer-motion';
import { Suspense } from 'react';
import NeuralNetwork from '../three/NeuralNetwork';
import { personal } from '../../data/resume';

const TYPED_WORDS = ['AI Engineer', 'LLM Architect', 'Autonomous Systems', 'RAG Specialist'];

function TypewriterText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="font-mono text-sm md:text-base text-electric-cyan mb-2 tracking-widest uppercase"
    >
      <span className="text-white/30">{'>'}</span>{' '}
      <span className="text-gradient">AI Engineer | Autonomous Systems | LLM Architect</span>
    </motion.div>
  );
}

function StatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="flex items-center gap-3 flex-wrap"
    >
      <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-white/60 font-mono">System Online</span>
      </div>
      <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
        <span className="w-2 h-2 rounded-full" style={{ background: '#4F8EF7' }} />
        <span className="text-xs text-white/60 font-mono">Bangalore, India</span>
      </div>
      <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
        <span className="w-2 h-2 rounded-full bg-violet-400" />
        <span className="text-xs text-white/60 font-mono">Open to Opportunities</span>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const scrollToWork = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,142,247,0.07) 0%, transparent 70%)',
      }}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #4F8EF7, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6 z-10">
          <TypewriterText />

          {/* Main name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-none"
          >
            <span className="text-white">Alex</span>
            <br />
            <span className="text-gradient">Khundongbam</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-lg md:text-xl text-white/55 font-light leading-relaxed max-w-xl"
          >
            {personal.tagline}
            <span className="block mt-2 text-base text-white/40">
              Designing production AI systems that think, plan, and execute autonomously.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <motion.button
              onClick={scrollToWork}
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              Explore Work
            </motion.button>
            <motion.button
              onClick={scrollToAbout}
              className="btn-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              About Me
            </motion.button>
          </motion.div>

          {/* Status */}
          <StatusBar />
        </div>

        {/* Right: 3D Neural Network */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[480px] lg:h-[580px]"
        >
          {/* Glow backdrop */}
          <div
            className="absolute inset-0 rounded-3xl opacity-20 blur-2xl"
            style={{
              background: 'radial-gradient(ellipse at center, #4F8EF7 0%, #7C3AED 50%, transparent 80%)',
            }}
          />
          <Suspense fallback={<div className="h-full flex items-center justify-center text-white/20 text-sm">Loading...</div>}>
            <NeuralNetwork />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-electric-blue to-transparent"
        />
      </motion.div>
    </section>
  );
}
