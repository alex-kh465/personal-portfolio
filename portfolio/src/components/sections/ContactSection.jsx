import { useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

const LINKS = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#4F8EF7',
  },
  {
    label: 'GitHub',
    value: 'alex-kh465',
    href: personal.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#7C3AED',
  },
  {
    label: 'LinkedIn',
    value: 'alex-khundongbam',
    href: personal.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#22D3EE',
  },
];

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-32 relative">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 100%, #4F8EF7 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger(0.1)}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="font-mono text-sm text-electric-blue tracking-widest uppercase mb-3 block">
            06 / Contact
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build{' '}
            <span className="text-gradient">Something Intelligent</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg max-w-xl mx-auto">
            Open to AI engineering roles, research collaborations, and ambitious projects that push the frontier.
          </motion.p>
        </motion.div>

        {/* Contact links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 flex flex-col items-center gap-4 border transition-all duration-300 group"
              style={{ borderColor: `${link.color}20` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${link.color}50`;
                e.currentTarget.style.boxShadow = `0 0 30px ${link.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${link.color}20`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: `${link.color}18`, color: link.color }}
              >
                {link.icon}
              </div>
              <div className="text-center">
                <p className="text-xs text-white/30 uppercase tracking-widest font-mono mb-1">{link.label}</p>
                <p className="text-sm text-white/70 font-medium group-hover:text-white transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href={`mailto:${personal.email}`}
            className="btn-primary text-base inline-flex items-center gap-3"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send a Message
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-xs text-white/20 font-mono">
            Designed & Built by{' '}
            <span className="text-white/40">Alex Khundongbam</span>{' '}
            · Powered by React + Vite + Three.js
          </p>
        </motion.div>
      </div>
    </section>
  );
}
