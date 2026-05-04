import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

function TimelineDot({ color, isActive }) {
  return (
    <div className="relative flex-shrink-0 flex items-start justify-center" style={{ width: 20 }}>
      <motion.div
        animate={{
          boxShadow: isActive
            ? `0 0 0 6px ${color}22, 0 0 20px ${color}44`
            : `0 0 0 2px ${color}44`,
          scale: isActive ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="w-4 h-4 rounded-full border-2 z-10 relative mt-1"
        style={{ borderColor: color, background: isActive ? color : '#0B0F19' }}
      />
    </div>
  );
}

function ExperienceCard({ job, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-6"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center gap-0">
        <TimelineDot color={job.color} isActive={open} />
        {index < experience.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: `linear-gradient(to bottom, ${job.color}44, transparent)`, minHeight: 60 }}
          />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 mb-10">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left"
        >
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="glass rounded-2xl p-6 border transition-all duration-300"
            style={{
              borderColor: open ? `${job.color}40` : 'rgba(79,142,247,0.08)',
              boxShadow: open ? `0 0 30px ${job.color}18` : 'none',
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full font-mono"
                    style={{ background: `${job.color}22`, color: job.color }}
                  >
                    {job.type}
                  </span>
                  <span className="text-xs text-white/30 font-mono">{job.period}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{job.role}</h3>
                <p className="text-sm font-medium mt-0.5" style={{ color: job.color }}>
                  {job.company}
                </p>
                <p className="text-xs text-white/30 mt-0.5">{job.location}</p>
              </div>

              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/30 flex-shrink-0 mt-1"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.div>
            </div>

            {/* Achievements */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 pt-5 border-t space-y-3" style={{ borderColor: `${job.color}22` }}>
                    {job.achievements.map((ach, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex gap-3 items-start"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ background: job.color }}
                        />
                        <p className="text-sm text-white/55 leading-relaxed">{ach}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className="py-32 relative">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger(0.1)}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="font-mono text-sm text-electric-blue tracking-widest uppercase mb-3 block">
            02 / Experience
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            System Evolution{' '}
            <span className="text-gradient">Over Time</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-0.5 bg-gradient-to-r from-electric-blue to-violet-600" />
        </motion.div>

        {/* Timeline */}
        <div>
          {experience.map((job, i) => (
            <ExperienceCard key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
