// variant-b-sections.jsx — Manifest, Services, Sérum, Booking, Ingredients, Gallery, Duo, Testimonials, Studio

// ═══════════════════════════════════════════════════════════════
// MARQUEE
// ═══════════════════════════════════════════════════════════════
function VBMarquee() {
  const items = ["Laminado de cejas", "Lifting de pestañas", "Sérum 3 ml", "Diseño de mirada", "Formación profesional", "Extensiones clásicas"];
  return (
    <div className="vb-marquee" aria-hidden="true">
      <div className="vb-marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <React.Fragment key={i}>
            <span>{item}</span>
            <span className="sep">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MANIFEST — palabras grandes que se iluminan con scroll, más rápido
// ═══════════════════════════════════════════════════════════════
function VBManifest() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current; if (!el) return;
        const r = el.getBoundingClientRect();
        const total = Math.max(1, el.offsetHeight - window.innerHeight);
        const p = Math.max(0, Math.min(1, -r.top / total));
        setProgress(p);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const fragments = [
    { t: "El cuidado", lit: 0.0 },
    { t: "no es", lit: 0.15 },
    { t: "un extra,", lit: 0.3 },
    { t: "es parte", lit: 0.5, gold: true },
    { t: "de tu", lit: 0.7 },
    { t: "rutina.", lit: 0.85, ital: true, gold: true },
  ];

  return (
    <section className="vb-manifest" ref={ref} data-shift="manifest" data-screen-label="02 Manifiesto">
      <div className="vb-manifest-sticky">
        <div className="container">
          <Reveal><div className="vb-eyebrow">— Manifiesto</div></Reveal>
          <p className="vb-manifest-text">
            {fragments.map((f, i) => (
              <span
                key={i}
                className={"vb-frag" + (progress > f.lit ? " lit" : "") + (f.ital ? " ital" : "") + (f.gold ? " gold" : "")}
              >
                {f.t}
                {i < fragments.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
          <Reveal delay={0.3}>
            <div className="vb-manifest-sig">— J&amp;S, fundadores</div>
          </Reveal>
        </div>
        <div className="vb-manifest-progress">
          <div className="vb-manifest-progress-bar" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SERVICES — capítulos alternados con foto + texto + bullets + número grande
// ═══════════════════════════════════════════════════════════════
function VBServices() {
  return (
    <section className="vb-services" id="servicios" data-shift="services" data-screen-label="03 Servicios">
      <div className="container">
        <Reveal as="div" className="vb-section-head">
          <div className="vb-eyebrow">— El catálogo</div>
          <h2 className="vb-section-h">
            Cuatro capítulos<br />
            <span className="ital">de mirada.</span>
          </h2>
          <p className="vb-section-sub">Cada cita es una conversación con tu rostro antes de poner las manos. Esto es lo que ofrecemos.</p>
        </Reveal>

        {VB_SERVICES.map((s, i) => (
          <Reveal key={s.num} as="div" className={"vb-chapter " + (i % 2 ? "reverse" : "")}>
            <div className="vb-chapter-photo">
              <span className="vb-chapter-num-bg">{s.num}</span>
              <img src={s.img} alt={s.titleEs} />
              <span className="vb-chapter-corner-tag">{s.duration}</span>
            </div>
            <div className="vb-chapter-text">
              <div className="vb-chapter-micro">
                <span className="dot" />
                {s.micro} · {s.num}
              </div>
              <h3 className="vb-chapter-h">
                <L es={s.titleEs} ca={s.titleCa} />{" "}
                <span className="ital"><L es={s.italEs} ca={s.italCa} /></span>
              </h3>
              <p className="vb-chapter-desc">
                <L es={s.descEs} ca={s.descCa} />
              </p>
              <ul className="vb-chapter-bullets">
                {s.bullets.map(([es, ca], k) => (
                  <li key={k}><span className="b-mark">✦</span><L es={es} ca={ca} /></li>
                ))}
              </ul>
              <div className="vb-chapter-actions">
                <a href="#reservar" className="btn btn-primary">Reservar<span className="arrow">→</span></a>
                <a href="#" className="link-arrow">Ver detalle <span className="arrow">→</span></a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SÉRUM — tipografía gigante de fondo, botella flotante, INCI clickable
// ═══════════════════════════════════════════════════════════════
function VBSerum() {
  return (
    <section className="vb-serum" id="serum" data-shift="serum" data-screen-label="04 Sérum">
      {/* Background giant type */}
      <div className="vb-serum-bigtype" aria-hidden="true">
        <span className="t1">SÉRUM</span>
        <span className="t2">3 ml</span>
      </div>

      <div className="container vb-serum-grid">
        <div className="vb-serum-visual">
          <div className="vb-serum-halo" />
          <span className="vb-serum-aster tl">✦</span>
          <img className="vb-serum-product" src="assets/serum-product.jpg" alt="Sérum 3 ml" />
          <span className="vb-serum-aster br">❋</span>
          <span className="vb-serum-stamp">
            <svg viewBox="0 0 120 120" width="120" height="120">
              <defs>
                <path id="circle-path" d="M 60, 60 m -45, 0 a 45, 45 0 1, 1 90, 0 a 45, 45 0 1, 1 -90, 0" />
              </defs>
              <text>
                <textPath href="#circle-path" startOffset="0">
                  <tspan fontFamily="Manrope, sans-serif" fontSize="9" letterSpacing="3" fill="currentColor">REALZA · BY J&amp;S · ANDORRA · </tspan>
                </textPath>
                <textPath href="#circle-path" startOffset="50%">
                  <tspan fontFamily="Manrope, sans-serif" fontSize="9" letterSpacing="3" fill="currentColor">VEGANO · NATURAL · 3 ML · </tspan>
                </textPath>
              </text>
              <text x="60" y="65" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="22" fill="currentColor">✦</text>
            </svg>
          </span>
        </div>

        <div className="vb-serum-text">
          <Reveal><div className="vb-eyebrow">— Producto estrella</div></Reveal>
          <h2 className="vb-serum-h">
            <span>Un sérum</span>
            <span className="ital">único.</span>
          </h2>
          <Reveal delay={0.15}>
            <p className="vb-serum-lead">
              <L
                es="Una fórmula que pensamos y probamos durante años en el estudio. Aplicación nocturna, resultados visibles en seis semanas."
                ca="Una fórmula que vam pensar i provar durant anys a l'estudi. Aplicació nocturna, resultats visibles en sis setmanes."
              />
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="vb-serum-features">
              <div className="f"><span className="ic">🌱</span><span><L es="Vegano" ca="Vegà" /></span></div>
              <div className="f"><span className="ic">✦</span><span><L es="Sin crueldad" ca="Sense crueltat" /></span></div>
              <div className="f"><span className="ic">♻</span><span><L es="100% natural" ca="100% natural" /></span></div>
              <div className="f"><span className="ic">◐</span><span><L es="Compatible con extensiones" ca="Compatible amb extensions" /></span></div>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="vb-serum-actions">
              <a className="btn btn-primary" href="#">Añadir al carrito<span className="arrow">→</span></a>
              <a className="link-arrow" href="#ingredientes">Ver fórmula completa <span className="arrow">→</span></a>
            </div>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="vb-serum-trust">★★★★★  <em>4.9 / 5</em> · 247 reseñas verificadas</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// BOOKING — 3-step visual
// ═══════════════════════════════════════════════════════════════
function VBBooking() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const services = [
    { id: "laminado", title: "Laminado de cejas", duration: "60 min" },
    { id: "lifting", title: "Lifting de pestañas", duration: "75 min" },
    { id: "extensiones", title: "Extensiones clásicas", duration: "120 min" },
    { id: "diseno", title: "Diseño de mirada", duration: "90 min" },
  ];

  const today = new Date();
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    return d;
  });
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const times = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"];

  return (
    <section className="vb-booking" id="reservar" data-shift="booking" data-screen-label="05 Reservar">
      <div className="container">
        <Reveal as="div" className="vb-section-head">
          <div className="vb-eyebrow">— Reserva tu cita</div>
          <h2 className="vb-section-h">
            En tres pasos,<br/><span className="ital">a tu mirada.</span>
          </h2>
        </Reveal>

        <Reveal as="div" className="vb-booking-shell">
          <div className="vb-booking-steps">
            <div className={"step" + (step >= 1 ? " active" : "") + (step > 1 ? " done" : "")}>
              <span className="step-num">01</span>
              <span className="step-lbl">Servicio</span>
            </div>
            <span className="step-line" />
            <div className={"step" + (step >= 2 ? " active" : "") + (step > 2 ? " done" : "")}>
              <span className="step-num">02</span>
              <span className="step-lbl">Fecha y hora</span>
            </div>
            <span className="step-line" />
            <div className={"step" + (step >= 3 ? " active" : "")}>
              <span className="step-num">03</span>
              <span className="step-lbl">Confirmar</span>
            </div>
          </div>

          <div className="vb-booking-panel">
            {step === 1 && (
              <div className="vb-booking-pane vb-booking-services">
                <div className="vb-booking-pane-h">¿Qué te apetece hoy?</div>
                <div className="vb-booking-services-grid">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={"vb-booking-svc" + (service === s.id ? " selected" : "")}
                      onClick={() => setService(s.id)}
                    >
                      <span className="t">{s.title}</span>
                      <span className="d">{s.duration} · Consulta</span>
                    </button>
                  ))}
                </div>
                <div className="vb-booking-foot">
                  <span />
                  <button className="btn btn-primary" disabled={!service} onClick={() => service && setStep(2)}>
                    Siguiente <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="vb-booking-pane vb-booking-when">
                <div className="vb-booking-pane-h">Elige el día</div>
                <div className="vb-booking-days">
                  {days.map((d, i) => {
                    const key = d.toISOString().slice(0, 10);
                    const dnum = d.getDate();
                    const dname = dayNames[d.getDay()];
                    const closed = d.getDay() === 0;
                    return (
                      <button
                        key={key}
                        type="button"
                        disabled={closed}
                        className={"vb-day" + (date === key ? " selected" : "") + (closed ? " closed" : "")}
                        onClick={() => !closed && setDate(key)}
                      >
                        <span className="dname">{dname}</span>
                        <span className="dnum">{closed ? "—" : dnum}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="vb-booking-pane-h" style={{ marginTop: "2rem" }}>Elige la hora</div>
                <div className="vb-booking-times">
                  {times.map((tt) => (
                    <button
                      key={tt}
                      type="button"
                      disabled={!date}
                      className={"vb-time" + (time === tt ? " selected" : "")}
                      onClick={() => date && setTime(tt)}
                    >
                      {tt}
                    </button>
                  ))}
                </div>

                <div className="vb-booking-foot">
                  <button className="link-arrow" onClick={() => setStep(1)}>
                    <span className="arrow rev">←</span> Atrás
                  </button>
                  <button className="btn btn-primary" disabled={!date || !time} onClick={() => date && time && setStep(3)}>
                    Siguiente <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="vb-booking-pane vb-booking-confirm">
                <div className="vb-booking-pane-h">Confirma tu cita</div>
                <div className="vb-booking-summary">
                  <div className="row">
                    <span className="lbl">Servicio</span>
                    <span className="val">{services.find(s => s.id === service)?.title}</span>
                  </div>
                  <div className="row">
                    <span className="lbl">Fecha</span>
                    <span className="val">{date ? new Date(date).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" }) : ""}</span>
                  </div>
                  <div className="row">
                    <span className="lbl">Hora</span>
                    <span className="val">{time}</span>
                  </div>
                  <div className="row">
                    <span className="lbl">Estudio</span>
                    <span className="val">Av. Carlemany 73, 2-A · Escaldes-Engordany</span>
                  </div>
                </div>

                <div className="vb-booking-form">
                  <div className="vb-booking-field">
                    <label>Nombre</label>
                    <input type="text" placeholder="Tu nombre completo" />
                  </div>
                  <div className="vb-booking-field">
                    <label>Email</label>
                    <input type="email" placeholder="tu@correo.com" />
                  </div>
                  <div className="vb-booking-field">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="+376 ..." />
                  </div>
                  <div className="vb-booking-field full">
                    <label>Notas (opcional)</label>
                    <textarea rows="3" placeholder="Alergias, primera vez, cualquier cosa…"></textarea>
                  </div>
                </div>

                <div className="vb-booking-foot">
                  <button className="link-arrow" onClick={() => setStep(2)}>
                    <span className="arrow rev">←</span> Atrás
                  </button>
                  <button className="btn btn-primary">
                    Confirmar cita <span className="arrow">→</span>
                  </button>
                </div>
                <p className="vb-booking-tiny">Al reservar, recibirás un correo de confirmación y un recordatorio 24 h antes.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// INGREDIENTS — orbital interactive
// ═══════════════════════════════════════════════════════════════
function VBIngredients() {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="vb-ingredients" id="ingredientes" data-shift="ingred" data-screen-label="06 Ingredientes">
      <div className="container">
        <Reveal as="div" className="vb-section-head light">
          <div className="vb-eyebrow gold">— La fórmula</div>
          <h2 className="vb-section-h light">
            Seis ingredientes,<br /><span className="ital gold">una sola promesa.</span>
          </h2>
        </Reveal>

        <div className="vb-orbit" onMouseLeave={() => setHovered(null)}>
          <div className="vb-orbit-bg" />
          <div className="vb-orbit-ring r1" />
          <div className="vb-orbit-ring r2" />
          <div className="vb-orbit-center">
            <img src="assets/serum-product.jpg" alt="Sérum" />
          </div>

          {VB_INGREDIENTS.map((ing, i) => {
            const radius = 0.42;
            const x = 50 + Math.cos((ing.angle - 90) * Math.PI / 180) * 100 * radius;
            const y = 50 + Math.sin((ing.angle - 90) * Math.PI / 180) * 100 * radius;
            const lineAngle = ing.angle - 90;
            return (
              <React.Fragment key={ing.name}>
                <div
                  className={"vb-orbit-line" + (hovered === i ? " active" : "")}
                  style={{
                    width: `calc(${radius * 100}% - 80px)`,
                    transform: `translate(0, -50%) rotate(${lineAngle}deg)`,
                  }}
                />
                <div
                  className={"vb-orbit-node" + (hovered === i ? " active" : "")}
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: i * 0.15 + "s" }}
                  onMouseEnter={() => setHovered(i)}
                >
                  <div className="dot" />
                  <h4>{ing.name}</h4>
                  <p>{ing.desc}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="vb-ingredients-foot">
          <a href="#" className="link-arrow" style={{ color: "#FFC58A" }}>Ver INCI completo <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// GALLERY
// ═══════════════════════════════════════════════════════════════
function VBGallery() {
  return (
    <section className="vb-gallery" id="diario" data-shift="gallery" data-screen-label="07 Galería">
      <div className="container">
        <Reveal as="div" className="vb-gallery-head">
          <div>
            <div className="vb-eyebrow">— Trabajos del estudio</div>
            <h2 className="vb-section-h" style={{ marginTop: "1rem" }}>
              Resultados<br/><span className="ital">que hablan.</span>
            </h2>
          </div>
          <p className="vb-section-sub" style={{ maxWidth: "34ch" }}>
            Una colección viva de lo que hacemos cada semana en el estudio. Sin retoques ni filtros que escondan la piel real.
          </p>
        </Reveal>

        <div className="vb-gallery-spread">
          {VB_GALLERY.map((g, i) => (
            <div key={i} className={"vb-gtile " + g.c}>
              <img src={g.img} alt={g.tag} />
              <div className="vb-gtile-over">
                <span className="tag">{g.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="vb-gallery-foot">
          <a href="#" className="link-arrow">Ver galería completa <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// DUO — Jonathan & Stephany
// ═══════════════════════════════════════════════════════════════
function VBDuo() {
  return (
    <section className="vb-duo" id="nosotros" data-shift="duo" data-screen-label="08 Nosotros">
      <div className="container vb-duo-grid">
        <div className="vb-duo-amp" aria-hidden>&amp;</div>
        <Reveal as="div" className="vb-duo-photo">
          <img src="assets/duo-side.jpg" alt="Jonathan y Stephany" />
          <span className="vb-duo-caption">J&amp;S · 2026</span>
        </Reveal>
        <div className="vb-duo-text">
          <Reveal><div className="vb-eyebrow">— Los fundadores</div></Reveal>
          <h2 className="vb-duo-h">
            <span className="n1">Jonathan</span>
            <span className="n2"><span className="ital">&amp;</span> Stephany</span>
          </h2>
          <Reveal delay={0.15}>
            <p className="vb-duo-lead">
              <L
                es="Somos la pareja y el corazón detrás de Realza tu Mirada. Este proyecto nació de la pasión compartida por el detalle, el cuidado y la mirada bien hecha."
                ca="Som la parella i el cor darrere de Realza tu Mirada. Aquest projecte va néixer de la passió compartida pel detall, la cura i la mirada ben feta."
              />
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="vb-duo-quotes">
              <div className="q">
                <div className="role">Jonathan</div>
                <p>«El detalle no se ve, se siente. Por eso volvéis.»</p>
              </div>
              <div className="q">
                <div className="role">Stephany</div>
                <p>«Una buena ceja te ordena toda la cara. Eso lo sabemos.»</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="vb-duo-actions">
              <a href="#" className="link-arrow">Nuestra historia <span className="arrow">→</span></a>
              <a href="#formacion" className="link-arrow">Enseñamos lo que hacemos <span className="arrow">→</span></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════
function VBTestimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % VB_TESTIMONIALS.length), 7500);
    return () => clearInterval(t);
  }, []);
  const t = VB_TESTIMONIALS[idx];
  return (
    <section className="vb-testimonials" data-shift="testi" data-screen-label="10 Testimonios">
      <div className="container vb-testi-stage">
        <Reveal as="div" className="vb-section-head" style={{ textAlign: "center" }}>
          <div className="vb-eyebrow">— Lo que dicen</div>
        </Reveal>
        <div className="vb-testi-card-wrap">
          <div className="vb-testi-photo" style={{ backgroundImage: `url(${t.img})` }} />
          <div className="vb-testi-content">
            <span className="vb-testi-mark">"</span>
            <blockquote key={t.quote}>{t.quote}</blockquote>
            <div className="vb-testi-who">
              <span className="name">{t.name}</span>
              <span className="role">{t.role}</span>
            </div>
            <div className="vb-testi-stars">★★★★★</div>
          </div>
        </div>
        <div className="vb-testi-nav">
          {VB_TESTIMONIALS.map((_, i) => (
            <button key={i} type="button" className={"dot" + (i === idx ? " active" : "")} onClick={() => setIdx(i)} aria-label={"Testimonio " + (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// STUDIO — with hand-drawn mini-map of Andorra
// ═══════════════════════════════════════════════════════════════
function VBMiniMap() {
  return (
    <svg viewBox="0 0 480 360" className="vb-minimap" aria-hidden="true">
      <defs>
        <pattern id="paper" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#F5DEC1" />
          <circle cx="1" cy="1" r="0.3" fill="rgba(43, 24, 18, 0.05)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#paper)" />

      {/* Streets */}
      <g stroke="#8C4A1F" strokeWidth="1.4" fill="none" opacity="0.45">
        <path d="M0 180 Q120 175 240 180 Q360 185 480 180" />
        <path d="M240 0 L240 360" />
        <path d="M60 60 L420 300" />
        <path d="M50 280 Q200 200, 380 80" />
        <path d="M0 240 Q160 245 320 240 Q400 238 480 240" strokeDasharray="3 4" />
        <path d="M120 0 L130 360" strokeDasharray="3 4" />
        <path d="M370 0 L360 360" strokeDasharray="3 4" />
      </g>

      {/* River */}
      <path d="M-10 200 Q120 230, 250 210 Q380 195, 500 220" stroke="#A8C9D6" strokeWidth="6" fill="none" opacity="0.7" />
      <path d="M-10 200 Q120 230, 250 210 Q380 195, 500 220" stroke="#7DA9B8" strokeWidth="1" fill="none" />

      {/* Building blocks */}
      <g fill="#8C4A1F" opacity="0.18">
        <rect x="50" y="100" width="40" height="30" />
        <rect x="100" y="115" width="50" height="40" />
        <rect x="260" y="110" width="55" height="35" />
        <rect x="330" y="120" width="40" height="30" />
        <rect x="60" y="250" width="50" height="40" />
        <rect x="140" y="260" width="60" height="35" />
        <rect x="300" y="250" width="45" height="40" />
        <rect x="380" y="265" width="50" height="30" />
      </g>

      {/* Realza pin */}
      <g transform="translate(245, 175)">
        <circle r="32" fill="rgba(255, 197, 138, 0.4)">
          <animate attributeName="r" from="20" to="42" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="14" fill="#A35C32" />
        <circle r="6" fill="#FAEEDD" />
        <text y="50" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="14" fill="#2B1812">Realza</text>
      </g>

      {/* Compass */}
      <g transform="translate(420, 50)">
        <circle r="20" fill="none" stroke="#2B1812" strokeWidth="0.8" />
        <text y="-22" textAnchor="middle" fontSize="9" fill="#2B1812" fontFamily="Manrope, sans-serif">N</text>
        <path d="M0 -14 L4 8 L0 4 L-4 8 Z" fill="#2B1812" />
      </g>

      {/* Street name labels */}
      <g fontFamily="Manrope, sans-serif" fontSize="9" fill="#8C4A1F" opacity="0.7">
        <text x="120" y="178" letterSpacing="1.5">AV. CARLEMANY</text>
        <text x="280" y="100" letterSpacing="1.5" transform="rotate(60 280 100)">PL. CO-PRÍNCEPS</text>
      </g>

      {/* Border decoration */}
      <rect x="6" y="6" width="468" height="348" fill="none" stroke="#8C4A1F" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}

function VBStudio() {
  return (
    <section className="vb-studio" id="estudio" data-shift="studio" data-screen-label="11 Estudio">
      <div className="container vb-studio-grid">
        <Reveal as="div" className="vb-studio-photo-wrap">
          <div className="vb-studio-photo" />
          <div className="vb-studio-meta">
            <span>EST. 2018</span>
            <span>·</span>
            <span>ANDORRA</span>
          </div>
        </Reveal>

        <div className="vb-studio-text">
          <Reveal><div className="vb-eyebrow">— El estudio</div></Reveal>
          <h2 className="vb-section-h">
            Te esperamos<span className="ital">en Andorra.</span>
          </h2>
          <p className="vb-studio-address">
            Av. Carlemany 73, 2-A<br/>
            AD700 Escaldes-Engordany<br/>
            Andorra
          </p>

          <dl className="vb-studio-hours">
            <dt>Lun–Vie</dt><dd>10:00 — 20:00</dd>
            <dt>Sábado</dt><dd>10:00 — 15:00</dd>
            <dt>Domingo</dt><dd className="closed">Cerrado</dd>
          </dl>

          <Reveal as="div" className="vb-studio-map-wrap">
            <VBMiniMap />
            <a href="#" className="vb-studio-map-link">Abrir en Google Maps <span className="arrow">→</span></a>
          </Reveal>

          <div className="vb-studio-contact">
            <a href="tel:+376635994">📞 +376 635 994</a>
            <a href="#">WhatsApp →</a>
          </div>

          <a className="btn btn-primary" href="#reservar">Reservar tu cita<span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  VBMarquee, VBManifest, VBServices, VBSerum, VBBooking,
  VBIngredients, VBGallery, VBDuo, VBTestimonials, VBStudio, VBMiniMap,
});
