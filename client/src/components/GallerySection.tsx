/* ============================================================
   GallerySection — BossLady's Pour Decision
   Masonry-style image gallery with business card display
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const COCKTAIL_CLOSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/cocktail-closeup-4nnQzuURMS7rje4cZVEkka.webp";
const COCKTAIL_CRAFT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/cocktail-crafting-E9JznepwECQRrNuvDKHTwH.webp";
const EVENT_SETUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/event-setup-HVzhfBL39ztiaMZZx2svNS.webp";
const WEDDING_BAR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/wedding-bar-BE4fkosWfDE7RSHFMaw6yx.webp";
const CARD_FRONT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/business-card-front_5cec5125.jpg";
const CARD_BACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425785803/4mryQgeQ9tokrJpM5EuZG3/business-card-back_5382b442.jpg";

const galleryItems = [
  { src: COCKTAIL_CLOSE, alt: "Signature Purple Cocktail", span: "col-span-1 row-span-2" },
  { src: WEDDING_BAR, alt: "Wedding Bar Setup", span: "col-span-2 row-span-1" },
  { src: COCKTAIL_CRAFT, alt: "Cocktail Crafting", span: "col-span-1 row-span-1" },
  { src: EVENT_SETUP, alt: "Event Bar Setup", span: "col-span-1 row-span-1" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

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
              }, i * 120);
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
      id="gallery"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, oklch(0.08 0.07 300) 0%, oklch(0.12 0.09 300) 50%, oklch(0.08 0.07 300) 100%)",
      }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom center, oklch(0.72 0.12 75 / 5%) 0%, transparent 70%)",
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
            A Taste of Our Work
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
            Our <span style={{ color: "oklch(0.72 0.12 75)" }}>Gallery</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-16" style={{ minHeight: "480px" }}>
          {galleryItems.map(({ src, alt, span }, i) => (
            <div
              key={alt}
              className={`reveal ${span} overflow-hidden rounded-sm group transition-all duration-700 relative`}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                border: "1px solid oklch(0.72 0.12 75 / 20%)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: "200px" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{
                  background: "linear-gradient(180deg, transparent 40%, oklch(0.08 0.07 300 / 85%) 100%)",
                }}
              >
                <p
                  className="font-display text-sm font-bold"
                  style={{ color: "oklch(0.97 0.02 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Card Display */}
        <div className="text-center mb-10">
          <p
            className="reveal font-script text-2xl mb-2 transition-all duration-700"
            style={{
              color: "oklch(0.60 0.28 340)",
              fontFamily: "'Dancing Script', cursive",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            Our Brand
          </p>
          <h3
            className="reveal font-display text-3xl mb-8 transition-all duration-700"
            style={{
              color: "oklch(0.97 0.02 75)",
              fontFamily: "'Playfair Display', serif",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            Business <span style={{ color: "oklch(0.72 0.12 75)" }}>Card</span>
          </h3>
        </div>

        {/* Flip Card */}
        <div className="flex flex-col items-center gap-6">
          <div
            className="reveal transition-all duration-700 relative cursor-pointer"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              perspective: "1000px",
              width: "min(600px, 100%)",
            }}
            onClick={() => setFlipped(!flipped)}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                transformStyle: "preserve-3d",
                transition: "transform 0.7s ease",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "2px solid oklch(0.72 0.12 75 / 40%)",
                  boxShadow: "0 20px 60px oklch(0.08 0.07 300 / 80%), 0 0 30px oklch(0.60 0.28 340 / 20%)",
                }}
              >
                <img
                  src={CARD_FRONT}
                  alt="BossLady's Pour Decision Business Card Front"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Back */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "2px solid oklch(0.72 0.12 75 / 40%)",
                  boxShadow: "0 20px 60px oklch(0.08 0.07 300 / 80%), 0 0 30px oklch(0.60 0.28 340 / 20%)",
                }}
              >
                <img
                  src={CARD_BACK}
                  alt="BossLady's Pour Decision Business Card Back"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <p
            className="font-body text-sm"
            style={{
              color: "oklch(0.60 0.12 300)",
              fontFamily: "'Lato', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Click the card to flip it ✦
          </p>
        </div>
      </div>
    </section>
  );
}
