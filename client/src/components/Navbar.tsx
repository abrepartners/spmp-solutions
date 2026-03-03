// SPMP Solutions — Navbar
// Design: Raw Craft — sticky, dark charcoal header with burnt orange accent
// Mobile-first: hamburger menu, full-screen overlay, sticky bottom CTA
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { PHONE, PHONE_HREF } from "@/lib/data";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1A1A1A] shadow-2xl" : "bg-[#1A1A1A]/95 backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-9 h-9 bg-[#E85D04] rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="font-display font-black text-white text-sm tracking-tight">SP</span>
              </div>
              <div>
                <div className="font-display font-black text-white text-base leading-none tracking-wide uppercase">
                  Samsonite P&M
                </div>
                <div className="text-[#E85D04] text-[10px] font-ui font-semibold tracking-widest uppercase">
                  Pressure Washing
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`font-ui font-semibold text-sm uppercase tracking-wider px-4 py-2 transition-colors ${
                  location === "/" ? "text-[#E85D04]" : "text-white/80 hover:text-white"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 font-ui font-semibold text-sm uppercase tracking-wider px-4 py-2 text-white/80 hover:text-white transition-colors"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 w-64 bg-[#1A1A1A] border border-white/10 shadow-2xl transition-all duration-200 ${
                    servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors font-ui text-sm border-b border-white/5 last:border-0"
                    >
                      <span className="text-base">{service.icon}</span>
                      {service.shortName}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className={`font-ui font-semibold text-sm uppercase tracking-wider px-4 py-2 transition-colors ${
                  location === "/about" ? "text-[#E85D04]" : "text-white/80 hover:text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="/gallery"
                className={`font-ui font-semibold text-sm uppercase tracking-wider px-4 py-2 transition-colors ${
                  location === "/gallery" ? "text-[#E85D04]" : "text-white/80 hover:text-white"
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className={`font-ui font-semibold text-sm uppercase tracking-wider px-4 py-2 transition-colors ${
                  location === "/contact" ? "text-[#E85D04]" : "text-white/80 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 bg-[#E85D04] hover:bg-[#D04E00] text-white font-display font-bold text-base uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                {PHONE}
              </a>
            </div>

            {/* Mobile: Phone icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center w-10 h-10 bg-[#E85D04] rounded-sm text-white"
                aria-label="Call us"
              >
                <Phone size={18} />
              </a>
              <button
                className="flex items-center justify-center w-10 h-10 text-white rounded-sm hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu — full overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-16 bg-[#111111] z-40 transition-all duration-300 overflow-y-auto ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container py-6 pb-28 flex flex-col gap-0">
            {/* Primary Links */}
            <Link
              href="/"
              className={`font-display font-bold text-2xl uppercase tracking-wider py-4 border-b border-white/10 transition-colors ${
                location === "/" ? "text-[#E85D04]" : "text-white"
              }`}
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div className="border-b border-white/10">
              <button
                className="w-full flex items-center justify-between font-display font-bold text-2xl uppercase tracking-wider py-4 text-white"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown size={20} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 grid grid-cols-2 gap-1">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-2 py-2.5 px-2 text-white/60 hover:text-[#E85D04] transition-colors font-ui text-sm rounded-sm hover:bg-white/5"
                    >
                      <span className="text-base flex-shrink-0">{service.icon}</span>
                      <span className="leading-tight">{service.shortName}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`font-display font-bold text-2xl uppercase tracking-wider py-4 border-b border-white/10 transition-colors ${
                location === "/about" ? "text-[#E85D04]" : "text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className={`font-display font-bold text-2xl uppercase tracking-wider py-4 border-b border-white/10 transition-colors ${
                location === "/gallery" ? "text-[#E85D04]" : "text-white"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`font-display font-bold text-2xl uppercase tracking-wider py-4 border-b border-white/10 transition-colors ${
                location === "/contact" ? "text-[#E85D04]" : "text-white"
              }`}
            >
              Contact
            </Link>

            {/* CTA in menu */}
            <div className="mt-6 space-y-3">
              <a
                href={PHONE_HREF}
                className="btn-cta w-full justify-center text-xl py-4"
              >
                <Phone size={20} />
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="btn-outline-light w-full justify-center text-base py-3"
              >
                Request Free Estimate
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Hours */}
            <div className="mt-8 p-4 bg-white/5 rounded-sm">
              <p className="section-label mb-2">Business Hours</p>
              <p className="font-ui text-white/60 text-sm">Mon–Fri: 7:00 AM – 6:00 PM</p>
              <p className="font-ui text-white/60 text-sm">Saturday: 8:00 AM – 4:00 PM</p>
              <p className="font-ui text-white/40 text-xs mt-1">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky bottom CTA for mobile — above any page content */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#E85D04] shadow-2xl safe-area-bottom">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-3 py-4 text-white font-display font-bold text-lg uppercase tracking-wider"
        >
          <Phone size={20} />
          Free Estimate — {PHONE}
        </a>
      </div>
    </>
  );
}
