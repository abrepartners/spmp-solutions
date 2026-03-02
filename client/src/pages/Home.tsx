// SPMP Solutions — Home Page
// Design: Raw Craft — American Vernacular Brutalism
// Fonts: Barlow Condensed (display) + Source Serif 4 (body)
// Colors: Charcoal #1A1A1A | Burnt Orange #E85D04 | Cream #F4F1EC

import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, Star, MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PHONE, PHONE_HREF, TAGLINE, SERVICES, SERVICE_AREAS,
  TESTIMONIALS, STATS, HERO_IMAGE, PAINTING_IMAGE,
  BEFORE_AFTER_IMAGE, TEAM_IMAGE
} from "@/lib/data";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Navbar />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Professional pressure washing crew working on a home in Little Rock, AR"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-5 animate-fade-in-left">
              <span className="accent-rule"></span>
              <span className="section-label">Little Rock, AR &amp; Surrounding Areas</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl text-white uppercase leading-none tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              Pressure<br />
              <span className="text-[#E85D04]">Washing</span><br />
              &amp; Painting<br />
              Done Right.
            </h1>

            <p className="font-body text-white/80 text-lg lg:text-xl max-w-xl mb-8 animate-fade-in-up animation-delay-200">
              Professional exterior cleaning, painting, and property maintenance for residential and commercial clients in Little Rock. Quality work. Honest pricing. Fast turnaround.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <a href={PHONE_HREF} className="btn-cta">
                <Phone size={18} />
                Free Estimate — {PHONE}
              </a>
              <Link href="/services/pressure-washing" className="btn-outline-light">
                Our Services <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 animate-fade-in-up animation-delay-400">
              {["Locally Owned & Operated", "Free Estimates", "Residential & Commercial", "Satisfaction Guaranteed"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70 text-sm font-ui">
                  <CheckCircle size={14} className="text-[#E85D04]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#E85D04]">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
              {STATS.map((stat) => (
                <div key={stat.label} className="py-4 px-6 text-center">
                  <div className="font-display font-black text-2xl lg:text-3xl text-white">{stat.value}</div>
                  <div className="font-ui text-white/80 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES SECTION
          ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#F4F1EC]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="transition-all duration-700">
              <span className="section-label">What We Do</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-none">
                Full-Service<br />
                <span className="text-[#E85D04]">Exterior</span><br />
                Solutions
              </h2>
            </div>
            <p className="font-body text-[#1A1A1A]/70 max-w-md text-lg transition-all duration-700 delay-100">
              From pressure washing and roof cleaning to painting and junk removal — we handle every aspect of your property's exterior so you don't have to.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative bg-white border border-[#1A1A1A]/10 p-6 hover:border-[#E85D04] hover:shadow-xl transition-all duration-300 transition-all duration-700`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-display font-bold text-xl text-[#1A1A1A] uppercase tracking-wide mb-2 group-hover:text-[#E85D04] transition-colors">
                  {service.name}
                </h3>
                <p className="font-body text-[#1A1A1A]/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#E85D04] font-ui font-semibold text-sm uppercase tracking-wider">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                {/* Orange accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E85D04] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US — ASYMMETRIC SECTION
          ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] grain-overlay overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative transition-all duration-700">
              <div className="relative">
                <img
                  src={BEFORE_AFTER_IMAGE}
                  alt="Before and after driveway pressure washing in Little Rock, AR"
                  className="w-full h-80 lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#E85D04] p-6 hidden lg:block">
                  <div className="font-display font-black text-white text-4xl">500+</div>
                  <div className="font-ui text-white/80 text-sm uppercase tracking-wider">Jobs Completed</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="transition-all duration-700 delay-200">
              <span className="section-label">Why Little Rock Chooses Us</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-white uppercase leading-none mb-8">
                Quality Work.<br />
                <span className="text-[#E85D04]">Honest</span><br />
                Pricing.
              </h2>

              <div className="space-y-6">
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
                    <div className="w-1 bg-[#E85D04] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-1">
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
      <section className="py-20 lg:py-28 bg-[#F4F1EC]">
        <div className="container">
          <div className="text-center mb-14 transition-all duration-700">
            <span className="section-label">What Our Clients Say</span>
            <span className="accent-rule mx-auto my-3"></span>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-none">
              Real Results.<br />
              <span className="text-[#E85D04]">Real Reviews.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={testimonial.name}
                className="bg-white border border-[#1A1A1A]/10 p-6 transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-[#E85D04] fill-[#E85D04]" />
                  ))}
                </div>
                <blockquote className="font-body text-[#1A1A1A]/80 text-sm leading-relaxed mb-5" itemProp="reviewBody">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between border-t border-[#1A1A1A]/10 pt-4">
                  <div>
                    <div className="font-display font-bold text-sm text-[#1A1A1A] uppercase tracking-wide" itemProp="author">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-1 text-[#1A1A1A]/50 text-xs font-ui mt-0.5">
                      <MapPin size={11} />
                      {testimonial.city}
                    </div>
                  </div>
                  <span className="text-xs font-ui text-[#E85D04] font-semibold uppercase tracking-wider bg-[#E85D04]/10 px-2 py-1 rounded-sm">
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
      <section className="py-20 lg:py-0 bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <img
              src={PAINTING_IMAGE}
              alt="Professional exterior painting service in Little Rock, AR"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#1A1A1A] p-10 lg:p-16 flex flex-col justify-center">
            <span className="section-label">Exterior &amp; Interior Painting</span>
            <span className="accent-rule my-3"></span>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white uppercase leading-none mb-6">
              Transform Your<br />
              Property with a<br />
              <span className="text-[#E85D04]">Fresh Coat.</span>
            </h2>
            <p className="font-body text-white/70 leading-relaxed mb-8">
              Our professional painting team delivers meticulous prep work, clean lines, and lasting results using premium paints and materials. Interior or exterior, residential or commercial — we bring the same level of care to every project.
            </p>
            <ul className="space-y-2 mb-8">
              {["Premium paints & materials", "Thorough surface prep & priming", "Interior & exterior capabilities", "Residential & commercial"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70 font-ui text-sm">
                  <CheckCircle size={15} className="text-[#E85D04] flex-shrink-0" />
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
      <section className="py-20 lg:py-28 bg-[#F4F1EC]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="transition-all duration-700">
              <span className="section-label">Where We Work</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-none">
                Serving<br />
                <span className="text-[#E85D04]">Central</span><br />
                Arkansas
              </h2>
            </div>
            <p className="font-body text-[#1A1A1A]/70 max-w-md text-lg transition-all duration-700 delay-100">
              Based in Little Rock, we serve communities throughout Central Arkansas. Not sure if we cover your area? Give us a call.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICE_AREAS.map((area, i) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white border border-[#1A1A1A]/10 p-5 hover:border-[#E85D04] hover:bg-[#E85D04] transition-all duration-200 transition-all duration-700"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-[#E85D04] group-hover:text-white transition-colors" />
                  <span className="font-display font-bold text-base text-[#1A1A1A] group-hover:text-white uppercase tracking-wide transition-colors">
                    {area.city}
                  </span>
                </div>
                <span className="font-ui text-[#1A1A1A]/50 group-hover:text-white/80 text-xs transition-colors">
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 transition-all duration-700">
              <span className="section-label">Common Questions</span>
              <span className="accent-rule mx-auto my-3"></span>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-none">
                Got<br />
                <span className="text-[#E85D04]">Questions?</span>
              </h2>
            </div>

            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
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
                  className="group bg-[#F4F1EC] border border-[#1A1A1A]/10 transition-all duration-700"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-display font-bold text-lg text-[#1A1A1A] uppercase tracking-wide pr-4" itemProp="name">
                      {faq.q}
                    </h3>
                    <ChevronRight size={18} className="text-[#E85D04] flex-shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="font-body text-[#1A1A1A]/70 leading-relaxed" itemProp="text">
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
      <section className="py-20 lg:py-28 bg-[#F4F1EC] overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="transition-all duration-700">
              <span className="section-label">About Us</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-none mb-6">
                Your Neighbors.<br />
                <span className="text-[#E85D04]">Your Trusted</span><br />
                Crew.
              </h2>
              <p className="font-body text-[#1A1A1A]/70 leading-relaxed mb-4">
                Samsonite Painting &amp; More Pressure Washing is a locally owned and operated company committed to delivering high-quality exterior services to the Little Rock community. We take pride in providing reliable, affordable, and professional results for both residential and commercial clients.
              </p>
              <p className="font-body text-[#1A1A1A]/70 leading-relaxed mb-8">
                Our mission is simple: <strong className="text-[#1A1A1A]">Protect, restore, and enhance every property we work on.</strong> With years of hands-on experience, we understand the importance of doing the job right the first time.
              </p>
              <Link href="/about" className="btn-cta inline-flex">
                Meet the Team <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative transition-all duration-700 delay-200">
              <img
                src={TEAM_IMAGE}
                alt="The Samsonite Painting & More Pressure Washing team in Little Rock, AR"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#1A1A1A] p-5 hidden lg:block">
                <div className="font-display font-black text-[#E85D04] text-3xl">Locally</div>
                <div className="font-display font-bold text-white text-xl uppercase tracking-wider">Owned &amp; Operated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA SECTION
          ============================================================ */}
      <section className="py-20 bg-[#1A1A1A] grain-overlay">
        <div className="container text-center">
          <span className="section-label">Get Started Today</span>
          <span className="accent-rule mx-auto my-3"></span>
          <h2 className="font-display font-black text-5xl lg:text-7xl text-white uppercase leading-none mb-6">
            Ready to Transform<br />
            <span className="text-[#E85D04]">Your Property?</span>
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto mb-10">
            Call or text us today for a free, no-obligation estimate. We serve Little Rock and all surrounding communities in Central Arkansas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-cta text-lg px-8 py-4">
              <Phone size={22} />
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-outline-light text-lg px-8 py-4">
              Send a Message <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
