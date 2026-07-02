import { motion } from 'framer-motion';
import { personal, heroStats } from '../../data/resume';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[95vh] flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="badge">AI & Data Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-medium tracking-tight text-[#111] mb-8 text-balance"
        >
          Building autonomous <span className="font-serif italic text-gray-400">intelligence</span><br /> for the real world.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personal.tagline} Focused on scalable multi-agent systems, rigorous evaluation, and elegant architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 duration-300"
          >
            Explore Projects
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-sm border border-gray-200 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 duration-300"
          >
            Read my story
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 mt-20 pt-10 border-t border-gray-100"
        >
          {heroStats.map((stat) => {
            const content = (
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-medium text-gray-900 mb-1">{stat.value}</span>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider whitespace-nowrap">{stat.label}</span>
              </div>
            );

            return stat.href ? (
              <a key={stat.label} href={stat.href} className="hover:opacity-60 transition-opacity">
                {content}
              </a>
            ) : (
              <div key={stat.label}>{content}</div>
            );
          })}
        </motion.div>

      </div>

      {/* Super subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50 rounded-full blur-[120px] -z-10 opacity-70" />
    </section>
  );
}
