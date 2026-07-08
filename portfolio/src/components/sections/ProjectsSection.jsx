import { motion } from 'framer-motion';
import { projects } from '../../data/resume';
import { useScrollReveal, fadeUp, stagger } from '../../hooks/useScrollReveal';

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bento-card group relative overflow-hidden flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-end mb-6 min-h-[32px]">
          {project.badge && (
            <span className="badge !bg-gray-900 !text-white">{project.badge}</span>
          )}
        </div>

        {project.demo && (
          <div className="rounded-2xl overflow-hidden mb-6 border border-gray-200">
            <img
              src={project.demo}
              alt={`${project.title} demo`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        )}

        <h3 className="text-2xl font-medium text-gray-900 mb-4">{project.title}</h3>
        <p className="text-gray-500 leading-relaxed mb-8">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="badge !bg-white !text-gray-600 !border-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-auto">
        {project.github && project.github !== '#' && (
          <a href={project.github} className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
            GitHub →
          </a>
        )}
        {project.live && project.live !== '#' && (
          <a href={project.live} className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="py-32 relative bg-transparent">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={stagger(0.1)}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="mb-16">
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3 block">
            Projects
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
            Selected <span className="font-serif italic text-gray-400">works.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
