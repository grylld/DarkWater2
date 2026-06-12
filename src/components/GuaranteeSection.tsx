import { useState, useEffect } from 'react';
import { CardStack, CardStackItem } from './ui/card-stack';
import noWinNoFeeImg from '../assets/images/no_win_no_fee.png';
import legalPrecisionImg from '../assets/images/legal_precision.jpg';

const guaranteeItems: CardStackItem[] = [
  {
    id: 1,
    title: 'No recovery, no fee',
    description: 'If we are unable to recover your outstanding debts, you will not owe us for the recovery result.',
    imageSrc: noWinNoFeeImg,
  },
  {
    id: 2,
    title: 'Legal precision',
    description: 'Every matter is approached with documented steps, practical escalation planning, and careful creditor protection.',
    imageSrc: legalPrecisionImg,
  },
  {
    id: 3,
    title: 'Court-delay prevention',
    description: 'Our process is designed to save time, reduce unnecessary legal expense, and avoid drawn-out proceedings where possible.',
    imageSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: 4,
    title: 'Intelligent negotiation',
    description: 'We create a structured forum for resolution while staying firm on the creditor outcome that needs to be achieved.',
    imageSrc: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: 5,
    title: 'Stress-free support',
    description: 'Creditors receive a clear process, direct action, and practical updates while we manage the difficult conversations.',
    imageSrc: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: 6,
    title: 'Pricing by contact',
    description: 'Service pricing depends on the matter, scope, and recovery path. Contact Dark Water for a tailored quote.',
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600',
  },
];

function useResponsiveCardWidth() {
  const [cardWidth, setCardWidth] = useState(() => {
    if (typeof window === 'undefined') return 480;
    const vw = window.innerWidth;
    if (vw < 480) return Math.max(260, vw - 48);
    if (vw < 768) return Math.min(420, vw - 48);
    return 540;
  });

  useEffect(() => {
    function onResize() {
      const vw = window.innerWidth;
      if (vw < 480) setCardWidth(Math.max(260, vw - 48));
      else if (vw < 768) setCardWidth(Math.min(420, vw - 48));
      else setCardWidth(540);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return cardWidth;
}

export function GuaranteeSection() {
  const cardWidth = useResponsiveCardWidth();
  const cardHeight = cardWidth < 380 ? 280 : 340;

  return (
    <section id="guarantee" className="scroll-mt-28 py-16 sm:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
              Our <span className="bg-lime-500 text-dark-900 px-3 py-1 rounded-lg">Guarantee</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-sm leading-7 text-gray-400">
              Dark Water stands behind its work with a no-risk recovery approach,
              proven strategies, and a commitment to helping businesses reclaim
              what they are owed.
            </p>
          </div>
          <a href="#contact" className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-dark-900 transition-colors text-sm font-bold tracking-wide w-fit shrink-0">
            Request Pricing
          </a>
        </div>
      </div>

      <div className="w-full relative pt-0 pb-8 sm:py-12 -mt-2 sm:mt-0">
        <CardStack
          items={guaranteeItems}
          initialIndex={0}
          autoAdvance={true}
          intervalMs={3000}
          pauseOnHover={true}
          showDots={true}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          overlap={0.55}
          activeLiftPx={20}
          activeScale={1.05}
          perspectivePx={1000}
        />
      </div>
    </section>
  );
}
