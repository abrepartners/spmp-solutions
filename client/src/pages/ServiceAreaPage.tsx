// SPMP Solutions — Service Area Page (Dynamic)
// Design: Raw Craft — American Vernacular Brutalism
// Mobile-first: sidebar collapses above content on mobile
import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { Phone, ArrowRight, MapPin, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICE_AREAS, SERVICES, PHONE, PHONE_HREF, HERO_IMAGE } from "@/lib/data";
import NotFound from "./NotFound";

export default function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!area) return <NotFound />;

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[45vh] sm:min-h-[50vh] flex items-end pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt={`Pressure washing and exterior services in ${area.city}, ${area.state}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-[#0a1a2f]/70 to-[#0a1a2f]/40" />
        </div>
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-white/50 text-xs sm:text-sm font-ui mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Service Areas</span>
            <ChevronRight size={12} />
            <span className="text-[#f2a900]">{area.city}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-[#f2a900] flex-shrink-0" />
            <span className="section-label">Serving {area.city}, {area.state}</span>
          </div>
          <h1 className="font-display font-black text-[clamp(2rem,7vw,5rem)] text-white uppercase leading-none mb-5">
            Pressure Washing &amp;<br />
            Exterior Services in<br />
            <span className="text-[#f2a900]">{area.city}, {area.state}</span>
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
              Serving<br />
              <span className="text-[#f2a900]">{area.city}</span>
            </h3>
            <p className="font-body text-white/60 text-sm mb-5">
              Call or text for a free estimate on any exterior service in {area.city}, AR.
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
              <span className="section-label">About Our {area.city} Service</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-[clamp(1.8rem,6vw,3rem)] text-[#0a1a2f] uppercase leading-none mb-5">
                Professional Exterior Services<br />
                <span className="text-[#f2a900]">in {area.city}, AR</span>
              </h2>
              <p className="font-body text-[#0a1a2f]/70 leading-relaxed text-base sm:text-lg mb-5">
                SPMP Solutions provides professional exterior cleaning, painting, and property maintenance services to homeowners and businesses in {area.city}, Arkansas. {area.description}
              </p>
              <p className="font-body text-[#0a1a2f]/70 leading-relaxed mb-8 text-sm sm:text-base">
                Whether you need your driveway pressure washed, your home's siding soft-washed, your roof cleaned, or your exterior painted, our experienced team delivers quality results at honest prices. We're locally owned and operated, and we take pride in serving the {area.city} community.
              </p>

              {/* Neighborhoods */}
              {area.neighborhoods && (
                <div className="mb-8 sm:mb-10">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#0a1a2f] uppercase tracking-wide mb-4">
                    Neighborhoods We Serve in {area.city}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.neighborhoods.map((hood) => (
                      <span key={hood} className="bg-white border border-[#0a1a2f]/10 px-3 py-1.5 font-ui text-xs sm:text-sm text-[#0a1a2f]/70">
                        {hood}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Available */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#0a1a2f] uppercase tracking-wide mb-5">
                Services Available in {area.city}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-8 sm:mb-10">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-3 bg-white border border-[#0a1a2f]/10 p-3 sm:p-4 hover:border-[#f2a900] transition-all duration-200 active:scale-[0.99]"
                  >
                    <span className="text-xl sm:text-2xl flex-shrink-0">{service.icon}</span>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-sm text-[#0a1a2f] uppercase tracking-wide group-hover:text-[#f2a900] transition-colors leading-tight">
                        {service.shortName}
                      </div>
                      <div className="font-ui text-[#0a1a2f]/50 text-xs truncate">{service.tagline}</div>
                    </div>
                    <ArrowRight size={13} className="ml-auto text-[#f2a900] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </Link>
                ))}
              </div>

              {/* Local SEO Content */}
              <div className="bg-white border border-[#0a1a2f]/10 p-6 sm:p-8">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0a1a2f] uppercase tracking-wide mb-4">
                  Why {area.city} Residents Choose SPMP Solutions
                </h3>
                <ul className="space-y-3">
                  {[
                    `Locally owned and operated — we're part of the ${area.city} community`,
                    "Free, no-obligation estimates for all services",
                    "Residential and commercial capabilities",
                    "Flexible scheduling to fit your needs",
                    "Satisfaction guaranteed on every job"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[#f2a900] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-[#0a1a2f]/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Areas — mobile only */}
              <div className="lg:hidden mt-8 bg-white border border-[#0a1a2f]/10 p-5">
                <h3 className="font-display font-bold text-lg text-[#0a1a2f] uppercase tracking-wide mb-4">
                  Other Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-1">
                  {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((a) => (
                    <Link
                      key={a.slug}
                      href={`/service-areas/${a.slug}`}
                      className="flex items-center gap-2 py-2.5 px-2 text-[#0a1a2f]/70 hover:text-[#f2a900] transition-colors font-ui text-sm rounded-sm hover:bg-[#f9f9f9]"
                    >
                      <MapPin size={11} className="text-[#f2a900] flex-shrink-0" />
                      <span className="leading-tight">{a.city}, {a.state}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-[#0a1a2f] p-8 mb-6 sticky top-24">
                <h3 className="font-display font-black text-2xl text-white uppercase leading-none mb-2">
                  Serving<br />
                  <span className="text-[#f2a900]">{area.city}</span>
                </h3>
                <p className="font-body text-white/60 text-sm mb-6">
                  Call or text for a free estimate on any exterior service in {area.city}, AR.
                </p>
                <a href={PHONE_HREF} className="btn-cta w-full justify-center mb-4">
                  <Phone size={18} />
                  {PHONE}
                </a>
                <Link href="/contact" className="btn-outline-light w-full justify-center">
                  Send a Message
                </Link>
              </div>

              {/* Other Areas */}
              <div className="bg-white border border-[#0a1a2f]/10 p-6">
                <h3 className="font-display font-bold text-lg text-[#0a1a2f] uppercase tracking-wide mb-4">
                  Other Service Areas
                </h3>
                <div className="space-y-2">
                  {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((a) => (
                    <Link
                      key={a.slug}
                      href={`/service-areas/${a.slug}`}
                      className="flex items-center gap-2 py-2 border-b border-[#0a1a2f]/5 last:border-0 text-[#0a1a2f]/70 hover:text-[#f2a900] transition-colors font-ui text-sm"
                    >
                      <MapPin size={12} className="text-[#f2a900] flex-shrink-0" />
                      {a.city}, {a.state}
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
