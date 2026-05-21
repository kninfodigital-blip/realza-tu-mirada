// variant-b.jsx — REALZA · Aurora Mirada v2
// Full-bleed anatomical hero, scroll-color-shift, expanded training, booking flow.

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════

const VB_SERVICES = [
  {
    num: "I", micro: "Capítulo uno",
    titleEs: "Laminado", titleCa: "Laminat", italEs: "de cejas.", italCa: "de celles.",
    descEs: "Disciplinamos cada pelo con respeto a su nacimiento. Más forma, más orden, más definición — sin que pierdas esa textura natural que solo tu rostro tiene.",
    descCa: "Disciplinem cada pèl amb respecte al seu naixement. Més forma, més ordre, més definició — sense perdre aquesta textura natural que només té el teu rostre.",
    bullets: [["Dura 5–8 semanas", "Dura 5–8 setmanes"], ["Diseño personalizado", "Disseny personalitzat"], ["Cejas finas o pobladas", "Celles fines o poblades"]],
    duration: "60 min",
    img: "assets/lamination-1.jpg",
  },
  {
    num: "II", micro: "Capítulo dos",
    titleEs: "Lifting", titleCa: "Lifting", italEs: "de pestañas.", italCa: "de pestanyes.",
    descEs: "Levantamos tus pestañas desde la raíz para crear una curva natural que abre toda la mirada. Resultado limpio que dura casi dos meses, sin maquillaje.",
    descCa: "Aixequem les teves pestanyes des de l'arrel per crear una corba natural que obre la mirada. Resultat net que dura gairebé dos mesos, sense maquillatge.",
    bullets: [["Resultado al instante", "Resultat a l'instant"], ["Hasta 7 semanas", "Fins a 7 setmanes"], ["Apto con sérum", "Apte amb sèrum"]],
    duration: "75 min",
    img: "assets/lamination-2.jpg",
  },
  {
    num: "III", micro: "Capítulo tres",
    titleEs: "Extensiones", titleCa: "Extensions", italEs: "clásicas.", italCa: "clàssiques.",
    descEs: "Pelo a pelo, mapeadas a la forma de tus ojos. Volumen real que se siente tuyo desde el primer parpadeo, no postizo ni estridente.",
    descCa: "Pèl a pèl, mapejades a la forma dels teus ulls. Volum real que se sent teu des del primer parpelleig, no postís ni estrident.",
    bullets: [["Sesión inicial 2 h", "Sessió inicial 2 h"], ["Retoque cada 3 sem.", "Retoc cada 3 set."], ["Adhesivo hipoalergénico", "Adhesiu hipoalergènic"]],
    duration: "120 min",
    img: "assets/lamination-4.jpg",
  },
  {
    num: "IV", micro: "Capítulo cuatro",
    titleEs: "Diseño", titleCa: "Disseny", italEs: "de mirada.", italCa: "de mirada.",
    descEs: "Un estudio sin prisa de tu rostro, proporción y rasgos para diseñar la combinación de servicios que más te favorece. Pensado solo para ti.",
    descCa: "Un estudi sense pressa del teu rostre, proporció i trets per dissenyar la combinació de serveis que més et beneficia. Pensat només per a tu.",
    bullets: [["1 h de consulta", "1 h de consulta"], ["Mapeado fotográfico", "Mapejat fotogràfic"], ["Plan a 3 meses", "Pla a 3 mesos"]],
    duration: "90 min",
    img: "assets/lamination-5.jpg",
  },
];

const VB_INGREDIENTS = [
  { name: "Péptido de biotina", desc: "Crecimiento y fuerza.", angle: 270 },
  { name: "Pentapéptido-17", desc: "Estimula la queratina.", angle: 330 },
  { name: "Ginseng", desc: "Activa el folículo.", angle: 30 },
  { name: "Vitamina B5", desc: "Acondiciona la fibra.", angle: 90 },
  { name: "Ácido hialurónico", desc: "Hidratación profunda.", angle: 150 },
  { name: "Vitamina E", desc: "Antioxidante natural.", angle: 210 },
];

const VB_TESTIMONIALS = [
  { quote: "Vine por una sesión y volví por la experiencia. Stephany lee tu cara como nadie.", name: "Marta L.", role: "Laminado de cejas", img: "assets/lamination-3.jpg" },
  { quote: "El sérum me cambió las pestañas en dos meses. Real, no marketing.", name: "Núria F.", role: "Sérum 3 ml", img: "assets/lamination-5.jpg" },
  { quote: "Andorra tenía deuda con un sitio como este — atendido, cuidado y bonito.", name: "Clara V.", role: "Clienta habitual", img: "assets/lamination-2.jpg" },
  { quote: "Jonathan es minucioso hasta lo enfermizo. Por eso mi laminado dura todo el mes.", name: "Elena R.", role: "Laminado + Lifting", img: "assets/lamination-6.jpg" },
];

