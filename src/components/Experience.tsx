import { motion } from 'framer-motion';
import { experience } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Professional <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400"
          >
            My career path as a Software Engineer and lifelong learner.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 border-l border-slate-200 dark:border-white/5 group"
            >
              {/* Dot */}
              <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-blue-500 border border-white dark:border-slate-950 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-blue-500/20 dark:hover:border-white/10 transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-700 dark:text-white px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/5 inline-block">
                      {exp.period}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 font-medium uppercase tracking-widest">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
