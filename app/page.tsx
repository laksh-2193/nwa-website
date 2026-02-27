'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Users, BookOpen, HeartHandshake } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-nwa-white selection:bg-nwa-orange/30">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://picsum.photos/1920/1080?random=1"
            alt="Children standing in Assembly"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-black/30 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/10 max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-nwa-white mb-6 leading-[1.1]">
              Every Child Deserves to Be <span className="font-bold">Understood</span>
            </h1>
            <p className="text-lg md:text-2xl text-nwa-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Creating pathways for every child to thrive through understanding, support, and inclusive education.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <Link href="/what-we-do" className="group flex items-center justify-center gap-3 bg-nwa-orange text-nwa-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-nwa-orange/90 transition-all">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/partner" className="group flex items-center justify-center gap-3 bg-transparent border border-nwa-white text-nwa-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-nwa-white hover:text-nwa-navy transition-all">
              Partner with Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Strip */}
      <section className="bg-nwa-orange text-nwa-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center pt-8 md:pt-0">
                <span className="text-6xl md:text-7xl font-light mb-4">270+</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Teachers Trained</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center pt-8 md:pt-0">
                <span className="text-6xl md:text-7xl font-light mb-4">4,500+</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Students Reached</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center pt-8 md:pt-0">
                <span className="text-6xl md:text-7xl font-light mb-4">200+</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Assessments</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-32 bg-nwa-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="pr-0 lg:pr-12">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">01 — About Us</div>
                <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8 leading-tight">
                  A paradigm shift in <span className="font-bold">understanding.</span>
                </h2>
                <p className="text-xl text-nwa-muted font-light leading-relaxed mb-12">
                  India's education system serves 248 million learners, yet an estimated 10% may have a Specific Learning Difficulty - most going undiagnosed. Neurowise Academy Foundation works to change this by strengthening early identification, direct student support, and inclusive training across schools and communities.
                </p>
                <Link href="/about" className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-nwa-navy hover:text-nwa-orange transition-colors">
                  <span className="border-b-2 border-nwa-navy group-hover:border-nwa-orange pb-1 transition-colors">Read Our Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
                <Image
                  src="https://picsum.photos/800/1000?random=2"
                  alt="Students learning"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Do Teaser */}
      <section className="py-32 bg-nwa-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-24">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">02 — What We Do</div>
              <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8 leading-tight">
                Building an <span className="font-bold">ecosystem</span> of support.
              </h2>
              <p className="text-xl text-nwa-muted font-light leading-relaxed">
                Neurowise Academy Foundation strengthens inclusive education in India through three interconnected pillars of work.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: 'Early Identification', icon: BookOpen, img: 'https://picsum.photos/600/800?random=3' },
              { title: 'Teacher Training', icon: Users, img: 'https://picsum.photos/600/800?random=4' },
              { title: 'Classroom Support', icon: HeartHandshake, img: 'https://picsum.photos/600/800?random=5' }
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                  <Image src={pillar.img} alt={pillar.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-nwa-navy/90 via-nwa-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-12 h-12 bg-nwa-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                      <pillar.icon className="w-5 h-5 text-nwa-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-nwa-white">{pillar.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="text-center">
              <Link href="/what-we-do" className="group inline-flex items-center gap-3 bg-nwa-navy text-nwa-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-nwa-navy/90 transition-all">
                Explore Our Pillars <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Our Work Matters */}
      <section className="py-32 bg-nwa-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
                <Image
                  src="https://picsum.photos/800/1000?random=6"
                  alt="Why our work matters"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="pl-0 lg:pl-12">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-nwa-orange mb-6">03 — The Impact</div>
                <h2 className="text-4xl md:text-5xl font-light text-nwa-navy mb-8 leading-tight">
                  Why Our Work <span className="font-bold">Matters.</span>
                </h2>
                <p className="text-xl text-nwa-muted font-light leading-relaxed mb-8">
                  Across India, many children with learning differences are overlooked or misunderstood - often simply labelled as "slow" or "careless." Most schools do not yet have access to early screening, trained specialists, or inclusive teaching practices.
                </p>
                <p className="text-xl text-nwa-muted font-light leading-relaxed mb-12">
                  We work to close this gap by building awareness, equipping teachers, and supporting children directly - creating pathways for every learner to be recognised, understood, and included.
                </p>
                <Link href="/why-it-matters" className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-nwa-navy hover:text-nwa-orange transition-colors">
                  <span className="border-b-2 border-nwa-navy group-hover:border-nwa-orange pb-1 transition-colors">Discover Why</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partner & Support Dual Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-nwa-navy text-nwa-white py-32 px-6 lg:px-16 flex flex-col justify-center items-start">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Support <span className="font-bold text-nwa-gold">meaningful</span> change.
            </h2>
            <p className="text-xl text-nwa-white/80 font-light leading-relaxed mb-12 max-w-lg">
              We collaborate with CSR teams, foundations, and community organisations to build practical, evidence-informed solutions for neurodivergent learners.
            </p>
            <Link href="/partner" className="group inline-flex items-center gap-3 bg-nwa-white text-nwa-navy px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-nwa-lightgrey transition-all">
              Partner with Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
        
        <div className="relative h-[600px] lg:h-auto w-full">
          <Image
            src="https://picsum.photos/1000/1000?random=7"
            alt="Support our work"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-nwa-orange/90 flex flex-col justify-center items-start p-6 lg:p-16">
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-light text-nwa-white mb-8 leading-tight">
                Enable <span className="font-bold">early</span> identification.
              </h2>
              <p className="text-xl text-nwa-white/90 font-light leading-relaxed mb-12 max-w-lg">
                Every contribution — large or small — strengthens our ability to ensure that every child is understood, supported, and able to thrive.
              </p>
              <Link href="/support" className="group inline-flex items-center gap-3 bg-nwa-navy text-nwa-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-nwa-navy/90 transition-all">
                Support Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
