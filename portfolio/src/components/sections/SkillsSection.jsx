import { motion } from 'framer-motion';
import { skills } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

function CategoryCard({ category, skillList }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bento-card bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500"
    >
      <div className="mb-8">
        <h3 className="text-xl font-medium text-gray-900">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill) => (
          <span key={skill} className="badge !bg-gray-50 !border-gray-200 !text-gray-600 hover:!bg-gray-100 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" className="py-32 relative bg-transparent">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={stagger(0.1)}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="mb-16">
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3 block">
            Capabilities
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
            The technical <span className="font-serif italic text-gray-400">arsenal.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], i) => (
            <CategoryCard
              key={category}
              category={category}
              skillList={skillList}
              index={i}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
