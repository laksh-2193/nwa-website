'use client';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-nwa-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/1920/1080?random=8"
          alt="About Neurowise Academy Foundation"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-nwa-navy/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <FadeIn>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-nwa-gold mb-6">About Us</div>
            <h1 className="text-5xl md:text-7xl font-light text-nwa-white leading-tight">
              Bridging the gap in <span className="font-bold">inclusive education.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 bg-nwa-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-2xl md:text-3xl font-light text-nwa-navy leading-relaxed text-center">
              Neurowise Academy Foundation works to ensure that neurodivergent learners in India are recognised, understood, and supported. Our organisation focuses on early identification, direct student support, teacher training, and community engagement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story (Sticky Scroll) */}
      <section className="py-32 bg-nwa-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <FadeIn>
                  <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Our Story</div>
                  <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8 leading-tight">
                    A personal journey <span className="font-bold">found its purpose.</span>
                  </h2>
                  <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://picsum.photos/800/1200?random=9"
                      alt="Amita Amlani"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-32 space-y-12 text-xl text-nwa-muted font-light leading-relaxed">
              <FadeIn delay={0.1}>
                <p>Neurowise Academy Foundation was born from a personal journey—one that began in the United Kingdom and gradually found its purpose in India.</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>Founded by Amita Amlani, the organisation draws its roots from her lived experience as a UK-based technology consultant of Indian heritage whose professional path shifted profoundly through the journey of supporting her two neurodivergent children. Amita found herself navigating a world she knew little about: assessments, labels, anxieties, and the ongoing need to advocate so her children could learn and thrive.</p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>This experience led her to retrain completely. She moved from the corporate world into the field of Special Educational Needs, becoming a Specialist Teacher and accredited Assessor for Specific Learning Difficulties (SpLD).</p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>After working for over a decade as a Specialist Teacher and Assessor in the UK, Amita felt ready to contribute her skills to India in a meaningful way. She spent nearly two years visiting schools across different regions, observing classrooms, working with teachers and parents, and supporting students directly.</p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p>Yet she also saw persistent challenges: limited awareness of neurodiversity, ongoing stigma, a lack of accessible training for teachers, and very few screening tools available across India's many languages.</p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="bg-nwa-navy text-nwa-white p-12 rounded-3xl mt-12">
                  <p className="font-light text-2xl text-center italic leading-relaxed">
                    "Every child deserves to be understood, every teacher deserves to be equipped, and every family deserves access to support."
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-nwa-navy text-nwa-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <div className="border-t border-white/20 pt-8">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-nwa-gold mb-8">Our Vision</h3>
                <p className="text-3xl font-light leading-relaxed">
                  A world where every child—regardless of background, learning profile, or neurotype—is recognised, understood, and empowered to thrive in an inclusive education system.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-t border-white/20 pt-8">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-nwa-orange mb-8">Our Mission</h3>
                <p className="text-2xl font-light leading-relaxed text-white/80">
                  To strengthen inclusive education in India by improving early identification of learning differences, providing direct support to neurodivergent learners, and building the capacity of educators, families, and communities through evidence-informed and culturally relevant practices.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-nwa-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">Core Principles</div>
              <h2 className="text-4xl md:text-5xl font-light text-nwa-navy">Our Values</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { title: 'Inclusion', desc: 'We believe every child deserves equitable access to learning. We work to create environments where differences are recognised, respected, and supported.' },
              { title: 'Understanding', desc: 'Awareness is the foundation of change. We prioritise clarity, empathy, and informed decision-making in everything we do.' },
              { title: 'Evidence-Informed', desc: 'Our work is guided by international research, professional standards, and on-the-ground understanding of India’s diverse education landscape.' },
              { title: 'Collaboration', desc: 'We build meaningful partnerships with schools, educators, families, NGOs, and communities—recognising that sustainable change is a shared effort.' },
              { title: 'Integrity', desc: 'We commit to transparency, authenticity, and ethical practice in every aspect of our work.' },
              { title: 'Capacity-Building', desc: 'We believe long-term change happens when educators, families, and systems are empowered with the right knowledge and tools.' },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-t border-nwa-divider pt-6">
                  <h4 className="text-xl font-bold text-nwa-navy mb-4">{value.title}</h4>
                  <p className="text-nwa-muted font-light leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
