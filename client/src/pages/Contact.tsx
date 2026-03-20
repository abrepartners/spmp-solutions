// SPMP Solutions — Contact Page
// Design: Raw Craft — American Vernacular Brutalism
// Mobile-first: stacked layout, full-width form
import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, SERVICES, SERVICE_AREAS } from "@/lib/data";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", area: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 bg-[#0a1a2f]">
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <span className="accent-rule my-3"></span>
          <h1 className="font-display font-black text-[clamp(2.5rem,9vw,5rem)] text-white uppercase leading-none mb-4">
            Free Estimate.<br />
            <span className="text-[#f2a900]">No Obligation.</span>
          </h1>
          <p className="font-body text-white/70 text-base sm:text-lg max-w-xl">
            Call, text, or fill out the form below. We'll get back to you quickly with a transparent, honest quote for your project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              {submitted ? (
                <div className="bg-white border border-[#0a1a2f]/10 p-8 sm:p-10 text-center">
                  <CheckCircle size={48} className="text-[#f2a900] mx-auto mb-4" />
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0a1a2f] uppercase mb-3">
                    Message Received!
                  </h2>
                  <p className="font-body text-[#0a1a2f]/70 mb-6 text-sm sm:text-base">
                    Thank you for reaching out. We'll review your request and get back to you shortly with a free estimate. For faster service, call or text us directly.
                  </p>
                  <a href={PHONE_HREF} className="btn-cta inline-flex">
                    <Phone size={18} />
                    Call {PHONE}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-[#0a1a2f]/10 p-6 sm:p-8">
                  <h2 className="font-display font-black text-xl sm:text-2xl text-[#0a1a2f] uppercase mb-6">
                    Request a Free Estimate
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                    <div>
                      <label className="section-label block mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-[#0a1a2f]/20 bg-[#f9f9f9] px-4 py-3 font-ui text-[#0a1a2f] placeholder-[#0a1a2f]/40 focus:outline-none focus:border-[#f2a900] transition-colors text-base"
                      />
                    </div>
                    <div>
                      <label className="section-label block mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="501-555-0000"
                        className="w-full border border-[#0a1a2f]/20 bg-[#f9f9f9] px-4 py-3 font-ui text-[#0a1a2f] placeholder-[#0a1a2f]/40 focus:outline-none focus:border-[#f2a900] transition-colors text-base"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="section-label block mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full border border-[#0a1a2f]/20 bg-[#f9f9f9] px-4 py-3 font-ui text-[#0a1a2f] placeholder-[#0a1a2f]/40 focus:outline-none focus:border-[#f2a900] transition-colors text-base"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                    <div>
                      <label className="section-label block mb-2">Service Needed *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-[#0a1a2f]/20 bg-[#f9f9f9] px-4 py-3 font-ui text-[#0a1a2f] focus:outline-none focus:border-[#f2a900] transition-colors text-base"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>{s.shortName}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="section-label block mb-2">Your City *</label>
                      <select
                        name="area"
                        required
                        value={form.area}
                        onChange={handleChange}
                        className="w-full border border-[#0a1a2f]/20 bg-[#f9f9f9] px-4 py-3 font-ui text-[#0a1a2f] focus:outline-none focus:border-[#f2a900] transition-colors text-base"
                      >
                        <option value="">Select your city...</option>
                        {SERVICE_AREAS.map((a) => (
                          <option key={a.slug} value={a.slug}>{a.city}, {a.state}</option>
                        ))}
                        <option value="other">Other (please specify in message)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="section-label block mb-2">Project Details</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project — property size, what needs to be cleaned or painted, any specific concerns..."
                      className="w-full border border-[#0a1a2f]/20 bg-[#f9f9f9] px-4 py-3 font-ui text-[#0a1a2f] placeholder-[#0a1a2f]/40 focus:outline-none focus:border-[#f2a900] transition-colors resize-none text-base"
                    />
                  </div>

                  <button type="submit" className="btn-cta w-full justify-center text-base sm:text-lg py-4">
                    <Send size={18} />
                    Send My Request
                  </button>

                  <p className="font-ui text-[#0a1a2f]/40 text-xs text-center mt-4">
                    We typically respond within a few hours during business hours.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-4 sm:space-y-6">
              {/* Direct Contact */}
              <div className="bg-[#0a1a2f] p-6 sm:p-8">
                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase mb-5">
                  Contact Us<br />
                  <span className="text-[#f2a900]">Directly</span>
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-[#f2a900] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="section-label mb-1">Phone / Text</p>
                      <a href={PHONE_HREF} className="font-display font-bold text-lg sm:text-xl text-white hover:text-[#f2a900] transition-colors">
                        {PHONE}
                      </a>
                      <p className="font-ui text-white/50 text-xs mt-0.5">Call or text anytime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-[#f2a900] rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="section-label mb-1">Service Area</p>
                      <p className="font-ui text-white/80 text-sm">Little Rock, AR &amp; Surrounding Areas</p>
                      <p className="font-ui text-white/50 text-xs mt-0.5">Benton, Bryant, Cabot, Maumelle, Sherwood, Conway</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-[#f2a900] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Clock size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="section-label mb-1">Hours</p>
                      <p className="font-ui text-white/80 text-sm">Mon–Fri: 7:00 AM – 6:00 PM</p>
                      <p className="font-ui text-white/80 text-sm">Saturday: 8:00 AM – 4:00 PM</p>
                      <p className="font-ui text-white/50 text-xs mt-0.5">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white border border-[#0a1a2f]/10 p-5 sm:p-6">
                <h3 className="font-display font-bold text-base sm:text-lg text-[#0a1a2f] uppercase tracking-wide mb-4">
                  What to Expect
                </h3>
                <div className="space-y-3">
                  {[
                    { step: "1", text: "Submit your request or call us directly" },
                    { step: "2", text: "We'll contact you to schedule a free estimate" },
                    { step: "3", text: "Receive a transparent, upfront quote" },
                    { step: "4", text: "We schedule your service at a convenient time" },
                    { step: "5", text: "Professional results, guaranteed" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#f2a900] rounded-sm flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-black text-white text-xs">{item.step}</span>
                      </div>
                      <p className="font-body text-[#0a1a2f]/70 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-[#f2a900] p-5 sm:p-6">
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide mb-3">
                  Our Promise
                </h3>
                <ul className="space-y-2">
                  {["Free, no-obligation estimates", "Honest, transparent pricing", "Satisfaction guaranteed", "Locally owned & operated"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/90 font-ui text-sm">
                      <CheckCircle size={14} className="text-white flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
