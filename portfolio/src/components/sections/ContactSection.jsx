import { motion } from 'framer-motion';
import { personal } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="contact" className="py-32 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger(0.1)}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <span className="badge">Available for opportunities</span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-medium text-gray-900 mb-8 tracking-tight">
            Let's build something <span className="font-serif italic text-gray-400">remarkable.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl text-gray-500 max-w-2xl mx-auto mb-16">
            Looking to architect scalable AI systems or collaborate on cutting-edge research? My inbox is always open.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="px-10 py-5 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 duration-300 w-full sm:w-auto"
            >
              Say Hello
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#F9FAFB] text-gray-900 rounded-full font-medium text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 duration-300 w-full sm:w-auto"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-40 pt-8 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-400 font-medium">
            © {new Date().getFullYear()} Alex Khundongbam. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href={personal.github} className="hover:text-gray-900 transition-colors">GitHub</a>
            <a href={personal.linkedin} className="hover:text-gray-900 transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
