import { motion } from 'framer-motion';
import { personal } from '../../data/resume';

export default function Navbar() {
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
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#research" className="hover:text-gray-900 transition-colors">Research</a>
        </nav>

        <a 
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors hover:scale-105 active:scale-95 duration-300"
        >
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}
