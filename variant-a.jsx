// variant-a.jsx — Editorial Mirada
// Homepage faithful to the brief: cream-dominant editorial magazine.

const VA_SERVICES = [
  { num: "01", title: "Laminado de cejas", tagline: "Más forma, más orden, más definición.", img: "assets/lamination-1.jpg", duration: "60 min" },
  { num: "02", title: "Lifting de pestañas", tagline: "Resultado natural, sin maquillaje.", img: "assets/lamination-2.jpg", duration: "75 min" },
  { num: "03", title: "Extensiones clásicas", tagline: "Volumen pelo a pelo, hecho a tu mirada.", img: "assets/lamination-4.jpg", duration: "120 min" },
  { num: "04", title: "Diseño de mirada", tagline: "Una mirada pensada solo para ti.", img: "assets/lamination-5.jpg", duration: "90 min" },
];

const VA_INGREDIENTS_L = [
  { name: "Péptido de biotina", desc: "Favorece el crecimiento y fortalece la pestaña." },
  { name: "Pentapéptido-17", desc: "Estimula la producción natural de queratina." },
  { name: "Extracto de ginseng", desc: "Fortalece el folículo y estimula la raíz." },
];
const VA_INGREDIENTS_R = [
  { name: "Vitamina B5 (Pantenol)", desc: "Acondiciona y protege la fibra capilar." },
  { name: "Ácido hialurónico", desc: "Hidratación profunda y protección duradera." },
  { name: "Vitamina E (Tocoferol)", desc: "Antioxidante que refuerza desde la raíz." },
];

const VA_TESTIMONIALS = [
  {
    quote: "Vine por una sesión y volví por la experiencia. Stephany lee tu cara como nadie. Salí con cejas hechas a mi medida.",
    name: "Marta L.",
    role: "Laminado de cejas",
    img: "assets/lamination-3.jpg",
  },
  {
    quote: "El sérum me cambió las pestañas en dos meses. Real, no marketing — y empecé a usarlo sin esperar resultados.",
    name: "Núria F.",
    role: "Sérum 3ml",
    img: "assets/lamination-5.jpg",
  },
  {
    quote: "Jonathan es minucioso hasta lo enfermizo. Por eso mi laminado dura todo el mes y nadie nota que está hecho.",
    name: "Elena R.",
    role: "Clienta habitual",
    img: "assets/lamination-6.jpg",
  },
  {
    quote: "Andorra tenía deuda con un sitio como este — atendido, cuidado y bonito. Vuelvo cada seis semanas.",
    name: "Clara V.",
    role: "Diseño de mirada",
    img: "assets/lamination-2.jpg",
  },
];

const VA_GALLERY = [
  { img: "assets/lamination-1.jpg", tag: "Diseño", tile: "va-tile-1" },
  { img: "assets/lamination-2.jpg", tag: "Lifting", tile: "va-tile-2" },
  { img: "assets/lamination-3.jpg", tag: "Laminado", tile: "va-tile-3" },
  { img: "assets/lamination-4.jpg", tag: "Brow lift", tile: "va-tile-4" },
  { img: "assets/lamination-5.jpg", tag: "Diseño", tile: "va-tile-5" },
  { img: "assets/lamination-6.jpg", tag: "Detalle", tile: "va-tile-6" },
  { img: "assets/serum-features.jpg", tag: "Sérum", tile: "va-tile-7" },
  { img: "assets/lamination-1.jpg", tag: "Mirada", tile: "va-tile-8" },
];

