// SPMP Solutions — About Page
// Design: Raw Craft — American Vernacular Brutalism
// Mobile-first responsive
import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, TEAM_IMAGE, PAINTING_IMAGE, STATS } from "@/lib/data";

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[50vh] sm:min-h-[55vh] flex items-end pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src={TEAM_IMAGE} alt="The SPMP Solutions team in Little Rock, AR" width={1200} height={800} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-[#0a1a2f]/60 to-[#0a1a2f]/30" />
        </div>
        <div className="container relative z-10">
          <span className="section-label">About Us</span>
          <span className="accent-rule my-3"></span>
          <h1 className="font-display font-black text-[clamp(2.5rem,9vw,5.5rem)] text-white uppercase leading-none mb-4">
            Little Rock's<br />
            <span className="text-[#f2a900]">Trusted</span><br />
            Exterior Crew.
          </h1>
          <p className="font-body text-white/80 text-base sm:text-lg max-w-xl">
            Locally owned and operated. Committed to quality, honesty, and the Little Rock community.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#f2a900]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/20">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                <div className="font-display font-black text-2xl sm:text-3xl text-white">{stat.value}</div>
                <div className="font-ui text-white/80 text-[10px] sm:text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-[clamp(2rem,7vw,3.5rem)] text-[#0a1a2f] uppercase leading-none mb-5">
                Built on Hard Work<br />
                &amp; <span className="text-[#f2a900]">Honest Service.</span>
              </h2>
              <p className="font-body text-[#0a1a2f]/70 leading-relaxed mb-4 text-sm sm:text-base">
                SPMP Solutions is a professional exterior services company serving residential, commercial, and multi‑property clients across Little Rock, North Little Rock, Sherwood, Cabot, and the greater Central Arkansas region. Since 2018, we have focused on delivering consistent quality, reliable communication, and results that enhance the appearance, longevity, and value of every property we service.
              </p>
              <p className="font-body text-[#0a1a2f]/70 leading-relaxed mb-4 text-sm sm:text-base">
                Our company was established to raise the standard of professionalism in the painting and pressure washing industry. What began as a small operation has evolved into a structured, process‑driven service provider trusted by homeowners, business owners, and property managers who expect dependable execution and long‑lasting results.
              </p>
              <p className="font-body text-[#0a1a2f]/70 leading-relaxed mb-7 text-sm sm:text-base">
                Today, SPMP Solutions operates with a clear commitment to excellence, accountability, and customer confidence. Every job — big or small — gets our full attention and best work.
              </p>
              <a href={PHONE_HREF} className="btn-cta inline-flex">
                <Phone size={18} />
                Call Us Today
              </a>
            </div>
            <div className="relative">
              <img
                src={PAINTING_IMAGE}
                alt="Professional exterior painting in Little Rock, AR"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#f2a900] p-4 sm:p-6">
                <div className="font-display font-black text-white text-2xl sm:text-3xl">Locally</div>
                <div className="font-ui text-white/80 text-xs sm:text-sm uppercase tracking-wider">Owned &amp; Operated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-14 sm:py-20 bg-[#0a1a2f]">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label">What We Stand For</span>
            <span className="accent-rule mx-auto my-3"></span>
            <h2 className="font-display font-black text-[clamp(2.5rem,8vw,4rem)] text-white uppercase leading-none">
              Our <span className="text-[#f2a900]">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Quality", desc: "We use professional-grade equipment and premium materials on every job. No shortcuts.", icon: "⭐" },
              { title: "Honesty", desc: "Transparent pricing, clear communication, and no hidden fees. Ever.", icon: "🤝" },
              { title: "Reliability", desc: "We show up when we say we will and complete every job on schedule.", icon: "⏰" },
              { title: "Community", desc: "We're proud to serve Little Rock and invest in the communities we work in.", icon: "🏘️" }
            ].map((value) => (
              <div key={value.title} className="bg-white/5 border border-white/10 p-5 sm:p-6 hover:border-[#f2a900] transition-colors">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wide mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-20 bg-[#f9f9f9]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="section-label">Why Choose SPMP</span>
              <span className="accent-rule mx-auto my-3"></span>
              <h2 className="font-display font-black text-[clamp(2.5rem,8vw,4rem)] text-[#0a1a2f] uppercase leading-none">
                What Sets Us <span className="text-[#f2a900]">Apart</span>
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {[
                { title: "Locally Owned & Operated", desc: "We live and work in the Little Rock area. Our reputation is built on our community relationships." },
                { title: "Free Estimates", desc: "No pressure, no obligation. We'll assess your property and give you a clear, honest quote." },
                { title: "Residential & Commercial", desc: "From single-family homes to large commercial properties, we have the equipment and experience to handle any job." },
                { title: "Satisfaction Guaranteed", desc: "We stand behind our work. If you're not satisfied, we'll make it right." },
                { title: "Flexible Scheduling", desc: "We work around your schedule, including evenings and weekends for commercial clients." },
                { title: "Eco-Friendly Options", desc: "We use biodegradable, eco-friendly cleaning solutions that are safe for your family, pets, and landscaping." }
              ].map((item) => (
                <div key={item.title} className="flex gap-3 sm:gap-4 bg-white border border-[#0a1a2f]/10 p-4 sm:p-5">
                  <CheckCircle size={18} className="text-[#f2a900] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#0a1a2f] uppercase tracking-wide mb-1">{item.title}</h3>
                    <p className="font-body text-[#0a1a2f]/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-[#f2a900]">
        <div className="container text-center">
          <h2 className="font-display font-black text-[clamp(2rem,8vw,4rem)] text-white uppercase leading-none mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-body text-white/90 text-base sm:text-lg mb-7">
            Call or text us today for a free estimate. We serve Little Rock and all of Central Arkansas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-white text-[#f2a900] font-display font-black text-lg sm:text-xl uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-[#0a1a2f] hover:text-white transition-all">
              <Phone size={20} />
              {PHONE}
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-display font-black text-lg sm:text-xl uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-white hover:text-[#f2a900] transition-all">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile bottom padding for sticky CTA */}
      <div className="lg:hidden h-16" />

      <Footer />
    </div>
  );
}
