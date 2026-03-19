/* ============================================================
   StatsSection — BossLady's Pour Decision
   Marquee banner + key stats strip
   ============================================================ */
import { useEffect, useRef } from "react";

const stats = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "5★", label: "Average Rating" },
  { value: "Woman", label: "Owned & Operated" },
];

export default function StatsSection() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      {/* Marquee Banner */}
      <div
        className="py-4 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.60 0.28 340), oklch(0.50 0.25 330), oklch(0.60 0.28 340))",
          backgroundSize: "200% 200%",
          animation: "shimmer 4s ease infinite",
        }}
      >
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="font-display text-sm font-bold tracking-widest uppercase"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              ✦ BossLady's Pour Decision &nbsp; ✦ Mobile Bartending &nbsp; ✦ Custom Cocktails &nbsp; ✦ Woman-Owned &nbsp; ✦ Making Pour Decisions One Drink At A Time &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Stats Strip */}
      <div
        className="py-12"
        style={{
          background: "linear-gradient(135deg, oklch(0.13 0.09 300), oklch(0.17 0.11 300))",
          borderTop: "1px solid oklch(0.72 0.12 75 / 20%)",
          borderBottom: "1px solid oklch(0.72 0.12 75 / 20%)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="reveal text-center transition-all duration-700"
                style={{ opacity: 0, transform: "translateY(20px)", transitionDelay: `${i * 0.1}s` }}
              >
                <p
                  className="font-display text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {value}
                </p>
                <p
                  className="font-body text-xs tracking-widest uppercase"
                  style={{ color: "oklch(0.65 0.06 300)", fontFamily: "'Lato', sans-serif" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
