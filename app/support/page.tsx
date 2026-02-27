'use client';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen bg-nwa-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/1920/1080?random=16"
          alt="Support Our Work"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-nwa-navy/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <FadeIn>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Make a Difference</div>
            <h1 className="text-5xl md:text-7xl font-light text-nwa-white leading-tight">
              Support Our <span className="font-bold">Work.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-nwa-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8 leading-tight">
                Some children just need <span className="font-bold text-nwa-orange">someone to notice them.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {[
              { amount: '₹1,750', desc: 'One single period specialist lesson targeted for the student’s individual learning needs' },
              { amount: '₹7,500', desc: 'Screen an entire class of 50 children; identify those that need support' },
              { amount: '₹14,000', desc: 'A month of lessons (8 sessions); a child starting to believe they can learn' },
              { amount: '₹42,000', desc: 'A full term: a child’s relationship with learning begins to shift' },
              { amount: '₹1,06,000', desc: 'A child’s full journey. Fully supported. Changed for life.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-nwa-offwhite p-12 rounded-3xl border border-nwa-divider h-full flex flex-col justify-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <span className="text-5xl font-light text-nwa-navy mb-6">{item.amount}</span>
                  <span className="text-lg text-nwa-muted font-light leading-relaxed">{item.desc}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="bg-nwa-navy text-nwa-white p-16 rounded-3xl h-full flex flex-col justify-center">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-gold mb-6">Individual Support</div>
                <p className="text-2xl font-light leading-relaxed mb-8">
                  All donations are eligible for 80G tax exemption.
                </p>
                <p className="text-lg text-white/80 font-light mb-8">
                  To donate, please contact us directly.
                </p>
                <a href="mailto:info@neurowiseacademy.com" className="inline-block bg-nwa-orange text-nwa-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-nwa-orange/90 transition-all text-center">
                  Email Us to Donate
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-nwa-offwhite p-16 rounded-3xl border border-nwa-divider h-full flex flex-col justify-center">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Organisations & CSR</div>
                <h3 className="text-3xl font-light text-nwa-navy mb-8 leading-tight">Partner with us for scale.</h3>
                <p className="text-lg text-nwa-muted font-light leading-relaxed mb-8">
                  If your organisation would like to support a school or multiple schools, we'd love to have a conversation.
                </p>
                <a href="mailto:info@neurowiseacademy.com" className="inline-block bg-nwa-navy text-nwa-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-nwa-navy/90 transition-all text-center">
                  Contact for CSR
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
