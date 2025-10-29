import { motion } from 'framer-motion';
import { Rocket, Users, Shield, Sparkles, CheckCircle, Zap } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Rocket,
    title: 'Smart matching',
    desc: 'We match by skills, goals, and vibe — not just keywords.',
  },
  {
    icon: Users,
    title: 'Signals that matter',
    desc: 'Showcase projects, repos, and proofs. No fluff, just signal.',
  },
  {
    icon: Shield,
    title: 'Safety first',
    desc: 'Mutual opt-ins, transparent profiles, and report tools.',
  },
  {
    icon: Zap,
    title: 'Fast intros',
    desc: 'One tap intros with context so you can start building today.',
  },
];

const steps = [
  { step: '1', title: 'Tell us your stack', copy: 'Skills, interests, and what you want to ship next.' },
  { step: '2', title: 'Get curated matches', copy: 'See makers with complementary skills and shared goals.' },
  { step: '3', title: 'Match and chat', copy: 'Double opt-in. Icebreakers included. Get momentum fast.' },
  { step: '4', title: 'Ship together', copy: 'Build real things. Launch. Collect wins. Repeat.' },
];

export default function Showcase() {
  return (
    <section className="relative bg-zinc-950">
      <div id="how" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Built for ambitious students
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 text-black" style={{ backgroundColor: '#E6FF57' }}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-semibold text-white"
          >
            How it works
          </motion.h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-black" style={{ backgroundColor: '#E6FF57' }}>
                  <span className="text-sm font-bold">{s.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white">{s.title}</h4>
                <p className="mt-1 text-sm text-zinc-300">{s.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <StatsStrip />
        <WaitlistCard />
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-4"
    >
      {[
        { label: 'Students', value: '500+' },
        { label: 'Colleges', value: '50+' },
        { label: 'Projects shipped', value: '1,200' },
        { label: 'Avg. intro time', value: '<24h' },
      ].map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          <div className="text-xs uppercase tracking-wide text-zinc-400">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}

function WaitlistCard() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const options = ['Frontend', 'Backend', 'AI/ML', 'Design', 'Product', 'Growth'];

  const toggleSkill = (s) => {
    setSkills((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !name) {
      setError('Please fill your name and email');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div id="waitlist" className="mt-16 grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <CheckCircle className="h-4 w-4" />
          Early access perks
        </div>
        <h3 className="text-2xl font-semibold text-white">Join the Connectiv waitlist</h3>
        <p className="mt-2 text-zinc-300">Be first to try smart collaborator matching, earn referral rewards, and lock in founder perks.</p>
        <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
          <li className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Priority invites</li>
          <li className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Early feature flags</li>
          <li className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Referral leaderboard</li>
        </ul>
      </div>

      <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-8">
        {!submitted ? (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-0 focus:border-white/20"
                placeholder="Alex Builder"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-white/20"
                placeholder="alex@college.edu"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-300">College</label>
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-white/20"
                placeholder="e.g., Stanford"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Skills</label>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleSkill(opt)}
                    className={`rounded-full border px-3 py-1 text-sm ${
                      skills.includes(opt)
                        ? 'border-transparent text-black'
                        : 'border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10'
                    }`}
                    style={skills.includes(opt) ? { backgroundColor: '#E6FF57' } : {}}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold text-black"
              style={{ backgroundColor: '#E6FF57' }}
            >
              {loading ? 'Joining...' : 'Join waitlist'}
            </button>
            <p className="text-center text-xs text-zinc-400">Join 500+ students from 50+ colleges</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="h-12 w-12 rounded-full text-black flex items-center justify-center" style={{ backgroundColor: '#E6FF57' }}>
              <CheckCircle className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold text-white">You're in!</h4>
            <p className="max-w-sm text-zinc-300">We saved your spot. Share with friends to boost your place in line — referrals unlock early features.</p>
            <div className="mt-4 flex gap-2">
              <ShareButton label="Share on X" />
              <ShareButton label="Copy link" />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

function ShareButton({ label }) {
  return (
    <button
      type="button"
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
    >
      {label}
    </button>
  );
}
