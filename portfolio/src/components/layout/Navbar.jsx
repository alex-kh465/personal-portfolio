import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../../data/resume';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-lg text-gray-900">
          Alex Khundongbam.
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gray-900 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors hover:scale-105 active:scale-95 duration-300"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="md:hidden relative w-10 h-10 flex items-center justify-center -mr-2"
        >
          <span className="relative w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-gray-900 transition-transform duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-full bg-gray-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-gray-900 transition-transform duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-gray-100/80 bg-white/95 backdrop-blur-xl"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${personal.email}`}
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
