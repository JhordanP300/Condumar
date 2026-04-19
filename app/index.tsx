"use client";
import Image from "next/image"; 
import { useState, useEffect, useRef, use } from "react";
/* import WhatsAppButton from "../componentes/boton-wpp"; */


// ─── DESIGN TOKENS ──────────────────────────────────────────────────────────
const colors = {
  orange: "#F26522",
  orangeLight: "#FF8040",
  orangeDark: "#C94F10",
  green: "#009444",
  greenLight: "#00B855",
  greenDark: "#006E32",
  black: "#0F0F0F",
  charcoal: "#1A1A1A",
  gray: "#6B6B6B",
  lightGray: "#F5F5F0",
  white: "#FFFFFF",
};

// ─── WHATSAPP FLOAT BUTTON ───────────────────────────────────────────────────
function WhatsAppButton() {
  const [pulse, setPulse] = useState(true);
  const WA_LINK = "https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20información%20sobre%20los%20cursos%20de%20Condumar";

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
        transition: "transform 0.2s, box-shadow 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.12)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,0.6)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,211,102,0.45)";
      }}
    >
      {/* Pulse ring */}
      <span style={{
        position: "absolute",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "rgba(37,211,102,0.35)",
        animation: "waPulse 2s ease-out infinite",
      }} />
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <style>{`
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </a>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Cursos", href: "#cursos" },
    { label: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(15,15,15,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(242,101,34,0.2)` : "none",
        transition: "all 0.35s ease",
        padding: "0 24px",
      }}
    >
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#inicio" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${colors.orange}, ${colors.green})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "20px",
            color: "white",
            fontWeight: "900",
            letterSpacing: "1px",
          }}>C</div>
          <span style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "26px",
            letterSpacing: "3px",
            color: colors.white,
            lineHeight: 1,
          }}>
            <span style={{ color: colors.orange }}>CONDU</span>MAR
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="desktop-nav">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              textDecoration: "none",
              color: "rgba(255,255,255,0.85)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "500",
              fontSize: "15px",
              letterSpacing: "0.5px",
              transition: "color 0.2s",
              position: "relative",
            }}
              onMouseEnter={e => e.currentTarget.style.color = colors.orange}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
            >{l.label}</a>
          ))}
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`,
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "700",
              fontSize: "14px",
              letterSpacing: "1px",
              padding: "10px 22px",
              borderRadius: "50px",
              boxShadow: `0 4px 16px rgba(242,101,34,0.4)`,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 24px rgba(242,101,34,0.55)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 4px 16px rgba(242,101,34,0.4)`;
            }}
          >Contáctanos</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú móvil"
          className="mobile-ham"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block",
              width: "26px",
              height: "2px",
              background: colors.orange,
              borderRadius: "2px",
              transition: "transform 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                : i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                : "scaleX(0)"
                : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(15,15,15,0.98)",
          borderTop: `2px solid ${colors.orange}`,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "18px",
                fontWeight: "500",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "16px",
              }}>
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textAlign: "center",
              textDecoration: "none",
              background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`,
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "700",
              fontSize: "16px",
              padding: "14px",
              borderRadius: "50px",
            }}>
            Contáctanos por WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-ham { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    }}>
      {/* Background gradient + pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          linear-gradient(135deg, ${colors.charcoal} 0%, #0a1a0f 50%, #1a0a00 100%)
        `,
        zIndex: 0,
      }} />
      {/* Road pattern overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            rgba(242,101,34,0.03) 60px,
            rgba(242,101,34,0.03) 62px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 80px,
            rgba(0,148,68,0.03) 80px,
            rgba(0,148,68,0.03) 82px
          )
        `,
        zIndex: 1,
      }} />
      {/* Big decorative circle */}
      <div style={{
        position: "absolute",
        right: "-200px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(242,101,34,0.12) 0%, transparent 70%)`,
        zIndex: 1,
      }} />
      <div style={{
        position: "absolute",
        left: "-100px",
        bottom: "-100px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(0,148,68,0.1) 0%, transparent 70%)`,
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 80px",
        width: "100%",
      }}>
        <div style={{ maxWidth: "700px" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: `rgba(242,101,34,0.12)`,
            border: `1px solid rgba(242,101,34,0.3)`,
            borderRadius: "50px",
            padding: "6px 16px",
            marginBottom: "28px",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: colors.orange, animation: "heroBlink 1.5s ease-in-out infinite" }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1.5px",
              color: colors.orange,
              textTransform: "uppercase",
            }}>Escuela de Conducción Certificada</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(52px, 8vw, 96px)",
            lineHeight: "0.95",
            color: colors.white,
            margin: "0 0 24px",
            letterSpacing: "2px",
          }}>
            Formando<br />
            <span style={{
              WebkitTextStroke: `2px ${colors.orange}`,
              color: "transparent",
            }}>conductores</span><br />
            <span style={{ color: colors.orange }}>con sentido</span><br />
            humano
          </h1>

          {/* Sub */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "rgba(255,255,255,0.65)",
            lineHeight: "1.7",
            marginBottom: "40px",
            maxWidth: "520px",
          }}>
            En Condumar transformamos aspirantes en conductores seguros, responsables y comprometidos con la vida en las vías de Colombia.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
            <a
              href="https://wa.me/573001234567?text=Hola%2C%20quiero%20matricularme"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`,
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: "700",
                fontSize: "16px",
                padding: "16px 32px",
                borderRadius: "50px",
                boxShadow: `0 8px 32px rgba(242,101,34,0.5)`,
                transition: "transform 0.25s, box-shadow 0.25s",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(242,101,34,0.65)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 8px 32px rgba(242,101,34,0.5)`;
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Matricúlate ahora
            </a>
            <a href="#cursos" style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "500",
              fontSize: "15px",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = colors.green}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
            >
              Ver cursos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: "40px",
            marginTop: "64px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            flexWrap: "wrap",
          }}>
            {[
              { num: "+5.000", label: "Conductores formados" },
              { num: "98%", label: "Tasa de aprobación" },
              { num: "15+", label: "Años de experiencia" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "36px",
                  color: i % 2 === 0 ? colors.orange : colors.green,
                  letterSpacing: "1px",
                  lineHeight: 1,
                }}>{s.num}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "4px",
                  letterSpacing: "0.5px",
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        zIndex: 2,
        opacity: 0.5,
      }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "white", letterSpacing: "2px", textTransform: "uppercase" }}>Desliza</span>
        <div style={{
          width: "24px",
          height: "36px",
          border: "2px solid rgba(255,255,255,0.4)",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "6px",
        }}>
          <div style={{
            width: "4px",
            height: "8px",
            background: colors.orange,
            borderRadius: "2px",
            animation: "scrollDot 1.8s ease-in-out infinite",
          }} />
        </div>
      </div>

      <style>{`
        @keyframes heroBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollDot { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(14px);opacity:0} }
      `}</style>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services() {
  const courses = [
    {
      code: "A2",
      title: "Motocicleta",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="52" height="52">
          <circle cx="16" cy="44" r="10" stroke="currentColor" strokeWidth="3"/>
          <circle cx="48" cy="44" r="10" stroke="currentColor" strokeWidth="3"/>
          <path d="M26 44H38M38 44L42 28H30L22 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 28L28 20H38L42 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="38" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: colors.orange,
      duration: "8 horas teoría · 4 horas práctica",
      features: ["Manejo básico y avanzado", "Normativa de tránsito", "Seguridad vial activa", "Simulacro de examen"],
      price: "Desde $280.000",
    },
    {
      code: "B1",
      title: "Automóvil",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="52" height="52">
          <rect x="8" y="24" width="48" height="22" rx="4" stroke="currentColor" strokeWidth="3"/>
          <path d="M14 24L18 12H46L50 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="18" cy="46" r="6" stroke="currentColor" strokeWidth="3"/>
          <circle cx="46" cy="46" r="6" stroke="currentColor" strokeWidth="3"/>
          <rect x="22" y="16" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 34H8M56 34H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      color: colors.green,
      duration: "12 horas teoría · 8 horas práctica",
      features: ["Manejo en ciudad e interurbano", "Mecánica básica", "Primeros auxilios", "Examen teórico-práctico"],
      price: "Desde $420.000",
      featured: true,
    },
    {
      code: "C1",
      title: "Camión & Vehículo Pesado",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" width="52" height="52">
          <rect x="4" y="20" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="3"/>
          <path d="M40 30H56L60 42V46H40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="14" cy="46" r="6" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="46" r="6" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="46" r="6" stroke="currentColor" strokeWidth="3"/>
          <rect x="40" y="20" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 30H40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3"/>
        </svg>
      ),
      color: "#8B5CF6",
      duration: "20 horas teoría · 16 horas práctica",
      features: ["Conducción en carretera", "Carga y descarga segura", "Normativa de carga", "Certificación nacional"],
      price: "Desde $750.000",
    },
  ];

  return (
    <section id="cursos" style={{
      padding: "100px 24px",
      background: colors.lightGray,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        height: "4px",
        background: `linear-gradient(90deg, ${colors.orange}, ${colors.green})`,
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            display: "inline-block",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: colors.orange,
            marginBottom: "12px",
          }}>Nuestros Programas</span>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(40px, 6vw, 72px)",
            color: colors.black,
            letterSpacing: "2px",
            lineHeight: "0.95",
            margin: "0 0 20px",
          }}>Categorías de<br /><span style={{ color: colors.orange }}>Licencia</span></h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            color: colors.gray,
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}>Cursos avalados por el Ministerio de Transporte de Colombia, con instructores certificados.</p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "28px",
        }}>
          {courses.map((course, i) => (
            <article
              key={i}
              style={{
                background: course.featured ? colors.black : colors.white,
                borderRadius: "20px",
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
                border: course.featured ? `2px solid ${colors.orange}` : `1px solid rgba(0,0,0,0.06)`,
                boxShadow: course.featured
                  ? `0 20px 60px rgba(242,101,34,0.2)`
                  : "0 4px 24px rgba(0,0,0,0.06)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = course.featured
                  ? `0 32px 80px rgba(242,101,34,0.3)`
                  : `0 16px 48px rgba(0,0,0,0.12)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = course.featured
                  ? `0 20px 60px rgba(242,101,34,0.2)`
                  : "0 4px 24px rgba(0,0,0,0.06)";
              }}
            >
              {/* Featured badge */}
              {course.featured && (
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`,
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  padding: "4px 12px",
                  borderRadius: "50px",
                  textTransform: "uppercase",
                }}>Más Popular</div>
              )}

              {/* Icon */}
              <div style={{
                width: "72px",
                height: "72px",
                borderRadius: "16px",
                background: `${course.color}18`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: course.color,
                marginBottom: "20px",
              }}>
                {course.icon}
              </div>

              {/* Code badge */}
              <div style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "13px",
                letterSpacing: "3px",
                color: course.color,
                marginBottom: "6px",
              }}>LICENCIA {course.code}</div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "32px",
                color: course.featured ? colors.white : colors.black,
                letterSpacing: "1px",
                margin: "0 0 8px",
              }}>{course.title}</h3>

              {/* Duration */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: course.featured ? "rgba(255,255,255,0.45)" : colors.gray,
                marginBottom: "24px",
              }}>{course.duration}</p>

              {/* Divider */}
              <div style={{ height: "1px", background: course.featured ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.07)", marginBottom: "24px" }} />

              {/* Features */}
              <ul style={{ listStyle: "none", margin: "0 0 28px", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {course.features.map((f, fi) => (
                  <li key={fi} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: course.featured ? "rgba(255,255,255,0.75)" : colors.charcoal,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill={`${course.color}20`}/>
                      <path d="M5 8l2 2 4-4" stroke={course.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: course.featured ? "rgba(255,255,255,0.4)" : colors.gray,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "2px",
                  }}>Inversión</div>
                  <div style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: "24px",
                    color: course.color,
                    letterSpacing: "1px",
                  }}>{course.price}</div>
                </div>
                <a
                  href={`https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20el%20curso%20${course.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    background: course.featured ? `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})` : "transparent",
                    border: course.featured ? "none" : `2px solid ${course.color}`,
                    color: course.featured ? "white" : course.color,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "700",
                    fontSize: "13px",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    letterSpacing: "0.5px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    if (!course.featured) {
                      e.currentTarget.style.background = course.color;
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!course.featured) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = course.color;
                    }
                  }}
                >
                  Me interesa
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  const values = [
    { icon: "🛡️", title: "Seguridad primero", text: "Enseñamos que cada decisión al volante impacta vidas. La seguridad no es opcional." },
    { icon: "🤝", title: "Sentido humano", text: "Formamos personas, no solo conductores. Empatía y respeto son parte del currículo." },
    { icon: "📋", title: "Legalidad y orden", text: "Cumplimos y enseñamos todas las normas del Código Nacional de Tránsito." },
    { icon: "🏆", title: "Excelencia educativa", text: "Instructores certificados, simuladores modernos y metodología pedagógica probada." },
  ];

  return (
    <section id="nosotros" style={{
      padding: "100px 24px",
      background: colors.charcoal,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background accent */}
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "40%",
        background: `linear-gradient(135deg, transparent, rgba(0,148,68,0.05))`,
        zIndex: 0,
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}>
          {/* Left: Text */}
          <div>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: colors.green,
              display: "block",
              marginBottom: "12px",
            }}>Quiénes Somos</span>
            <h2 style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(40px, 5vw, 64px)",
              color: colors.white,
              letterSpacing: "2px",
              lineHeight: "0.95",
              margin: "0 0 24px",
            }}>
              Más de 15 años<br />
              <span style={{ color: colors.orange }}>en las vías</span><br />
              colombianas
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}>
              Condumar nació con una convicción: que aprender a conducir es mucho más que maniobrar un vehículo. Es comprender que el respeto por la vida en la vía comienza con cada conductor.
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}>
              Con sede en el corazón de Antioquia, hemos formado a más de 5.000 conductores responsables que hoy recorren las vías del país con seguridad y conciencia.
            </p>

            {/* Progress bars */}
            {[
              { label: "Satisfacción de estudiantes", val: 97 },
              { label: "Aprobación en primer intento", val: 91 },
              { label: "Instructores certificados", val: 100 },
            ].map((bar, i) => (
              <div key={i} style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{bar.label}</span>
                  <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "16px", color: i % 2 === 0 ? colors.orange : colors.green }}>{bar.val}%</span>
                </div>
                <div style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${bar.val}%`,
                    background: i % 2 === 0
                      ? `linear-gradient(90deg, ${colors.orange}, ${colors.orangeLight})`
                      : `linear-gradient(90deg, ${colors.green}, ${colors.greenLight})`,
                    borderRadius: "3px",
                    transition: "width 1.5s ease",
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Values grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "24px 20px",
                transition: "background 0.3s, border-color 0.3s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(242,101,34,0.08)";
                  e.currentTarget.style.borderColor = `rgba(242,101,34,0.3)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: "700",
                  fontSize: "14px",
                  color: colors.white,
                  marginBottom: "8px",
                }}>{v.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "1.6",
                  margin: 0,
                }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section style={{
      padding: "80px 24px",
      background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDark} 50%, #8B2000 100%)`,
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)`,
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(36px, 6vw, 64px)",
          color: "white",
          letterSpacing: "2px",
          margin: "0 0 16px",
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
        }}>¿Listo para tomar el volante?</h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "17px",
          color: "rgba(255,255,255,0.85)",
          lineHeight: "1.7",
          marginBottom: "36px",
        }}>
          Escríbenos hoy y recibe información personalizada sobre el curso ideal para ti.
        </p>
        <a
          href="https://wa.me/573001234567?text=Hola%2C%20quiero%20iniciar%20mi%20curso%20en%20Condumar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "white",
            color: colors.orangeDark,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: "800",
            fontSize: "16px",
            padding: "16px 36px",
            borderRadius: "50px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            transition: "transform 0.25s, box-shadow 0.25s",
            letterSpacing: "0.5px",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill={colors.green}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: colors.black,
      padding: "60px 24px 32px",
      borderTop: `3px solid ${colors.orange}`,
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px",
          marginBottom: "48px",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.green})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "18px",
                color: "white",
              }}>C</div>
              <span style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "24px",
                letterSpacing: "3px",
                color: colors.white,
              }}>
                <span style={{ color: colors.orange }}>CONDU</span>MAR
              </span>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}>Formando conductores con sentido humano desde 2009.</p>
            <div style={{ display: "flex", gap: "12px" }}>
              {["facebook", "instagram", "youtube"].map(sn => (
                <a key={sn} href="#" aria-label={sn} style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s, background 0.2s",
                  textDecoration: "none",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = colors.orange;
                    e.currentTarget.style.background = `${colors.orange}20`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span style={{ fontSize: "14px" }}>{sn === "facebook" ? "f" : sn === "instagram" ? "◎" : "▶"}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "700", fontSize: "14px", color: "white", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Navegación</h4>
            {["Inicio", "Cursos", "Nosotros", "Contáctanos"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                marginBottom: "10px",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = colors.orange}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "700", fontSize: "14px", color: "white", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Contacto</h4>
            {[
              { icon: "📍", text: "Bello, Antioquia, Colombia" },
              { icon: "📞", text: "(604) 123-4567" },
              { icon: "✉️", text: "info@condumar.com.co" },
              { icon: "🕐", text: "Lun–Sáb: 7am – 6pm" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "10px",
                marginBottom: "12px",
                alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "14px", marginTop: "1px" }}>{item.icon}</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: "1.5",
                }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "700", fontSize: "14px", color: "white", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Legal</h4>
            {["Política de privacidad", "Términos y condiciones", "Política de datos", "Habeas Data"].map(l => (
              <a key={l} href="#" style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                marginBottom: "10px",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
              >{l}</a>
            ))}
            <div style={{
              marginTop: "16px",
              padding: "10px 14px",
              background: `${colors.green}15`,
              border: `1px solid ${colors.green}30`,
              borderRadius: "8px",
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: colors.green,
                margin: 0,
                lineHeight: "1.5",
              }}>✓ Avalado por el Ministerio de Transporte de Colombia</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.3)",
            margin: 0,
          }}>© 2025 Condumar. Todos los derechos reservados.</p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.2)",
            margin: 0,
          }}>NIT: 123.456.789-0 · Habilitación MINTRANSPORTE No. 00123</p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${colors.black}; }
        ::selection { background: ${colors.orange}; color: white; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${colors.black}; }
        ::-webkit-scrollbar-thumb { background: ${colors.orange}; border-radius: 3px; }
      `}</style>

      {/* SEO Meta (informational comments) */}
      {/* 
        Suggested meta tags for index.html:
        <title>Condumar | Escuela de Conducción en Bello, Antioquia</title>
        <meta name="description" content="Condumar: Escuela de conducción certificada en Antioquia. Cursos para licencias A2, B1 y C1. Más de 15 años formando conductores con sentido humano.">
        <meta name="keywords" content="escuela conducción Bello, licencia conducir Antioquia, curso conducción B1, licencia moto A2, conducir camión C1">
        <meta property="og:title" content="Condumar - Formando conductores con sentido humano">
        <meta property="og:description" content="Cursos de conducción certificados en Antioquia. A2, B1 y C1.">
        <link rel="canonical" href="https://www.condumar.com.co">
      */}

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>

  );
}
    
  
    

