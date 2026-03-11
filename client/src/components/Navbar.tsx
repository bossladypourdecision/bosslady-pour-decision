/* ============================================================
   Navbar — BossLady's Pour Decision
   Dark luxury style: deep purple bg, gold accents, script logo
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, Crown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 shadow-2xl"
          : "py-5"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(180deg, oklch(0.08 0.07 300 / 98%) 0%, oklch(0.10 0.06 300 / 95%) 100%)"
          : "linear-gradient(180deg, oklch(0.08 0.07 300 / 80%) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.72 0.12 75 / 20%)" : "none",
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
        >
          <Crown
            size={20}
            className="text-gold transition-transform group-hover:scale-110"
            style={{ color: "oklch(0.72 0.12 75)" }}
          />
          <div className="flex flex-col leading-none">
            <span
              className="font-script text-xl leading-tight"
              style={{ color: "oklch(0.60 0.28 340)", fontFamily: "'Dancing Script', cursive" }}
            >
              BossLady's
            </span>
            <span
              className="font-display text-xs tracking-[0.2em] uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
            >
              Pour Decision
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-100 opacity-80"
              style={{
                color: "oklch(0.97 0.02 75)",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.12em",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.97 0.02 75)";
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-gold text-xs px-5 py-2"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.12 75), oklch(0.65 0.14 75))",
              color: "oklch(0.10 0.06 300)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.5rem 1.25rem",
              borderRadius: "2px",
              fontSize: "0.7rem",
              transition: "all 0.3s ease",
            }}
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "oklch(0.72 0.12 75)" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4"
          style={{
            background: "oklch(0.08 0.07 300 / 98%)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid oklch(0.72 0.12 75 / 20%)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-body text-sm tracking-widest uppercase py-2"
              style={{
                color: "oklch(0.97 0.02 75)",
                fontFamily: "'Lato', sans-serif",
                borderBottom: "1px solid oklch(0.72 0.12 75 / 15%)",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-gold text-center mt-2"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.12 75), oklch(0.65 0.14 75))",
              color: "oklch(0.10 0.06 300)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.75rem 1.5rem",
              borderRadius: "2px",
              fontSize: "0.75rem",
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
