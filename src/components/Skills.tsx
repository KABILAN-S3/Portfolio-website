import { motion } from 'framer-motion';
import { skills } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            Expertise in modern technologies across the full stack and AI ecosystem.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-6 capitalize text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full" />
                {category}
              </h3>
              <div className="space-y-6">
                {items.map((skill) => (
                  <div key={skill.name} className="group/item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon size={18} className="text-slate-500 group-hover/item:text-blue-400 transition-colors" />
                        <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold tracking-widest">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
