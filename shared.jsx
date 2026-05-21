// shared.jsx — Realza Tu Mirada (v2)
// Componentes compartidos + Header con logo imagen + ES/CA real + sticky reservar + scroll-color shift.

const { useEffect, useRef, useState, useLayoutEffect, useMemo, useCallback } = React;

// ─────────────────────────────────────────────────────────────
// Diccionario de traducciones ES / CA
// ─────────────────────────────────────────────────────────────
const I18N = {
  ES: {
    "nav.servicios": "Servicios",
    "nav.serum": "Sérum",
    "nav.formacion": "Formación",
    "nav.diario": "Diario",
    "nav.nosotros": "Nosotros",
    "nav.reservar": "Reservar",
    "cta.reservar": "Reservar cita",
    "cta.explorar": "Explorar",
    "common.consulta": "Consulta",
    "common.andorra": "Andorra",
    "common.estudio": "Estudio · Andorra",
  },
  CA: {
    "nav.servicios": "Serveis",
    "nav.serum": "Sèrum",
    "nav.formacion": "Formació",
    "nav.diario": "Diari",
    "nav.nosotros": "Nosaltres",
    "nav.reservar": "Reservar",
    "cta.reservar": "Reservar cita",
    "cta.explorar": "Explorar",
    "common.consulta": "Consulta",
    "common.andorra": "Andorra",
    "common.estudio": "Estudi · Andorra",
  },
};

// Context para idioma + utilidad t()
const LangContext = React.createContext({ lang: "ES", setLang: () => {}, t: (k) => k });

