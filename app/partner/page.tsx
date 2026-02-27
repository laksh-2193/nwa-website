'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Partner() {
  return (
    <div className="flex flex-col min-h-screen bg-nwa-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/1920/1080?random=15"
          alt="Partner With Us"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-nwa-navy/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <FadeIn>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-nwa-gold mb-6">Collaboration</div>
            <h1 className="text-5xl md:text-7xl font-light text-nwa-white leading-tight">
              Partner With <span className="font-bold">Us.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 bg-nwa-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-2xl md:text-3xl font-light text-nwa-navy leading-relaxed mb-12">
              Neurowise Academy Foundation collaborates with CSR teams, philanthropic foundations, NGOs, and educational institutions to strengthen inclusive education across India.
            </p>
            <p className="text-xl text-nwa-muted font-light leading-relaxed">
              We build practical, evidence-informed solutions that support early identification, equip teachers, and empower school communities. Your partnership helps bring accessible learning support to children who might otherwise remain unseen or unsupported.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* We Welcome Partners Who Want To */}
      <section className="py-32 bg-nwa-navy text-nwa-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Opportunities</div>
                <h2 className="text-4xl md:text-5xl font-light mb-12 leading-tight">
                  We welcome partners <span className="font-bold text-nwa-gold">who want to:</span>
                </h2>
                <ul className="space-y-6 text-xl font-light text-white/80">
                  {['Expand support for neurodivergent learners', 'Strengthen inclusive education programs', 'Invest in teacher capacity-building', 'Bring screening and early identification to low-resource schools', 'Co-develop sustainable education interventions'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-nwa-orange mt-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white/5 backdrop-blur-md p-12 rounded-3xl border border-white/10 text-center">
                <p className="text-2xl font-light leading-relaxed mb-12">
                  Your support will enable us to create ecosystems where every child is recognised, understood, and able to thrive.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 bg-nwa-orange text-nwa-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-nwa-orange/90 transition-all">
                  Contact Us to Partner <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-32 bg-nwa-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Our Network</div>
              <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8">Our Partners</h2>
              <p className="text-xl text-nwa-muted font-light max-w-2xl mx-auto">
                We are grateful to the organisations that collaborate with us to advance inclusive education across India.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              { name: 'Wipro Foundation', role: 'Expanding Access to Inclusive Education', desc: 'Wipro supports our mission to bring early identification, screening, and specialist learning support to children who would otherwise have no access to such services. With their support, including introductions to organisations such as the Azim Premji Foundation and Makkala Jagriti, our team is able to work directly with government schools, train teachers, and strengthen inclusive education across underserved communities.' },
              { name: 'Makkala Jagriti', role: 'Community Partner – Teacher Capacity Building & Neurodiversity Training', desc: 'Our partnership with Makkala Jagriti focuses on training their teams of educators across programmes in neurodiversity, including early identification, and learner support. Through this long-term collaboration, we aim to equip their teams with the tools, knowledge, and confidence to recognise, screen, and support learners with diverse needs across the communities they serve. Makkala Jagriti works across 2,500 government schools in 11 districts of Karnataka.' },
              { name: 'Azim Premji Foundation', role: 'Education Partner – Strengthening Government School Support', desc: 'Through our collaboration with the Azim Premji Foundation, our specialists work alongside their government school networks to provide one-to-one learner support and help teachers build inclusive classroom practices. Together, we aim to strengthen early identification and ensure that neurodivergent learners in government schools receive the support they need to thrive.' }
            ].map((partner, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-nwa-white p-12 rounded-3xl shadow-xl border border-nwa-divider">
                  <h3 className="text-3xl font-bold text-nwa-navy mb-2">{partner.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-nwa-orange mb-8">{partner.role}</p>
                  <p className="text-lg text-nwa-muted font-light leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
