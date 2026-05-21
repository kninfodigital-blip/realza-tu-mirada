// variant-b-hero.jsx — Full-bleed anatomical eye SVG hero
// Detalle dibujado a mano con anotaciones por servicio.

function VBEyeIllustration() {
  return (
    <svg viewBox="0 0 1400 900" className="vb-eye-svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
      <defs>
        <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5C2D14" />
          <stop offset="50%" stopColor="#3A1A0A" />
          <stop offset="100%" stopColor="#1A0805" />
        </radialGradient>
        <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 205, 165, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 205, 165, 0)" />
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Soft halo behind eye */}
      <ellipse cx="700" cy="460" rx="500" ry="320" fill="url(#haloGrad)" />

      {/* Eyebrow — dramatic brushstroke */}
      <g className="vb-eye-brow">
        <path d="M 350 250 Q 500 180, 700 195 Q 900 210, 1050 270 Q 1000 250, 920 240 Q 800 225, 700 230 Q 580 235, 470 250 Q 410 255, 350 250 Z"
              fill="#2B1812" />
        {/* Hairs going up */}
        <g stroke="#2B1812" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M380 248 L375 225" /><path d="M420 240 L415 215" /><path d="M460 232 L455 205" />
          <path d="M500 225 L497 195" /><path d="M540 215 L538 185" /><path d="M580 210 L580 178" />
          <path d="M620 205 L622 175" /><path d="M660 200 L665 168" /><path d="M700 197 L705 165" />
          <path d="M740 198 L748 168" /><path d="M780 202 L790 170" /><path d="M820 210 L832 178" />
          <path d="M860 218 L876 188" /><path d="M900 228 L920 200" /><path d="M940 240 L965 215" />
          <path d="M980 252 L1010 230" />
        </g>
      </g>

      {/* Upper eyelid */}
      <path className="vb-eye-lid-top" d="M 380 460 Q 700 320, 1020 460" fill="none" stroke="#2B1812" strokeWidth="3.5" strokeLinecap="round" />

      {/* Lower eyelid */}
      <path className="vb-eye-lid-bottom" d="M 380 460 Q 700 580, 1020 460" fill="none" stroke="#2B1812" strokeWidth="2" strokeLinecap="round" />

      {/* Eye white + iris (clipped) */}
      <clipPath id="eyeClip">
        <path d="M 380 460 Q 700 320, 1020 460 Q 700 580, 380 460 Z" />
      </clipPath>
      <g clipPath="url(#eyeClip)">
        <rect x="380" y="320" width="640" height="260" fill="#F8EEDD" />
        {/* Iris */}
        <circle cx="700" cy="440" r="85" fill="url(#irisGrad)" />
        {/* Inner detail of iris */}
        <circle cx="700" cy="440" r="85" fill="none" stroke="#8C4A1F" strokeWidth="0.6" opacity="0.4" />
        <circle cx="700" cy="440" r="60" fill="none" stroke="#A35C32" strokeWidth="0.5" opacity="0.5" />
        {/* Pupil */}
        <circle cx="700" cy="440" r="32" fill="#0A0503" />
        {/* Catchlight */}
        <circle cx="685" cy="425" r="9" fill="#FFE7CC" opacity="0.95" />
        <circle cx="710" cy="445" r="3" fill="#FFE7CC" opacity="0.8" />
      </g>

      {/* Upper lashes — dramatic fanned */}
      <g className="vb-eye-lashes-top" stroke="#2B1812" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M395 458 Q380 410, 370 360" /><path d="M420 442 Q410 388, 405 340" />
        <path d="M450 425 Q445 365, 445 318" /><path d="M482 410 Q480 350, 485 300" />
        <path d="M515 395 Q515 335, 525 290" /><path d="M550 382 Q552 322, 565 275" />
        <path d="M585 372 Q590 312, 605 265" /><path d="M620 365 Q628 305, 645 260" />
        <path d="M655 360 Q665 300, 685 258" /><path d="M690 358 Q702 298, 722 256" />
        <path d="M725 358 Q738 298, 758 258" /><path d="M760 360 Q775 300, 795 260" />
        <path d="M795 365 Q812 305, 832 265" /><path d="M828 372 Q845 312, 865 275" />
        <path d="M860 382 Q878 322, 895 290" /><path d="M888 395 Q906 335, 920 300" />
        <path d="M912 410 Q930 350, 942 318" /><path d="M935 425 Q952 365, 962 340" />
        <path d="M955 442 Q968 388, 975 360" /><path d="M1005 458 Q1015 410, 1020 360" strokeWidth="2.2" />
      </g>

      {/* Lower lashes — shorter */}
      <g className="vb-eye-lashes-bottom" stroke="#2B1812" strokeWidth="1.4" strokeLinecap="round" fill="none">
        <path d="M450 488 L455 510" /><path d="M490 502 L495 528" />
        <path d="M530 510 L535 538" /><path d="M570 515 L575 545" />
        <path d="M610 518 L615 548" /><path d="M650 519 L655 550" />
        <path d="M690 520 L695 552" /><path d="M730 519 L735 550" />
        <path d="M770 518 L775 548" /><path d="M810 515 L815 545" />
        <path d="M850 510 L855 538" /><path d="M890 502 L895 528" />
        <path d="M930 488 L935 510" />
      </g>

      {/* Eyeliner accent — sharp wing */}
      <path className="vb-eye-liner" d="M 1000 458 Q 1040 450, 1075 432 Q 1050 442, 1020 452" fill="#2B1812" stroke="none" />

      {/* Annotations */}
      <g className="vb-anno" fontFamily="Manrope, sans-serif">
        {/* Ceja — top left */}
        <g className="vb-anno-1">
          <line x1="180" y1="180" x2="380" y2="240" stroke="#8C4A1F" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="380" cy="240" r="4" fill="#8C4A1F" />
          <text x="40" y="155" fill="#8C4A1F" fontSize="11" fontWeight="600" letterSpacing="2.5">01 — LAMINADO</text>
          <text x="40" y="178" fill="#2B1812" fontSize="13" fontStyle="italic" fontFamily="Cormorant Garamond, serif" fontWeight="400">Ceja con forma</text>
        </g>

        {/* Lifting — top right */}
        <g className="vb-anno-2">
          <line x1="1220" y1="320" x2="900" y2="340" stroke="#8C4A1F" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="900" cy="340" r="4" fill="#8C4A1F" />
          <text x="1220" y="305" fill="#8C4A1F" fontSize="11" fontWeight="600" letterSpacing="2.5">02 — LIFTING</text>
          <text x="1220" y="328" fill="#2B1812" fontSize="13" fontStyle="italic" fontFamily="Cormorant Garamond, serif">Curva natural</text>
        </g>

        {/* Extensiones — middle right */}
        <g className="vb-anno-3">
          <line x1="1230" y1="490" x2="970" y2="440" stroke="#8C4A1F" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="970" cy="440" r="4" fill="#8C4A1F" />
          <text x="1230" y="475" fill="#8C4A1F" fontSize="11" fontWeight="600" letterSpacing="2.5">03 — EXTENSIONES</text>
          <text x="1230" y="498" fill="#2B1812" fontSize="13" fontStyle="italic" fontFamily="Cormorant Garamond, serif">Pelo a pelo</text>
        </g>

        {/* Diseño — bottom */}
        <g className="vb-anno-4">
          <line x1="180" y1="720" x2="440" y2="540" stroke="#8C4A1F" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="440" cy="540" r="4" fill="#8C4A1F" />
          <text x="40" y="745" fill="#8C4A1F" fontSize="11" fontWeight="600" letterSpacing="2.5">04 — DISEÑO DE MIRADA</text>
          <text x="40" y="768" fill="#2B1812" fontSize="13" fontStyle="italic" fontFamily="Cormorant Garamond, serif">Proporción</text>
        </g>

        {/* Sérum — bottom right */}
        <g className="vb-anno-5">
          <line x1="1220" y1="700" x2="850" y2="535" stroke="#8C4A1F" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="850" cy="535" r="4" fill="#8C4A1F" />
          <text x="1220" y="685" fill="#8C4A1F" fontSize="11" fontWeight="600" letterSpacing="2.5">05 — SÉRUM 3ML</text>
          <text x="1220" y="708" fill="#2B1812" fontSize="13" fontStyle="italic" fontFamily="Cormorant Garamond, serif">Cuidado en casa</text>
        </g>
      </g>
    </svg>
  );
}

