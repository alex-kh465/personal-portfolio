import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 15;
    const y = -(e.clientX - rect.left - rect.width / 2) / 15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          boxShadow: hovered
            ? `0 20px 60px ${project.color}30, 0 0 30px ${project.color}15`
            : '0 4px 20px rgba(0,0,0,0.3)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="glass rounded-2xl p-6 h-full flex flex-col border transition-colors duration-300"
        style={{
          borderColor: hovered ? `${project.color}35` : 'rgba(79,142,247,0.08)',
        }}
      >
        {/* Icon + color accent */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: `${project.color}18` }}
          >
            {project.icon}
          </div>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            className="flex items-center gap-2"
          >
            <a
              href={project.github}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/40 hover:text-white"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={project.live}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/40 hover:text-white"
              aria-label="Live demo"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-mono font-medium"
              style={{ background: `${project.color}15`, color: project.color }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="h-px mt-5 origin-left rounded"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(79,142,247,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger(0.1)}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="font-mono text-sm text-electric-blue tracking-widest uppercase mb-3 block">
            03 / Projects
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I've{' '}
            <span className="text-gradient">Engineered</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg max-w-2xl">
            Production-grade AI systems built with real-world constraints — hallucination mitigation, agent reliability, and scalable architecture.
          </motion.p>
          <motion.div variants={fadeUp} className="w-16 h-0.5 mt-6 bg-gradient-to-r from-electric-blue to-violet-600" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
