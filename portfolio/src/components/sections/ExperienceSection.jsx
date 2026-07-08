import { motion } from 'framer-motion';
import { experience } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

function ExperienceCard({ role }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bento-card group flex flex-col justify-center"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">{role.role}</h3>
          <p className="text-gray-500 mt-2 font-medium">{role.company}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge">{role.type}</span>
          <span className="text-sm text-gray-400 font-medium whitespace-nowrap">{role.period}</span>
        </div>
      </div>

      <ul className="space-y-4">
        {role.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-4 text-gray-600 leading-relaxed text-base">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
            {achievement}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className="py-32 relative bg-transparent">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={stagger(0.1)}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="mb-16">
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3 block">
            Experience
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
            Professional <span className="font-serif italic text-gray-400">journey.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experience.map((role, index) => (
            <ExperienceCard key={role.id} role={role} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
