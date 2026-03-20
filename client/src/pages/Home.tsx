// SPMP Solutions — Home Page
// Design: Raw Craft — American Vernacular Brutalism
// Mobile-first responsive: all breakpoints handled
// Fonts: Barlow Condensed (display) + Source Serif 4 (body)
// Colors: Charcoal #0a1a2f | Burnt Orange #f2a900 | Cream #f9f9f9

import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, Star, MapPin, ChevronRight, Paintbrush, Droplets, Home as HomeIcon, Building2, ShieldCheck, CircleDot, CloudRain, TreePine, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PHONE, PHONE_HREF, SERVICES, SERVICE_AREAS,
  TESTIMONIALS, STATS, HERO_IMAGE, PAINTING_IMAGE,
  BEFORE_AFTER_IMAGE, TEAM_IMAGE
} from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Paintbrush, Droplets, Home: HomeIcon, Building2, ShieldCheck, CircleDot, CloudRain, TreePine, Truck,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative min-h-[100svh] flex items-end pb-20 sm:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Professional pressure washing crew working on a home in Little Rock, AR"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-[#0a1a2f]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f]/80 to-transparent" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4 animate-fade-in-left">
              <span className="accent-rule"></span>
              <span className="section-label">Little Rock, AR &amp; Surrounding Areas</span>
            </div>

            {/* Main Headline — scaled for mobile */}
            <h1 className="font-display font-black text-[clamp(2.8rem,10vw,6rem)] text-white uppercase leading-none tracking-tight mb-5 animate-fade-in-up animation-delay-100">
              Pressure<br />
              <span className="text-[#f2a900]">Washing</span><br />
              &amp; Painting<br />
              Done Right.
            </h1>

            <p className="font-body text-white/80 text-base sm:text-lg max-w-xl mb-7 animate-fade-in-up animation-delay-200">
              Professional exterior cleaning, painting, and property maintenance for residential and commercial clients in Little Rock. Quality work. Honest pricing. Fast turnaround.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 animate-fade-in-up animation-delay-300">
              <a href={PHONE_HREF} className="btn-cta text-base sm:text-lg justify-center xs:justify-start">
                <Phone size={18} />
                Free Estimate — {PHONE}
              </a>
              <Link href="/services/pressure-washing" className="btn-outline-light text-base sm:text-lg justify-center xs:justify-start">
                Our Services <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 animate-fade-in-up animation-delay-400">
              {["Locally Owned & Operated", "Free Estimates", "Residential & Commercial", "Satisfaction Guaranteed"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white/70 text-xs sm:text-sm font-ui">
                  <CheckCircle size={13} className="text-[#f2a900] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar — 2x2 on mobile, 4 cols on desktop */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#f2a900]">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/20">
              {STATS.map((stat) => (
                <div key={stat.label} className="py-3 sm:py-4 px-4 sm:px-6 text-center">
                  <div className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white">{stat.value}</div>
                  <div className="font-ui text-white/80 text-[10px] sm:text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES SECTION
          ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#f9f9f9]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <span className="section-label">What We Do</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-[clamp(2.5rem,8vw,4rem)] text-[#0a1a2f] uppercase leading-none">
                Full-Service<br />
                <span className="text-[#f2a900]">Exterior</span><br />
                Solutions
              </h2>
            </div>
            <p className="font-body text-[#0a1a2f]/70 max-w-md text-base sm:text-lg lg:text-right">
              From pressure washing and roof cleaning to painting and junk removal — we handle every aspect of your property's exterior so you don't have to.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white border border-[#0a1a2f]/10 p-5 sm:p-6 hover:border-[#f2a900] hover:shadow-xl transition-all duration-300 active:scale-[0.99]"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {(() => { const IC = SERVICE_ICONS[service.icon]; return IC ? <IC size={32} className="text-[#f2a900] mb-3" /> : null; })()}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0a1a2f] uppercase tracking-wide mb-2 group-hover:text-[#f2a900] transition-colors">
                  {service.name}
                </h3>
                <p className="font-body text-[#0a1a2f]/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#f2a900] font-ui font-semibold text-sm uppercase tracking-wider">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a900] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US — ASYMMETRIC SECTION
          ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#0a1a2f] grain-overlay overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative">
                <img
                  src={BEFORE_AFTER_IMAGE}
                  alt="Before and after driveway pressure washing in Little Rock, AR"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#f2a900] p-4 sm:p-6">
                  <div className="font-display font-black text-white text-3xl sm:text-4xl">5.0★</div>
                  <div className="font-ui text-white/80 text-xs sm:text-sm uppercase tracking-wider">138+ Google Reviews</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <span className="section-label">Why Little Rock Chooses Us</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-[clamp(2.5rem,8vw,4rem)] text-white uppercase leading-none mb-7">
                Quality Work.<br />
                <span className="text-[#f2a900]">Honest</span><br />
                Pricing.
              </h2>

              <div className="space-y-5">
                {[
                  {
                    title: "Quality Workmanship",
                    desc: "Every project is completed with precision, care, and attention to detail. We treat every property like it's our own."
                  },
                  {
                    title: "Fast & Reliable Service",
                    desc: "We show up on time, communicate clearly, and get the job done right — the first time."
                  },
                  {
                    title: "Affordable Pricing",
                    desc: "Professional results without the inflated price tag. We provide transparent, upfront pricing with no surprises."
                  },
                  {
                    title: "Locally Owned & Operated",
                    desc: "We're your neighbors. We care about our community and take pride in every job we do in Little Rock and surrounding areas."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1 bg-[#f2a900] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-white/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={PHONE_HREF} className="btn-cta mt-8 inline-flex">
                <Phone size={18} />
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS SECTION
          ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#f9f9f9]">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label">What Our Clients Say</span>
            <span className="accent-rule mx-auto my-3"></span>
            <h2 className="font-display font-black text-[clamp(2.5rem,8vw,4rem)] text-[#0a1a2f] uppercase leading-none">
              Real Results.<br />
              <span className="text-[#f2a900]">Real Reviews.</span>
            </h2>
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 mt-4 bg-white border border-[#0a1a2f]/10 px-4 py-2 rounded-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#f2a900] fill-[#f2a900]" />
                ))}
              </div>
              <span className="font-display font-bold text-sm text-[#0a1a2f]">5.0</span>
              <span className="text-[#0a1a2f]/50 text-xs font-ui">|</span>
              <span className="font-ui text-xs text-[#0a1a2f]/60">138+ Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={testimonial.name}
                className="bg-white border border-[#0a1a2f]/10 p-5 sm:p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={15} className="text-[#f2a900] fill-[#f2a900]" />
                  ))}
                </div>
                <blockquote className="font-body text-[#0a1a2f]/80 text-sm leading-relaxed mb-5" itemProp="reviewBody">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-start justify-between gap-2 border-t border-[#0a1a2f]/10 pt-4">
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm text-[#0a1a2f] uppercase tracking-wide truncate" itemProp="author">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-1 text-[#0a1a2f]/50 text-xs font-ui mt-0.5">
                      <MapPin size={10} className="flex-shrink-0" />
                      <span className="truncate">{testimonial.city}</span>
                    </div>
                  </div>
                  <span className="text-xs font-ui text-[#f2a900] font-semibold uppercase tracking-wider bg-[#f2a900]/10 px-2 py-1 rounded-sm flex-shrink-0 text-right leading-tight">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PAINTING SECTION — SPLIT LAYOUT
          ============================================================ */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-[480px]">
            <img
              src={PAINTING_IMAGE}
              alt="Professional exterior painting service in Little Rock, AR"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#0a1a2f] p-8 sm:p-10 lg:p-16 flex flex-col justify-center">
            <span className="section-label">Exterior &amp; Interior Painting</span>
            <span className="accent-rule my-3"></span>
            <h2 className="font-display font-black text-[clamp(2rem,7vw,3.5rem)] text-white uppercase leading-none mb-5">
              Transform Your<br />
              Property with a<br />
              <span className="text-[#f2a900]">Fresh Coat.</span>
            </h2>
            <p className="font-body text-white/70 leading-relaxed mb-6 text-sm sm:text-base">
              Our professional painting team delivers meticulous prep work, clean lines, and lasting results using premium paints and materials. Interior or exterior, residential or commercial — we bring the same level of care to every project.
            </p>
            <ul className="space-y-2 mb-7">
              {["Premium paints & materials", "Thorough surface prep & priming", "Interior & exterior capabilities", "Residential & commercial"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70 font-ui text-sm">
                  <CheckCircle size={15} className="text-[#f2a900] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/services/exterior-interior-painting" className="btn-cta inline-flex w-fit">
              Learn About Painting <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE AREAS SECTION
          ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#f9f9f9]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="section-label">Where We Work</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-[clamp(2.5rem,8vw,4rem)] text-[#0a1a2f] uppercase leading-none">
                Serving<br />
                <span className="text-[#f2a900]">Central</span><br />
                Arkansas
              </h2>
            </div>
            <p className="font-body text-[#0a1a2f]/70 max-w-md text-base sm:text-lg">
              Based in Little Rock, we serve communities throughout Central Arkansas. Not sure if we cover your area? Give us a call.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white border border-[#0a1a2f]/10 p-4 sm:p-5 hover:border-[#f2a900] hover:bg-[#f2a900] transition-all duration-200 active:scale-[0.98]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={13} className="text-[#f2a900] group-hover:text-white transition-colors flex-shrink-0" />
                  <span className="font-display font-bold text-sm sm:text-base text-[#0a1a2f] group-hover:text-white uppercase tracking-wide transition-colors leading-tight">
                    {area.city}
                  </span>
                </div>
                <span className="font-ui text-[#0a1a2f]/50 group-hover:text-white/80 text-xs transition-colors">
                  {area.state}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION — AEO OPTIMIZED
          ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="section-label">Common Questions</span>
              <span className="accent-rule mx-auto my-3"></span>
              <h2 className="font-display font-black text-[clamp(2.5rem,8vw,4rem)] text-[#0a1a2f] uppercase leading-none">
                Got<br />
                <span className="text-[#f2a900]">Questions?</span>
              </h2>
            </div>

            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: "How much does pressure washing cost in Little Rock, AR?",
                  a: "Pressure washing costs in Little Rock typically range from $150–$500 depending on the size and type of surface. A standard driveway runs $100–$200, while a full house washing is $250–$500. We offer free, no-obligation estimates — call 501-533-9213 for an accurate quote."
                },
                {
                  q: "How often should I get my house pressure washed?",
                  a: "Most homes in Little Rock benefit from professional pressure washing once a year, typically in spring or fall. Homes surrounded by trees or with north-facing surfaces may need cleaning more frequently due to algae, mold, and mildew buildup in Arkansas's humid climate."
                },
                {
                  q: "Is soft washing safe for my roof?",
                  a: "Yes. We use low-pressure soft-wash techniques specifically designed for roof cleaning. This method safely removes black streaks, moss, algae, and lichen without damaging shingles or voiding your roof warranty — unlike high-pressure washing which can cause significant damage."
                },
                {
                  q: "What areas near Little Rock do you serve?",
                  a: "We serve Little Rock and surrounding communities including North Little Rock, Benton, Bryant, Cabot, Maumelle, Sherwood, and Conway, AR. Call 501-533-9213 to confirm service availability in your specific area."
                },
                {
                  q: "Do you offer commercial pressure washing?",
                  a: "Yes. We provide commercial pressure washing for businesses, storefronts, parking lots, and commercial properties throughout the Little Rock metro area. We offer flexible scheduling to minimize disruption to your business."
                },
                {
                  q: "Do you offer free estimates?",
                  a: "Absolutely. We provide free, no-obligation estimates for all services. Call or text 501-533-9213 or use our contact form to schedule your free estimate."
                }
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-[#f9f9f9] border border-[#0a1a2f]/10"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none gap-3">
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#0a1a2f] uppercase tracking-wide" itemProp="name">
                      {faq.q}
                    </h3>
                    <ChevronRight size={18} className="text-[#f2a900] flex-shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="font-body text-[#0a1a2f]/70 leading-relaxed text-sm sm:text-base" itemProp="text">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ABOUT / TEAM SECTION
          ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#f9f9f9] overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <span className="section-label">About Us</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-[clamp(2.5rem,8vw,4rem)] text-[#0a1a2f] uppercase leading-none mb-5">
                Your Neighbors.<br />
                <span className="text-[#f2a900]">Your Trusted</span><br />
                Crew.
              </h2>
              <p className="font-body text-[#0a1a2f]/70 leading-relaxed mb-4 text-sm sm:text-base">
                SPMP Solutions is a professional exterior services company serving residential, commercial, and multi‑property clients across Little Rock and the greater Central Arkansas region. Since 2018, we have focused on delivering consistent quality, reliable communication, and results that protect and enhance every property we service.
              </p>
              <p className="font-body text-[#0a1a2f]/70 leading-relaxed mb-7 text-sm sm:text-base">
                Our mission is simple: <strong className="text-[#0a1a2f]">Protect, restore, and enhance every property we work on.</strong> With years of hands-on experience, we understand the importance of doing the job right the first time.
              </p>
              <Link href="/about" className="btn-cta inline-flex">
                Meet the Team <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={TEAM_IMAGE}
                alt="The SPMP Solutions team in Little Rock, AR"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-64 sm:h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#0a1a2f] p-4 sm:p-5">
                <div className="font-display font-black text-[#f2a900] text-2xl sm:text-3xl">Locally</div>
                <div className="font-display font-bold text-white text-base sm:text-xl uppercase tracking-wider">Owned &amp; Operated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA SECTION
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#0a1a2f] grain-overlay">
        <div className="container text-center">
          <span className="section-label">Get Started Today</span>
          <span className="accent-rule mx-auto my-3"></span>
          <h2 className="font-display font-black text-[clamp(2.5rem,9vw,5rem)] text-white uppercase leading-none mb-5">
            Ready to Transform<br />
            <span className="text-[#f2a900]">Your Property?</span>
          </h2>
          <p className="font-body text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Call or text us today for a free, no-obligation estimate. We serve Little Rock and all surrounding communities in Central Arkansas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-cta text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 justify-center">
              <Phone size={20} />
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-outline-light text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 justify-center">
              Send a Message <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Extra bottom padding on mobile for sticky CTA bar */}
      <div className="lg:hidden h-16" />

      <Footer />
    </div>
  );
}
