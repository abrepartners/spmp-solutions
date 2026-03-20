// SPMP Solutions — Gallery Page
// Design: Raw Craft — American Vernacular Brutalism
// Mobile-first responsive
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, BEFORE_AFTER_IMAGE, HERO_IMAGE, PAINTING_IMAGE, TEAM_IMAGE, DECK_WASH_IMAGE, GUTTER_CLEANING_IMAGE, SURFACE_NLR_IMAGE, BRICK_CHIMNEY_IMAGE } from "@/lib/data";

const galleryItems = [
  {
    id: 1,
    title: "Concrete Steps & Driveway Cleaning",
    location: "Sherwood, AR",
    service: "Driveway Cleaning",
    image: BEFORE_AFTER_IMAGE,
    description: "Before & after — concrete steps and driveway restored to like-new condition, removing years of buildup."
  },
  {
    id: 2,
    title: "House Wash — Full Exterior",
    location: "Roland, AR",
    service: "House Washing",
    image: HERO_IMAGE,
    description: "Complete exterior house wash — algae and grime removed from siding, restoring the home's curb appeal."
  },
  {
    id: 3,
    title: "Driveway & Garage Door Painting",
    location: "Conway, AR",
    service: "Exterior Painting",
    image: PAINTING_IMAGE,
    description: "Dramatic driveway pressure wash and garage door painting transformation. Night and day difference."
  },
  {
    id: 4,
    title: "Commercial Lot Cleaning",
    location: "Little Rock, AR",
    service: "Commercial Washing",
    image: TEAM_IMAGE,
    description: "Commercial property pressure washing — building exterior, parking area, and walkways cleaned."
  },
  {
    id: 5,
    title: "Deck Washing & Restoration",
    location: "Sherwood, AR",
    service: "House Washing",
    image: DECK_WASH_IMAGE,
    description: "Deck pressure washing to remove weathering, mildew, and embedded dirt — ready for staining or sealing."
  },
  {
    id: 6,
    title: "Gutter Cleaning",
    location: "Sherwood, AR",
    service: "Roof Cleaning",
    image: GUTTER_CLEANING_IMAGE,
    description: "Professional gutter cleaning — debris removed and gutters restored for proper drainage."
  },
  {
    id: 7,
    title: "Surface Cleaning — Concrete",
    location: "North Little Rock, AR",
    service: "Driveway Cleaning",
    image: SURFACE_NLR_IMAGE,
    description: "Concrete surface cleaning — oil stains, algae, and grime blasted away for a fresh, clean look."
  },
  {
    id: 8,
    title: "Brick & Chimney Cleaning",
    location: "Little Rock, AR",
    service: "House Washing",
    image: BRICK_CHIMNEY_IMAGE,
    description: "Brick and chimney exterior cleaning — soot, stains, and buildup removed safely without damage."
  }
];

const filters = ["All", "House Washing", "Driveway Cleaning", "Exterior Painting", "Roof Cleaning", "Commercial Washing", "Deck Cleaning"];

export default function Gallery() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.service === activeFilter);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 bg-[#0a1a2f]">
        <div className="container">
          <span className="section-label">Our Work</span>
          <span className="accent-rule my-3"></span>
          <h1 className="font-display font-black text-[clamp(2.5rem,9vw,5.5rem)] text-white uppercase leading-none mb-4">
            Real Results.<br />
            <span className="text-[#f2a900]">Real Projects.</span>
          </h1>
          <p className="font-body text-white/70 text-base sm:text-lg max-w-xl">
            Browse our portfolio of completed projects across Little Rock and Central Arkansas. Every job tells the story of a property transformed.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container">
          {/* Filter Tabs — horizontally scrollable on mobile */}
          <div className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-3 sm:px-4 py-2 border transition-all duration-200 flex-shrink-0 ${
                  activeFilter === filter
                    ? "bg-[#f2a900] border-[#f2a900] text-white"
                    : "bg-white border-[#0a1a2f]/20 text-[#0a1a2f]/70 hover:border-[#f2a900] hover:text-[#f2a900]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="group bg-white border border-[#0a1a2f]/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <img
                    src={item.image}
                    alt={`${item.title} in ${item.location}`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 bg-[#f2a900] text-white font-ui font-semibold text-xs uppercase tracking-wider px-2 py-1">
                    {item.service}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0a1a2f] uppercase tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="font-ui text-[#f2a900] text-xs uppercase tracking-wider mb-2">{item.location}</p>
                  <p className="font-body text-[#0a1a2f]/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16 bg-[#0a1a2f] p-8 sm:p-10">
            <h2 className="font-display font-black text-[clamp(2rem,7vw,3.5rem)] text-white uppercase leading-none mb-4">
              Want Results Like These?
            </h2>
            <p className="font-body text-white/70 mb-7 text-sm sm:text-base">
              Call or text us for a free estimate. We serve Little Rock and all of Central Arkansas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href={PHONE_HREF} className="btn-cta justify-center">
                <Phone size={18} />
                Call {PHONE}
              </a>
              <Link href="/contact" className="btn-outline-light justify-center">
                Get a Free Estimate <ArrowRight size={18} />
              </Link>
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
