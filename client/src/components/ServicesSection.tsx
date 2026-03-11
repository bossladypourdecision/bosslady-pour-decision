/* ============================================================
   ServicesSection — BossLady's Pour Decision
   Cards for each service type with icons and descriptions
   ============================================================ */
import { useEffect, useRef } from "react";
import { Gem, GlassWater, Building2, PartyPopper, Sparkles, Users } from "lucide-react";

const EVENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/event-setup-HVzhfBL39ztiaMZZx2svNS.webp";
const WEDDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/wedding-bar-BE4fkosWfDE7RSHFMaw6yx.webp";

const services = [
  {
    icon: Gem,
    title: "Weddings",
    desc: "Your special day deserves extraordinary drinks. We craft custom cocktail menus that complement your wedding theme and delight every guest from ceremony to reception.",
    features: ["Custom signature cocktails", "Full bar setup & breakdown", "Champagne toast service", "Mocktail options available"],
  },
  {
    icon: Building2,
    title: "Corporate Events",
    desc: "Elevate your corporate gatherings with professional bartending that impresses clients and colleagues alike. We handle everything so you can focus on business.",
    features: ["Professional presentation", "Branded cocktail menus", "Large-scale service", "Non-alcoholic options"],
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    desc: "From birthday bashes to intimate dinner parties, we bring the full bar experience to your home or venue with style, energy, and creativity.",
    features: ["Flexible event sizes", "Custom themed drinks", "Full equipment provided", "Interactive bartending"],
  },
  {
    icon: GlassWater,
    title: "Custom Cocktail Menus",
    desc: "Work with our mixology experts to design a bespoke cocktail menu that tells your story. Every drink is crafted to match your theme, palette, and palate.",
    features: ["Personalized recipes", "Seasonal ingredients", "Tasting consultations", "Menu design included"],
  },
  {
    icon: Sparkles,
    title: "Mobile Bar Service",
    desc: "Our fully equipped mobile bar comes to you — complete with premium spirits, fresh garnishes, and all the tools needed for a world-class bar experience anywhere.",
    features: ["Fully stocked mobile bar", "All equipment included", "Setup & cleanup", "Flexible locations"],
  },
  {
    icon: Users,
    title: "Social Gatherings",
    desc: "Reunions, baby showers, bridal parties — no event is too intimate or too grand. We scale our service to fit your needs and make every gathering special.",
    features: ["Adaptable to any size", "Themed drink menus", "Friendly service", "Memorable experience"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.07 300)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, oklch(0.60 0.28 340 / 6%) 0%, transparent 60%)",
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
            What We Offer
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
            Our <span style={{ color: "oklch(0.72 0.12 75)" }}>Services</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "1.2rem" }}>✦</span>
          </div>
          <p
            className="reveal font-elegant text-lg mt-4 max-w-2xl mx-auto transition-all duration-700"
            style={{
              color: "oklch(0.75 0.05 300)",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            Tailored packages and custom drinks designed to fit your specific event needs and theme.
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { src: EVENT_IMG, label: "Private & Corporate Events" },
            { src: WEDDING_IMG, label: "Wedding Celebrations" },
          ].map(({ src, label }, i) => (
            <div
              key={label}
              className="reveal relative overflow-hidden rounded-sm transition-all duration-700 group"
              style={{
                opacity: 0,
                transform: i === 0 ? "translateX(-30px)" : "translateX(30px)",
                border: "1px solid oklch(0.72 0.12 75 / 25%)",
                aspectRatio: "16/9",
              }}
            >
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, oklch(0.08 0.07 300 / 80%) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4">
                <p
                  className="font-display text-lg font-bold"
                  style={{ color: "oklch(0.97 0.02 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {label}
                </p>
                <div
                  className="h-px w-12 mt-1"
                  style={{ background: "oklch(0.72 0.12 75)" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(({ icon: Icon, title, desc, features }, i) => (
            <div
              key={title}
              className="reveal card-luxury p-7 flex flex-col gap-4 transition-all duration-700 group"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                background: "linear-gradient(135deg, oklch(0.13 0.09 300), oklch(0.17 0.11 300))",
                border: "1px solid oklch(0.72 0.12 75 / 20%)",
                borderRadius: "4px",
                transitionDelay: `${i * 0.08}s`,
                cursor: "default",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 55%)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px oklch(0.60 0.28 340 / 15%)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 20%)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.60 0.28 340 / 15%)" }}
                >
                  <Icon size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
                </div>
                <h3
                  className="font-display text-lg font-bold"
                  style={{ color: "oklch(0.97 0.02 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
              </div>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "oklch(0.72 0.05 300)", fontFamily: "'Lato', sans-serif" }}
              >
                {desc}
              </p>
              <ul className="flex flex-col gap-1.5 mt-auto">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "oklch(0.75 0.06 300)", fontFamily: "'Lato', sans-serif" }}
                  >
                    <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleContact}
            className="reveal transition-all duration-700"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              background: "linear-gradient(135deg, oklch(0.60 0.28 340), oklch(0.50 0.25 330))",
              color: "white",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "1rem 3rem",
              borderRadius: "2px",
              fontSize: "0.8rem",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px oklch(0.60 0.28 340 / 50%)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
