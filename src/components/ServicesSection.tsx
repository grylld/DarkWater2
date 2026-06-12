import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Debt Collection',
    description:
      'Commercial and private debt recovery for unpaid invoices, contractual disputes, repossessions, sale agreement disputes, family financial discord, wills, and divorce settlements.',
  },
  {
    num: '02',
    title: 'Conflict Facilitator',
    description:
      'A structured, confidential resolution process for commercial disagreements, shareholder conflicts, supplier disputes, governance issues, executive conflicts, and divorce agreements.',
  },
  {
    num: '03',
    title: 'Private Investigations',
    description:
      'Strategic investigations for individuals, attorneys, and corporations, including background checks, missing persons, surveillance, fraud, theft, and infidelity matters.',
  },
  {
    num: '04',
    title: 'Tracking and Tracing',
    description:
      'Bank financial searches, criminal searches, cell phone searches, company searches, deed searches, vehicle searches, and lifestyle reports.',
  },
  {
    num: '05',
    title: 'Polygraph Testing',
    description:
      'Testing support for incidents of theft, fraud, dishonesty, and pre-employment screening for high-trust debt recovery and creditor support roles.',
  },
  {
    num: '06',
    title: 'VIP Protection and Chauffeurs',
    description:
      'Specialized armed close protection, threat assessment, secure transportation, advance planning, and executive chauffeur consulting.',
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Floating orb parallax
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['-60px', '60px']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['60px', '-60px']);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="scroll-mt-28 py-16 sm:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Floating parallax orbs */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-lime-500/5 blur-3xl pointer-events-none"
        style={{ y: orb1Y }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-white/3 blur-3xl pointer-events-none"
        style={{ y: orb2Y }}
      />

      {/* Vertical side label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full origin-right -rotate-90 hidden xl:flex items-center">
        <span className="bg-lime-500 text-dark-900 px-4 py-2 text-xs font-bold tracking-widest">
          WHAT WE DO
        </span>
      </div>

      {/* Main container */}
        <div className="bg-dark-800 rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-8 md:p-12 lg:p-16 relative overflow-visible">

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ── Left: Sticky header ── */}
          <div className="lg:w-1/3">
            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-4 sm:mb-6">
                Our{' '}
                <span className="bg-lime-500 text-dark-900 px-3 py-1 rounded-lg">
                  Services
                </span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-6 sm:mb-10">
                Dark Water supports creditors through recovery, dispute
                resolution, investigation, tracing, testing, and secure
                executive services.
              </p>

              {/* Subtle progress indicator */}
              <div className="hidden lg:flex flex-col gap-2">
                {services.map((s) => (
                  <div key={s.num} className="flex items-center gap-3 group">
                    <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-lime-500 transition-colors" />
                    <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors font-mono">
                      {s.num} — {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Card grid ── */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.num}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    delay: (idx % 2) * 0.15,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group bg-dark-900/50 backdrop-blur-sm p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-lime-500/50 hover:bg-white/5 transition-all duration-300 flex flex-col gap-3 sm:gap-4"
                >
                  {/* Number + title row */}
                  <div className="flex items-start justify-start sm:justify-between gap-3 sm:gap-4">
                    <span className="font-mono text-xs text-white/20 pt-1 shrink-0">
                      {service.num}
                    </span>
                    <h3 className="text-lg font-semibold group-hover:text-lime-500 transition-colors duration-300 leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA banner — inside right column */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-6 sm:mt-8 bg-lime-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-dark-900 flex flex-col items-start gap-5 sm:gap-8"
            >
              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl mb-1 sm:mb-2 leading-tight">
                  Ready to recover what's yours?
                </h3>
                <p className="text-dark-900/70 font-medium text-sm sm:text-base">
                  Let's build a transparent recovery plan for your business today.
                </p>
              </div>
              <motion.a
                href="#contact"
                className="shrink-0 bg-dark-900 text-white rounded-full px-8 py-4 font-bold tracking-wide shadow-xl inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Get in touch <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
