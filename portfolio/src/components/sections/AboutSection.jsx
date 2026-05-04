import { motion } from 'framer-motion';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';
import { personal, education } from '../../data/resume';

const STATS = [
  { value: '4+', label: 'Production AI Systems' },
  { value: '50k+', label: 'Records Analyzed' },
  { value: '100+', label: 'Docs/Day Automated' },
  { value: '95%', label: 'Model Accuracy' },
];

export default function AboutSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger(0.12)}
          className="mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-sm text-electric-blue tracking-widest uppercase mb-3 block"
          >
            01 / About
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building the Future of{' '}
            <span className="text-gradient">Autonomous Intelligence</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-16 h-0.5 bg-gradient-to-r from-electric-blue to-violet-600"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + terminal */}
          <div className="space-y-8">
            {/* Terminal card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl overflow-hidden"
            >
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-white/30 font-mono">alex@ai-systems ~ profile.py</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <p className="text-electric-blue">
                  <span className="text-white/30">{'>'} </span>
                  <span>alex</span>
                  <span className="text-white/30">.profile()</span>
                </p>
                <div className="pl-4 space-y-1.5 text-white/60 leading-relaxed text-xs">
                  {personal.profile.split('. ').map((sentence, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                    >
                      {sentence.trim()}{sentence.endsWith('.') ? '' : '.'}
                    </motion.p>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="text-green-400 mt-4"
                >
                  <span className="text-white/30">{'>'} </span>
                  <span className="animate-pulse">_</span>
                </motion.p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white/80 mb-4 flex items-center gap-2">
                <span className="text-electric-blue">◆</span> Education
              </h3>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="glass rounded-xl p-4 flex gap-4 items-start"
                >
                  <div
                    className="w-1 rounded-full flex-shrink-0 mt-1"
                    style={{
                      height: '100%',
                      minHeight: '40px',
                      background: i === 0 ? '#4F8EF7' : '#7C3AED',
                    }}
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{edu.degree}</p>
                    <p className="text-white/50 text-xs mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-white/30 font-mono">{edu.period}</span>
                      {edu.note && (
                        <span className="text-xs text-gradient-gold font-semibold">{edu.note}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-6 text-center group"
                  style={{
                    boxShadow: '0 0 0 0 rgba(79,142,247,0)',
                    transition: 'box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(79,142,247,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 0 rgba(79,142,247,0)';
                  }}
                >
                  <div className="text-4xl font-black text-gradient mb-2">{stat.value}</div>
                  <div className="text-xs text-white/40 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Core strengths */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-5">
                Core Strengths
              </h3>
              {[
                { label: 'Multi-Agent Architecture', pct: 95, color: '#4F8EF7' },
                { label: 'RAG Pipeline Design', pct: 92, color: '#7C3AED' },
                { label: 'LLM Production Systems', pct: 90, color: '#22D3EE' },
                { label: 'MLOps & Observability', pct: 85, color: '#C9A84C' },
              ].map((skill, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs text-white/60">{skill.label}</span>
                    <span className="text-xs font-mono" style={{ color: skill.color }}>{skill.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
