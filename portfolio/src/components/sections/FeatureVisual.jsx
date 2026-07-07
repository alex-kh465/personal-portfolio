import { motion } from 'framer-motion';
import { useScrollReveal, fadeUp } from '../../hooks/useScrollReveal';

export default function FeatureVisual() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden">
      <img
        src="/autonomy-feature.jpg"
        alt="Autonomous robotic arm retrieving items in an automated storage system"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16"
      >
        <span className="text-sm font-semibold text-white/70 tracking-widest uppercase mb-3 block">
          Autonomous Systems
        </span>
        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight max-w-2xl text-balance">
          I design agentic pipelines and AI agents that reason, decide, and act with minimal human intervention.
        </h2>
      </motion.div>
    </section>
  );
}
