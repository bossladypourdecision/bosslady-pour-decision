/* ============================================================
   ContactSection — BossLady's Pour Decision
   Contact form + info with Instagram, email, phone
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Instagram, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".reveal");
            els.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0) translateX(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    toast.success("Your message has been sent! We'll be in touch soon. 🥂", {
      style: {
        background: "oklch(0.15 0.10 300)",
        border: "1px solid oklch(0.72 0.12 75 / 40%)",
        color: "oklch(0.97 0.02 75)",
      },
    });
    setForm({ name: "", email: "", phone: "", eventType: "", eventDate: "", guestCount: "", message: "" });
  };

  const inputStyle = {
    background: "oklch(0.13 0.09 300)",
    border: "1px solid oklch(0.72 0.12 75 / 25%)",
    borderRadius: "2px",
    color: "oklch(0.97 0.02 75)",
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle = {
    color: "oklch(0.72 0.12 75)",
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "0.4rem",
    display: "block",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, oklch(0.08 0.07 300) 0%, oklch(0.10 0.08 300) 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.60 0.28 340 / 8%) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="reveal font-script text-2xl mb-2 transition-all duration-700"
            style={{
              color: "oklch(0.60 0.28 340)",
              fontFamily: "'Dancing Script', cursive",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            Let's Create Something Special
          </p>
          <h2
            className="reveal font-display text-4xl md:text-5xl mb-4 transition-all duration-700"
            style={{
              color: "oklch(0.97 0.02 75)",
              fontFamily: "'Playfair Display', serif",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            Get In <span style={{ color: "oklch(0.72 0.12 75)" }}>Touch</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "1.2rem" }}>✦</span>
          </div>
          <p
            className="reveal font-elegant text-lg mt-4 max-w-xl mx-auto transition-all duration-700"
            style={{
              color: "oklch(0.75 0.05 300)",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            Ready to make your event unforgettable? Reach out and let's start planning your perfect pour.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div
            className="reveal md:col-span-2 flex flex-col gap-8 transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(-30px)" }}
          >
            <div>
              <h3
                className="font-display text-2xl font-bold mb-6"
                style={{ color: "oklch(0.97 0.02 75)", fontFamily: "'Playfair Display', serif" }}
              >
                Contact Info
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "(804) 519-7640",
                    href: "tel:+18045197640",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "bossladypourdecision@gmail.com",
                    href: "mailto:bossladypourdecision@gmail.com",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    value: "@bossladys_pour_decision",
                    href: "https://instagram.com/bossladys_pour_decision",
                  },
                  {
                    icon: MapPin,
                    label: "Service Area",
                    value: "Richmond, VA & Surrounding Areas",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "oklch(0.60 0.28 340 / 15%)" }}
                    >
                      <Icon size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase mb-1"
                        style={{ color: "oklch(0.60 0.12 300)", fontFamily: "'Lato', sans-serif" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-body text-sm transition-colors duration-300"
                          style={{ color: "oklch(0.85 0.06 75)", fontFamily: "'Lato', sans-serif" }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.color = "oklch(0.60 0.28 340)";
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.color = "oklch(0.85 0.06 75)";
                          }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          className="font-body text-sm"
                          style={{ color: "oklch(0.85 0.06 75)", fontFamily: "'Lato', sans-serif" }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social CTA */}
            <div
              className="p-6 rounded-sm"
              style={{
                background: "linear-gradient(135deg, oklch(0.60 0.28 340 / 15%), oklch(0.35 0.22 300 / 20%))",
                border: "1px solid oklch(0.60 0.28 340 / 30%)",
              }}
            >
              <p
                className="font-script text-xl mb-2"
                style={{ color: "oklch(0.60 0.28 340)", fontFamily: "'Dancing Script', cursive" }}
              >
                Follow Our Journey
              </p>
              <p
                className="font-body text-sm mb-4"
                style={{ color: "oklch(0.75 0.05 300)", fontFamily: "'Lato', sans-serif" }}
              >
                Stay updated with our latest events, cocktail creations, and behind-the-scenes moments.
              </p>
              <a
                href="https://instagram.com/bossladys_pour_decision"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-all duration-300"
                style={{
                  color: "oklch(0.72 0.12 75)",
                  fontFamily: "'Lato', sans-serif",
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.60 0.28 340)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                }}
              >
                <Instagram size={16} />
                @bossladys_pour_decision
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="reveal md:col-span-3 transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(30px)" }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-sm flex flex-col gap-5"
              style={{
                background: "linear-gradient(135deg, oklch(0.13 0.09 300), oklch(0.17 0.11 300))",
                border: "1px solid oklch(0.72 0.12 75 / 20%)",
              }}
            >
              <h3
                className="font-display text-2xl font-bold mb-2"
                style={{ color: "oklch(0.97 0.02 75)", fontFamily: "'Playfair Display', serif" }}
              >
                Book Your Event
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 70%)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 25%)";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 70%)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 25%)";
                    }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 70%)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 25%)";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Event Type</label>
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 70%)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 25%)";
                    }}
                  >
                    <option value="" style={{ background: "oklch(0.13 0.09 300)" }}>Select event type</option>
                    <option value="wedding" style={{ background: "oklch(0.13 0.09 300)" }}>Wedding</option>
                    <option value="corporate" style={{ background: "oklch(0.13 0.09 300)" }}>Corporate Event</option>
                    <option value="private" style={{ background: "oklch(0.13 0.09 300)" }}>Private Party</option>
                    <option value="birthday" style={{ background: "oklch(0.13 0.09 300)" }}>Birthday Celebration</option>
                    <option value="bridal" style={{ background: "oklch(0.13 0.09 300)" }}>Bridal Shower</option>
                    <option value="other" style={{ background: "oklch(0.13 0.09 300)" }}>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Event Date</label>
                  <input
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange}
                    style={{ ...inputStyle, colorScheme: "dark" }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 70%)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 25%)";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Guest Count</label>
                  <input
                    name="guestCount"
                    type="number"
                    value={form.guestCount}
                    onChange={handleChange}
                    placeholder="Estimated guests"
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 70%)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 25%)";
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, special requests, or questions..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 70%)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 25%)";
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: submitting
                    ? "oklch(0.40 0.15 340)"
                    : "linear-gradient(135deg, oklch(0.60 0.28 340), oklch(0.50 0.25 330))",
                  color: "white",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.875rem 2rem",
                  borderRadius: "2px",
                  fontSize: "0.8rem",
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px oklch(0.60 0.28 340 / 50%)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {submitting ? (
                  <>
                    <div
                      className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
