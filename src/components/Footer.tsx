
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
          © {currentYear} Kabilan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
