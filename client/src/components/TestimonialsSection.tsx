/* ============================================================
   TestimonialsSection — BossLady's Pour Decision
   Client testimonials with star ratings
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jasmine T.",
    event: "Wedding Reception",
    rating: 5,
    text: "BossLady's Pour Decision absolutely made our wedding! Every cocktail was perfectly crafted and the presentation was stunning. Our guests are still talking about the signature drinks. Absolutely phenomenal service from start to finish.",
  },
  {
    name: "Marcus & Diane W.",
    event: "Anniversary Party",
    rating: 5,
    text: "We hired BossLady's for our 25th anniversary party and it was the best decision we made. The bartenders were professional, friendly, and incredibly talented. The custom cocktail menu they created for us was beyond our expectations.",
  },
  {
    name: "Corporate Events Team",
    event: "Annual Gala",
    rating: 5,
    text: "Our company gala was elevated to a whole new level thanks to BossLady's Pour Decision. Their professionalism, responsiveness, and creativity in crafting signature cocktails impressed every single attendee. We will absolutely book again.",
  },
  {
    name: "Tasha R.",
    event: "Birthday Celebration",
    rating: 5,
    text: "I cannot say enough great things! The team showed up, set up beautifully, and kept the drinks flowing all night. Every guest complimented the cocktails. BossLady's truly brought the magic to my 40th birthday bash!",
  },
  {
    name: "Priya N.",
    event: "Bridal Shower",
    rating: 5,
    text: "From the initial consultation to the last pour, everything was seamless. They created a custom mocktail menu for our non-drinking guests too — such a thoughtful touch. Highly recommend for any event!",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

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

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.07 300)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.35 0.22 300 / 10%) 0%, transparent 70%)",
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
            What Our Clients Say
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
            Client <span style={{ color: "oklch(0.72 0.12 75)" }}>Reviews</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="reveal p-7 flex flex-col gap-4 transition-all duration-500"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                background: "linear-gradient(135deg, oklch(0.13 0.09 300), oklch(0.17 0.11 300))",
                border: "1px solid oklch(0.72 0.12 75 / 20%)",
                borderRadius: "4px",
                transitionDelay: `${i * 0.1}s`,
                ...(i === 1 && {
                  border: "1px solid oklch(0.60 0.28 340 / 40%)",
                  boxShadow: "0 0 30px oklch(0.60 0.28 340 / 15%)",
                }),
              }}
            >
              <Quote
                size={28}
                style={{ color: "oklch(0.72 0.12 75 / 40%)" }}
              />
              <p
                className="font-elegant text-base leading-relaxed flex-1"
                style={{
                  color: "oklch(0.82 0.05 300)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                }}
              >
                {t.text}
              </p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="oklch(0.72 0.12 75)"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  />
                ))}
              </div>
              <div
                className="pt-3"
                style={{ borderTop: "1px solid oklch(0.72 0.12 75 / 20%)" }}
              >
                <p
                  className="font-display font-bold text-sm"
                  style={{ color: "oklch(0.97 0.02 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="font-body text-xs mt-0.5"
                  style={{ color: "oklch(0.60 0.28 340)", fontFamily: "'Lato', sans-serif" }}
                >
                  {t.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              border: "1px solid oklch(0.72 0.12 75 / 40%)",
              color: "oklch(0.72 0.12 75)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.12 75 / 15%)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === current ? "oklch(0.72 0.12 75)" : "oklch(0.72 0.12 75 / 30%)",
                  transform: i === current ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              border: "1px solid oklch(0.72 0.12 75 / 40%)",
              color: "oklch(0.72 0.12 75)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.12 75 / 15%)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
