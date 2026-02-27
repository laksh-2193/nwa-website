'use client';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export default function WhatWeDo() {
  return (
    <div className="flex flex-col min-h-screen bg-nwa-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/1920/1080?random=10"
          alt="What We Do"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-nwa-navy/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <FadeIn>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">What We Do</div>
            <h1 className="text-5xl md:text-7xl font-light text-nwa-white mb-8 leading-tight">
              An ecosystem of <span className="font-bold">informed support.</span>
            </h1>
            <p className="text-xl text-nwa-white/80 font-light leading-relaxed">
              Neurowise Academy Foundation strengthens inclusive education in India through three interconnected pillars of work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          
          {/* Pillar 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/1000?random=11"
                  alt="Early Identification & Student Support"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Pillar 01</div>
                <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8 leading-tight">
                  Early Identification & <span className="font-bold">Student Support</span>
                </h2>
                <p className="text-xl text-nwa-muted font-light leading-relaxed mb-8">
                  We work directly with students in government and low-resource schools to support early recognition of learning differences such as dyslexia, dyscalculia, and other neurodivergent profiles.
                </p>
                <div className="border-l-2 border-nwa-gold pl-6 mb-8">
                  <ul className="space-y-4 text-lg text-nwa-navy font-medium">
                    <li>Classroom observations and screening using context-appropriate tools</li>
                    <li>Identifying learning needs early to prevent long-term academic challenges</li>
                    <li>Providing targeted learning sessions and guidance</li>
                    <li>Creating individualised support pathways in collaboration with teachers</li>
                  </ul>
                </div>
                <p className="text-lg text-nwa-navy font-bold">
                  By recognising learning differences early, we help students gain confidence, access support sooner, and stay engaged in their education.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Pillar 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn delay={0.2}>
              <div className="order-2 lg:order-1">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Pillar 02</div>
                <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8 leading-tight">
                  Teacher Training & <span className="font-bold">Professional Development</span>
                </h2>
                <p className="text-xl text-nwa-muted font-light leading-relaxed mb-8">
                  Teachers play a central role in creating inclusive classrooms. We provide practical, evidence-informed training that equips educators to:
                </p>
                <div className="border-l-2 border-nwa-gold pl-6 mb-8">
                  <ul className="space-y-4 text-lg text-nwa-navy font-medium">
                    <li>Understand neurodiversity and learning differences</li>
                    <li>Identify early signs of Specific Learning Difficulties (SpLD)</li>
                    <li>Use inclusive teaching strategies that support diverse learners</li>
                    <li>Adapt instruction and assessments in line with inclusive practices</li>
                    <li>Strengthen school-level readiness for neurodivergent students</li>
                  </ul>
                </div>
                <p className="text-lg text-nwa-navy font-bold">
                  Our approach focuses on building capacity, not dependency—empowering teachers with skills they can sustain long after training ends.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="order-1 lg:order-2 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/1000?random=12"
                  alt="Teacher Training & Professional Development"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>

          {/* Pillar 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/1000?random=13"
                  alt="Family & Community Engagement"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Pillar 03</div>
                <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8 leading-tight">
                  Family & <span className="font-bold">Community Engagement</span>
                </h2>
                <p className="text-xl text-nwa-muted font-light leading-relaxed mb-8">
                  We work closely with parents, caregivers, and community partners to increase awareness and reduce stigma around learning differences.
                </p>
                <div className="border-l-2 border-nwa-gold pl-6 mb-8">
                  <ul className="space-y-4 text-lg text-nwa-navy font-medium">
                    <li>Workshops for parents to understand and support their children's learning needs</li>
                    <li>Guidance on navigating assessments, interventions, and school processes</li>
                    <li>Collaborations with NGOs and community organisations to widen reach</li>
                    <li>Creating a shared language and understanding around inclusion</li>
                  </ul>
                </div>
                <p className="text-lg text-nwa-navy font-bold">
                  When families and communities are informed, children receive support both inside and outside the classroom.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 bg-nwa-navy text-nwa-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-gold mb-6">The Methodology</div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">Our Approach</h2>
              <p className="text-xl text-nwa-white/80 font-light max-w-2xl mx-auto">
                Across all three pillars, our work is guided by these foundational elements to build sustainable, meaningful impact.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Culturally relevant tools',
              'Evidence-informed practices',
              'Collaboration with schools and NGOs',
              'Respect for each child\'s unique strengths'
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-t border-white/20 pt-8">
                  <div className="text-nwa-orange font-bold text-2xl mb-4">0{i + 1}</div>
                  <p className="text-lg font-light leading-relaxed">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
