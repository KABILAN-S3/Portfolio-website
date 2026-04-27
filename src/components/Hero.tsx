import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Abstract Geometry Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/20 clip-shape-1 transform -skew-x-12 scale-150" />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[60%] bg-slate-200/50 dark:bg-slate-800/30 clip-diagonal transform rotate-12" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[30%] bg-emerald-500/10 clip-shape-2 transform -skew-y-6" />
      </div>

      <div className="section-container text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 relative z-10 flex justify-center"
        >
          {/* Edgy rounded-box with overlapping cyan layer */}
          <div className="relative w-48 h-48 md:w-60 md:h-60 group">
            {/* The cyan overlapping layer */}
            <div className="absolute top-4 left-4 w-full h-full border-4 border-blue-500 rounded-2xl rounded-br-[80px] z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            {/* The actual image container */}
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl rounded-tl-[80px] border-4 border-white dark:border-slate-800 overflow-hidden shadow-2xl z-10 bg-white dark:bg-slate-900">
              <img 
                src="/profile.jpg" 
                alt="Kabilan S" 
                className="w-full h-full object-cover filter group-hover:scale-105 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Kabilan+S&background=112240&color=fff&size=200';
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase"
        >
          Open to Opportunities
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Hi, I'm <span className="gradient-text">Kabilan</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-8"
        >
          Associate Software Engineer | Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed"
        >
          Specialized in building production-grade full-stack applications with React, Node.js, and AI.
          Expert in decentralized identity platforms and high-performance API development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/10"
          >
            Hire Me <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm"
          >
            Download Resume <Download size={20} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kabilans646@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm"
          >
            Contact <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
