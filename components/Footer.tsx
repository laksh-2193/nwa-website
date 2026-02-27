import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nwa-navy text-nwa-white pt-24 pb-12 border-t-4 border-nwa-gold">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-nwa-white rounded-full flex items-center justify-center text-nwa-navy font-black text-2xl">
                N
              </div>
              <span className="font-bold text-2xl tracking-wide text-nwa-white">
                Neurowise Academy
              </span>
            </div>
            <h3 className="text-3xl font-light text-nwa-gold mb-8 leading-tight">
              Inclusion begins with <br/><span className="font-bold">understanding.</span>
            </h3>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-nwa-white hover:bg-nwa-orange hover:border-nwa-orange transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-nwa-white hover:bg-nwa-orange hover:border-nwa-orange transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'What We Do', 'Partner With Us', 'Support Our Work', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-medium hover:text-nwa-orange transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-8">Contact</h4>
              <ul className="space-y-4 text-sm text-white/80 leading-relaxed">
                <li>10th Floor, RMZ Latitude Commercial</li>
                <li>No. 69/458/69, Bellary Road, Hebbal</li>
                <li>Bengaluru – 560024, India</li>
                <li className="pt-4">
                  <a href="tel:+447435677718" className="hover:text-nwa-orange transition-colors block">+44 7435 677718</a>
                  <a href="mailto:amita@neurowiseacademy.com" className="hover:text-nwa-orange transition-colors block mt-2">amita@neurowiseacademy.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Neurowise Academy Foundation.</p>
          <p>Trust Registration No: GAN-4-00270-2025-26</p>
        </div>
      </div>
    </footer>
  );
}
