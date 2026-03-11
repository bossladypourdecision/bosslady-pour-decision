/* ============================================================
   AboutSection — BossLady's Pour Decision
   Woman-owned brand story, values, and mission
   ============================================================ */
import { useEffect, useRef } from "react";
import { Crown, Heart, Star, Sparkles } from "lucide-react";

const COCKTAIL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/cocktail-crafting-E9JznepwECQRrNuvDKHTwH.webp";

const values = [
  { icon: Crown, label: "Integrity", desc: "We uphold the highest standards in every pour." },
  { icon: Star, label: "Quality", desc: "Only premium ingredients and expert craftsmanship." },
  { icon: Heart, label: "Respect", desc: "Every guest is treated with warmth and care." },
  { icon: Sparkles, label: "Creativity", desc: "Signature cocktails tailored to your vision." },
];

export default function AboutSection() {
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
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, oklch(0.08 0.07 300) 0%, oklch(0.12 0.09 300) 50%, oklch(0.08 0.07 300) 100%)",
      }}
    >
      {/* Decorative background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.35 0.22 300 / 15%) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
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
            Our Story
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
            About <span style={{ color: "oklch(0.72 0.12 75)" }}>BossLady's</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div
            className="reveal transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(-30px)" }}
          >
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, oklch(0.60 0.28 340 / 30%), oklch(0.72 0.12 75 / 20%))",
                  filter: "blur(8px)",
                }}
              />
              <img
                src={COCKTAIL_IMG}
                alt="Expert bartender crafting a cocktail"
                className="relative rounded-lg w-full object-cover"
                style={{
                  border: "1px solid oklch(0.72 0.12 75 / 30%)",
                  aspectRatio: "3/2",
                }}
              />
              {/* Woman-Owned Badge */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-3 rounded-sm"
                style={{
                  background: "linear-gradient(135deg, oklch(0.60 0.28 340), oklch(0.50 0.25 330))",
                  border: "1px solid oklch(0.60 0.28 340 / 50%)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase text-white"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  ♀ Woman-Owned
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p
              className="reveal font-elegant text-lg leading-relaxed transition-all duration-700"
              style={{
                color: "oklch(0.85 0.06 75)",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.15rem",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              BossLady's Pour Decision is a proudly woman-owned mobile bartending service dedicated to transforming your events into unforgettable experiences. We bring the bar to you — with flair, finesse, and a whole lot of fun.
            </p>
            <p
              className="reveal font-body text-base leading-relaxed transition-all duration-700"
              style={{
                color: "oklch(0.75 0.05 300)",
                fontFamily: "'Lato', sans-serif",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              Our team of skilled and charismatic bartenders focuses on creating a warm, welcoming atmosphere for every guest. From expertly crafted cocktails to beautiful presentation, we prioritize delivering exceptional service and memories that last long after the last drink is poured.
            </p>
            <p
              className="reveal font-body text-base leading-relaxed transition-all duration-700"
              style={{
                color: "oklch(0.75 0.05 300)",
                fontFamily: "'Lato', sans-serif",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              Whether it's an intimate gathering or a grand celebration, we tailor every detail to your vision — because every event deserves a BossLady touch.
            </p>

            {/* Tagline */}
            <div
              className="reveal transition-all duration-700 mt-2"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <p
                className="font-script text-2xl"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Dancing Script', cursive" }}
              >
                "Making Pour Decisions One Drink At A Time"
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={label}
              className="reveal card-luxury p-6 text-center transition-all duration-700"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                background: "linear-gradient(135deg, oklch(0.15 0.10 300), oklch(0.18 0.12 300))",
                border: "1px solid oklch(0.72 0.12 75 / 25%)",
                borderRadius: "4px",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "oklch(0.60 0.28 340 / 15%)" }}
              >
                <Icon size={22} style={{ color: "oklch(0.72 0.12 75)" }} />
              </div>
              <h4
                className="font-display text-sm font-bold mb-2 tracking-wide"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
              >
                {label}
              </h4>
              <p
                className="font-body text-xs leading-relaxed"
                style={{ color: "oklch(0.70 0.05 300)", fontFamily: "'Lato', sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
