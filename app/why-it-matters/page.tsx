'use client';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export default function WhyItMatters() {
  return (
    <div className="flex flex-col min-h-screen bg-nwa-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/1920/1080?random=14"
          alt="Why Our Work Matters"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-nwa-navy/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <FadeIn>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">The Impact</div>
            <h1 className="text-5xl md:text-7xl font-light text-nwa-white leading-tight">
              Why Our Work <span className="font-bold">Matters.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-16 text-xl text-nwa-muted font-light leading-relaxed">
          <FadeIn>
            <p className="text-3xl md:text-4xl font-light text-nwa-navy leading-tight mb-12">
              Across India, millions of children experience learning differences such as dyslexia, dyscalculia, and other neurodivergent profiles.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p>
              While national policies recognise these needs, awareness and practical support in schools remain limited. Many children are misunderstood as "slow" or "careless," when in reality they require early identification and simple, informed adjustments to thrive.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p>
              Most government and low-resource schools do not have access to trained specialists, screening tools, or inclusive instructional practices. As a result, learning differences often go unnoticed, leading to academic struggles, reduced confidence, and preventable school dropout. Teachers are eager to support their students but frequently lack the training and resources to do so. Families, too, may feel uncertain or overwhelmed when navigating learning challenges.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-nwa-navy text-nwa-white p-12 md:p-16 rounded-3xl my-20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-nwa-orange" />
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                This is where Neurowise Academy Foundation makes a <span className="font-bold text-nwa-gold">critical difference.</span>
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p>
              We work at the intersection of schools, families, and communities — strengthening early recognition of learning differences, equipping teachers with practical strategies, and supporting children directly through targeted interventions. Our approach is grounded in evidence, informed by lived experience, and shaped by the realities of India's diverse classrooms.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <div className="border-t border-nwa-divider pt-12 mt-12">
              <p className="text-2xl font-bold text-nwa-navy leading-relaxed">
                By making neurodiversity visible, understood, and supported, we help create educational environments where every child has the opportunity to reach their potential. Our work matters because when children are recognised for who they are, rather than who they are expected to be, they can learn with confidence, dignity, and hope.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
