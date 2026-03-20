// ============================================================
// SPMP SOLUTIONS — Shared Data
// All services, service areas, testimonials, and FAQs
// ============================================================

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  icon: string;
}

export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  description: string;
  neighborhoods?: string[];
}

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const PHONE = "501-533-9213";
export const PHONE_HREF = "tel:+15015339213";
export const BUSINESS_NAME = "SPMP Solutions";
export const SHORT_NAME = "SPMP Solutions";
export const TAGLINE = "Protect. Restore. Enhance.";
export const LOCATION = "Little Rock, AR";

export const HERO_IMAGE = "https://lh3.googleusercontent.com/d/1RKPL56xc-I92kd7z_rTTTvaUVZgYtAVp=w1200";
export const PAINTING_IMAGE = "https://lh3.googleusercontent.com/d/1DhMvMYBx_kn65O0-Fg7zLv2SWOJ3dQET=w1200";
export const BEFORE_AFTER_IMAGE = "https://lh3.googleusercontent.com/d/1MijO-33dBfdZaAQzNl37ri0C6n9ZrdG6=w1200";
export const TEAM_IMAGE = "https://lh3.googleusercontent.com/d/1BrIXut3jAU4xROIRMqLs58FAAuR8AJFO=w1200";
export const DECK_WASH_IMAGE = "https://lh3.googleusercontent.com/d/1IIRH-QX6TJpQ3IYQoV5TgIo9mc4Ge12n=w1200";
export const GUTTER_CLEANING_IMAGE = "https://lh3.googleusercontent.com/d/1svvHTRbw9BV2MX4r1GiglQJBO2dHOang=w1200";
export const SURFACE_NLR_IMAGE = "https://lh3.googleusercontent.com/d/1ATD9iz-mZM8zrOTZ0s7puWknVpw5k4Dw=w1200";
export const BRICK_CHIMNEY_IMAGE = "https://lh3.googleusercontent.com/d/1EVDUCUy6GVfZq0QlwJIZfaCffwQx632F=w1200";
export const LOGO_IMAGE = "https://lh3.googleusercontent.com/d/1uOlPM5Mi88DdcbXxxG5Jlz6xAIooNv9i=w800";
export const OG_IMAGE = "https://lh3.googleusercontent.com/d/1RKPL56xc-I92kd7z_rTTTvaUVZgYtAVp=w1200";

