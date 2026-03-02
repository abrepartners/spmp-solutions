// SPMP Solutions — Gallery Page
// Design: Raw Craft — American Vernacular Brutalism
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, BEFORE_AFTER_IMAGE, HERO_IMAGE, PAINTING_IMAGE, TEAM_IMAGE } from "@/lib/data";

const galleryItems = [
  {
    id: 1,
    title: "Driveway Pressure Washing",
    location: "Little Rock, AR",
    service: "Driveway Cleaning",
    image: BEFORE_AFTER_IMAGE,
    description: "Complete driveway restoration — removed years of algae, oil stains, and embedded grime."
  },
  {
    id: 2,
    title: "Residential Pressure Washing",
    location: "Chenal Valley, Little Rock",
    service: "House Washing",
    image: HERO_IMAGE,
    description: "Full exterior house washing — siding, driveway, and walkways restored to like-new condition."
  },
  {
    id: 3,
    title: "Exterior House Painting",
    location: "Hillcrest, Little Rock",
    service: "Exterior Painting",
    image: PAINTING_IMAGE,
    description: "Complete exterior repaint with premium Sherwin-Williams paint. Meticulous prep and clean lines."
  },
  {
    id: 4,
    title: "Team on the Job",
    location: "Little Rock Metro Area",
    service: "Commercial Services",
    image: TEAM_IMAGE,
    description: "Our professional crew ready to deliver quality results on every project."
  },
  {
    id: 5,
    title: "Commercial Pressure Washing",
    location: "North Little Rock, AR",
    service: "Commercial Washing",
    image: HERO_IMAGE,
    description: "Large commercial property exterior cleaning — building facade, parking areas, and walkways."
  },
  {
    id: 6,
    title: "Roof Soft Washing",
    location: "Benton, AR",
    service: "Roof Cleaning",
    image: BEFORE_AFTER_IMAGE,
    description: "Roof soft-wash treatment — eliminated black streaks and algae growth safely without shingle damage."
  }
];

const filters = ["All", "House Washing", "Driveway Cleaning", "Exterior Painting", "Roof Cleaning", "Commercial Washing"];

export default function Gallery() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.service === activeFilter);

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-[#1A1A1A]">
        <div className="container">
          <span className="section-label">Our Work</span>
          <span className="accent-rule my-3"></span>
          <h1 className="font-display font-black text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            Real Results.<br />
            <span className="text-[#E85D04]">Real Projects.</span>
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl">
            Browse our portfolio of completed projects across Little Rock and Central Arkansas. Every job tells the story of a property transformed.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-display font-bold text-sm uppercase tracking-wider px-4 py-2 border transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#E85D04] border-[#E85D04] text-white"
                    : "bg-white border-[#1A1A1A]/20 text-[#1A1A1A]/70 hover:border-[#E85D04] hover:text-[#E85D04]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="group bg-white border border-[#1A1A1A]/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={`${item.title} in ${item.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 bg-[#E85D04] text-white font-ui font-semibold text-xs uppercase tracking-wider px-2 py-1">
                    {item.service}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-[#1A1A1A] uppercase tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="font-ui text-[#E85D04] text-xs uppercase tracking-wider mb-2">{item.location}</p>
                  <p className="font-body text-[#1A1A1A]/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 bg-[#1A1A1A] p-10">
            <h2 className="font-display font-black text-4xl text-white uppercase leading-none mb-4">
              Want Results Like These?
            </h2>
            <p className="font-body text-white/70 mb-8">
              Call or text us for a free estimate. We serve Little Rock and all of Central Arkansas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="btn-cta">
                <Phone size={18} />
                Call {PHONE}
              </a>
              <Link href="/contact" className="btn-outline-light">
                Get a Free Estimate <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
