'use client';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-nwa-white">
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-24">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Get in Touch</div>
              <h1 className="text-5xl md:text-7xl font-light text-nwa-navy leading-tight">
                Contact <span className="font-bold">Us.</span>
              </h1>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <FadeIn delay={0.1}>
              <div className="bg-nwa-navy text-nwa-white p-12 md:p-16 rounded-3xl h-full">
                <h2 className="text-3xl font-light mb-12">We'd love to hear from you.</h2>
                <p className="text-xl font-light text-white/80 leading-relaxed mb-16">
                  Whether you're interested in partnering with us, supporting our work, or learning more about our initiatives.
                </p>
                
                <div className="space-y-12 text-lg font-light">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-gold mb-4">Email</p>
                    <a href="mailto:info@neurowiseacademy.com" className="text-2xl hover:text-nwa-orange transition-colors">info@neurowiseacademy.com</a>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-gold mb-4">Phone</p>
                    <a href="tel:+447435677718" className="text-2xl hover:text-nwa-orange transition-colors">+44 7435 677718</a>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-gold mb-4">Address</p>
                    <p className="text-xl leading-relaxed text-white/90">
                      10th Floor, RMZ Latitude Commercial,<br />
                      No. 69/458/69, Bellary Road, Hebbal,<br />
                      Bengaluru – 560024, India
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-nwa-offwhite p-12 md:p-16 rounded-3xl border border-nwa-divider h-full">
                <form className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold tracking-[0.2em] uppercase text-nwa-navy mb-4">Name</label>
                    <input type="text" id="name" className="w-full px-6 py-5 rounded-xl border border-nwa-divider bg-nwa-white focus:outline-none focus:ring-2 focus:ring-nwa-orange transition-all text-lg" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold tracking-[0.2em] uppercase text-nwa-navy mb-4">Email</label>
                    <input type="email" id="email" className="w-full px-6 py-5 rounded-xl border border-nwa-divider bg-nwa-white focus:outline-none focus:ring-2 focus:ring-nwa-orange transition-all text-lg" placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold tracking-[0.2em] uppercase text-nwa-navy mb-4">Message</label>
                    <textarea id="message" rows={6} className="w-full px-6 py-5 rounded-xl border border-nwa-divider bg-nwa-white focus:outline-none focus:ring-2 focus:ring-nwa-orange transition-all text-lg resize-none" placeholder="How can we help?"></textarea>
                  </div>
                  <button type="button" className="w-full bg-nwa-orange text-nwa-white font-bold text-sm uppercase tracking-widest py-6 rounded-xl hover:bg-nwa-orange/90 transition-colors mt-8">
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
