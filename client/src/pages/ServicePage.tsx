// SPMP Solutions — Service Page (Dynamic)
// Design: Raw Craft — American Vernacular Brutalism
// Mobile-first: sidebar moves below content on mobile
import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES, PHONE, PHONE_HREF, HERO_IMAGE } from "@/lib/data";
import NotFound from "./NotFound";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <NotFound />;

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[45vh] sm:min-h-[50vh] flex items-end pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt={`${service.name} in Little Rock, AR`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-[#0a1a2f]/70 to-[#0a1a2f]/40" />
        </div>
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-white/50 text-xs sm:text-sm font-ui mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Services</span>
            <ChevronRight size={12} />
            <span className="text-[#f2a900]">{service.shortName}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl sm:text-4xl">{service.icon}</span>
            <span className="section-label">{service.tagline}</span>
          </div>
          <h1 className="font-display font-black text-[clamp(2.2rem,8vw,5rem)] text-white uppercase leading-none mb-5">
            {service.name}<br />
            <span className="text-[#f2a900]">in Little Rock, AR</span>
          </h1>
          <a href={PHONE_HREF} className="btn-cta inline-flex text-sm sm:text-base">
            <Phone size={17} />
            Free Estimate — {PHONE}
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container">
          {/* Mobile CTA — shown above content on mobile */}
          <div className="lg:hidden mb-8 bg-[#0a1a2f] p-6">
            <h3 className="font-display font-black text-2xl text-white uppercase leading-none mb-2">
              Get a Free<br />
              <span className="text-[#f2a900]">Estimate</span>
            </h3>
            <p className="font-body text-white/60 text-sm mb-5">
              Call or text us for a no-obligation quote on {service.name.toLowerCase()} in Little Rock, AR.
            </p>
            <a href={PHONE_HREF} className="btn-cta w-full justify-center mb-3 text-base">
              <Phone size={18} />
              {PHONE}
            </a>
            <Link href="/contact" className="btn-outline-light w-full justify-center text-base">
              Send a Message
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <span className="section-label">About This Service</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-[clamp(1.8rem,6vw,3rem)] text-[#0a1a2f] uppercase leading-none mb-5">
                Professional {service.shortName}<br />
                <span className="text-[#f2a900]">in Little Rock</span>
              </h2>
              <p className="font-body text-[#0a1a2f]/70 leading-relaxed text-base sm:text-lg mb-8">
                {service.longDescription}
              </p>

              {/* Benefits */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0a1a2f] uppercase tracking-wide mb-4">
                Key Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-8 sm:mb-10">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 bg-white border border-[#0a1a2f]/10 p-3 sm:p-4">
                    <CheckCircle size={17} className="text-[#f2a900] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-[#0a1a2f]/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Process */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0a1a2f] uppercase tracking-wide mb-5">
                Our Process
              </h3>
              <div className="space-y-3 mb-8 sm:mb-10">
                {service.process.map((step, i) => (
                  <div key={step.step} className="flex gap-3 sm:gap-4 bg-white border border-[#0a1a2f]/10 p-4 sm:p-5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f2a900] rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-black text-white text-base sm:text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#0a1a2f] uppercase tracking-wide mb-1">
                        {step.step}
                      </h4>
                      <p className="font-body text-[#0a1a2f]/60 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0a1a2f] uppercase tracking-wide mb-5">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                {service.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white border border-[#0a1a2f]/10"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none gap-3">
                      <h4 className="font-display font-bold text-sm sm:text-base text-[#0a1a2f] uppercase tracking-wide" itemProp="name">
                        {faq.question}
                      </h4>
                      <ChevronRight size={16} className="text-[#f2a900] flex-shrink-0 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="font-body text-[#0a1a2f]/70 leading-relaxed text-sm" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              {/* Other Services — mobile only */}
              <div className="lg:hidden mt-8 bg-white border border-[#0a1a2f]/10 p-5">
                <h3 className="font-display font-bold text-lg text-[#0a1a2f] uppercase tracking-wide mb-4">
                  Other Services
                </h3>
                <div className="grid grid-cols-2 gap-1">
                  {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 py-2.5 px-2 text-[#0a1a2f]/70 hover:text-[#f2a900] transition-colors font-ui text-sm rounded-sm hover:bg-[#f9f9f9]"
                    >
                      <span className="text-base flex-shrink-0">{s.icon}</span>
                      <span className="leading-tight">{s.shortName}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-[#0a1a2f] p-8 mb-6 sticky top-24">
                <h3 className="font-display font-black text-2xl text-white uppercase leading-none mb-2">
                  Get a Free<br />
                  <span className="text-[#f2a900]">Estimate</span>
                </h3>
                <p className="font-body text-white/60 text-sm mb-6">
                  Call or text us today for a no-obligation quote on {service.name.toLowerCase()} in Little Rock, AR.
                </p>
                <a href={PHONE_HREF} className="btn-cta w-full justify-center mb-4">
                  <Phone size={18} />
                  {PHONE}
                </a>
                <Link href="/contact" className="btn-outline-light w-full justify-center">
                  Send a Message
                </Link>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="section-label mb-3">Service Areas</p>
                  <p className="font-body text-white/50 text-sm">
                    Little Rock, North Little Rock, Benton, Bryant, Cabot, Maumelle, Sherwood, Conway &amp; surrounding areas.
                  </p>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-white border border-[#0a1a2f]/10 p-6">
                <h3 className="font-display font-bold text-lg text-[#0a1a2f] uppercase tracking-wide mb-4">
                  Other Services
                </h3>
                <div className="space-y-2">
                  {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 py-2 border-b border-[#0a1a2f]/5 last:border-0 text-[#0a1a2f]/70 hover:text-[#f2a900] transition-colors font-ui text-sm"
                    >
                      <span>{s.icon}</span>
                      {s.shortName}
                      <ArrowRight size={12} className="ml-auto" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile bottom padding for sticky CTA */}
      <div className="lg:hidden h-16" />

      <Footer />
    </div>
  );
}