function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("rtm-lang") || "ES");
  useEffect(() => {
    localStorage.setItem("rtm-lang", lang);
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);
  const t = useCallback((key, fallback) => {
    const dict = I18N[lang] || I18N.ES;
    return dict[key] || I18N.ES[key] || fallback || key;
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

function useLang() {
  return React.useContext(LangContext);
}

// Bilingual text — renders one or the other based on current lang.
function L({ es, ca }) {
  const { lang } = useLang();
  if (lang === "CA" && ca) return ca;
  return es;
}

// ─────────────────────────────────────────────────────────────
// EyeMark — SVG icon-sized del logo (para footer, etc.)
// ─────────────────────────────────────────────────────────────
function EyeMark({ size = 80, color, drawn = false, className = "" }) {
  return (
    <svg viewBox="0 0 120 60" width={size} height={(size * 60) / 120} className={className} aria-hidden="true">
      <path className={drawn ? "draw" : ""} d="M6 36 Q60 -4 114 36" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" />
      <path className={drawn ? "draw" : ""} d="M10 38 Q60 56 110 38" fill="none" stroke={color || "currentColor"} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="60" cy="36" r="6" fill={color || "currentColor"} />
      <circle cx="62" cy="34" r="1.6" fill="var(--bg-canvas)" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Preloader
// ─────────────────────────────────────────────────────────────
function Preloader({ enabled = true }) {
  const [visible, setVisible] = useState(enabled);
  const [gone, setGone] = useState(!enabled);
  useEffect(() => {
    if (!enabled) { setVisible(false); setGone(true); return; }
    const t1 = setTimeout(() => setVisible(false), 100);
    const t2 = setTimeout(() => setGone(true), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [enabled]);
  if (gone) return null;
  return (
    <div className={"preloader" + (visible ? "" : " gone")}>
      <EyeMark size={140} drawn />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Header v2 — Logo imagen, switch ES/CA real, sticky Reservar
// ─────────────────────────────────────────────────────────────
function Header({ variant = "B" }) {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"header v2" + (scrolled ? " scrolled" : "")}>
      <div className="container header-inner">
        {/* Left: nav */}
        <nav className="header-nav">
          <a href="#servicios">{t("nav.servicios")}</a>
          <a href="#serum">{t("nav.serum")}</a>
          <a href="#formacion">{t("nav.formacion")}</a>
          <a href="#nosotros">{t("nav.nosotros")}</a>
        </nav>

        {/* Center spacer for grid */}
        <div className="header-center" />

        {/* Right: logo + lang + reservar */}
        <div className="header-actions">
          <div className="lang-switcher">
            <button className={lang === "ES" ? "active" : ""} onClick={() => setLang("ES")}>ES</button>
            <span className="sep" />
            <button className={lang === "CA" ? "active" : ""} onClick={() => setLang("CA")}>CA</button>
          </div>
          <a href="#reservar" className="btn-reservar-mini">
            {t("cta.reservar")}
            <span className="arrow">→</span>
          </a>
          <a href="#top" className="header-logo-img" aria-label="Realza tu mirada">
            <img src="assets/logo.jpg" alt="Realza tu mirada" />
          </a>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────
// StickyReserve — botón flotante que aparece al bajar
// ─────────────────────────────────────────────────────────────
function StickyReserve() {
  const [show, setShow] = useState(false);
  const { t } = useLang();
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 1.2;
      const nearBottom = (window.innerHeight + window.scrollY) > document.body.offsetHeight - 600;
      setShow(past && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href="#reservar" className={"sticky-reserve" + (show ? " visible" : "")}>
      <span className="dot" />
      <span className="lbl">{t("cta.reservar")}</span>
      <span className="arrow">→</span>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Footer v2 — denso, 4 columnas con foto del local + mini-mapa
// ─────────────────────────────────────────────────────────────
function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <section className="footer-cta">
        <div className="container footer-cta-inner">
          <Reveal>
            <p className="footer-cta-eyebrow">El último gesto antes de irte</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="footer-cta-h">
              Reserva <em>tu</em><br/>mirada.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="footer-cta-actions">
              <a className="btn btn-primary" href="#reservar">{t("cta.reservar")}<span className="arrow">→</span></a>
              <a className="link-arrow" href="#">WhatsApp directo <span className="arrow">→</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="footer-newsletter">
        <div className="container">
          <div className="footer-newsletter-grid">
            <div>
              <p className="footer-eyebrow">Boletín · Cada dos semanas</p>
              <h3>Súmate al <em>Círculo Mirada.</em></h3>
              <p className="footer-newsletter-sub">Rituales de cuidado, lanzamientos del estudio y acceso anticipado a próximas formaciones — directo a tu bandeja.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="tu@correo.com" aria-label="Tu correo" />
              <button type="submit" aria-label="Suscribirme">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-col-1">
              <h4>Estudio</h4>
              <div className="footer-studio-photo" />
              <ul>
                <li>Av. Carlemany 73, 2-A</li>
                <li>AD700 Escaldes-Engordany</li>
                <li>Andorra</li>
              </ul>
              <a href="#" className="footer-link-arrow">Cómo llegar <span className="arrow">→</span></a>
            </div>

            <div className="footer-col">
              <h4>Horarios</h4>
              <dl className="footer-hours">
                <dt>Lun</dt><dd>10:00 — 20:00</dd>
                <dt>Mar</dt><dd>10:00 — 20:00</dd>
                <dt>Mié</dt><dd>10:00 — 20:00</dd>
                <dt>Jue</dt><dd>10:00 — 20:00</dd>
                <dt>Vie</dt><dd>10:00 — 20:00</dd>
                <dt>Sáb</dt><dd>10:00 — 15:00</dd>
                <dt>Dom</dt><dd className="closed">Cerrado</dd>
              </dl>
            </div>

            <div className="footer-col">
              <h4>Servicios</h4>
              <ul className="footer-nav">
                <li><a href="#">Laminado de cejas</a></li>
                <li><a href="#">Lifting de pestañas</a></li>
                <li><a href="#">Extensiones clásicas</a></li>
                <li><a href="#">Diseño de mirada</a></li>
                <li><a href="#" style={{ marginTop: "0.6rem", color: "var(--accent-gold)" }}>Reservar →</a></li>
              </ul>
              <h4 style={{ marginTop: "1.6rem" }}>Tienda</h4>
              <ul className="footer-nav">
                <li><a href="#">Sérum 3 ml</a></li>
                <li><a href="#">Pack ritual</a></li>
                <li><a href="#">Tarjeta regalo</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contacto</h4>
              <ul className="footer-nav">
                <li><a href="tel:+376635994">📞 +376 635 994</a></li>
                <li><a href="#">WhatsApp →</a></li>
                <li><a href="mailto:hola@realzatumirada.com">hola@realzatumirada.com</a></li>
              </ul>

              <h4 style={{ marginTop: "1.6rem" }}>Sigue</h4>
              <div className="footer-social">
                <a href="#" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M14 4v9.5a3.5 3.5 0 11-3.5-3.5" /><path d="M14 4c0 2.5 2 4.5 4.5 4.5" />
                  </svg>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-3.3-.7L4 20Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-mega">
            <span>Realza</span>
            <span className="ital">tu mirada.</span>
          </div>

          <div className="footer-bottom">
            <span>© 2026 · Hecho con cuidado en Andorra</span>
            <span style={{ display: "flex", gap: "1.5rem" }}>
              <a href="#">Privacidad</a>
              <a href="#">Cookies</a>
              <a href="#">Términos</a>
            </span>
            <span className="footer-sig">by J&amp;S</span>
          </div>
        </div>
      </section>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// useReveal — IntersectionObserver para entradas
// ─────────────────────────────────────────────────────────────
function useReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add("in"); obs.unobserve(el); }
      }),
      { threshold: 0.18, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function LetterStagger({ text, children, as = "span", stagger = 0.04, className = "", style = {} }) {
  const Tag = as;
  const ref = useReveal();
  let raw = text;
  if (raw == null && typeof children === "string") raw = children;
  if (raw == null) raw = String(children ?? "");
  const str = String(raw);
  return (
    <Tag ref={ref} className={"letter-stagger " + className} style={style}>
      {str.split("").map((ch, i) => (
        <span className="letter" key={i} style={{ transitionDelay: i * stagger + "s" }}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </Tag>
  );
}

function Reveal({ children, as = "div", className = "", style = {}, delay = 0 }) {
  const Tag = as;
  const ref = useReveal();
  return (
    <Tag ref={ref} className={"reveal " + className} style={{ ...style, transitionDelay: delay + "s" }}>
      {children}
    </Tag>
  );
}

// ─────────────────────────────────────────────────────────────
// useScrollColorShift — applies CSS variables to <html> based
// on which section is currently most-visible. Each section
// element can carry `data-bg` and `data-fg` overrides; otherwise
// the body keeps its default.
// ─────────────────────────────────────────────────────────────
function useScrollColorShift(palette) {
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sections = document.querySelectorAll("[data-shift]");
        let current = null;
        const mid = window.innerHeight * 0.4;
        sections.forEach((s) => {
          const r = s.getBoundingClientRect();
          if (r.top <= mid && r.bottom >= mid) current = s;
        });
        if (current) {
          const key = current.getAttribute("data-shift");
          const stop = (palette && palette[key]) || null;
          if (stop) {
            const r = document.documentElement;
            r.style.setProperty("--shift-bg", stop.bg);
            r.style.setProperty("--shift-fg", stop.fg);
            r.style.setProperty("--shift-accent", stop.accent || "var(--accent-gold)");
          }
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [palette]);
}

Object.assign(window, {
  EyeMark, Preloader, Header, Footer, Reveal, LetterStagger, useReveal,
  StickyReserve, LangProvider, useLang, L, useScrollColorShift,
});
