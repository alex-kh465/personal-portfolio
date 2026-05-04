import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(11, 15, 25, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(79, 142, 247, 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.03 }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #4F8EF7, #7C3AED)' }}
          >
            AK
          </div>
          <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
            Alex Khundongbam
          </span>
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg"
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'rgba(79, 142, 247, 0.12)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}

          <motion.a
            href="mailto:alexkhundongbam260@gmail.com"
            className="btn-primary ml-4 text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block h-0.5 bg-current rounded"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block h-0.5 bg-current rounded"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block h-0.5 bg-current rounded"
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
