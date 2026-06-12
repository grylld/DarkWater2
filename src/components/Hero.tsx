import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BadgeCheck,
  FileCheck2,
  PhoneCall,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import heroImage from '../assets/images/hero_city_dark.jpg';

const recoverySteps = [
  { icon: FileCheck2, label: 'Debtor information verified' },
  { icon: PhoneCall, label: 'Direct negotiation managed' },
  { icon: Scale, label: 'Legal escalation prepared' },
];

const trustMarkers = [
  { value: '20+', label: 'Years industry experience' },
  { value: 'SA', label: 'Nationwide operating force' },
  { value: '0', label: 'Fee if we do not recover' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[720px] overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem] border-b border-lime-500/30 bg-dark-900 text-white shadow-[0_10px_40px_rgba(212,175,55,0.1)]">
      <div className="absolute inset-0 z-0 bg-dark-900">
        <img
          src={heroImage}
          alt="Dark city waters at night"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-dark-900/40 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark-900 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-lime-500/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-5xl flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 border border-white/10 bg-dark-900/80 px-4 py-2 text-xs font-semibold uppercase text-gray-300 backdrop-blur"
        >
          <ShieldCheck className="h-4 w-4 text-lime-500" />
          KZN-Based. Operating Nationwide.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl font-semibold uppercase leading-[0.94] text-white sm:text-6xl lg:text-7xl"
        >
          <span className="block">Recover what is owed.</span>
          <span className="block text-lime-500">Decisively, nationwide.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          Dark Water is a trusted collection specialist for creditors who need
          relentless execution, legal precision, and intelligent negotiation
          in investigative debt recovery matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-lime-500 px-8 py-4 text-sm font-bold uppercase text-dark-900 shadow-[0_8px_20px_rgba(212,175,55,0.3)] transition-colors hover:bg-lime-400">
            Start Recovery Review
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-white/20">
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex w-full max-w-3xl flex-wrap justify-center gap-8 border-t border-white/10 pt-8 sm:gap-16"
        >
          {trustMarkers.map((marker) => (
            <div key={marker.label} className="flex flex-col items-center text-center">
              <div className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {marker.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase text-gray-500">
                {marker.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
