import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import executiveImage from '../assets/images/corporate_executive_1779992016659.png';
import darkwaterLogo from '../assets/images/darkwater_logo.png';
import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from './ui/mapcn-marker-popup';

const companyLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Our Services' },
  { href: '#guarantee', label: 'Our Guarantee' },
  { href: '#support', label: 'Support Desk' },
];

const hours = [
  'Mon 09:00 - 17:00',
  'Tue 09:00 - 17:00',
  'Wed 09:00 - 17:00',
  'Thu 09:00 - 17:00',
  'Fri 09:00 - 17:00',
  'Sat Closed',
  'Sun Closed',
];

export function ContactFooter() {
  return (
    <div id="contact" className="scroll-mt-28 pt-16 sm:pt-24 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-dark-800 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 border border-white/5 relative overflow-hidden grid lg:grid-cols-[minmax(0,1fr)_420px] gap-8 sm:gap-12">
          <div className="z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-4 sm:mb-6">
              Drop us a line.
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl text-sm leading-relaxed">
              We love our customers, so feel free to contact Dark Water during
              normal business hours for debt recovery, creditors support,
              investigations, bookkeeping, or call centre inquiries.
            </p>
            
            <form className="grid gap-3 max-w-2xl">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border border-white/20 rounded-full px-6 py-3 w-full focus:outline-none focus:border-lime-500 transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-white/20 rounded-full px-6 py-3 w-full focus:outline-none focus:border-lime-500 transition-colors text-sm"
                />
              </div>
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="bg-transparent border border-white/20 rounded-3xl px-6 py-4 w-full focus:outline-none focus:border-lime-500 transition-colors text-sm resize-none"
              />
              <p className="text-xs text-gray-500">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:darkwaterco@outlook.com" className="inline-flex items-center justify-center gap-3 bg-lime-500 text-dark-900 px-6 py-3 rounded-full font-bold tracking-wide hover:bg-lime-400 transition-colors text-sm">
                  <Send className="h-4 w-4" />
                  Email Dark Water
                </a>
                <a href="https://wa.me/27782517123" className="inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-3 rounded-full font-bold tracking-wide hover:bg-white hover:text-dark-900 transition-colors text-sm">
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </a>
              </div>
            </form>
          </div>
          
          <div className="relative z-10">
            <div className="mb-6 h-64 rounded-[2rem] overflow-hidden border border-white/10 relative shadow-lg">
              <Map
                theme="dark"
                viewport={{ center: [30.7675, -29.7712], zoom: 14, pitch: 45 }}
              >
                <MapMarker longitude={30.7675} latitude={-29.7712}>
                  <MarkerContent />
                  <MarkerPopup closeButton={true}>
                    <div className="text-sm">
                      <strong className="text-white block mb-0.5">Dark Water</strong>
                      <span className="text-gray-400">24 Barron Road, Hillcrest</span>
                    </div>
                  </MarkerPopup>
                </MapMarker>
                <MapControls position="bottom-right" />
              </Map>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-dark-900/70 p-6">
              <a href="tel:+27782517123" className="flex items-start gap-3 text-sm text-gray-300 hover:text-lime-500 transition-colors">
                <Phone className="h-5 w-5 shrink-0 text-lime-500" />
                Cell: 078 251 7123
              </a>
              <a href="mailto:darkwaterco@outlook.com" className="flex items-start gap-3 text-sm text-gray-300 hover:text-lime-500 transition-colors">
                <Mail className="h-5 w-5 shrink-0 text-lime-500" />
                darkwaterco@outlook.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="h-5 w-5 shrink-0 text-lime-500" />
                24 Barron Road, Albany, Hillcrest, South Africa
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-lime-500 text-dark-900 pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 rounded-t-[2rem] sm:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <img
                src={darkwaterLogo}
                alt="Dark Water Collateral Retrieval Services"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-dark-900/70 text-sm max-w-xs mb-8">
              A KZN-based investigative debt recovery and creditors support
              company operating across South Africa.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 tracking-wide">SECTIONS</h4>
            <ul className="space-y-3 text-sm text-dark-900/80">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-dark-900 font-medium">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-6 tracking-wide">CONTACT</h4>
            <ul className="space-y-3 text-sm text-dark-900/80">
              <li><a href="tel:+27782517123" className="hover:text-dark-900 font-medium">078 251 7123</a></li>
              <li><a href="mailto:darkwaterco@outlook.com" className="hover:text-dark-900 font-medium break-all">darkwaterco@outlook.com</a></li>
              <li>24 Barron Road, Albany, Hillcrest</li>
              <li><a href="https://wa.me/27782517123" className="hover:text-dark-900 font-medium">WhatsApp Dark Water</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-6 tracking-wide">HOURS</h4>
            <div className="flex items-start gap-3 text-sm text-dark-900/80">
              <Clock3 className="mt-1 h-4 w-4 shrink-0 text-dark-900" />
              <ul className="space-y-2">
                {hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-dark-900/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-900/70 font-medium">
            Copyright 2026 Dark Water. All rights reserved.
          </p>
          <a href="#home" className="text-sm font-bold uppercase tracking-wide hover:text-dark-900/70">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
