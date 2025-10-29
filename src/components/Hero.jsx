import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-black to-zinc-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#E6FF57' }} />
            Matching collaborators, not just profiles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Find your perfect build partner — fast.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-lg text-zinc-300"
          >
            Connectiv pairs ambitious students with complementary skills so projects ship faster and bigger. Like Bumble meets LinkedIn — built for builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-black shadow-2xl"
              style={{ backgroundColor: '#E6FF57' }}
            >
              Join the waitlist
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 grid max-w-lg grid-cols-3 items-center gap-4 opacity-90"
          >
            {['MIT', 'Stanford', 'Berkeley'].map((name) => (
              <div key={name} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-zinc-300">
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
