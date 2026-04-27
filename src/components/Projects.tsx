import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-xl"
            >
              Exhibiting expertise in Full Stack architecture, high-concurrency systems, and high SEO performance.
            </motion.p>
          </div>
          <motion.a
            href="https://github.com/KABILAN-S3"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2 font-semibold"
          >
            View More on GitHub <ExternalLink size={18} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group flex flex-col h-full bg-slate-900 border border-slate-800 overflow-hidden relative rounded-none border-b-[6px] border-b-blue-600 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:border-blue-500/50 transition-colors duration-300 z-10 hover:z-50"
            >
              {/* Geometric floating accent pieces */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 group-hover:scale-150 rounded-bl-[100px] z-0 opacity-10 blur-sm pointer-events-none transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 group-hover:scale-150 rounded-tr-[100px] z-0 opacity-5 blur-sm pointer-events-none transition-transform duration-700" />

              <div className="relative h-48 overflow-hidden z-10 clip-diagonal-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-600/0 transition-colors" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-blue-50 text-blue-600 border border-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    onClick={(e) => project.github === "#" && e.preventDefault()}
                  >
                    <Github size={18} /> Source code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    onClick={(e) => project.live === "#" && e.preventDefault()}
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
