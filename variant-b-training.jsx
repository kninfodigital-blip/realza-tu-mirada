// variant-b-training.jsx — Mini-landing de la formación
// Hero neón + programa día1/día2 expandible + perfil del alumnado + kit visual + logística

// SVG icons for the kit
function KitIcon({ name, size = 36 }) {
  const stroke = "#FFC58A";
  const sw = 1.5;
  const common = { fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "ic-tweezer":
      return (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <path d="M12 6 L20 22 L28 6 M20 22 L20 35" {...common} />
          <path d="M16 14 L20 22 L24 14" {...common} />
        </svg>
      );
    case "ic-tray":
      return (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <ellipse cx="20" cy="25" rx="14" ry="4" {...common} />
          <path d="M6 25 L7 32 Q7 34 9 34 L31 34 Q33 34 33 32 L34 25" {...common} />
          <path d="M14 25 L14 21 M20 25 L20 19 M26 25 L26 22" {...common} />
        </svg>
      );
    case "ic-patches":
      return (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <path d="M8 18 Q14 12, 20 16 Q26 12, 32 18 Q32 24, 26 26 Q20 28, 14 26 Q8 24, 8 18 Z" {...common} />
          <path d="M14 18 L18 18 M22 18 L26 18" {...common} />
        </svg>
      );
    case "ic-lashes":
      return (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <path d="M6 28 Q20 16, 34 28" {...common} />
          <path d="M10 26 L8 18 M14 23 L13 14 M18 21 L18 12 M22 21 L22 12 M26 23 L27 14 M30 26 L32 18" {...common} />
        </svg>
      );
    case "ic-glue":
      return (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <path d="M14 8 L26 8 L26 14 L28 16 L28 32 Q28 34 26 34 L14 34 Q12 34 12 32 L12 16 L14 14 Z" {...common} />
          <path d="M16 8 L16 4 L24 4 L24 8" {...common} />
        </svg>
      );
    case "ic-cleaner":
      return (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <path d="M12 14 L28 14 L28 32 Q28 34 26 34 L14 34 Q12 34 12 32 Z" {...common} />
          <path d="M16 14 L16 8 L24 8 L24 14" {...common} />
          <path d="M16 20 L24 20 M16 24 L24 24" {...common} opacity="0.5" />
        </svg>
      );
    case "ic-manual":
      return (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <path d="M8 8 L20 6 L32 8 L32 32 L20 30 L8 32 Z" {...common} />
          <path d="M20 6 L20 30" {...common} />
        </svg>
      );
    case "ic-bag":
      return (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <path d="M10 14 L30 14 L32 34 L8 34 Z" {...common} />
          <path d="M15 14 Q15 8, 20 8 Q25 8, 25 14" {...common} />
        </svg>
      );
    default: return null;
  }
}

