'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Handshake, TrendingUp, Clock, Globe2, ShieldCheck, Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import './globals.css';

export default function Page() {
  const nav = [
    { label: 'About', href: '#about' },
    { label: 'Strategy', href: '#strategy' },
    { label: 'Criteria', href: '#criteria' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const sectors = [
    { icon: <Building2 className="w-6 h-6" />, name: 'Business Services', note: 'Route-based, essential, compliance' },
    { icon: <TrendingUp className="w-6 h-6" />, name: 'Consumer & Brands', note: 'Durable demand, omnichannel' },
    { icon: <ShieldCheck className="w-6 h-6" />, name: 'Industrial & Real Assets', note: 'Light industrial, logistics, environmental' },
    { icon: <Globe2 className="w-6 h-6" />, name: 'Niche Software & Tools', note: 'Workflow systems with loyal users' },
  ];

  const criteria = [
    { label: 'Enterprise Value', value: '$5M–$75M (flexible)' },
    { label: 'EBITDA', value: '$1M–$10M (add-ons smaller)' },
    { label: 'Deal Types', value: 'Control, majority, or significant minority' },
    { label: 'Situations', value: 'Founder liquidity, carve-outs, successions' },
    { label: 'Hold Period', value: 'Long-term / flexible (no fund clock)' },
    { label: 'Geography', value: 'North America (global add-ons case by case)' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white grid place-items-center font-semibold">S</div>
              <span className="font-semibold tracking-tight">Sadigh Capital</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="link">
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-1 btn btn-primary">
                Share an Opportunity <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-gradient-to-b from-white to-neutral-100">
        <div className="container py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="uppercase tracking-widest text-xs text-neutral-500 mb-3">Evergreen Capital • Patient Partners</p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
                Partnering with founders to build enduring, essential businesses
              </h1>
              <p className="text-neutral-700 leading-relaxed max-w-xl">
                We are a family-backed investment firm that acquires and grows lower middle-market businesses.
                Our capital is permanent and our horizon is flexible—we focus on people, process, and long-term value creation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">Introduce a Company</a>
                <a href="#strategy" className="btn btn-outline">Our Approach</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                  alt="Calm modern office interior"
                  width={1600}
                  height={900}
                  className="w-full h-[360px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm">Selective | Hands-on | Values-driven</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight mb-3">Our Approach</h2>
              <p className="text-neutral-700">We move quickly, keep our word, and seek fair outcomes for all stakeholders.</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5"/>Direct, relationship-first sourcing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5"/>Operational support without bureaucracy</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5"/>Aligned incentives and patient timelines</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card">
                  <div className="flex items-center gap-3 mb-3">
                    <Handshake className="w-5 h-5" />
                    <h3 className="font-semibold">Founder-Friendly</h3>
                  </div>
                  <p className="text-sm text-neutral-700">Flexible structures for succession, recapitalizations, and growth. Continuity for teams and customers.</p>
                </div>
                <div className="card">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5" />
                    <h3 className="font-semibold">Patient Horizon</h3>
                  </div>
                  <p className="text-sm text-neutral-700">Hold periods guided by milestones, not fund life. We reinvest to compound value over time.</p>
                </div>
                <div className="card">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5" />
                    <h3 className="font-semibold">Operational Focus</h3>
                  </div>
                  <p className="text-sm text-neutral-700">Lean playbooks: pricing discipline, unit economics, data visibility, and customer experience.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section id="criteria" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Investment Criteria</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {criteria.map((c) => (
              <div key={c.label} className="card">
                <p className="text-xs uppercase tracking-widest text-neutral-500">{c.label}</p>
                <p className="mt-2 text-lg font-medium">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-20 bg-neutral-50">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Focus Sectors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s) => (
              <div key={s.name} className="card">
                <div className="flex items-center gap-3 mb-2">{s.icon}<h3 className="font-semibold">{s.name}</h3></div>
                <p className="text-sm text-neutral-700">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Team</h2>
            <p className="text-sm text-neutral-600">Experienced operators and investors.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <div className="flex items-center gap-4">
                <Image src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop" alt="Team member" width={160} height={160} className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <h3 className="font-semibold">Michael — Managing Partner</h3>
                  <p className="text-sm text-neutral-600">Operations, sourcing, partnerships</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-700">Short bio here. Highlight relevant track record, sectors of interest, and philosophy.</p>
            </div>
            <div className="card">
              <div className="flex items-center gap-4">
                <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop" alt="Team member" width={160} height={160} className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <h3 className="font-semibold">Advisor / Operating Partner</h3>
                  <p className="text-sm text-neutral-600">M&A, finance, and strategy</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-700">Short bio here. Add credibility markers (prior roles, outcomes) without disclosing sensitive data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-4">Share an Opportunity</h2>
              <p className="text-neutral-700 max-w-prose">We welcome conversations with founders, advisors, and owners. If you’re exploring a transition, carve-out, or growth partner, we’ll respond quickly and confidentially.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> opportunities@sadigh.capital</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> (000) 000-0000</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Los Angeles, CA</p>
              </div>
            </div>
            <form className="card grid gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! Replace this with a real form handler later.'); }}>
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                <input id="name" className="rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Jane Founder" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" className="rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="jane@example.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={5} className="rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Tell us about the company, ownership, and next steps…" />
              </div>
              <button type="submit" className="btn btn-primary w-max">Send</button>
              <p className="text-xs text-neutral-500">By submitting, you agree that we may review the information provided solely to evaluate a potential transaction. We never sell personal data.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200 bg-white">
        <div className="container text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Sadigh Capital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="link">Privacy</a>
            <a href="#" className="link">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