const ArrowSVG = ({ down = false, flip = false }) => (
  <svg viewBox="0 0 60 30">
    <path
      d={down ? "M2 4 Q30 30 56 4 M52 8 L56 4 L52 0" : "M2 18 Q14 -2 30 14 Q46 28 56 8 M50 12 L56 8 L58 14"}
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ──────────────────────────────────────────────
// HERO
// ──────────────────────────────────────────────
function VAHero({ heroMode = "kenburns" }) {
  const photo =
    heroMode === "kenburns" ? "assets/lamination-2.jpg" :
    heroMode === "static" ? "assets/lamination-1.jpg" :
    null; // typographic
  return (
    <section className="va-hero" id="top">
      {heroMode !== "typo" && (
        <div className="va-hero-media">
          <div className="photo" style={{ backgroundImage: `url(${photo})`, animation: heroMode === "static" ? "none" : undefined }} />
          <div className="peach" />
          <div className="vignette" />
        </div>
      )}
      {heroMode === "typo" && (
        <div className="va-hero-media">
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 50% 55%, rgba(234,208,181,0.4) 0%, transparent 60%), var(--bg-ink)"
          }} />
          <div style={{
            position: "absolute", left: "50%", top: "32%", transform: "translate(-50%, -50%)",
            opacity: 0.42,
          }}>
            <EyeMark size={420} color="var(--text-on-dark)" />
          </div>
        </div>
      )}
      <div className="container va-hero-content">
        <Reveal>
          <div className="va-hero-eyebrow">EST. ANDORRA · ESTUDIO DE MIRADA</div>
        </Reveal>
        <h1>
          <LetterStagger text="Realza" />
          <LetterStagger className="ital" stagger={0.05} text="tu mirada" />
        </h1>
        <Reveal delay={1.4}><p className="tagline">Cejas. Pestañas. Cuidado real, resultado natural.</p></Reveal>
        <Reveal delay={1.6}>
          <div className="va-hero-ctas">
            <a className="btn btn-on-dark" href="#reservar">
              Reservar cita
              <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#servicios" style={{ color: "var(--text-on-dark)", borderColor: "var(--text-on-dark)" }}>
              Explorar servicios
            </a>
          </div>
        </Reveal>
      </div>
      <div className="va-hero-scroll">
        <div className="track" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// MANIFEST sticky
