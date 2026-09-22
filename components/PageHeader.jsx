'use client';

import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, body }) {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 animate-float rounded-full bg-teal-400/10 blur-3xl" />
      <div className="container-x relative z-10 py-14 lg:py-20">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-teal-400"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="h1 mt-4 max-w-3xl text-white"
        >
          {title}
        </motion.h1>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {body}
          </motion.p>
        )}
      </div>
    </section>
  );
}
