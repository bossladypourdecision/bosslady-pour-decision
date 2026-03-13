/* ============================================================
   Footer — BossLady's Pour Decision
   Dark luxury footer with brand info and links
   ============================================================ */
import { Crown, Instagram, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "oklch(0.07 0.06 300)",
        borderTop: "1px solid oklch(0.72 0.12 75 / 15%)",
      }}
    >
      {/* Top gold line */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 60%), oklch(0.60 0.28 340 / 60%), oklch(0.72 0.12 75 / 60%), transparent)",
        }}
      />

      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Crown size={22} style={{ color: "oklch(0.72 0.12 75)" }} />
              <div>
                <p
                  className="font-script text-2xl leading-tight"
                  style={{ color: "oklch(0.60 0.28 340)", fontFamily: "'Dancing Script', cursive" }}
                >
                  BossLady's
                </p>
                <p
                  className="font-display text-xs tracking-[0.2em] uppercase"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  Pour Decision
                </p>
              </div>
            </div>
            <p
              className="font-elegant text-base leading-relaxed"
              style={{
                color: "oklch(0.65 0.05 300)",
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
              }}
            >
              "Making Pour Decisions One Drink At A Time"
            </p>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "oklch(0.55 0.05 300)", fontFamily: "'Lato', sans-serif" }}
            >
              Premium mobile bartending service for weddings, corporate events, and private parties. Woman-owned and operated.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: Instagram, href: "https://instagram.com/bossladys_pour_decision", label: "Instagram" },
                { icon: Mail, href: "mailto:bossladypourdecision@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+18045197640", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1px solid oklch(0.72 0.12 75 / 30%)",
                    color: "oklch(0.72 0.12 75)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.60 0.28 340 / 20%)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.60 0.28 340 / 60%)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.60 0.28 340)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.72 0.12 75 / 30%)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className="font-body text-sm transition-colors duration-300 flex items-center gap-2"
                    style={{ color: "oklch(0.60 0.08 300)", fontFamily: "'Lato', sans-serif" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.60 0.08 300)";
                    }}
                  >
                    <span style={{ color: "oklch(0.72 0.12 75 / 50%)", fontSize: "0.5rem" }}>✦</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-display text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, value: "(804) 519-7640", href: "tel:+18045197640" },
                { icon: Mail, value: "bossladypourdecision@gmail.com", href: "mailto:bossladypourdecision@gmail.com" },
                { icon: Instagram, value: "@bossladys_pour_decision", href: "https://instagram.com/bossladys_pour_decision" },
              ].map(({ icon: Icon, value, href }) => (
                <a
                  key={value}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm transition-colors duration-300"
                  style={{ color: "oklch(0.60 0.08 300)", fontFamily: "'Lato', sans-serif" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.60 0.08 300)";
                  }}
                >
                  <Icon size={14} style={{ color: "oklch(0.72 0.12 75)", flexShrink: 0 }} />
                  {value}
                </a>
              ))}
            </div>

            {/* Book CTA */}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-6 w-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, oklch(0.60 0.28 340), oklch(0.50 0.25 330))",
                color: "white",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.75rem 1.5rem",
                borderRadius: "2px",
                fontSize: "0.75rem",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px oklch(0.60 0.28 340 / 40%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Book Your Event
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(0.72 0.12 75 / 15%)" }}
        >
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.45 0.05 300)", fontFamily: "'Lato', sans-serif" }}
          >
            © {new Date().getFullYear()} BossLady's Pour Decision. All rights reserved.
          </p>
          <p
            className="font-body text-xs flex items-center gap-1"
            style={{ color: "oklch(0.45 0.05 300)", fontFamily: "'Lato', sans-serif" }}
          >
            Made with <Heart size={12} style={{ color: "oklch(0.60 0.28 340)" }} fill="oklch(0.60 0.28 340)" /> for every celebration
          </p>
        </div>
      </div>
    </footer>
  );
}
