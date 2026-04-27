import { motion } from 'framer-motion';
import { education } from '../constants';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-white transition-colors duration-300 transform -skew-y-3 z-10 relative">
      <div className="section-container transform skew-y-3">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-950"
          >
            Academic <span className="gradient-text">Background</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-8 md:p-12 rounded-none bg-slate-50 border-y border-r border-slate-200 border-l-[12px] border-l-blue-500 relative overflow-hidden group shadow-xl"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-colors" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
              <GraduationCap size={40} />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-slate-950">{education.degree}</h3>
              <p className="text-xl font-medium text-slate-700 mb-6">{education.school}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm shadow-sm">
                  <Calendar size={16} className="text-blue-600" />
                  <span className="text-slate-700 font-medium">{education.period}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm shadow-sm">
                  <Award size={16} className="text-emerald-600" />
                  <span className="text-slate-700 font-medium">{education.grade}</span>
                </div>
              </div>

              <div className="space-y-3 prose prose-invert">
                <p className="text-slate-600 font-medium mb-4">Key Academic Contributions:</p>
                <div className="flex flex-wrap gap-3">
                  {education.achievements.map((item) => (
                    <span key={item} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors hover:text-slate-950 hover:border-blue-500/30 uppercase tracking-tighter shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
