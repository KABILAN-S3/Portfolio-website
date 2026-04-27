import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Reach out and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase">Email</p>
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase">Phone</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase">Location</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200 dark:border-white/5 flex gap-6">
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10 transition-all shadow-sm">
                <Github size={24} />
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10 transition-all shadow-sm">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 backdrop-blur-xl shadow-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 focus:border-blue-500/50 transition-all outline-none text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-500/5"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 focus:border-blue-500/50 transition-all outline-none text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-500/5"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 focus:border-blue-500/50 transition-all outline-none text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-500/5"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 focus:border-blue-500/50 transition-all outline-none text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-500/5 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:opacity-90 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>Sending... <Loader2 size={20} className="animate-spin" /></>
                ) : status === 'success' ? (
                  <>Sent Successfully! <CheckCircle2 size={20} /></>
                ) : (
                  <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-2 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

