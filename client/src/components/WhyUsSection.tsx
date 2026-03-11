/* ============================================================
   WhyUsSection — BossLady's Pour Decision
   Highlight strip showcasing key differentiators
   ============================================================ */
import { useEffect, useRef } from "react";
import { Wand2, Heart, Shield, Zap, Crown, Users } from "lucide-react";

const highlights = [
  {
    icon: Crown,
    title: "Woman-Owned",
    desc: "A unique perspective and personal touch that sets every event apart.",
  },
  {
    icon: Wand2,
    title: "Customized Experience",
    desc: "Tailored packages and custom drinks designed for your specific event.",
  },
  {
    icon: Heart,
    title: "Warm Atmosphere",
    desc: "Charismatic bartenders who make every guest feel genuinely welcome.",
  },
  {
    icon: Shield,
    title: "Attention to Detail",
    desc: "From cocktail crafting to beautiful presentation — perfection in every pour.",
  },
  {
    icon: Zap,
    title: "Responsive & Flexible",
    desc: "We adapt to any event size, theme, and timeline with seamless execution.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Skilled mixologists with a passion for creating unforgettable experiences.",
  },
];

export default function WhyUsSection() {
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
                (el as HTMLElement).style.transform = "translateY(0)";
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

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, oklch(0.12 0.09 300) 0%, oklch(0.15 0.11 300) 50%, oklch(0.12 0.09 300) 100%)",
        borderTop: "1px solid oklch(0.72 0.12 75 / 15%)",
        borderBottom: "1px solid oklch(0.72 0.12 75 / 15%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.72 0.12 75 / 5%) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="reveal font-script text-2xl mb-2 transition-all duration-700"
            style={{
              color: "oklch(0.60 0.28 340)",
              fontFamily: "'Dancing Script', cursive",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            The BossLady Difference
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
            Why <span style={{ color: "oklch(0.72 0.12 75)" }}>Choose Us</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal flex items-start gap-4 p-6 rounded-sm transition-all duration-700 group"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                background: "oklch(0.10 0.07 300 / 60%)",
                border: "1px solid oklch(0.72 0.12 75 / 15%)",
                transitionDelay: `${i * 0.08}s`,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 40%)";
                (e.currentTarget as HTMLElement).style.background = "oklch(0.13 0.09 300)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 15%)";
                (e.currentTarget as HTMLElement).style.background = "oklch(0.10 0.07 300 / 60%)";
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, oklch(0.60 0.28 340 / 20%), oklch(0.72 0.12 75 / 10%))",
                  border: "1px solid oklch(0.72 0.12 75 / 25%)",
                }}
              >
                <Icon size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
              </div>
              <div>
                <h4
                  className="font-display text-base font-bold mb-1"
                  style={{ color: "oklch(0.97 0.02 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h4>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "oklch(0.65 0.05 300)", fontFamily: "'Lato', sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
