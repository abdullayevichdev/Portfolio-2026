import React from 'react';
import { Sparkles } from 'lucide-react';

const items = [
  'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Python',
  'Telegram Bot API', 'UI/UX Design', 'Figma', 'Photoshop', 'Vercel', 'Liquid Glass',
];

const Marquee: React.FC = () => (
  <section aria-hidden className="py-10 relative z-10">
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track flex w-max gap-4">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="glass-pill shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide text-slate-700"
          >
            <Sparkles size={14} className={i % 3 === 0 ? 'text-sky-500' : i % 3 === 1 ? 'text-violet-500' : 'text-pink-500'} />
            {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Marquee;
