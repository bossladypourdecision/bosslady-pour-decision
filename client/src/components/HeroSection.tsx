/* ============================================================
   HeroSection — BossLady's Pour Decision
   Full-bleed hero with brand logo, tagline, and CTA buttons
   Background: generated hero-bg image with purple overlay
   ============================================================ */
import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/hero-bg-6PLohdp54ngLTfobbSC9Aq.webp";
const LOGO_FRONT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/business-card-front_5cec5125.jpg";
const COCKTAIL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/cocktail-closeup-4nnQzuURMS7rje4cZVEkka.webp";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger hero animations after a short delay on mount
    const elements = heroRef.current?.querySelectorAll(".hero-animate");
    elements?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, i * 200 + 300);
    });
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "oklch(0.08 0.07 300)",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.35,
        }}
      />

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.07 300 / 60%) 0%, oklch(0.08 0.07 300 / 20%) 40%, oklch(0.08 0.07 300 / 60%) 80%, oklch(0.08 0.07 300) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.35 0.22 300 / 20%) 0%, transparent 70%)",
        }}
      />

      {/* Sparkle Stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-sparkle pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            borderRadius: "50%",
            background: i % 3 === 0 ? "oklch(0.72 0.12 75)" : i % 3 === 1 ? "oklch(0.60 0.28 340)" : "white",
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center py-32">
        {/* Logo Image */}
        <div
          className="hero-animate mb-8"
          style={{ opacity: 0, transform: "translateY(32px)", transition: "all 1s ease" }}
        >
          <img
            src={LOGO_FRONT}
            alt="BossLady's Pour Decision Logo"
            className="w-full max-w-3xl mx-auto"
            style={{
              filter: "drop-shadow(0 0 60px oklch(0.60 0.28 340 / 50%)) drop-shadow(0 0 20px oklch(0.72 0.12 75 / 30%))",
            }}
          />
        </div>

        {/* Divider */}
        <div
          className="hero-animate w-64 mb-8"
          style={{ opacity: 0, transform: "translateY(32px)", transition: "all 1s ease" }}
        >
          <div className="gold-divider" />
        </div>

        {/* Subtitle */}
        <p
          className="hero-animate font-elegant text-xl md:text-2xl mb-10 max-w-xl leading-relaxed"
          style={{ opacity: 0, transform: "translateY(32px)", transition: "all 1s ease",
            color: "oklch(0.85 0.06 75)",
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            transitionDelay: "0.5s",
          }}
        >
          Premium Mobile Bartending for Your Most Memorable Events
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-animate flex flex-col sm:flex-row gap-4"
          style={{ opacity: 0, transform: "translateY(32px)", transition: "all 1s ease" }}
        >
          <button
            onClick={() => handleScroll("#contact")}
            style={{
              background: "linear-gradient(135deg, oklch(0.60 0.28 340), oklch(0.50 0.25 330))",
              color: "white",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.875rem 2.5rem",
              borderRadius: "2px",
              fontSize: "0.8rem",
              border: "1px solid oklch(0.60 0.28 340 / 50%)",
              transition: "all 0.3s ease",
              cursor: "pointer",
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
            Book Your Event
          </button>
          <button
            onClick={() => handleScroll("#services")}
            style={{
              background: "transparent",
              color: "oklch(0.72 0.12 75)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.875rem 2.5rem",
              borderRadius: "2px",
              fontSize: "0.8rem",
              border: "1px solid oklch(0.72 0.12 75 / 60%)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.12 75 / 10%)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px oklch(0.72 0.12 75 / 30%)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Our Services
          </button>
        </div>

        {/* Floating Cocktail Accent */}
        <div
          className="hero-animate absolute right-8 bottom-32 hidden xl:block"
          style={{ opacity: 0, transform: "translateY(32px)", transition: "all 1s ease" }}
        >
          <img
            src={COCKTAIL_IMG}
            alt="Signature cocktail"
            className="w-48 h-48 object-cover rounded-full animate-float"
            style={{
              border: "2px solid oklch(0.72 0.12 75 / 40%)",
              boxShadow: "0 0 40px oklch(0.60 0.28 340 / 30%)",
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <div
          className="hero-animate mt-16 flex flex-col items-center gap-2"
          style={{ opacity: 0, transform: "translateY(32px)", transition: "all 1s ease" }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.72 0.12 75 / 60%)", fontFamily: "'Lato', sans-serif" }}
          >
            Scroll to Explore
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "linear-gradient(180deg, oklch(0.72 0.12 75 / 60%), transparent)" }}
          />
        </div>
      </div>
    </section>
  );
}
