import { motion } from 'framer-motion';
import { research } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

const PUBLISHER_COLORS = {
  'CRC Press': '#E87C3E',
  'Springer Nature': '#C9A84C',
  'IEEE Xplore': '#4F8EF7',
};

function PublisherBadge({ publisher, publisherIcon }) {
  const color = PUBLISHER_COLORS[publisher] || '#888';
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full font-mono"
      style={{ background: `${color}18`, color, border: `1px solid ${color}35` }}
    >
      <span className="text-[10px] font-bold opacity-80">{publisherIcon}</span>
      {publisher}
    </span>
  );
}

function PaperCard({ paper, index }) {
  const hasLink = Boolean(paper.url);

  const CardWrapper = ({ children }) =>
    hasLink ? (
      <a href={paper.url} target="_blank" rel="noopener noreferrer" className="block group relative">
        {children}
      </a>
    ) : (
      <div className="block group relative">{children}</div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <CardWrapper>
        {/* Paper stack effect */}
        <div
          className="absolute inset-0 rounded-2xl translate-x-1.5 translate-y-1.5 opacity-30 glass"
          style={{ borderColor: `${paper.color}20` }}
        />
        <div
          className="absolute inset-0 rounded-2xl translate-x-0.5 translate-y-0.5 opacity-50 glass"
          style={{ borderColor: `${paper.color}25` }}
        />

        {/* Main card */}
        <div
          className="relative glass rounded-2xl p-7 border transition-all duration-300"
          style={{ borderColor: `${paper.color}20` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${paper.color}45`;
            e.currentTarget.style.boxShadow = `0 0 28px ${paper.color}14`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `${paper.color}20`;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Top row: accent bar + publisher badge */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-8 h-1 rounded-full" style={{ background: paper.color }} />
            {paper.publisher && (
              <PublisherBadge publisher={paper.publisher} publisherIcon={paper.publisherIcon} />
            )}
          </div>

          {/* Index number */}
          <div className="text-xs font-mono mb-4 font-semibold" style={{ color: `${paper.color}80` }}>
            PAPER / 0{paper.id}
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-white leading-snug mb-4">
            {paper.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/40 leading-relaxed mb-5">
            {paper.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {paper.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full font-mono"
                style={{ background: `${paper.color}12`, color: `${paper.color}cc` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          {hasLink ? (
            <motion.span
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-xs font-semibold transition-colors"
              style={{ color: paper.color }}
            >
              Read Paper
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.span>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/25 font-mono">
              Link coming soon
            </span>
          )}
        </div>
      </CardWrapper>
    </motion.div>
  );
}

export default function ResearchSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="research" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 70% 50%, rgba(34,211,238,0.03) 0%, transparent 70%)',
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
            04 / Research
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Published{' '}
            <span className="text-gradient">Research</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg max-w-2xl">
            Investigating adversarial robustness, model security, and the dynamics of machine learning systems.
          </motion.p>
          <motion.div variants={fadeUp} className="w-16 h-0.5 mt-6 bg-gradient-to-r from-electric-blue to-violet-600" />
        </motion.div>

        {/* Papers grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {research.map((paper, i) => (
            <PaperCard key={paper.id} paper={paper} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
