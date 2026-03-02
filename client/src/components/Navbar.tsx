// SPMP Solutions — Navbar
// Design: Raw Craft — sticky, dark charcoal header with burnt orange accent
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { PHONE, PHONE_HREF, BUSINESS_NAME } from "@/lib/data";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1A1A1A] shadow-2xl" : "bg-[#1A1A1A]/95 backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#E85D04] rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="font-display font-black text-white text-sm tracking-tight">SP</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-black text-white text-lg leading-none tracking-wide uppercase">
                  Samsonite P&M
                </div>
                <div className="text-[#E85D04] text-xs font-ui font-semibold tracking-widest uppercase">
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
                  Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
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
            </nav>

            {/* CTA Phone */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 bg-[#E85D04] hover:bg-[#D04E00] text-white font-display font-bold text-base uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                {PHONE}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[#111111] border-t border-white/10 transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display font-bold text-xl uppercase tracking-wider text-white/80 hover:text-[#E85D04] py-3 border-b border-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <p className="section-label mb-2">Our Services</p>
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 py-2 text-white/60 hover:text-white transition-colors font-ui text-sm"
                >
                  <span>{service.icon}</span>
                  {service.shortName}
                </Link>
              ))}
            </div>
            <a
              href={PHONE_HREF}
              className="btn-cta mt-4 justify-center"
            >
              <Phone size={16} />
              Call {PHONE}
            </a>
          </div>
        </div>
      </header>

      {/* Sticky bottom CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#E85D04] shadow-2xl">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-3 py-4 text-white font-display font-bold text-lg uppercase tracking-wider"
        >
          <Phone size={20} />
          Call for a Free Estimate — {PHONE}
        </a>
      </div>
    </>
  );
}
