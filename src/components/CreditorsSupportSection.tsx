import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Calculator, FileText, Headphones, ShieldCheck } from 'lucide-react';

const supportCards = [
  {
    icon: Calculator,
    title: 'Remote Bookkeeping Services',
    label: 'Bookkeeper and call centre all in one',
    copy:
      'Our bookkeeping services help companies manage daily financial records with precision, including transaction recording, bank reconciliations, payroll processing, creditors support, and accounts payable or receivable.',
    footer: 'Flat monthly fees based on your company needs.',
  },
  {
    icon: Headphones,
    title: 'Call Centre Services',
    label: 'Debt recovery call centre',
    copy:
      'We focus on helping clients recover outstanding accounts and debt over 30 days through direct communication, negotiation, structured repayment plans, debtor tracing, and blacklisting support where appropriate.',
    footer: 'Accuracy delivered. Peace of mind guaranteed.',
  },
  {
    icon: FileText,
    title: 'Certificates and Qualifications',
    label: '15+ years bookkeeping experience',
    copy:
      'The support desk brings refined knowledge across accounting software, bookkeeping processes, and creditor-focused administration.',
    footer: 'Bookkeeping, Comp accounting, and Pastel certificates available.',
    downloads: [
      { label: 'Bookkeeping Certificate', href: '/certs/Bookkeeping cerf_rotated.pdf' },
      { label: 'Comp Accounting Certificate', href: '/certs/Comp accounting certf_rotated.pdf' },
      { label: 'Pastel Certificate', href: '/certs/Pastel certf.pdf' },
      { label: 'CFDC Certificate', href: '/certs/CFDC certificate.pdf' },
    ],
  },
];

export function CreditorsSupportSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -424 : 424; // approx card width + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="support" className="scroll-mt-28 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mb-12 max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-3 border border-white/10 bg-dark-800 px-4 py-2 text-xs font-semibold uppercase text-gray-300">
          <ShieldCheck className="h-4 w-4 text-lime-500" />
          Creditors Support Desk
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-semibold">
          Bookkeeping and recovery calls from one desk.
        </h2>
        <p className="mt-5 text-sm leading-7 text-gray-400">
          The Creditors Support Desk offers debt recovery call centre services
          and remote bookkeeping support for companies that need practical help
          managing records, outstanding accounts, and creditor workflows.
        </p>
      </div>

      <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {supportCards.map(({ icon: Icon, title, label, copy, footer, downloads }) => (
          <div key={title} className="min-w-[300px] md:min-w-[400px] max-w-[500px] bg-dark-800 p-8 md:p-10 rounded-[2rem] border border-white/5 shrink-0 snap-center">
            <div className="flex items-center justify-between gap-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex w-12 h-12 items-center justify-center rounded-xl bg-lime-500 text-dark-900">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{title}</h4>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              </div>
              <div className="text-lime-500 font-serif text-5xl leading-none opacity-50">"</div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{copy}</p>
            {downloads && (
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {downloads.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-lime-500 transition-colors w-full border border-white/10 bg-white/5 px-2.5 py-2 rounded-lg hover:border-lime-500/30 hover:bg-lime-500/10 truncate"
                    title={d.label}
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0 text-lime-500" />
                    <span className="truncate">{d.label}</span>
                  </a>
                ))}
              </div>
            )}
            <p className="mt-6 border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-wide text-lime-500">
              {footer}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-dark-900 transition-colors cursor-pointer" aria-label="Scroll left">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-dark-900 transition-colors cursor-pointer" aria-label="Scroll right">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export function Ticker() {
  const items = [
    'Debt Collection',
    'Conflict Facilitation',
    'Private Investigations',
    'Tracking and Tracing',
    'Polygraph Testing',
    'VIP Protection',
    'Remote Bookkeeping',
    'Call Centre',
  ];

  return (
    <div className="w-full bg-white text-dark-900 overflow-hidden py-4 border-y border-gray-200">
      <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center gap-4 px-6">
            <span className="font-display font-semibold text-lg md:text-xl uppercase tracking-wider">{item}</span>
            <span className="w-2 h-2 rounded-full bg-lime-500"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
