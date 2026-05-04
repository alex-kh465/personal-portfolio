import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

const CATEGORY_META = {
  'LLM & Agentic AI': { color: '#4F8EF7', icon: '🧠' },
  'Agent Evaluation & Safety': { color: '#7C3AED', icon: '🛡️' },
  'MLOps & Deployment': { color: '#22D3EE', icon: '🚀' },
  'Data & Analytics': { color: '#C9A84C', icon: '📊' },
  'Vector Databases': { color: '#F472B6', icon: '🗃️' },
  'Languages & Systems': { color: '#34D399', icon: '⚙️' },
};

function SkillTag({ label, color, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        background: hovered ? `${color}20` : `${color}0d`,
        borderColor: hovered ? `${color}60` : `${color}25`,
        boxShadow: hovered ? `0 0 16px ${color}30` : 'none',
        y: hovered ? -2 : 0,
      }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-200 cursor-default"
      style={{ color }}
    >
      {label}
    </motion.span>
  );
}

function CategoryCard({ category, meta, skillList, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01 }}
      className="glass rounded-2xl p-6 border transition-all duration-300"
      style={{ borderColor: `${meta.color}18` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${meta.color}18` }}
        >
          {meta.icon}
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">{category}</h3>
          <p className="text-xs text-white/30 font-mono mt-0.5">{skillList.length} skills</p>
        </div>
        <div
          className="ml-auto w-1.5 h-8 rounded-full"
          style={{ background: `linear-gradient(to bottom, ${meta.color}, ${meta.color}40)` }}
        />
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, i) => (
          <SkillTag key={skill} label={skill} color={meta.color} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(79,142,247,0.03) 0%, transparent 70%)',
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
            05 / Skills
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{' '}
            <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg max-w-2xl">
            A constellation of tools and frameworks powering production AI systems.
          </motion.p>
          <motion.div variants={fadeUp} className="w-16 h-0.5 mt-6 bg-gradient-to-r from-electric-blue to-violet-600" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], i) => (
            <CategoryCard
              key={category}
              category={category}
              meta={CATEGORY_META[category] || { color: '#4F8EF7', icon: '✦' }}
              skillList={skillList}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
