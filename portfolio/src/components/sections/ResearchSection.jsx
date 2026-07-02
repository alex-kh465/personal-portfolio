import { motion } from 'framer-motion';
import { research } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

function PaperCard({ paper }) {
  const hasLink = Boolean(paper.url);
  const Wrapper = hasLink ? 'a' : 'div';
  const wrapperProps = hasLink ? { href: paper.url, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <motion.div
      variants={fadeUp}
      className="h-full"
    >
      <Wrapper {...wrapperProps} className="block group h-full">
        <div className="bento-card h-full flex flex-col hover:!bg-white hover:!shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400 font-mono text-sm">0{paper.id}</span>
            {paper.publisher && (
              <span className="badge !bg-white !border-gray-200">
                {paper.publisher}
              </span>
            )}
          </div>

          <h3 className="text-xl font-medium text-gray-900 leading-snug mb-4 group-hover:text-[#000] transition-colors">
            {paper.title}
          </h3>

          <p className="text-base text-gray-500 leading-relaxed mb-8 flex-1">
            {paper.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {paper.tags.map((tag) => (
              <span key={tag} className="badge !bg-white !text-gray-500">
                {tag}
              </span>
            ))}
          </div>

          {hasLink ? (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:translate-x-1 transition-transform">
              Read Publication →
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
              Under Publication
            </span>
          )}
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default function ResearchSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="research" className="py-32 relative bg-transparent">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={stagger(0.1)}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="mb-16">
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3 block">
            Research
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 tracking-tight max-w-3xl">
            Pushing the boundaries of <span className="font-serif italic text-gray-400">model robustness.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {research.map((paper, i) => (
            <PaperCard key={paper.id} paper={paper} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