// ──────────────────────────────────────────────
function VAManifest() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      const idx = Math.min(3, Math.floor(progress * 4));
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const sigRef = useReveal();
  return (
    <section className="va-manifest" ref={ref} style={{ minHeight: "300vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div className="container">
          <p className="va-manifest-quote">
            <span className={"frag " + (active >= 0 ? "active" : "")}>"Después de años trabajando miradas, </span>
            <span className={"frag " + (active >= 1 ? "active" : "")}>entendimos algo muy claro: </span>
            <span className={"frag gold " + (active >= 2 ? "active" : "")}>el cuidado no es un extra, </span>
            <span className={"frag " + (active >= 3 ? "active" : "")}>es parte de tu rutina."</span>
          </p>
          <div ref={sigRef} className="reveal va-manifest-sig">— J&amp;S</div>
          <span className="va-manifest-rule" />
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// SERVICES
// ──────────────────────────────────────────────
function VAServices() {
  return (
    <section className="va-services" id="servicios">
      <div className="container">
        <Reveal as="div" className="va-services-head">
          <h2>
            <span>Nuestros</span><br/>
            <span className="ital acc">servicios.</span>
          </h2>
          <p>Cada cita es un diseño hecho a medida — leemos tu cara, tu rutina y tu deseo antes de poner las manos.</p>
        </Reveal>
        <div className="va-service-row">
          {VA_SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="va-service">
                <img className="bg" src={s.img} alt={s.title} />
                <div className="num">{s.num}</div>
                <div className="info">
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                  <div className="meta">
                    <span>{s.duration} · Consulta</span>
                    <span className="arrow">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// SERUM SPOTLIGHT
// ──────────────────────────────────────────────
function VASerum() {
  return (
    <section className="va-serum" id="serum">
      <div className="container va-serum-grid">
        <div className="va-serum-text">
          <Reveal><div className="eyebrow">Producto estrella</div></Reveal>
          <h2 style={{ marginTop: "1.4rem" }}>
            <span>Un sérum</span>
            <span className="ital">único.</span>
          </h2>
          <Reveal delay={0.2}><p className="lead">Una fórmula pensada para tus pestañas. Probada por nosotros, refinada durante años junto a clientas reales del estudio.</p></Reveal>
          <Reveal delay={0.3}>
            <ul className="va-serum-features">
              <li><span className="dot" />Vegano</li>
              <li><span className="dot" />Libre de crueldad</li>
              <li><span className="dot" />100% natural</li>
              <li><span className="dot" />Compatible con extensiones</li>
            </ul>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="va-serum-actions">
              <a className="btn btn-primary" href="#">Añadir al carrito<span className="arrow">→</span></a>
              <a className="link-arrow" href="#">Conoce la fórmula <span className="arrow">→</span></a>
            </div>
          </Reveal>
        </div>
        <div className="va-serum-visual">
          <div className="va-serum-halo" />
          <span className="va-serum-aster tl">✦</span>
          <img className="va-serum-bottle" src="assets/serum-features.jpg" alt="Sérum Realza tu mirada" />
          <span className="va-serum-aster br">✦</span>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// INGREDIENTS (Instagram-style)
// ──────────────────────────────────────────────
function VAIngredients() {
  return (
    <section className="va-ingredients grain">
      <div className="container">
        <Reveal as="div" className="va-ingredients-head">
          <h2>
            Ingredientes
            <span className="ital">Clave</span>
          </h2>
        </Reveal>
        <div className="va-ingredients-stage">
          <div className="va-ingredient-side">
            {VA_INGREDIENTS_L.map((ing, i) => (
              <Reveal key={ing.name} delay={i * 0.12}>
                <div className="va-ingredient l">
                  <span className="arrow"><ArrowSVG /></span>
                  <h4>{ing.name}</h4>
                  <p>{ing.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="va-ingredients-bottle" />
          </Reveal>
          <div className="va-ingredient-side right">
            {VA_INGREDIENTS_R.map((ing, i) => (
              <Reveal key={ing.name} delay={i * 0.12 + 0.2}>
                <div className="va-ingredient r">
                  <span className="arrow"><ArrowSVG flip /></span>
                  <h4>{ing.name}</h4>
                  <p>{ing.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// GALLERY
// ──────────────────────────────────────────────
function VAGallery() {
  return (
    <section className="va-gallery">
      <div className="container">
        <Reveal as="div" className="va-gallery-head">
          <h2>
            <span className="ital">Resultados</span>
            <br /><span>que hablan.</span>
          </h2>
          <p>Una colección viva de los trabajos del estudio — sin retoques ni filtros que escondan la piel.</p>
        </Reveal>
        <div className="va-gallery-grid">
          {VA_GALLERY.map((g, i) => (
            <div key={i} className={"va-gallery-tile " + g.tile}>
              <img src={g.img} alt={g.tag} />
              <span className="tag">{g.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// DUO
// ──────────────────────────────────────────────
function VADuo() {
  return (
    <section className="va-duo" id="nosotros">
      <div className="container va-duo-grid">
        <div className="va-duo-photo">
          <div className="halo" />
          <img src="assets/duo-side.jpg" alt="Jonathan y Stephany" />
          <span className="aster">✦</span>
        </div>
        <div className="va-duo-text">
          <Reveal><div className="eyebrow">Los fundadores</div></Reveal>
          <h2>
            <span className="n1">Jonathan</span>
            <span className="amp">&amp;</span>
            <span className="n2">Stephany</span>
          </h2>
          <Reveal delay={0.1}>
            <p>Somos la pareja y el corazón detrás de Realza tu Mirada. Este proyecto nació de la pasión compartida por el detalle, el cuidado y la mirada bien hecha — y por una clientela que vuelve a vernos cada seis semanas como quien vuelve a casa.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="signature">J &amp; S</div>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="#" className="link-arrow">Nuestra historia <span className="arrow">→</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// TRAINING
// ──────────────────────────────────────────────
function VATraining() {
  return (
    <section className="va-training" id="formacion">
      <div className="va-training-bg" />
      <div className="container">
        <Reveal>
          <div className="eyebrow eyebrow-dark">
            <span className="dot" />
            Formación presencial · Próxima convocatoria
          </div>
        </Reveal>
        <h2>
          <span>Realza miradas</span>
          <span className="ital">desde cero.</span>
        </h2>
        <Reveal delay={0.2}>
          <p className="sub">Una formación pensada para que arranques con criterio, técnica y seguridad. Dos días, modelo real, todo incluido.</p>
        </Reveal>
        <Reveal delay={0.3}>
          <ul className="va-training-features">
            <li>Prácticas en modelo real</li>
            <li>Kit profesional de regalo</li>
            <li>Manual exclusivo Realza</li>
            <li>Certificado oficial</li>
            <li>Coffee break y comida</li>
            <li>Grupos reducidos (máx. 4)</li>
          </ul>
        </Reveal>
        <Reveal delay={0.4}>
          <a href="#" className="btn btn-gold" style={{ background: "var(--accent-gold)", color: "var(--text-primary)" }}>
            Reservar plaza
            <span className="arrow">→</span>
          </a>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="microcopy">Próxima convocatoria: <em style={{ fontStyle: "italic" }}>[FECHA]</em> · Pago aplazado disponible. Hablamos por WhatsApp si dudas.</p>
        </Reveal>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// TESTIMONIALS
// ──────────────────────────────────────────────
function VATestimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % VA_TESTIMONIALS.length), 8000);
    return () => clearInterval(t);
  }, []);
  const t = VA_TESTIMONIALS[idx];
  return (
    <section className="va-testimonials">
      <div className="container va-testimonials-grid">
        <Reveal>
          <div className="va-testimonial-photo" style={{ backgroundImage: `url(${t.img})` }} />
        </Reveal>
        <div className="va-testimonial-text">
          <span className="quote-mark">"</span>
          <blockquote key={t.quote}>{t.quote}</blockquote>
          <div className="who">
            <span className="name">{t.name}</span>
            <span className="role">{t.role}</span>
          </div>
          <div className="va-testimonial-nav">
            {VA_TESTIMONIALS.map((_, i) => (
              <span key={i} className={"dot " + (i === idx ? "active" : "")} onClick={() => setIdx(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// STUDIO
// ──────────────────────────────────────────────
function VAStudio() {
  return (
    <section className="va-studio" id="estudio">
      <div className="container va-studio-grid">
        <Reveal><div className="va-studio-photo" /></Reveal>
        <div className="va-studio-text">
          <Reveal><div className="eyebrow">El estudio</div></Reveal>
          <h2><span>Te esperamos</span><span className="ital">en Andorra.</span></h2>
          <p className="address">
            Av. Carlemany 73, 2-A<br />
            AD700 Escaldes-Engordany<br />
            Andorra
          </p>
          <dl className="hours">
            <dt>Lunes — Viernes</dt><dd>10:00 — 20:00</dd>
            <dt>Sábado</dt><dd>10:00 — 15:00</dd>
            <dt>Domingo</dt><dd>Cerrado</dd>
          </dl>
          <div className="contact">
            <a href="#">📞 +376 635 994</a>
            <a href="#">WhatsApp →</a>
          </div>
          <a className="btn btn-primary" href="#reservar">Reservar tu cita<span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// VARIANT A ROOT
// ──────────────────────────────────────────────
function VariantA({ tweaks }) {
  return (
    <div className="va">
      <Header dark={false} />
      <VAHero heroMode={tweaks.heroMode} />
      <VAManifest />
      <VAServices />
      <VASerum />
      <VAIngredients />
      <VAGallery />
      <VADuo />
      <VATraining />
      <VATestimonials />
      <VAStudio />
      <Footer />
    </div>
  );
}

Object.assign(window, { VariantA });
