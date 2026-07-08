import { motion } from 'framer-motion';
import { personal } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="py-32 relative bg-transparent">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={stagger(0.1)}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <motion.div 
            variants={fadeUp} 
            className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-white/50"
          >
            <img 
              src="/pic_4.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          
          <div className="pt-2">
            <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3 block">
              About Me
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 tracking-tight max-w-3xl text-balance">
              I engineer <span className="font-serif italic text-gray-400">intelligent systems</span> that scale elegantly.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={fadeUp}
            className="bento-card md:col-span-2"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Background</h3>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              {personal.about}
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="flex flex-col min-w-0">
                <span className="text-3xl font-medium text-gray-900 mb-1">8.45</span>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">CGPA (Rank 1)</span>
              </div>
              <div className="flex flex-col min-w-0 border-l border-gray-200 pl-4 sm:pl-8">
                <span className="text-3xl font-medium text-gray-900 mb-1">5+</span>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Industrial Products Deployed</span>
              </div>
              <div className="flex flex-col min-w-0 border-l border-gray-200 pl-4 sm:pl-8">
                <span className="text-3xl font-medium text-gray-900 mb-1">2024</span>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Since</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bento-card flex flex-col justify-between !bg-gray-900 text-white shadow-2xl"
          >
            <div>
              <h3 className="text-xl font-semibold mb-8 text-white">Focus Areas</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-gray-500 mt-0.5 font-mono text-sm">01</span>
                  <p className="text-base text-gray-300 font-medium">Multi-Agent Orchestration</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gray-500 mt-0.5 font-mono text-sm">02</span>
                  <p className="text-base text-gray-300 font-medium">Evaluation & Guardrails</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gray-500 mt-0.5 font-mono text-sm">03</span>
                  <p className="text-base text-gray-300 font-medium">Scalable AI Microservices</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gray-500 mt-0.5 font-mono text-sm">04</span>
                  <p className="text-base text-gray-300 font-medium">RAG & Vector Databases</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
