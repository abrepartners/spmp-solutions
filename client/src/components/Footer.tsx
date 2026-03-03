// SPMP Solutions — Footer
// Design: Raw Craft — dark charcoal with orange accents, schema-friendly NAP
// Mobile-first: stacked columns, proper padding above sticky mobile CTA
import { Link } from "wouter";
import { Phone, MapPin, Clock, Facebook, Star } from "lucide-react";
import { PHONE, PHONE_HREF, BUSINESS_NAME, SERVICES, SERVICE_AREAS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white" itemScope itemType="https://schema.org/LocalBusiness">
      {/* CTA Band */}
      <div className="bg-[#E85D04] py-8 sm:py-10">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide">
                Ready for a Free Estimate?
              </h2>
              <p className="font-ui text-white/90 mt-1 text-sm sm:text-base">
                Serving Little Rock, AR and surrounding areas. Call or text anytime.
              </p>
            </div>
            <a
              href={PHONE_HREF}
              className="flex-shrink-0 flex items-center gap-2 sm:gap-3 bg-white text-[#E85D04] font-display font-black text-base sm:text-xl uppercase tracking-wider px-5 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Phone size={20} />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#E85D04] rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="font-display font-black text-white text-sm">SP</span>
              </div>
              <div>
                <div className="font-display font-black text-white text-base leading-none uppercase tracking-wide">
                  Samsonite P&M
                </div>
                <div className="text-[#E85D04] text-xs font-ui font-semibold tracking-widest uppercase">
                  Pressure Washing
                </div>
              </div>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-5" itemProp="description">
              Locally owned and operated exterior services company serving Little Rock, AR and surrounding communities. Professional results, honest pricing.
            </p>
            {/* NAP - Schema Friendly */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-[#E85D04] mt-0.5 flex-shrink-0" />
                <a href={PHONE_HREF} className="font-ui text-white/80 hover:text-[#E85D04] transition-colors text-sm" itemProp="telephone">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#E85D04] mt-0.5 flex-shrink-0" />
                <span className="font-ui text-white/60 text-sm" itemProp="areaServed">
                  Little Rock, AR &amp; Surrounding Areas
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#E85D04] mt-0.5 flex-shrink-0" />
                <span className="font-ui text-white/60 text-sm">
                  Mon–Fri 7am–6pm · Sat 8am–4pm
                </span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/spmpsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#E85D04] rounded-sm flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.google.com/maps/place/Samsonite+Painting+%26+More+Pressure+Washing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#E85D04] rounded-sm flex items-center justify-center transition-colors"
                aria-label="Google Business Profile"
              >
                <Star size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="col-span-1">
            <h3 className="font-display font-bold text-base sm:text-lg uppercase tracking-wider text-white mb-3 sm:mb-4">
              Our Services
            </h3>
            <span className="accent-rule mb-3 sm:mb-4"></span>
            <ul className="space-y-2 mt-3 sm:mt-4">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-ui text-white/60 hover:text-[#E85D04] transition-colors text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <span className="text-[#E85D04] text-xs flex-shrink-0">→</span>
                    <span className="leading-tight">{service.shortName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="col-span-1">
            <h3 className="font-display font-bold text-base sm:text-lg uppercase tracking-wider text-white mb-3 sm:mb-4">
              Service Areas
            </h3>
            <span className="accent-rule mb-3 sm:mb-4"></span>
            <ul className="space-y-2 mt-3 sm:mt-4">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="font-ui text-white/60 hover:text-[#E85D04] transition-colors text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <span className="text-[#E85D04] text-xs flex-shrink-0">→</span>
                    <span className="leading-tight">{area.city}, {area.state}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column — hidden on very small, shown on sm+ */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="font-display font-bold text-base sm:text-lg uppercase tracking-wider text-white mb-3 sm:mb-4">
              Quick Links
            </h3>
            <span className="accent-rule mb-3 sm:mb-4"></span>
            <ul className="space-y-2 mt-3 sm:mt-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
                { href: "/contact", label: "Free Estimate" },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-ui text-white/60 hover:text-[#E85D04] transition-colors text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <span className="text-[#E85D04] text-xs flex-shrink-0">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/5 rounded-sm border border-white/10">
              <p className="section-label mb-2 sm:mb-3">Why Choose Us</p>
              <ul className="space-y-1.5">
                {["Locally Owned & Operated", "Free Estimates", "Satisfaction Guaranteed", "Residential & Commercial"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/60 text-xs font-ui">
                    <span className="text-[#E85D04] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="font-ui text-white/40 text-xs text-center sm:text-left">
            © {year} <span itemProp="name">{BUSINESS_NAME}</span>. All rights reserved. Little Rock, AR.
          </p>
          <p className="font-ui text-white/40 text-xs text-center sm:text-right">
            Serving Little Rock, North Little Rock, Benton, Bryant, Cabot, Maumelle, Sherwood &amp; Conway
          </p>
        </div>
      </div>

      {/* Extra bottom padding on mobile for sticky CTA bar */}
      <div className="lg:hidden h-16" />
    </footer>
  );
}
