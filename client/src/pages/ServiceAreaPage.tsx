// SPMP Solutions — Service Area Page (Dynamic)
// Design: Raw Craft — American Vernacular Brutalism
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
    <div className="min-h-screen bg-[#F4F1EC]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[40vh] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt={`Pressure washing and exterior services in ${area.city}, ${area.state}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-[#1A1A1A]/40" />
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm font-ui mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/70">Service Areas</span>
            <ChevronRight size={14} />
            <span className="text-[#E85D04]">{area.city}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="text-[#E85D04]" />
            <span className="section-label">Serving {area.city}, {area.state}</span>
          </div>
          <h1 className="font-display font-black text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            Pressure Washing &amp;<br />
            Exterior Services in<br />
            <span className="text-[#E85D04]">{area.city}, {area.state}</span>
          </h1>
          <a href={PHONE_HREF} className="btn-cta inline-flex">
            <Phone size={18} />
            Free Estimate — {PHONE}
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="section-label">About Our {area.city} Service</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-3xl lg:text-4xl text-[#1A1A1A] uppercase leading-none mb-6">
                Professional Exterior Services<br />
                <span className="text-[#E85D04]">in {area.city}, AR</span>
              </h2>
              <p className="font-body text-[#1A1A1A]/70 leading-relaxed text-lg mb-6">
                Samsonite Painting &amp; More Pressure Washing provides professional exterior cleaning, painting, and property maintenance services to homeowners and businesses in {area.city}, Arkansas. {area.description}
              </p>
              <p className="font-body text-[#1A1A1A]/70 leading-relaxed mb-8">
                Whether you need your driveway pressure washed, your home's siding soft-washed, your roof cleaned, or your exterior painted, our experienced team delivers quality results at honest prices. We're locally owned and operated, and we take pride in serving the {area.city} community.
              </p>

              {/* Neighborhoods */}
              {area.neighborhoods && (
                <div className="mb-10">
                  <h3 className="font-display font-bold text-xl text-[#1A1A1A] uppercase tracking-wide mb-4">
                    Neighborhoods We Serve in {area.city}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.neighborhoods.map((hood) => (
                      <span key={hood} className="bg-white border border-[#1A1A1A]/10 px-3 py-1.5 font-ui text-sm text-[#1A1A1A]/70">
                        {hood}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Available */}
              <h3 className="font-display font-bold text-xl text-[#1A1A1A] uppercase tracking-wide mb-6">
                Services Available in {area.city}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-3 bg-white border border-[#1A1A1A]/10 p-4 hover:border-[#E85D04] transition-all duration-200"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <div className="font-display font-bold text-sm text-[#1A1A1A] uppercase tracking-wide group-hover:text-[#E85D04] transition-colors">
                        {service.shortName}
                      </div>
                      <div className="font-ui text-[#1A1A1A]/50 text-xs">{service.tagline}</div>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-[#E85D04] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              {/* Local SEO Content */}
              <div className="bg-white border border-[#1A1A1A]/10 p-8">
                <h3 className="font-display font-bold text-xl text-[#1A1A1A] uppercase tracking-wide mb-4">
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
                      <CheckCircle size={16} className="text-[#E85D04] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-[#1A1A1A]/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#1A1A1A] p-8 mb-6 sticky top-24">
                <h3 className="font-display font-black text-2xl text-white uppercase leading-none mb-2">
                  Serving<br />
                  <span className="text-[#E85D04]">{area.city}</span>
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
              <div className="bg-white border border-[#1A1A1A]/10 p-6">
                <h3 className="font-display font-bold text-lg text-[#1A1A1A] uppercase tracking-wide mb-4">
                  Other Service Areas
                </h3>
                <div className="space-y-2">
                  {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((a) => (
                    <Link
                      key={a.slug}
                      href={`/service-areas/${a.slug}`}
                      className="flex items-center gap-2 py-2 border-b border-[#1A1A1A]/5 last:border-0 text-[#1A1A1A]/70 hover:text-[#E85D04] transition-colors font-ui text-sm"
                    >
                      <MapPin size={12} className="text-[#E85D04]" />
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

      <Footer />
    </div>
  );
}
