import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useMotionValue, useSpring, useTransform, useScroll, useInView, animate } from 'framer-motion';

// Matnni harfma-harf yoki so'zma-so'z chiqarish
export const TextReveal: React.FC<{ children: string; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
  const words = children.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Elementlarni pastdan yuqoriga silliq olib chiqish
export const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Konteyner ichidagi elementlarni ketma-ket chiqarish (Gridlar uchun)
export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};

// 3D Tilt effekti — kursorga ergashadigan suyuq shisha karta
export const TiltCard: React.FC<{ children: React.ReactNode; className?: string; intensity?: number }> = ({ children, className = "", intensity = 8 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(sy, [0, 1], [intensity, -intensity]);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { x.set(0.5); y.set(0.5); };

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        whileHover={{ y: -8, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

// Magnit effekti — tugma kursorga tortiladi
export const Magnetic: React.FC<{ children: React.ReactNode; strength?: number; className?: string }> = ({ children, strength = 0.35, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={`inline-block ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse' || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
};

// Raqamni 0 dan sanab chiqarish
export const CountUp: React.FC<{ to: number; suffix?: string; duration?: number }> = ({ to, suffix = "", duration = 2 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
};

// Bo'lim sarlavhasi — porlovchi belgi + jilolanuvchi gradient
export const SectionHeading: React.FC<{ tag: string; title: string; subtitle?: string; icon?: React.ReactNode }> = ({ tag, title, subtitle, icon }) => (
  <FadeUp className="text-center mb-16 flex flex-col items-center">
    <span className="glass-pill inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-sky-600">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
      </span>
      {icon}
      {tag}
    </span>
    <h2 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight text-slate-900">
      <span className="text-shimmer">{title}</span>
    </h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="h-1 w-28 mt-6 rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 shadow-[0_0_20px_rgba(139,92,246,0.6)] origin-center"
    />
  </FadeUp>
);

// Global effektlar: scroll progress, kursor nuri va shisha kartalardagi yorug'lik
export const GlobalEffects: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const cx = useSpring(-500, { stiffness: 120, damping: 20, mass: 0.5 });
  const cy = useSpring(-500, { stiffness: 120, damping: 20, mass: 0.5 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia('(pointer: fine)').matches);
    let last: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
      const card = (e.target as HTMLElement)?.closest?.('.glass-card') as HTMLElement | null;
      if (last && last !== card) { last.style.removeProperty('--mx'); last.style.removeProperty('--my'); }
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
      last = card;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [cx, cy]);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
      />
      {fine && (
        <motion.div
          aria-hidden
          style={{ left: cx, top: cy }}
          className="pointer-events-none fixed z-0 w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22),rgba(244,114,182,0.12)_40%,transparent_70%)] blur-2xl"
        />
      )}
    </>
  );
};
