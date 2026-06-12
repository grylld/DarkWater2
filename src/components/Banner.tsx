import { Star } from 'lucide-react';

export function Banner() {
  return (
    <div className="py-12 sm:py-20 border-y border-white/10 overflow-hidden bg-dark-900 border-b border-t">
      <div className="max-w-[100vw] overflow-hidden whitespace-nowrap flex items-center justify-center">
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-semibold flex items-center gap-4 sm:gap-6 md:gap-12 animate-pulse-slow whitespace-nowrap">
          <span>Trace</span>
          <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-lime-500 fill-current shrink-0" />
          <span>Negotiate</span>
          <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-lime-500 fill-current shrink-0" />
          <span>Recover</span>
        </h2>
      </div>
    </div>
  );
}