function VBTraining() {
  const [openDay, setOpenDay] = useState(1);

  return (
    <section className="vb-training" id="formacion" data-shift="training" data-screen-label="09 Formación">
      <div className="vb-training-bg" />

      {/* PART 1 — HEADLINE & NEON */}
      <div className="vb-training-part vb-training-headline">
        <div className="container">
          <Reveal>
            <div className="vb-training-pill">
              <span className="dot" />
              Formación presencial · Andorra · <strong>Próxima convocatoria: [FECHA]</strong>
            </div>
          </Reveal>

          <div className="vb-training-neon-wrap">
            <Reveal delay={0.2}>
              <div className="vb-training-arch" />
            </Reveal>
            <Reveal delay={0.3}>
              <h2 className="vb-training-neon">Realza Miradas</h2>
            </Reveal>
            <Reveal delay={0.4}>
              <h3 className="vb-training-sub">
                desde <span className="ital">cero.</span>
              </h3>
            </Reveal>
          </div>

          <Reveal delay={0.5}>
            <p className="vb-training-lead">
              <L
                es="Dos días intensivos, modelo real y un kit profesional que te llevas a casa. Una formación pensada para quien empieza con ganas de hacer las cosas bien, sin atajos."
                ca="Dos dies intensius, model real i un kit professional que t'emportes a casa. Una formació pensada per a qui comença amb ganes de fer les coses bé, sense dreceres."
              />
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="vb-training-stats">
              <div className="stat">
                <span className="n">02</span>
                <span className="l">días intensivos</span>
              </div>
              <div className="stat">
                <span className="n">04</span>
                <span className="l">alumnas máximo</span>
              </div>
              <div className="stat">
                <span className="n">02</span>
                <span className="l">modelos reales</span>
              </div>
              <div className="stat">
                <span className="n">08</span>
                <span className="l">piezas en el kit</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* PART 2 — PROGRAM ACCORDION */}
      <div className="vb-training-part vb-training-program">
        <div className="container">
          <Reveal as="div" className="vb-training-section-h">
            <div className="vb-eyebrow gold">— El programa</div>
            <h3>Hora a hora,<span className="ital"> de verdad.</span></h3>
            <p>Sin relleno, sin slides de motivación. Esto es lo que hacemos cada día, contado al minuto.</p>
          </Reveal>

          <div className="vb-program">
            <div className={"vb-program-day" + (openDay === 1 ? " open" : "")}>
              <button type="button" className="vb-program-day-head" onClick={() => setOpenDay(openDay === 1 ? null : 1)}>
                <span className="vb-program-day-num">Día 01</span>
                <span className="vb-program-day-title">Anatomía, técnica, primera práctica.</span>
                <span className="vb-program-day-meta">09:30 — 18:00 · Sábado</span>
                <span className="vb-program-day-icon">{openDay === 1 ? "—" : "+"}</span>
              </button>
              <div className="vb-program-day-body">
                <ol className="vb-program-list">
                  {VB_TRAINING_DAY1.map((item, i) => (
                    <li key={i}>
                      <span className="t">{item.time}</span>
                      <div>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className={"vb-program-day" + (openDay === 2 ? " open" : "")}>
              <button type="button" className="vb-program-day-head" onClick={() => setOpenDay(openDay === 2 ? null : 2)}>
                <span className="vb-program-day-num">Día 02</span>
                <span className="vb-program-day-title">Modelo real, postventa, tu negocio.</span>
                <span className="vb-program-day-meta">09:30 — 18:30 · Domingo</span>
                <span className="vb-program-day-icon">{openDay === 2 ? "—" : "+"}</span>
              </button>
              <div className="vb-program-day-body">
                <ol className="vb-program-list">
                  {VB_TRAINING_DAY2.map((item, i) => (
                    <li key={i}>
                      <span className="t">{item.time}</span>
                      <div>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 3 — KIT INCLUIDO */}
      <div className="vb-training-part vb-training-kit-part">
        <div className="container">
          <Reveal as="div" className="vb-training-section-h">
            <div className="vb-eyebrow gold">— El kit</div>
            <h3>Te llevas <span className="ital">todo</span> esto.</h3>
            <p>Empiezas a trabajar nada más salir. Sin compras de última hora, sin sorpresas.</p>
          </Reveal>

          <div className="vb-kit-grid">
            {VB_TRAINING_KIT.map((k, i) => (
              <Reveal key={k.label} as="div" className="vb-kit-item" delay={i * 0.05}>
                <div className="vb-kit-ic"><KitIcon name={k.icon} /></div>
                <span className="vb-kit-label">{k.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* PART 4 — PERFIL ALUMNADO + INCLUYE / NO INCLUYE */}
      <div className="vb-training-part vb-training-who-part">
        <div className="container">
          <div className="vb-training-who-grid">
            <Reveal as="div" className="vb-training-who">
              <div className="vb-eyebrow gold">— ¿Para quién es?</div>
              <h3>Para ti, si…</h3>
              <ul className="vb-training-who-list yes">
                <li>Empiezas de cero y quieres una base técnica sólida.</li>
                <li>Ya trabajas en estética y quieres ampliar a pestañas.</li>
                <li>Buscas un oficio con demanda recurrente y rentable.</li>
                <li>Te importa el criterio, no solo copiar mappings.</li>
              </ul>
            </Reveal>

            <Reveal as="div" className="vb-training-who" delay={0.15}>
              <div className="vb-eyebrow gold">— No es para ti</div>
              <h3>Sigue buscando, si…</h3>
              <ul className="vb-training-who-list no">
                <li>Quieres certificarte en un fin de semana sin tocar a una clienta real.</li>
                <li>Esperas que te diga «el método» sin enseñarte el porqué.</li>
                <li>Vienes a sacar foto para Instagram y volver a casa.</li>
                <li>No estás dispuesta a equivocarte delante de tus compañeras.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* PART 5 — LOGISTICS & CTA */}
      <div className="vb-training-part vb-training-logistics-part">
        <div className="container">
          <div className="vb-training-logistics">
            <div className="vb-training-logistics-info">
              <Reveal as="div" className="vb-training-section-h">
                <div className="vb-eyebrow gold">— Lo importante</div>
                <h3>Detalles<span className="ital">prácticos.</span></h3>
              </Reveal>

              <Reveal as="dl" className="vb-training-info-dl" delay={0.1}>
                <dt>Próxima convocatoria</dt><dd><em>[FECHA] — confirma plaza por WhatsApp</em></dd>
                <dt>Horario</dt><dd>Sábado y domingo · 09:30 a 18:00 / 18:30</dd>
                <dt>Estudio</dt><dd>Av. Carlemany 73, 2-A · Escaldes-Engordany · Andorra</dd>
                <dt>Plazas</dt><dd>4 alumnas máximo · queda <strong style={{ color: "#FFC58A" }}>1 plaza</strong></dd>
                <dt>Inversión</dt><dd>Consulta · Pago aplazado en 3 cuotas disponible</dd>
                <dt>Idioma</dt><dd>Español · Catalán</dd>
                <dt>Lo que incluye</dt><dd>Kit profesional, manual, certificado, modelo real, coffee y comida los dos días</dd>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="vb-training-cta-row">
                  <a className="btn" href="#" style={{ background: "#FFC58A", color: "#1A0F0A" }}>
                    Reservar plaza<span className="arrow">→</span>
                  </a>
                  <a className="link-arrow" href="#" style={{ color: "#FFC58A" }}>
                    Hablar por WhatsApp <span className="arrow">→</span>
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal as="div" className="vb-training-logistics-photo" delay={0.15}>
              <img src="assets/training.jpg" alt="Sesión de formación Realza" />
              <span className="vb-training-photo-caption">
                <em>«</em> Aquí te equivocas tres veces antes de hacerlo bien una. <em>»</em>
                <span className="sig">— J&amp;S</span>
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { VBTraining, KitIcon });