export const SERVICES: Service[] = [
  {
    slug: "exterior-interior-painting",
    name: "Exterior & Interior Painting",
    shortName: "Painting",
    tagline: "Transform your property with a fresh coat",
    description: "Professional exterior and interior painting services in Little Rock, AR. Quality workmanship, premium paints, and lasting results.",
    longDescription: "A fresh coat of paint is one of the most cost-effective ways to transform your property. Our professional painting team delivers meticulous prep work, clean lines, and lasting results using premium paints and materials. Whether you're refreshing your home's exterior, updating interior rooms, or painting a commercial space, we bring the same level of care and attention to every project.",
    benefits: [
      "Premium paints for lasting results",
      "Meticulous surface prep and priming",
      "Clean, sharp lines and professional finish",
      "Interior and exterior capabilities",
      "Residential and commercial projects"
    ],
    process: [
      { step: "Color Consultation", description: "We help you choose the right colors and finishes for your project." },
      { step: "Surface Preparation", description: "Thorough cleaning, sanding, priming, and caulking for a lasting finish." },
      { step: "Professional Application", description: "Multiple coats applied with professional tools for even coverage." },
      { step: "Final Walkthrough", description: "We inspect every detail and touch up anything that doesn't meet our standards." }
    ],
    faqs: [
      { question: "Do you paint both interior and exterior?", answer: "Yes. We handle both interior and exterior painting for residential and commercial properties throughout the Little Rock area." },
      { question: "What brands of paint do you use?", answer: "We use premium paints from trusted brands like Sherwin-Williams and Benjamin Moore. We can also work with paint you've already purchased if preferred." },
      { question: "How long does exterior painting take?", answer: "Most residential exterior painting projects take 2–5 days depending on the size of the home, number of stories, and complexity of the trim work. We'll give you a timeline estimate with your quote." }
    ],
    icon: "Paintbrush"
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    shortName: "Pressure Washing",
    tagline: "High-power cleaning for every surface",
    description: "Professional pressure washing services for residential and commercial properties in Little Rock, AR.",
    longDescription: "Our professional pressure washing services use commercial-grade equipment to blast away years of built-up grime, algae, mold, and staining from virtually any exterior surface. Whether it's your home's siding, a commercial parking lot, or a concrete walkway, we have the right equipment and expertise to restore it to like-new condition safely and efficiently.",
    benefits: [
      "Removes mold, mildew, algae, and bacteria",
      "Increases curb appeal and property value",
      "Prevents long-term surface damage",
      "Prepares surfaces for painting or sealing",
      "Residential and commercial capabilities"
    ],
    process: [
      { step: "Free Estimate", description: "We assess your property and provide a no-obligation quote." },
      { step: "Surface Prep", description: "We protect plants, furniture, and sensitive areas before starting." },
      { step: "Professional Cleaning", description: "We apply the right pressure and technique for each surface type." },
      { step: "Final Inspection", description: "We walk through the results with you to ensure your satisfaction." }
    ],
    faqs: [
      { question: "How much does pressure washing cost in Little Rock?", answer: "Pressure washing costs in Little Rock typically range from $150–$500 depending on the size and type of surface. We offer free estimates — call 501-533-9213 to get an accurate quote for your property." },
      { question: "How often should I pressure wash my home?", answer: "Most homes benefit from professional pressure washing once a year, typically in spring. Homes with heavy tree cover or north-facing surfaces may need more frequent cleaning due to algae and mildew growth." },
      { question: "Is pressure washing safe for all surfaces?", answer: "Not all surfaces should be high-pressure washed. We use the appropriate technique for each surface — soft-washing for roofs and siding, and higher pressure for concrete and brick." }
    ],
    icon: "Droplets"
  },
  {
    slug: "house-washing",
    name: "House Washing",
    shortName: "House Washing",
    tagline: "Soft-wash cleaning that's safe on your siding",
    description: "Gentle yet powerful soft-wash house washing for vinyl, brick, stucco, and wood siding in Little Rock, AR.",
    longDescription: "Our soft-wash house washing system uses low-pressure water combined with professional-grade cleaning solutions to safely remove mold, mildew, algae, and dirt from your home's exterior. Unlike high-pressure washing, soft-washing won't damage your siding, caulking, or windows — making it the preferred method for residential homes.",
    benefits: [
      "Safe for all siding types: vinyl, brick, stucco, wood",
      "Kills mold, mildew, and algae at the root",
      "Results last longer than pressure washing alone",
      "No risk of damage to windows or caulking",
      "Improves curb appeal dramatically"
    ],
    process: [
      { step: "Property Assessment", description: "We identify the siding type and any areas needing special attention." },
      { step: "Pre-Treatment", description: "We apply eco-friendly cleaning solutions to break down organic growth." },
      { step: "Soft-Wash Rinse", description: "Low-pressure rinse removes all contaminants safely and thoroughly." },
      { step: "Spot Treatment", description: "Any stubborn stains receive targeted treatment for a complete clean." }
    ],
    faqs: [
      { question: "What is soft washing and why is it better for my house?", answer: "Soft washing uses low pressure (similar to a garden hose) combined with professional cleaning solutions to kill and remove mold, algae, and mildew. It's safer for siding, windows, and caulking than high-pressure washing." },
      { question: "Will house washing remove the black streaks on my siding?", answer: "Yes. Those black streaks are typically caused by Gloeocapsa Magma, a type of algae. Our soft-wash system is specifically designed to eliminate it completely." },
      { question: "How long does house washing take?", answer: "Most residential homes take 2–4 hours depending on size. We'll give you a time estimate when we provide your free quote." }
    ],
    icon: "Home"
  },
  {
    slug: "commercial-pressure-washing",
    name: "Commercial Pressure Washing",
    shortName: "Commercial",
    tagline: "Keep your business looking its best",
    description: "Professional commercial pressure washing in Little Rock, AR. Storefronts, parking lots, sidewalks, and commercial properties.",
    longDescription: "First impressions matter in business. A clean exterior communicates professionalism and pride to your customers. Our commercial pressure washing services cover everything from retail storefronts and restaurant exteriors to parking garages, loading docks, and commercial properties of all sizes. We work around your schedule to minimize disruption to your business.",
    benefits: [
      "Improves customer first impressions",
      "Removes graffiti and gum",
      "Cleans parking lots and loading docks",
      "Flexible scheduling to minimize disruption",
      "Handles large commercial properties"
    ],
    process: [
      { step: "Site Assessment", description: "We evaluate the scope of work and identify any special requirements." },
      { step: "Schedule Planning", description: "We work around your business hours to minimize disruption." },
      { step: "Commercial Cleaning", description: "Our commercial-grade equipment handles large areas efficiently." },
      { step: "Quality Check", description: "We ensure all areas meet our commercial quality standards." }
    ],
    faqs: [
      { question: "Do you offer commercial pressure washing contracts?", answer: "Yes. We offer recurring maintenance contracts for commercial properties that need regular cleaning. Contact us to discuss a maintenance schedule that works for your business." },
      { question: "Can you clean a parking lot or parking garage?", answer: "Yes. We have the equipment to handle large commercial surfaces including parking lots, parking garages, loading docks, and drive-throughs." },
      { question: "Do you work after business hours?", answer: "Yes. We can schedule commercial cleaning early morning, evenings, or weekends to minimize disruption to your business operations." }
    ],
    icon: "Building2"
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    shortName: "Roof Cleaning",
    tagline: "Protect your roof — extend its life by years",
    description: "Professional low-pressure soft-wash roof cleaning in Little Rock, AR. Removes black streaks, moss, and algae safely.",
    longDescription: "Those dark streaks on your roof aren't just ugly — they're a sign of Gloeocapsa Magma algae that's actively degrading your shingles. Our low-pressure soft-wash roof cleaning system safely eliminates algae, moss, and lichen without voiding your roof warranty or causing shingle damage. Regular roof cleaning can extend the life of your roof by 5–10 years.",
    benefits: [
      "Extends roof life by 5–10 years",
      "Safe for all shingle types — won't void warranty",
      "Eliminates black streaks, moss, and lichen",
      "Prevents premature shingle replacement",
      "Improves home's curb appeal"
    ],
    process: [
      { step: "Roof Inspection", description: "We assess the extent of algae, moss, and lichen growth." },
      { step: "Solution Application", description: "We apply our professional-grade soft-wash solution to the entire roof." },
      { step: "Dwell Time", description: "The solution works to kill organic growth at the root level." },
      { step: "Low-Pressure Rinse", description: "Gentle rinse removes all dead growth without damaging shingles." }
    ],
    faqs: [
      { question: "Is soft-wash roof cleaning safe for my shingles?", answer: "Yes. Our low-pressure soft-wash method uses the same pressure as a garden hose, which is completely safe for asphalt shingles and won't void your manufacturer's warranty." },
      { question: "Will the black streaks come back after roof cleaning?", answer: "They will eventually return, typically within 2–4 years depending on your environment. We recommend annual inspections and cleaning every 2–3 years to keep your roof looking its best." },
      { question: "Can you clean a roof with moss or lichen?", answer: "Yes. Moss and lichen require a slightly different treatment approach, but our soft-wash system is effective against all types of organic growth on roofs." }
    ],
    icon: "ShieldCheck"
  },
  {
    slug: "driveway-concrete-cleaning",
    name: "Driveway & Concrete Cleaning",
    shortName: "Driveway Cleaning",
    tagline: "Restore your concrete to its original brightness",
    description: "Professional high-pressure driveway and concrete cleaning in Little Rock, AR. Removes oil stains, algae, and years of buildup.",
    longDescription: "Driveways, sidewalks, and patios take a beating from vehicle traffic, weather, and organic growth. Our high-pressure concrete cleaning service removes oil stains, tire marks, algae, mold, and years of embedded grime to restore your concrete surfaces to their original brightness. We use surface cleaners for consistent, streak-free results.",
    benefits: [
      "Removes oil stains, tire marks, and rust",
      "Eliminates slippery algae and mold growth",
      "Consistent, streak-free results",
      "Prepares surface for sealing",
      "Dramatically improves curb appeal"
    ],
    process: [
      { step: "Pre-Treatment", description: "Oil stains and heavy deposits receive targeted pre-treatment." },
      { step: "Surface Cleaning", description: "We use professional surface cleaners for consistent, even results." },
      { step: "Detail Work", description: "Edges and corners get hand-wand attention for a complete clean." },
      { step: "Final Rinse", description: "A thorough rinse removes all loosened debris and cleaning solution." }
    ],
    faqs: [
      { question: "Can you remove oil stains from my driveway?", answer: "We can significantly reduce or eliminate most oil stains using our pre-treatment process and high-pressure cleaning. Very old or deeply set stains may require multiple treatments." },
      { question: "How often should I have my driveway pressure washed?", answer: "We recommend annual driveway cleaning to prevent algae buildup and maintain your concrete's appearance. High-traffic areas may benefit from cleaning twice a year." },
      { question: "Do you clean stamped or decorative concrete?", answer: "Yes, but we use lower pressure settings for decorative concrete to protect the surface finish and any sealant. Let us know about any special surfaces when you call for your estimate." }
    ],
    icon: "CircleDot"
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    tagline: "Protect your foundation — clean gutters save thousands",
    description: "Professional gutter cleaning and flushing in Little Rock, AR. Prevents water damage, foundation issues, and pest infestations.",
    longDescription: "Clogged gutters are one of the leading causes of costly home damage — from foundation issues to roof rot and basement flooding. Our professional gutter cleaning service removes all debris, flushes the downspouts, and ensures your gutter system is flowing freely. We also inspect for damage and report any issues we find.",
    benefits: [
      "Prevents foundation and basement water damage",
      "Eliminates pest nesting grounds",
      "Protects fascia boards from rot",
      "Prevents ice dams in winter",
      "Includes downspout flushing and inspection"
    ],
    process: [
      { step: "Debris Removal", description: "We remove all leaves, twigs, and debris from gutters by hand." },
      { step: "Downspout Flush", description: "We flush all downspouts to ensure clear water flow." },
      { step: "Gutter Rinse", description: "We rinse gutters clean and check for proper drainage." },
      { step: "Damage Report", description: "We report any cracks, sagging, or damage we observe." }
    ],
    faqs: [
      { question: "How often should gutters be cleaned?", answer: "Most homes need gutter cleaning twice a year — once in late spring after trees have finished seeding, and once in late fall after leaves have dropped. Homes with heavy tree coverage may need quarterly cleaning." },
      { question: "What happens if I don't clean my gutters?", answer: "Clogged gutters can cause water to overflow and damage your foundation, siding, fascia boards, and landscaping. They also create ideal nesting conditions for mosquitoes, birds, and rodents." },
      { question: "Do you clean gutters on multi-story homes?", answer: "Yes. We have the equipment and experience to safely clean gutters on two and three-story homes." }
    ],
    icon: "CloudRain"
  },
  {
    slug: "deck-fence-cleaning",
    name: "Deck & Fence Cleaning",
    shortName: "Deck & Fence",
    tagline: "Revive your outdoor living spaces",
    description: "Professional deck and fence cleaning in Little Rock, AR. Remove mold, mildew, and weathering to restore wood and composite surfaces.",
    longDescription: "Your deck and fence are exposed to the harshest elements year-round. Over time, mold, mildew, algae, and UV damage can make even a quality deck look old and worn. Our deck and fence cleaning service uses the appropriate pressure and technique for wood, composite, and vinyl surfaces to safely restore their appearance and prepare them for staining or sealing.",
    benefits: [
      "Removes mold, mildew, and algae",
      "Prepares surface for staining or sealing",
      "Safe for wood, composite, and vinyl",
      "Extends the life of your deck and fence",
      "Restores natural wood color and grain"
    ],
    process: [
      { step: "Surface Assessment", description: "We identify the material type and condition to choose the right approach." },
      { step: "Pre-Treatment", description: "Eco-friendly cleaning solution is applied to break down organic growth." },
      { step: "Controlled Pressure Wash", description: "We use the appropriate pressure for the material to clean without damage." },
      { step: "Rinse & Inspection", description: "Final rinse and walkthrough to ensure complete satisfaction." }
    ],
    faqs: [
      { question: "Can pressure washing damage my wood deck?", answer: "Using too much pressure can damage wood fibers. We use controlled, low-to-medium pressure appropriate for wood and always follow the grain to prevent damage." },
      { question: "Should I seal my deck after cleaning?", answer: "Yes. Cleaning opens the wood grain and is the ideal time to apply a stain or sealant. We recommend sealing within 48 hours of cleaning for best results." },
      { question: "Can you clean composite decking?", answer: "Yes. Composite decking requires lower pressure than wood. We have experience with all major composite deck brands and will use the manufacturer-recommended cleaning approach." }
    ],
    icon: "TreePine"
  },
  {
    slug: "junk-removal",
    name: "Junk Removal & Property Maintenance",
    shortName: "Junk Removal",
    tagline: "Full-service property cleanup and maintenance",
    description: "Professional junk removal and property maintenance services in Little Rock, AR. Haul-away, cleanouts, and ongoing maintenance.",
    longDescription: "Beyond cleaning and painting, we offer comprehensive property maintenance and junk removal services to keep your property in top condition. From estate cleanouts and yard debris removal to ongoing property maintenance for landlords and property managers, we're your one-stop solution for exterior property care in Little Rock.",
    benefits: [
      "Full property cleanouts and haul-away",
      "Yard debris and green waste removal",
      "Ongoing maintenance for landlords",
      "Flexible scheduling",
      "Responsible disposal and recycling"
    ],
    process: [
      { step: "Assessment", description: "We assess the scope of the job and provide a transparent quote." },
      { step: "Scheduling", description: "We schedule at a time that's convenient for you." },
      { step: "Removal & Cleanup", description: "We remove all items and leave the area clean and tidy." },
      { step: "Responsible Disposal", description: "We sort items for donation, recycling, and responsible disposal." }
    ],
    faqs: [
      { question: "What types of junk do you remove?", answer: "We remove most household and yard items including furniture, appliances, yard debris, construction debris, and general clutter. Call us to confirm we can handle your specific items." },
      { question: "Do you offer estate cleanouts?", answer: "Yes. We provide sensitive, respectful estate cleanout services for families dealing with the loss of a loved one or downsizing." },
      { question: "Can you handle ongoing property maintenance?", answer: "Yes. We offer ongoing maintenance contracts for landlords and property managers who need regular exterior upkeep." }
    ],
    icon: "Truck"
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "little-rock",
    city: "Little Rock",
    state: "AR",
    description: "Little Rock is our home base. We serve all neighborhoods and zip codes throughout the city, from the Heights and Hillcrest to West Little Rock and South Little Rock.",
    neighborhoods: ["The Heights", "Hillcrest", "Chenal Valley", "West Little Rock", "Riverdale", "Quapaw Quarter", "Midtown", "South Little Rock", "East Little Rock", "Mabelvale"]
  },
  {
    slug: "north-little-rock",
    city: "North Little Rock",
    state: "AR",
    description: "We provide full exterior cleaning and painting services throughout North Little Rock, including Argenta, Levy, Rose City, and surrounding areas.",
    neighborhoods: ["Argenta", "Levy", "Rose City", "Camp Robinson", "Lakewood"]
  },
  {
    slug: "benton",
    city: "Benton",
    state: "AR",
    description: "Serving Benton and Saline County with professional pressure washing, painting, and property maintenance services.",
  },
  {
    slug: "bryant",
    city: "Bryant",
    state: "AR",
    description: "Bryant homeowners and businesses trust SPMP Solutions for reliable, professional exterior cleaning and painting services.",
  },
  {
    slug: "cabot",
    city: "Cabot",
    state: "AR",
    description: "We serve Cabot and the Lonoke County area with the same high-quality exterior services we provide throughout the Little Rock metro.",
  },
  {
    slug: "maumelle",
    city: "Maumelle",
    state: "AR",
    description: "Maumelle residents rely on SPMP Solutions for professional pressure washing, house washing, and painting services.",
  },
  {
    slug: "sherwood",
    city: "Sherwood",
    state: "AR",
    description: "Serving Sherwood and surrounding communities with professional exterior cleaning, painting, and property maintenance.",
  },
  {
    slug: "jacksonville",
    city: "Jacksonville",
    state: "AR",
    description: "Jacksonville residents and businesses trust SPMP Solutions for professional pressure washing, painting, and property maintenance services.",
  },
  {
    slug: "conway",
    city: "Conway",
    state: "AR",
    description: "We extend our services to Conway and Faulkner County for pressure washing, painting, and property maintenance needs.",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Karen M.",
    city: "Little Rock, AR",
    rating: 5,
    text: "Our office looks brand new. Samsonite is worth every penny. The team was professional from start to finish and the results speak for themselves. We'll be using them for all our commercial properties.",
    service: "Commercial Pressure Washing",
    date: "2024"
  },
  {
    name: "Tyrone B.",
    city: "Benton, AR",
    rating: 5,
    text: "Our house went from dull to stunning in 1 day. The crew showed up on time, worked efficiently, and left the place spotless. Best money we've spent on our home in years. Highly recommend to anyone.",
    service: "House Washing",
    date: "2024"
  },
  {
    name: "Emily J.",
    city: "Conway, AR",
    rating: 5,
    text: "The best experience I've ever had with a service company. CJ kept me apprised of their schedule, was timely, efficient, and personable. Professional, respectful, on time — honest and caring people. I have zero complaints!",
    service: "Exterior Painting",
    date: "2025"
  },
  {
    name: "Sarah D.",
    city: "Sherwood, AR",
    rating: 5,
    text: "CJ and Shirley were amazing! They responded quickly, did a wonderful job cleaning our gutters, and were some of the kindest people we've ever met. CJ explained everything upfront and the cost was very fair.",
    service: "Gutter Cleaning",
    date: "2025"
  },
  {
    name: "Michael R.",
    city: "Jacksonville, AR",
    rating: 5,
    text: "CJ did a tremendous job cleaning our clogged gutters and clearing the drain pipes for maximum water flow. He explained what he was going to do and the cost up front. Professional and thorough — exactly what we needed.",
    service: "Gutter Cleaning",
    date: "2024"
  },
  {
    name: "Patricia L.",
    city: "North Little Rock, AR",
    rating: 5,
    text: "Johnson did an outstanding job cleaning our awning and power washing our walkway. The difference is night and day. They have the equipment, the expertise, and the work ethic. We've already recommended them to our neighbors.",
    service: "Pressure Washing",
    date: "2025"
  }
];

export const STATS = [
  { value: "138+", label: "5-Star Reviews" },
  { value: "5.0★", label: "Google Rating" },
  { value: "8+", label: "Cities Served" },
  { value: "100%", label: "Satisfaction Guarantee" }
];