const VB_GALLERY = [
  { img: "assets/lamination-1.jpg", tag: "Mirada · Diseño", c: "vb-g1" },
  { img: "assets/lamination-2.jpg", tag: "Lifting", c: "vb-g2" },
  { img: "assets/lamination-3.jpg", tag: "Brow lift", c: "vb-g3" },
  { img: "assets/lamination-4.jpg", tag: "Volumen", c: "vb-g4" },
  { img: "assets/lamination-5.jpg", tag: "Detalle", c: "vb-g5" },
  { img: "assets/lamination-6.jpg", tag: "Forma", c: "vb-g6" },
  { img: "assets/serum-features.jpg", tag: "Producto", c: "vb-g7" },
];

const VB_TRAINING_DAY1 = [
  { time: "09:30", title: "Bienvenida y café", desc: "Conoce al grupo y al espacio." },
  { time: "10:00", title: "Anatomía de la mirada", desc: "Estructura de cejas y pestañas. Cómo se diseña una mirada por proporción." },
  { time: "11:30", title: "Higiene y preparación", desc: "Materiales, asepsia, parches. Cliente segura, profesional cuidada." },
  { time: "13:00", title: "Comida en grupo", desc: "Incluida. Pausa con los compañeros." },
  { time: "14:30", title: "Mapeado en pareja", desc: "Mapeas a tu compañera y te mapean a ti. Crítica constructiva." },
  { time: "16:00", title: "Primera técnica clásica", desc: "Aplicación pelo a pelo en modelo de práctica. Ritmo, presión, observación." },
  { time: "18:00", title: "Cierre del día", desc: "Resumen del aprendizaje, dudas, kit de repaso para casa." },
];

const VB_TRAINING_DAY2 = [
  { time: "09:30", title: "Repaso y consultas", desc: "Lo que no quedó claro del día uno." },
  { time: "10:00", title: "Modelo real I", desc: "Primera clienta de verdad bajo supervisión. Mapeado, técnica, finalización." },
  { time: "13:00", title: "Comida en grupo", desc: "Incluida. Conversación con J&S." },
  { time: "14:30", title: "Modelo real II", desc: "Segunda clienta. Trabajamos velocidad, simetría y diálogo." },
  { time: "16:30", title: "Postvenida y fidelización", desc: "Cuidado en casa, recomendaciones, citas de seguimiento, lenguaje con la clienta." },
  { time: "17:30", title: "Tu plan de negocio", desc: "Precio, agenda, retoques, comunidad. Lo que nadie te cuenta." },
  { time: "18:30", title: "Entrega de diplomas", desc: "Foto de grupo. Brindis." },
];

const VB_TRAINING_KIT = [
  { icon: "ic-tweezer", label: "Pinzas profesionales" },
  { icon: "ic-tray", label: "Bandeja de cristal" },
  { icon: "ic-patches", label: "Parches y micropore" },
  { icon: "ic-lashes", label: "Extensiones (3 longitudes)" },
  { icon: "ic-glue", label: "Adhesivo profesional" },
  { icon: "ic-cleaner", label: "Espuma limpiadora" },
  { icon: "ic-manual", label: "Manual Realza" },
  { icon: "ic-bag", label: "Bolsa de transporte" },
];

// Section color palette for scroll-color-shift
const SECTION_PALETTE = {
  hero:     { bg: "#FAD6B4", fg: "#2B1812", accent: "#A35C32" },
  manifest: { bg: "#FAEEDD", fg: "#2B1812", accent: "#A35C32" },
  services: { bg: "#F5DEC1", fg: "#2B1812", accent: "#8C4A1F" },
  serum:    { bg: "#EFC499", fg: "#2B1812", accent: "#7A3E15" },
  booking:  { bg: "#F8E6D1", fg: "#2B1812", accent: "#A35C32" },
  ingred:   { bg: "#1A0F0A", fg: "#FAEEDD", accent: "#FFC58A" },
  gallery:  { bg: "#F2D9B8", fg: "#2B1812", accent: "#8C4A1F" },
  duo:      { bg: "#E8B888", fg: "#2B1812", accent: "#7A3E15" },
  training: { bg: "#1A0F0A", fg: "#FAEEDD", accent: "#FFC58A" },
  testi:    { bg: "#F0CFA3", fg: "#2B1812", accent: "#8C4A1F" },
  studio:   { bg: "#FAEEDD", fg: "#2B1812", accent: "#A35C32" },
};

Object.assign(window, { VB_SERVICES, VB_INGREDIENTS, VB_TESTIMONIALS, VB_GALLERY, VB_TRAINING_DAY1, VB_TRAINING_DAY2, VB_TRAINING_KIT, SECTION_PALETTE });
