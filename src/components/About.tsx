import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32 transition-colors duration-300 transform -skew-y-3 mt-10 z-10 relative shadow-2xl">
      <div className="section-container transform skew-y-3">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-950">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p>
                I am a highly skilled Software Engineer with a passion for building production-grade full-stack applications. 
                With over <span className="text-slate-950 font-semibold">1.5 years of experience</span>, I specialize in 
                <span className="text-slate-950 font-semibold"> React 18, TypeScript, Next.js, and Node.js</span>.
              </p>
              <p>
                My expertise lies in developing <span className="text-slate-950 font-semibold">decentralized identity (SSI) platforms</span> 
                and <span className="text-slate-950 font-semibold">ML-powered backend services</span>. I have a proven track record of 
                optimizing critical systems, including reducing document retrieval latency by 45% and sharpening data 
                onboarding efficiency by 60%.
              </p>
              <p>
                My objective is to leverage my skills in full-stack development and AI to build scalable, 
                high-impact solutions that solve real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 bg-slate-50 border-y border-r border-slate-200 border-l-[12px] border-l-blue-500 hover:border-l-blue-400 transition-colors shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
              <p className="text-3xl font-bold text-blue-900 mb-1 relative z-10">1.5+</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold relative z-10">Years Experience</p>
            </div>
            <div className="p-6 bg-slate-50 border-y border-r border-slate-200 border-l-[12px] border-l-blue-500 hover:border-l-blue-400 transition-colors shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
              <p className="text-3xl font-bold text-blue-900 mb-1 relative z-10">10+</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold relative z-10">Productive Projects</p>
            </div>
            <div className="p-6 bg-slate-50 border-y border-r border-slate-200 border-l-[12px] border-l-blue-500 hover:border-l-blue-400 transition-colors shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
              <p className="text-3xl font-bold text-blue-900 mb-1 relative z-10">2</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold relative z-10">Production Platforms</p>
            </div>
            <div className="p-6 bg-slate-50 border-y border-r border-slate-200 border-l-[12px] border-l-blue-500 hover:border-l-blue-400 transition-colors shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
              <p className="text-3xl font-bold text-blue-900 mb-1 relative z-10">60%</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold relative z-10">Processing Speedup</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
