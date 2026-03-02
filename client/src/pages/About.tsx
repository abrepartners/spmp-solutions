// SPMP Solutions — About Page
// Design: Raw Craft — American Vernacular Brutalism
import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, BUSINESS_NAME, TEAM_IMAGE, HERO_IMAGE, PAINTING_IMAGE, STATS } from "@/lib/data";

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[50vh] flex items-end pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src={TEAM_IMAGE} alt="The SPMP Solutions team in Little Rock, AR" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-[#1A1A1A]/30" />
        </div>
        <div className="container relative z-10">
          <span className="section-label">About Us</span>
          <span className="accent-rule my-3"></span>
          <h1 className="font-display font-black text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            Little Rock's<br />
            <span className="text-[#E85D04]">Trusted</span><br />
            Exterior Crew.
          </h1>
          <p className="font-body text-white/80 text-lg max-w-xl">
            Locally owned and operated. Committed to quality, honesty, and the Little Rock community.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#E85D04]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-5 px-6 text-center">
                <div className="font-display font-black text-3xl text-white">{stat.value}</div>
                <div className="font-ui text-white/80 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <span className="accent-rule my-3"></span>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-[#1A1A1A] uppercase leading-none mb-6">
                Built on Hard Work<br />
                &amp; <span className="text-[#E85D04]">Honest Service.</span>
              </h2>
              <p className="font-body text-[#1A1A1A]/70 leading-relaxed mb-4">
                Samsonite Painting &amp; More Pressure Washing was founded with a simple mission: provide Little Rock homeowners and businesses with professional exterior services at honest prices. We're your neighbors, and we treat every property we work on with the same care we'd give our own.
              </p>
              <p className="font-body text-[#1A1A1A]/70 leading-relaxed mb-4">
                From pressure washing and roof cleaning to exterior painting and junk removal, we've built our reputation on showing up on time, communicating clearly, and delivering results that exceed expectations. We don't cut corners, and we don't pad invoices.
              </p>
              <p className="font-body text-[#1A1A1A]/70 leading-relaxed mb-8">
                Over the years, we've completed hundreds of projects throughout Little Rock, North Little Rock, Benton, Bryant, and surrounding communities. Every job — big or small — gets our full attention and best work.
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
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#E85D04] p-6 hidden lg:block">
                <div className="font-display font-black text-white text-3xl">Locally</div>
                <div className="font-ui text-white/80 text-sm uppercase tracking-wider">Owned &amp; Operated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">What We Stand For</span>
            <span className="accent-rule mx-auto my-3"></span>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white uppercase leading-none">
              Our <span className="text-[#E85D04]">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality", desc: "We use professional-grade equipment and premium materials on every job. No shortcuts.", icon: "⭐" },
              { title: "Honesty", desc: "Transparent pricing, clear communication, and no hidden fees. Ever.", icon: "🤝" },
              { title: "Reliability", desc: "We show up when we say we will and complete every job on schedule.", icon: "⏰" },
              { title: "Community", desc: "We're proud to serve Little Rock and invest in the communities we work in.", icon: "🏘️" }
            ].map((value) => (
              <div key={value.title} className="bg-white/5 border border-white/10 p-6 hover:border-[#E85D04] transition-colors">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Why Choose SPMP</span>
              <span className="accent-rule mx-auto my-3"></span>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-[#1A1A1A] uppercase leading-none">
                What Sets Us <span className="text-[#E85D04]">Apart</span>
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { title: "Locally Owned & Operated", desc: "We live and work in the Little Rock area. Our reputation is built on our community relationships." },
                { title: "Free Estimates", desc: "No pressure, no obligation. We'll assess your property and give you a clear, honest quote." },
                { title: "Residential & Commercial", desc: "From single-family homes to large commercial properties, we have the equipment and experience to handle any job." },
                { title: "Satisfaction Guaranteed", desc: "We stand behind our work. If you're not satisfied, we'll make it right." },
                { title: "Flexible Scheduling", desc: "We work around your schedule, including evenings and weekends for commercial clients." },
                { title: "Eco-Friendly Options", desc: "We use biodegradable, eco-friendly cleaning solutions that are safe for your family, pets, and landscaping." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white border border-[#1A1A1A]/10 p-5">
                  <CheckCircle size={20} className="text-[#E85D04] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-base text-[#1A1A1A] uppercase tracking-wide mb-1">{item.title}</h3>
                    <p className="font-body text-[#1A1A1A]/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E85D04]">
        <div className="container text-center">
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white uppercase leading-none mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-body text-white/90 text-lg mb-8">
            Call or text us today for a free estimate. We serve Little Rock and all of Central Arkansas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-white text-[#E85D04] font-display font-black text-xl uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-[#1A1A1A] hover:text-white transition-all">
              <Phone size={22} />
              {PHONE}
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-display font-black text-xl uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white hover:text-[#E85D04] transition-all">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