function VBHero() {
  const { t } = useLang();
  return (
    <section className="vb-hero" id="top" data-shift="hero" data-screen-label="01 Hero">
      <div className="vb-hero-bg">
        <div className="vb-hero-grain" />
      </div>

      <div className="vb-hero-eye-wrap">
        <VBEyeIllustration />
      </div>

      <div className="vb-hero-overlay">
        <div className="vb-hero-top container">
          <div className="vb-hero-pill">
            <span className="dot" /> EST. <L es="ANDORRA" ca="ANDORRA" /> · ESTUDIO DE MIRADA
          </div>
          <div className="vb-hero-scroll-hint">
            <span><L es="Desliza" ca="Llisca" /></span>
            <svg width="40" height="14" viewBox="0 0 40 14"><path d="M2 7h35 m-6 -5 l6 5 -6 5" stroke="currentColor" strokeWidth="1" fill="none" /></svg>
          </div>
        </div>

        <div className="vb-hero-title-wrap container">
          <h1 className="vb-hero-h1">
            <LetterStagger text="Realza" className="line-1" />
            <span className="line-2">
              <LetterStagger text="tu mirada." stagger={0.05} />
            </span>
          </h1>
          <Reveal delay={1.4}>
            <p className="vb-hero-tag">
              <L
                es="Cejas. Pestañas. Cuidado real, resultado natural — diseñado pelo a pelo por la pareja que entiende tu rostro."
                ca="Celles. Pestanyes. Cura real, resultat natural — dissenyat pèl a pèl per la parella que entén el teu rostre."
              />
            </p>
          </Reveal>
          <Reveal delay={1.6}>
            <div className="vb-hero-ctas">
              <a className="btn btn-primary" href="#reservar">
                {t("cta.reservar")}<span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#servicios">
                {t("cta.explorar")}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="vb-hero-bottom container">
          <div className="vb-hero-meta-grid">
            <div className="vb-hero-meta">
              <span className="num">04</span>
              <span className="lbl"><L es="Servicios de mirada" ca="Serveis de mirada" /></span>
            </div>
            <div className="vb-hero-meta">
              <span className="num">01</span>
              <span className="lbl"><L es="Sérum profesional 3 ml" ca="Sèrum professional 3 ml" /></span>
            </div>
            <div className="vb-hero-meta">
              <span className="num">02</span>
              <span className="lbl"><L es="Días de formación" ca="Dies de formació" /></span>
            </div>
            <div className="vb-hero-meta">
              <span className="num">J&amp;S</span>
              <span className="lbl"><L es="Jonathan & Stephany" ca="Jonathan & Stephany" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { VBEyeIllustration, VBHero });
