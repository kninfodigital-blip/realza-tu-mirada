/* =============================================================
   REALZA TU MIRADA — i18n (ES · CA · EN · FR)
   ============================================================= */
(function () {
  'use strict';

  /* ── Translation dictionary ── */
  var I18N = {

    /* ─── NAVIGATION ─── */
    'nav-services':  { es: 'Servicios', ca: 'Serveis', en: 'Services', fr: 'Services' },
    'nav-serum':     { es: 'Sérum', ca: 'Sèrum', en: 'Serum', fr: 'Sérum' },
    'nav-training':  { es: 'Formación', ca: 'Formació', en: 'Training', fr: 'Formation' },
    'nav-about':     { es: 'Nosotros', ca: 'Nosaltres', en: 'About', fr: 'À propos' },

    /* ─── STICKY RESERVE ─── */
    'sticky-reserve': { es: 'Reservar cita', ca: 'Reservar cita', en: 'Book appointment', fr: 'Prendre rendez-vous' },

    /* ─── MARQUEE ─── */
    'marquee-track': {
      es: '<span>Laminado de cejas</span><span class="sep">&#10038;</span><span>Lifting de pestañas</span><span class="sep">&#10038;</span><span>Sérum para pestañas</span><span class="sep">&#10038;</span><span>Diseño de mirada</span><span class="sep">&#10038;</span><span>Formación profesional</span><span class="sep">&#10038;</span><span>Extensiones clásicas</span><span class="sep">&#10038;</span><span>Laminado de cejas</span><span class="sep">&#10038;</span><span>Lifting de pestañas</span><span class="sep">&#10038;</span><span>Sérum para pestañas</span><span class="sep">&#10038;</span><span>Diseño de mirada</span><span class="sep">&#10038;</span><span>Formación profesional</span><span class="sep">&#10038;</span><span>Extensiones clásicas</span><span class="sep">&#10038;</span><span>Laminado de cejas</span><span class="sep">&#10038;</span><span>Lifting de pestañas</span><span class="sep">&#10038;</span><span>Sérum para pestañas</span><span class="sep">&#10038;</span><span>Diseño de mirada</span><span class="sep">&#10038;</span><span>Formación profesional</span><span class="sep">&#10038;</span><span>Extensiones clásicas</span><span class="sep">&#10038;</span>',
      ca: '<span>Laminat de celles</span><span class="sep">&#10038;</span><span>Lifting de pestanyes</span><span class="sep">&#10038;</span><span>Sèrum per a pestanyes</span><span class="sep">&#10038;</span><span>Disseny de mirada</span><span class="sep">&#10038;</span><span>Formació professional</span><span class="sep">&#10038;</span><span>Extensions clàssiques</span><span class="sep">&#10038;</span><span>Laminat de celles</span><span class="sep">&#10038;</span><span>Lifting de pestanyes</span><span class="sep">&#10038;</span><span>Sèrum per a pestanyes</span><span class="sep">&#10038;</span><span>Disseny de mirada</span><span class="sep">&#10038;</span><span>Formació professional</span><span class="sep">&#10038;</span><span>Extensions clàssiques</span><span class="sep">&#10038;</span><span>Laminat de celles</span><span class="sep">&#10038;</span><span>Lifting de pestanyes</span><span class="sep">&#10038;</span><span>Sèrum per a pestanyes</span><span class="sep">&#10038;</span><span>Disseny de mirada</span><span class="sep">&#10038;</span><span>Formació professional</span><span class="sep">&#10038;</span><span>Extensions clàssiques</span><span class="sep">&#10038;</span>',
      en: '<span>Brow lamination</span><span class="sep">&#10038;</span><span>Lash lift</span><span class="sep">&#10038;</span><span>Lash serum</span><span class="sep">&#10038;</span><span>Gaze design</span><span class="sep">&#10038;</span><span>Professional training</span><span class="sep">&#10038;</span><span>Classic extensions</span><span class="sep">&#10038;</span><span>Brow lamination</span><span class="sep">&#10038;</span><span>Lash lift</span><span class="sep">&#10038;</span><span>Lash serum</span><span class="sep">&#10038;</span><span>Gaze design</span><span class="sep">&#10038;</span><span>Professional training</span><span class="sep">&#10038;</span><span>Classic extensions</span><span class="sep">&#10038;</span><span>Brow lamination</span><span class="sep">&#10038;</span><span>Lash lift</span><span class="sep">&#10038;</span><span>Lash serum</span><span class="sep">&#10038;</span><span>Gaze design</span><span class="sep">&#10038;</span><span>Professional training</span><span class="sep">&#10038;</span><span>Classic extensions</span><span class="sep">&#10038;</span>',
      fr: '<span>Lamination des sourcils</span><span class="sep">&#10038;</span><span>Rehaussement de cils</span><span class="sep">&#10038;</span><span>Sérum pour cils</span><span class="sep">&#10038;</span><span>Design du regard</span><span class="sep">&#10038;</span><span>Formation professionnelle</span><span class="sep">&#10038;</span><span>Extensions classiques</span><span class="sep">&#10038;</span><span>Lamination des sourcils</span><span class="sep">&#10038;</span><span>Rehaussement de cils</span><span class="sep">&#10038;</span><span>Sérum pour cils</span><span class="sep">&#10038;</span><span>Design du regard</span><span class="sep">&#10038;</span><span>Formation professionnelle</span><span class="sep">&#10038;</span><span>Extensions classiques</span><span class="sep">&#10038;</span><span>Lamination des sourcils</span><span class="sep">&#10038;</span><span>Rehaussement de cils</span><span class="sep">&#10038;</span><span>Sérum pour cils</span><span class="sep">&#10038;</span><span>Design du regard</span><span class="sep">&#10038;</span><span>Formation professionnelle</span><span class="sep">&#10038;</span><span>Extensions classiques</span><span class="sep">&#10038;</span>'
    },

    /* ─── MANIFEST ─── */
    'manifest-eyebrow': { es: '\u2014 Manifiesto', ca: '\u2014 Manifest', en: '\u2014 Manifesto', fr: '\u2014 Manifeste' },
    'manifest-1': { es: 'El cuidado', ca: 'La cura', en: 'Self-care', fr: 'Le soin' },
    'manifest-2': { es: 'no es', ca: 'no \u00e9s', en: 'is not', fr: "n\u2019est pas" },
    'manifest-3': { es: 'un extra,', ca: 'un extra,', en: 'an extra,', fr: 'un extra,' },
    'manifest-4': { es: 'es parte', ca: '\u00e9s part', en: "it\u2019s part", fr: "c\u2019est" },
    'manifest-5': { es: 'de tu', ca: 'de la teva', en: 'of your', fr: 'de votre' },
    'manifest-6': { es: 'rutina.', ca: 'rutina.', en: 'routine.', fr: 'routine.' },
    'manifest-sig': { es: '\u2014 J&S, fundadores', ca: '\u2014 J&S, fundadors', en: '\u2014 J&S, founders', fr: '\u2014 J&S, fondateurs' },

    /* ─── SERVICES ─── */
    'svc-eyebrow': { es: '\u2014 El cat\u00e1logo', ca: '\u2014 El cat\u00e0leg', en: '\u2014 The catalogue', fr: '\u2014 Le catalogue' },
    'svc-title': {
      es: "Cuatro cap\u00edtulos<br /><span class='ital'>de mirada.</span>",
      ca: "Quatre cap\u00edtols<br /><span class='ital'>de mirada.</span>",
      en: "Four chapters<br /><span class='ital'>of gaze.</span>",
      fr: "Quatre chapitres<br /><span class='ital'>du regard.</span>"
    },
    'svc-sub': {
      es: 'Cada cita es una conversaci\u00f3n con tu rostro antes de poner las manos. Esto es lo que ofrecemos.',
      ca: 'Cada cita \u00e9s una conversa amb el teu rostre abans de posar-hi les mans. Aix\u00f2 \u00e9s el que oferim.',
      en: 'Every appointment is a conversation with your face before we get to work. This is what we offer.',
      fr: 'Chaque rendez-vous est une conversation avec votre visage avant de poser les mains. Voici ce que nous proposons.'
    },

    /* Service I */
    'svc1-micro': { es: 'Cap\u00edtulo uno \u00b7 I', ca: 'Cap\u00edtol u \u00b7 I', en: 'Chapter one \u00b7 I', fr: 'Chapitre un \u00b7 I' },
    'svc1-title': {
      es: "Laminado <span class='ital'>de cejas.</span>",
      ca: "Laminat <span class='ital'>de celles.</span>",
      en: "Brow <span class='ital'>lamination.</span>",
      fr: "Lamination <span class='ital'>des sourcils.</span>"
    },
    'svc1-desc': {
      es: 'Disciplinamos cada pelo con respeto a su nacimiento. M\u00e1s forma, m\u00e1s orden, m\u00e1s definici\u00f3n \u2014 sin que pierdas esa textura natural que solo tu rostro tiene.',
      ca: 'Disciplinem cada p\u00e8l amb respecte al seu naixement. M\u00e9s forma, m\u00e9s ordre, m\u00e9s definici\u00f3 \u2014 sense perdre la textura natural que nom\u00e9s el teu rostre t\u00e9.',
      en: 'We tame each hair while respecting its natural growth. More shape, more order, more definition \u2014 without losing the natural texture only your face has.',
      fr: 'Nous disciplinons chaque poil en respectant sa naissance. Plus de forme, plus d\u2019ordre, plus de d\u00e9finition \u2014 sans perdre la texture naturelle propre \u00e0 votre visage.'
    },
    'svc1-bullet1': { es: 'Dura 5\u20138 semanas', ca: 'Dura 5\u20138 setmanes', en: 'Lasts 5\u20138 weeks', fr: 'Dure 5\u20138 semaines' },
    'svc1-bullet2': { es: 'Dise\u00f1o personalizado', ca: 'Disseny personalitzat', en: 'Custom design', fr: 'Design personnalis\u00e9' },
    'svc1-bullet3': { es: 'Cejas finas o pobladas', ca: 'Celles fines o poblades', en: 'Thin or thick brows', fr: 'Sourcils fins ou \u00e9pais' },

    /* Reusable buttons */
    'btn-reservar': { es: 'Reservar', ca: 'Reservar', en: 'Book', fr: 'R\u00e9server' },
    'btn-detail':   { es: 'Ver detalle', ca: 'Veure detall', en: 'View details', fr: 'Voir d\u00e9tails' },

    /* Service II */
    'svc2-micro': { es: 'Cap\u00edtulo dos \u00b7 II', ca: 'Cap\u00edtol dos \u00b7 II', en: 'Chapter two \u00b7 II', fr: 'Chapitre deux \u00b7 II' },
    'svc2-title': {
      es: "Lifting <span class='ital'>de pesta\u00f1as.</span>",
      ca: "Lifting <span class='ital'>de pestanyes.</span>",
      en: "Lash <span class='ital'>lift.</span>",
      fr: "Rehaussement <span class='ital'>de cils.</span>"
    },
    'svc2-desc': {
      es: 'Levantamos tus pesta\u00f1as desde la ra\u00edz para crear una curva natural que abre toda la mirada. Resultado limpio que dura casi dos meses, sin maquillaje.',
      ca: 'Aixequem les teves pestanyes des de l\u2019arrel per crear una corba natural que obre tota la mirada. Resultat net que dura gaireb\u00e9 dos mesos, sense maquillatge.',
      en: 'We lift your lashes from the root to create a natural curl that opens your entire gaze. A clean result lasting nearly two months, no makeup needed.',
      fr: 'Nous relevons vos cils depuis la racine pour cr\u00e9er une courbe naturelle qui ouvre tout le regard. R\u00e9sultat net qui dure pr\u00e8s de deux mois, sans maquillage.'
    },
    'svc2-bullet1': { es: 'Resultado al instante', ca: 'Resultat al moment', en: 'Instant results', fr: 'R\u00e9sultat imm\u00e9diat' },
    'svc2-bullet2': { es: 'Hasta 7 semanas', ca: 'Fins a 7 setmanes', en: 'Up to 7 weeks', fr: "Jusqu\u2019\u00e0 7 semaines" },
    'svc2-bullet3': { es: 'Apto con s\u00e9rum', ca: 'Compatible amb s\u00e8rum', en: 'Serum compatible', fr: 'Compatible avec s\u00e9rum' },

    /* Service III */
    'svc3-micro': { es: 'Cap\u00edtulo tres \u00b7 III', ca: 'Cap\u00edtol tres \u00b7 III', en: 'Chapter three \u00b7 III', fr: 'Chapitre trois \u00b7 III' },
    'svc3-title': {
      es: "Extensiones <span class='ital'>cl\u00e1sicas.</span>",
      ca: "Extensions <span class='ital'>cl\u00e0ssiques.</span>",
      en: "Classic <span class='ital'>extensions.</span>",
      fr: "Extensions <span class='ital'>classiques.</span>"
    },
    'svc3-desc': {
      es: 'Pelo a pelo, mapeadas a la forma de tus ojos. Volumen real que se siente tuyo desde el primer parpadeo, no postizo ni estridente.',
      ca: 'P\u00e8l a p\u00e8l, mapejades a la forma dels teus ulls. Volum real que se sent teu des del primer parpelleig, no post\u00eds ni estrident.',
      en: 'Hair by hair, mapped to the shape of your eyes. Real volume that feels yours from the very first blink \u2014 not false, not flashy.',
      fr: 'Poil par poil, mapp\u00e9es \u00e0 la forme de vos yeux. Un volume r\u00e9el qui vous appartient d\u00e8s le premier battement de cils, ni artificiel ni criard.'
    },
    'svc3-bullet1': { es: 'Sesi\u00f3n inicial 2 h', ca: 'Sessi\u00f3 inicial 2 h', en: 'Initial session 2 h', fr: 'S\u00e9ance initiale 2 h' },
    'svc3-bullet2': { es: 'Retoque cada 3 sem.', ca: 'Retoc cada 3 set.', en: 'Touch-up every 3 wks', fr: 'Retouche toutes les 3 sem.' },
    'svc3-bullet3': { es: 'Adhesivo hipoalerg\u00e9nico', ca: 'Adhesiu hipoal\u00b7lerg\u00e8nic', en: 'Hypoallergenic adhesive', fr: 'Adh\u00e9sif hypoallerg\u00e9nique' },

    /* Service IV */
    'svc4-micro': { es: 'Cap\u00edtulo cuatro \u00b7 IV', ca: 'Cap\u00edtol quatre \u00b7 IV', en: 'Chapter four \u00b7 IV', fr: 'Chapitre quatre \u00b7 IV' },
    'svc4-title': {
      es: "Dise\u00f1o <span class='ital'>de mirada.</span>",
      ca: "Disseny <span class='ital'>de mirada.</span>",
      en: "Gaze <span class='ital'>design.</span>",
      fr: "Design <span class='ital'>du regard.</span>"
    },
    'svc4-desc': {
      es: 'Un estudio sin prisa de tu rostro, proporci\u00f3n y rasgos para dise\u00f1ar la combinaci\u00f3n de servicios que m\u00e1s te favorece. Pensado solo para ti.',
      ca: 'Un estudi sense pressa del teu rostre, proporcions i trets per dissenyar la combinaci\u00f3 de serveis que m\u00e9s t\u2019afavoreix. Pensat nom\u00e9s per a tu.',
      en: 'An unhurried study of your face, proportions and features to design the combination of services that suits you best. Tailored just for you.',
      fr: 'Une \u00e9tude sans h\u00e2te de votre visage, proportions et traits pour concevoir la combinaison de services qui vous met le plus en valeur. Pens\u00e9 pour vous seule.'
    },
    'svc4-bullet1': { es: '1 h de consulta', ca: '1 h de consulta', en: '1 h consultation', fr: '1 h de consultation' },
    'svc4-bullet2': { es: 'Mapeado fotogr\u00e1fico', ca: 'Mapejat fotogr\u00e0fic', en: 'Photographic mapping', fr: 'Mapping photographique' },
    'svc4-bullet3': { es: 'Plan a 3 meses', ca: 'Pla a 3 mesos', en: '3-month plan', fr: 'Plan sur 3 mois' },

    /* ─── SERUM ─── */
    'serum-big1':  { es: 'S\u00c9RUM', ca: 'S\u00c8RUM', en: 'SERUM', fr: 'S\u00c9RUM' },
    'serum-big2':  { es: 'para pesta\u00f1as', ca: 'per a pestanyes', en: 'for lashes', fr: 'pour cils' },
    'serum-eyebrow': { es: '\u2014 Producto estrella', ca: '\u2014 Producte estrella', en: '\u2014 Star product', fr: '\u2014 Produit phare' },
    'serum-h1':    { es: 'Un s\u00e9rum', ca: 'Un s\u00e8rum', en: 'A serum', fr: 'Un s\u00e9rum' },
    'serum-h2':    { es: '\u00fanico.', ca: '\u00fanic.', en: 'like no other.', fr: 'unique.' },
    'serum-lead':  {
      es: 'Una f\u00f3rmula que pensamos y probamos durante a\u00f1os en el estudio. Aplicaci\u00f3n nocturna, resultados visibles en seis semanas.',
      ca: 'Una f\u00f3rmula que vam pensar i provar durant anys a l\u2019estudi. Aplicaci\u00f3 nocturna, resultats visibles en sis setmanes.',
      en: 'A formula we developed and tested over years in the studio. Night-time application, visible results in six weeks.',
      fr: 'Une formule que nous avons pens\u00e9e et test\u00e9e pendant des ann\u00e9es en studio. Application nocturne, r\u00e9sultats visibles en six semaines.'
    },
    'serum-f1': { es: 'Vegano', ca: 'Veg\u00e0', en: 'Vegan', fr: 'V\u00e9gan' },
    'serum-f2': { es: 'Sin crueldad', ca: 'Sense crueltat', en: 'Cruelty free', fr: 'Sans cruaut\u00e9' },
    'serum-f3': { es: '100% natural', ca: '100% natural', en: '100% natural', fr: '100% naturel' },
    'serum-f4': { es: 'Compatible con extensiones', ca: 'Compatible amb extensions', en: 'Extension compatible', fr: 'Compatible avec extensions' },
    'serum-cart': { es: 'A\u00f1adir al carrito', ca: 'Afegir al carret', en: 'Add to cart', fr: 'Ajouter au panier' },
    'serum-formula-link': { es: 'Ver f\u00f3rmula completa', ca: 'Veure f\u00f3rmula completa', en: 'View full formula', fr: 'Voir la formule compl\u00e8te' },
    'serum-reviews': { es: '247 rese\u00f1as verificadas', ca: '247 ressenyes verificades', en: '247 verified reviews', fr: '247 avis v\u00e9rifi\u00e9s' },

    /* ─── BOOKING ─── */
    'book-eyebrow': { es: '\u2014 Reserva tu cita', ca: '\u2014 Reserva la teva cita', en: '\u2014 Book your appointment', fr: '\u2014 R\u00e9servez votre rendez-vous' },
    'book-title': {
      es: "En tres pasos,<br/><span class='ital'>a tu mirada.</span>",
      ca: "En tres passos,<br/><span class='ital'>a la teva mirada.</span>",
      en: "In three steps,<br/><span class='ital'>to your gaze.</span>",
      fr: "En trois \u00e9tapes,<br/><span class='ital'>\u00e0 votre regard.</span>"
    },
    'book-step1': { es: 'Servicio', ca: 'Servei', en: 'Service', fr: 'Service' },
    'book-step2': { es: 'Fecha y hora', ca: 'Data i hora', en: 'Date & time', fr: 'Date et heure' },
    'book-step3': { es: 'Confirmar', ca: 'Confirmar', en: 'Confirm', fr: 'Confirmer' },
    'book-pane1-h': { es: '\u00bfQu\u00e9 te apetece hoy?', ca: 'Qu\u00e8 et ve de gust avui?', en: 'What would you like today?', fr: 'Qu\u2019est-ce qui vous ferait plaisir ?' },
    'book-svc1-t': { es: 'Laminado de cejas', ca: 'Laminat de celles', en: 'Brow lamination', fr: 'Lamination des sourcils' },
    'book-svc1-d': { es: '60 min \u00b7 Consulta', ca: '60 min \u00b7 Consulta', en: '60 min \u00b7 Consultation', fr: '60 min \u00b7 Consultation' },
    'book-svc2-t': { es: 'Lifting de pesta\u00f1as', ca: 'Lifting de pestanyes', en: 'Lash lift', fr: 'Rehaussement de cils' },
    'book-svc2-d': { es: '75 min \u00b7 Consulta', ca: '75 min \u00b7 Consulta', en: '75 min \u00b7 Consultation', fr: '75 min \u00b7 Consultation' },
    'book-svc3-t': { es: 'Extensiones cl\u00e1sicas', ca: 'Extensions cl\u00e0ssiques', en: 'Classic extensions', fr: 'Extensions classiques' },
    'book-svc3-d': { es: '120 min \u00b7 Consulta', ca: '120 min \u00b7 Consulta', en: '120 min \u00b7 Consultation', fr: '120 min \u00b7 Consultation' },
    'book-svc4-t': { es: 'Dise\u00f1o de mirada', ca: 'Disseny de mirada', en: 'Gaze design', fr: 'Design du regard' },
    'book-svc4-d': { es: '90 min \u00b7 Consulta', ca: '90 min \u00b7 Consulta', en: '90 min \u00b7 Consultation', fr: '90 min \u00b7 Consultation' },
    'btn-next': { es: 'Siguiente', ca: 'Seg\u00fcent', en: 'Next', fr: 'Suivant' },
    'book-pane2-h1': { es: 'Elige el d\u00eda', ca: 'Tria el dia', en: 'Choose the day', fr: 'Choisissez le jour' },
    'book-pane2-h2': { es: 'Elige la hora', ca: 'Tria l\u2019hora', en: 'Choose the time', fr: "Choisissez l\u2019heure" },
    'btn-back': { es: 'Atr\u00e1s', ca: 'Enrere', en: 'Back', fr: 'Retour' },
    'book-pane3-h': { es: 'Confirma tu cita', ca: 'Confirma la teva cita', en: 'Confirm your appointment', fr: 'Confirmez votre rendez-vous' },
    'book-lbl-service': { es: 'Servicio', ca: 'Servei', en: 'Service', fr: 'Service' },
    'book-lbl-date': { es: 'Fecha', ca: 'Data', en: 'Date', fr: 'Date' },
    'book-lbl-time': { es: 'Hora', ca: 'Hora', en: 'Time', fr: 'Heure' },
    'book-lbl-studio': { es: 'Estudio', ca: 'Estudi', en: 'Studio', fr: 'Studio' },
    'book-lbl-name': { es: 'Nombre', ca: 'Nom', en: 'Name', fr: 'Nom' },
    'book-ph-name': { es: 'Tu nombre completo', ca: 'El teu nom complet', en: 'Your full name', fr: 'Votre nom complet' },
    'book-ph-email': { es: 'tu@correo.com', ca: 'tu@correu.com', en: 'you@email.com', fr: 'vous@email.com' },
    'book-lbl-phone': { es: 'Tel\u00e9fono', ca: 'Tel\u00e8fon', en: 'Phone', fr: 'T\u00e9l\u00e9phone' },
    'book-lbl-notes': { es: 'Notas (opcional)', ca: 'Notes (opcional)', en: 'Notes (optional)', fr: 'Notes (facultatif)' },
    'book-ph-notes': { es: 'Alergias, primera vez, cualquier cosa\u2026', ca: 'Al\u00b7l\u00e8rgies, primer cop, qualsevol cosa\u2026', en: 'Allergies, first time, anything\u2026', fr: 'Allergies, premi\u00e8re fois, toute information\u2026' },
    'btn-confirm': { es: 'Confirmar cita', ca: 'Confirmar cita', en: 'Confirm appointment', fr: 'Confirmer le rendez-vous' },
    'book-disclaimer': {
      es: 'Al reservar, recibir\u00e1s un correo de confirmaci\u00f3n y un recordatorio 24 h antes.',
      ca: 'En reservar, rebr\u00e0s un correu de confirmaci\u00f3 i un recordatori 24 h abans.',
      en: 'Upon booking, you\u2019ll receive a confirmation email and a reminder 24 h before.',
      fr: 'En r\u00e9servant, vous recevrez un e-mail de confirmation et un rappel 24 h avant.'
    },

    /* ─── INGREDIENTS ─── */
    'ingr-eyebrow': { es: '\u2014 La f\u00f3rmula', ca: '\u2014 La f\u00f3rmula', en: '\u2014 The formula', fr: '\u2014 La formule' },
    'ingr-title': {
      es: "Seis ingredientes,<br /><span class='ital gold'>una sola promesa.</span>",
      ca: "Sis ingredients,<br /><span class='ital gold'>una sola promesa.</span>",
      en: "Six ingredients,<br /><span class='ital gold'>one single promise.</span>",
      fr: "Six ingr\u00e9dients,<br /><span class='ital gold'>une seule promesse.</span>"
    },
    'ingr1-h': { es: 'P\u00e9ptido de biotina', ca: 'P\u00e8ptid de biotina', en: 'Biotin peptide', fr: 'Peptide de biotine' },
    'ingr1-p': { es: 'Crecimiento y fuerza.', ca: 'Creixement i for\u00e7a.', en: 'Growth and strength.', fr: 'Croissance et force.' },
    'ingr2-p': { es: 'Estimula la queratina.', ca: 'Estimula la queratina.', en: 'Stimulates keratin.', fr: 'Stimule la k\u00e9ratine.' },
    'ingr3-p': { es: 'Activa el fol\u00edculo.', ca: 'Activa el fol\u00b7licle.', en: 'Activates the follicle.', fr: 'Active le follicule.' },
    'ingr4-p': { es: 'Acondiciona la fibra.', ca: 'Acondicia la fibra.', en: 'Conditions the fibre.', fr: 'Conditionne la fibre.' },
    'ingr5-h': { es: '\u00c1cido hialur\u00f3nico', ca: '\u00c0cid hialur\u00f2nic', en: 'Hyaluronic acid', fr: 'Acide hyaluronique' },
    'ingr5-p': { es: 'Hidrataci\u00f3n profunda.', ca: 'Hidrataci\u00f3 profunda.', en: 'Deep hydration.', fr: 'Hydratation profonde.' },
    'ingr6-p': { es: 'Antioxidante natural.', ca: 'Antioxidant natural.', en: 'Natural antioxidant.', fr: 'Antioxydant naturel.' },
    'ingr-link': { es: 'Ver INCI completo', ca: 'Veure INCI complet', en: 'View full INCI', fr: 'Voir l\u2019INCI complet' },

    /* ─── GALLERY ─── */
    'gallery-eyebrow': { es: '\u2014 Trabajos del estudio', ca: '\u2014 Treballs de l\u2019estudi', en: '\u2014 Studio work', fr: '\u2014 Travaux du studio' },
    'gallery-title': {
      es: "Resultados<br/><span class='ital'>que hablan.</span>",
      ca: "Resultats<br/><span class='ital'>que parlen.</span>",
      en: "Results<br/><span class='ital'>that speak.</span>",
      fr: "R\u00e9sultats<br/><span class='ital'>qui parlent.</span>"
    },
    'gallery-sub': {
      es: 'Una colecci\u00f3n viva de lo que hacemos cada semana en el estudio. Sin retoques ni filtros que escondan la piel real.',
      ca: 'Una col\u00b7lecci\u00f3 viva del que fem cada setmana a l\u2019estudi. Sense retocs ni filtres que amaguin la pell real.',
      en: 'A living collection of what we do every week in the studio. No retouching, no filters hiding real skin.',
      fr: 'Une collection vivante de ce que nous faisons chaque semaine au studio. Sans retouches ni filtres qui cachent la peau r\u00e9elle.'
    },
    'gallery-link': { es: 'Ver galer\u00eda completa', ca: 'Veure galeria completa', en: 'View full gallery', fr: 'Voir la galerie compl\u00e8te' },

    /* ─── DUO / FOUNDERS ─── */
    'duo-eyebrow': { es: '\u2014 Los fundadores', ca: '\u2014 Els fundadors', en: '\u2014 The founders', fr: '\u2014 Les fondateurs' },
    'duo-lead': {
      es: 'Somos la pareja y el coraz\u00f3n detr\u00e1s de Realza tu Mirada. Este proyecto naci\u00f3 de la pasi\u00f3n compartida por el detalle, el cuidado y la mirada bien hecha.',
      ca: 'Som la parella i el cor darrere de Realza tu Mirada. Aquest projecte va n\u00e9ixer de la passi\u00f3 compartida pel detall, la cura i la mirada ben feta.',
      en: 'We are the couple and the heart behind Realza tu Mirada. This project was born from a shared passion for detail, care, and a beautifully crafted gaze.',
      fr: 'Nous sommes le couple et le c\u0153ur derri\u00e8re Realza tu Mirada. Ce projet est n\u00e9 d\u2019une passion partag\u00e9e pour le d\u00e9tail, le soin et un regard impeccable.'
    },
    'duo-quote1': {
      es: '\u00abEl detalle no se ve, se siente. Por eso volv\u00e9is.\u00bb',
      ca: '\u00abEl detall no es veu, es sent. Per aix\u00f2 torneu.\u00bb',
      en: '\u00abDetail isn\u2019t seen, it\u2019s felt. That\u2019s why you come back.\u00bb',
      fr: '\u00abLe d\u00e9tail ne se voit pas, il se ressent. C\u2019est pour \u00e7a que vous revenez.\u00bb'
    },
    'duo-quote2': {
      es: '\u00abUna buena ceja te ordena toda la cara. Eso lo sabemos.\u00bb',
      ca: '\u00abUna bona cella t\u2019ordena tota la cara. Aix\u00f2 ho sabem.\u00bb',
      en: '\u00abA good brow puts your whole face in order. We know that.\u00bb',
      fr: '\u00abUn beau sourcil met tout le visage en ordre. Nous le savons.\u00bb'
    },
    'duo-link1': { es: 'Nuestra historia', ca: 'La nostra hist\u00f2ria', en: 'Our story', fr: 'Notre histoire' },
    'duo-link2': { es: 'Ense\u00f1amos lo que hacemos', ca: 'Ensenyem el que fem', en: 'We teach what we do', fr: 'Nous enseignons ce que nous faisons' },

    /* ─── TRAINING ─── */
    'train-pill': {
      es: 'Formaci\u00f3n presencial \u00b7 Andorra \u00b7 <strong>Pr\u00f3xima convocatoria: [FECHA]</strong>',
      ca: 'Formaci\u00f3 presencial \u00b7 Andorra \u00b7 <strong>Propera convocat\u00f2ria: [FECHA]</strong>',
      en: 'In-person training \u00b7 Andorra \u00b7 <strong>Next session: [FECHA]</strong>',
      fr: 'Formation en pr\u00e9sentiel \u00b7 Andorre \u00b7 <strong>Prochaine session : [FECHA]</strong>'
    },
    'train-neon': { es: 'Realza Miradas', ca: 'Realza Miradas', en: 'Realza Miradas', fr: 'Realza Miradas' },
    'train-sub': {
      es: "desde <span class='ital'>cero.</span>",
      ca: "des de <span class='ital'>zero.</span>",
      en: "from <span class='ital'>scratch.</span>",
      fr: "depuis <span class='ital'>z\u00e9ro.</span>"
    },
    'train-lead': {
      es: 'Dos d\u00edas intensivos, modelo real y un kit profesional que te llevas a casa. Una formaci\u00f3n pensada para quien empieza con ganas de hacer las cosas bien, sin atajos.',
      ca: 'Dos dies intensius, model real i un kit professional que t\u2019emportes a casa. Una formaci\u00f3 pensada per a qui comen\u00e7a amb ganes de fer les coses b\u00e9, sense dreceres.',
      en: 'Two intensive days, a real model and a professional kit you take home. A training course designed for those starting out with the drive to do things right, no shortcuts.',
      fr: 'Deux jours intensifs, un mod\u00e8le r\u00e9el et un kit professionnel \u00e0 emporter. Une formation pens\u00e9e pour celles qui d\u00e9butent avec l\u2019envie de bien faire, sans raccourcis.'
    },
    'train-stat1': { es: 'd\u00edas intensivos', ca: 'dies intensius', en: 'intensive days', fr: 'jours intensifs' },
    'train-stat2': { es: 'alumnas m\u00e1ximo', ca: 'alumnes m\u00e0xim', en: 'students max', fr: '\u00e9l\u00e8ves maximum' },
    'train-stat3': { es: 'modelos reales', ca: 'models reals', en: 'real models', fr: 'mod\u00e8les r\u00e9els' },
    'train-stat4': { es: 'piezas en el kit', ca: 'peces al kit', en: 'pieces in the kit', fr: 'pi\u00e8ces dans le kit' },
    'train-prog-eyebrow': { es: '\u2014 El programa', ca: '\u2014 El programa', en: '\u2014 The programme', fr: '\u2014 Le programme' },
    'train-prog-h': {
      es: "Hora a hora,<span class='ital'> de verdad.</span>",
      ca: "Hora a hora,<span class='ital'> de deb\u00f2.</span>",
      en: "Hour by hour,<span class='ital'> for real.</span>",
      fr: "Heure par heure,<span class='ital'> pour de vrai.</span>"
    },
    'train-prog-sub': {
      es: 'Sin relleno, sin slides de motivaci\u00f3n. Esto es lo que hacemos cada d\u00eda, contado al minuto.',
      ca: 'Sense farciment, sense diapositives de motivaci\u00f3. Aix\u00f2 \u00e9s el que fem cada dia, explicat al minut.',
      en: 'No filler, no motivational slides. This is what we do each day, told minute by minute.',
      fr: 'Pas de remplissage, pas de slides de motivation. Voici ce que nous faisons chaque jour, racont\u00e9 minute par minute.'
    },

    /* Day 1 */
    'train-day1-num':   { es: 'D\u00eda 01', ca: 'Dia 01', en: 'Day 01', fr: 'Jour 01' },
    'train-day1-title': { es: 'Anatom\u00eda, t\u00e9cnica, primera pr\u00e1ctica.', ca: 'Anatomia, t\u00e8cnica, primera pr\u00e0ctica.', en: 'Anatomy, technique, first practice.', fr: 'Anatomie, technique, premi\u00e8re pratique.' },
    'train-day1-meta':  { es: '09:30 \u2014 18:00 \u00b7 S\u00e1bado', ca: '09:30 \u2014 18:00 \u00b7 Dissabte', en: '09:30 \u2014 18:00 \u00b7 Saturday', fr: '09:30 \u2014 18:00 \u00b7 Samedi' },
    'd1-1-h': { es: 'Bienvenida y caf\u00e9', ca: 'Benvinguda i caf\u00e8', en: 'Welcome & coffee', fr: 'Bienvenue et caf\u00e9' },
    'd1-1-p': { es: 'Conoce al grupo y al espacio.', ca: 'Coneix el grup i l\u2019espai.', en: 'Meet the group and the space.', fr: 'Rencontrez le groupe et l\u2019espace.' },
    'd1-2-h': { es: 'Anatom\u00eda de la mirada', ca: 'Anatomia de la mirada', en: 'Anatomy of the gaze', fr: 'Anatomie du regard' },
    'd1-2-p': {
      es: 'Estructura de cejas y pesta\u00f1as. C\u00f3mo se dise\u00f1a una mirada por proporci\u00f3n.',
      ca: 'Estructura de celles i pestanyes. Com es dissenya una mirada per proporci\u00f3.',
      en: 'Brow and lash structure. How to design a gaze through proportion.',
      fr: 'Structure des sourcils et cils. Comment concevoir un regard par la proportion.'
    },
    'd1-3-h': { es: 'Higiene y preparaci\u00f3n', ca: 'Higiene i preparaci\u00f3', en: 'Hygiene & preparation', fr: 'Hygi\u00e8ne et pr\u00e9paration' },
    'd1-3-p': {
      es: 'Materiales, asepsia, parches. Cliente segura, profesional cuidada.',
      ca: 'Materials, as\u00e8psia, pegats. Clienta segura, professional acurada.',
      en: 'Materials, asepsis, patches. Safe client, careful professional.',
      fr: 'Mat\u00e9riaux, asepsie, patchs. Cliente en s\u00e9curit\u00e9, professionnelle soign\u00e9e.'
    },
    'd1-4-h': { es: 'Comida en grupo', ca: 'Dinar en grup', en: 'Group lunch', fr: 'D\u00e9jeuner en groupe' },
    'd1-4-p': { es: 'Incluida. Pausa con los compa\u00f1eros.', ca: 'Incl\u00f2s. Pausa amb els companys.', en: 'Included. A break with your classmates.', fr: 'Inclus. Pause avec les coll\u00e8gues.' },
    'd1-5-h': { es: 'Mapeado en pareja', ca: 'Mapejat en parella', en: 'Pair mapping', fr: 'Mapping en bin\u00f4me' },
    'd1-5-p': {
      es: 'Mapeas a tu compa\u00f1era y te mapean a ti. Cr\u00edtica constructiva.',
      ca: 'Mapeges la teva companya i et mapegen a tu. Cr\u00edtica constructiva.',
      en: 'You map your partner and they map you. Constructive feedback.',
      fr: 'Vous mappez votre partenaire et elle vous mappe. Critique constructive.'
    },
    'd1-6-h': { es: 'Primera t\u00e9cnica cl\u00e1sica', ca: 'Primera t\u00e8cnica cl\u00e0ssica', en: 'First classic technique', fr: 'Premi\u00e8re technique classique' },
    'd1-6-p': {
      es: 'Aplicaci\u00f3n pelo a pelo en modelo de pr\u00e1ctica. Ritmo, presi\u00f3n, observaci\u00f3n.',
      ca: 'Aplicaci\u00f3 p\u00e8l a p\u00e8l en model de pr\u00e0ctica. Ritme, pressi\u00f3, observaci\u00f3.',
      en: 'Hair-by-hair application on a practice model. Rhythm, pressure, observation.',
      fr: 'Application poil par poil sur mod\u00e8le de pratique. Rythme, pression, observation.'
    },
    'd1-7-h': { es: 'Cierre del d\u00eda', ca: 'Tancament del dia', en: 'Day wrap-up', fr: 'Cl\u00f4ture de la journ\u00e9e' },
    'd1-7-p': {
      es: 'Resumen del aprendizaje, dudas, kit de repaso para casa.',
      ca: 'Resum de l\u2019aprenentatge, dubtes, kit de rep\u00e0s per a casa.',
      en: 'Summary of learnings, Q&A, review kit for home.',
      fr: "R\u00e9sum\u00e9 de l\u2019apprentissage, questions, kit de r\u00e9vision \u00e0 emporter."
    },

    /* Day 2 */
    'train-day2-num':   { es: 'D\u00eda 02', ca: 'Dia 02', en: 'Day 02', fr: 'Jour 02' },
    'train-day2-title': { es: 'Modelo real, postventa, tu negocio.', ca: 'Model real, postvenda, el teu negoci.', en: 'Real model, aftercare, your business.', fr: 'Mod\u00e8le r\u00e9el, apr\u00e8s-vente, votre activit\u00e9.' },
    'train-day2-meta':  { es: '09:30 \u2014 18:30 \u00b7 Domingo', ca: '09:30 \u2014 18:30 \u00b7 Diumenge', en: '09:30 \u2014 18:30 \u00b7 Sunday', fr: '09:30 \u2014 18:30 \u00b7 Dimanche' },
    'd2-1-h': { es: 'Repaso y consultas', ca: 'Rep\u00e0s i consultes', en: 'Review & questions', fr: 'R\u00e9vision et questions' },
    'd2-1-p': { es: 'Lo que no qued\u00f3 claro del d\u00eda uno.', ca: 'El que no va quedar clar del dia u.', en: 'What wasn\u2019t clear from day one.', fr: 'Ce qui n\u2019\u00e9tait pas clair le premier jour.' },
    'd2-2-h': { es: 'Modelo real I', ca: 'Model real I', en: 'Real model I', fr: 'Mod\u00e8le r\u00e9el I' },
    'd2-2-p': {
      es: 'Primera clienta de verdad bajo supervisi\u00f3n. Mapeado, t\u00e9cnica, finalizaci\u00f3n.',
      ca: 'Primera clienta de deb\u00f2 sota supervisi\u00f3. Mapejat, t\u00e8cnica, finalitzaci\u00f3.',
      en: 'First real client under supervision. Mapping, technique, finishing.',
      fr: 'Premi\u00e8re vraie cliente sous supervision. Mapping, technique, finition.'
    },
    'd2-3-h': { es: 'Comida en grupo', ca: 'Dinar en grup', en: 'Group lunch', fr: 'D\u00e9jeuner en groupe' },
    'd2-3-p': { es: 'Incluida. Conversaci\u00f3n con J&S.', ca: 'Incl\u00f2s. Conversa amb J&S.', en: 'Included. Conversation with J&S.', fr: 'Inclus. Discussion avec J&S.' },
    'd2-4-h': { es: 'Modelo real II', ca: 'Model real II', en: 'Real model II', fr: 'Mod\u00e8le r\u00e9el II' },
    'd2-4-p': {
      es: 'Segunda clienta. Trabajamos velocidad, simetr\u00eda y di\u00e1logo.',
      ca: 'Segona clienta. Treballem velocitat, simetria i di\u00e0leg.',
      en: 'Second client. We work on speed, symmetry and dialogue.',
      fr: 'Deuxi\u00e8me cliente. Nous travaillons la vitesse, la sym\u00e9trie et le dialogue.'
    },
    'd2-5-h': { es: 'Postvenida y fidelizaci\u00f3n', ca: 'Postvenda i fidelitzaci\u00f3', en: 'Aftercare & retention', fr: 'Apr\u00e8s-vente et fid\u00e9lisation' },
    'd2-5-p': {
      es: 'Cuidado en casa, recomendaciones, citas de seguimiento, lenguaje con la clienta.',
      ca: 'Cura a casa, recomanacions, cites de seguiment, llenguatge amb la clienta.',
      en: 'Home care, recommendations, follow-up appointments, client communication.',
      fr: 'Soins \u00e0 domicile, recommandations, rendez-vous de suivi, langage client.'
    },
    'd2-6-h': { es: 'Tu plan de negocio', ca: 'El teu pla de negoci', en: 'Your business plan', fr: 'Votre plan d\u2019activit\u00e9' },
    'd2-6-p': {
      es: 'Precio, agenda, retoques, comunidad. Lo que nadie te cuenta.',
      ca: 'Preu, agenda, retocs, comunitat. El que ning\u00fa t\u2019explica.',
      en: 'Pricing, scheduling, touch-ups, community. What nobody tells you.',
      fr: 'Prix, agenda, retouches, communaut\u00e9. Ce que personne ne vous dit.'
    },
    'd2-7-h': { es: 'Entrega de diplomas', ca: 'Lliurament de diplomes', en: 'Diploma ceremony', fr: 'Remise des dipl\u00f4mes' },
    'd2-7-p': { es: 'Foto de grupo. Brindis.', ca: 'Foto de grup. Brindis.', en: 'Group photo. Toast.', fr: 'Photo de groupe. Toast.' },

    /* ─── KIT ─── */
    'kit-eyebrow': { es: '\u2014 El kit', ca: '\u2014 El kit', en: '\u2014 The kit', fr: '\u2014 Le kit' },
    'kit-h': {
      es: "Te llevas <span class='ital'>todo</span> esto.",
      ca: "T'emportes <span class='ital'>tot</span> aix\u00f2.",
      en: "You take <span class='ital'>all</span> of this home.",
      fr: "Vous repartez avec <span class='ital'>tout</span> ceci."
    },
    'kit-sub': {
      es: 'Empiezas a trabajar nada m\u00e1s salir. Sin compras de \u00faltima hora, sin sorpresas.',
      ca: 'Comences a treballar tot just sortir. Sense compres d\u2019\u00faltima hora, sense sorpreses.',
      en: 'You start working the moment you leave. No last-minute purchases, no surprises.',
      fr: 'Vous commencez \u00e0 travailler d\u00e8s votre sortie. Pas d\u2019achats de derni\u00e8re minute, pas de surprises.'
    },
    'kit1': { es: 'Pinzas profesionales', ca: 'Pinces professionals', en: 'Professional tweezers', fr: 'Pinces professionnelles' },
    'kit2': { es: 'Bandeja de cristal', ca: 'Safata de cristall', en: 'Glass tray', fr: 'Plateau en verre' },
    'kit3': { es: 'Parches y micropore', ca: 'Pegats i micropore', en: 'Patches & micropore', fr: 'Patchs et micropore' },
    'kit4': { es: 'Extensiones (3 longitudes)', ca: 'Extensions (3 longituds)', en: 'Extensions (3 lengths)', fr: 'Extensions (3 longueurs)' },
    'kit5': { es: 'Adhesivo profesional', ca: 'Adhesiu professional', en: 'Professional adhesive', fr: 'Adh\u00e9sif professionnel' },
    'kit6': { es: 'Espuma limpiadora', ca: 'Escuma netejadora', en: 'Cleansing foam', fr: 'Mousse nettoyante' },
    'kit7': { es: 'Manual Realza', ca: 'Manual Realza', en: 'Realza manual', fr: 'Manuel Realza' },
    'kit8': { es: 'Bolsa de transporte', ca: 'Bossa de transport', en: 'Carry bag', fr: 'Sac de transport' },

    /* ─── WHO IS IT FOR ─── */
    'who-eyebrow': { es: '\u2014 \u00bfPara qui\u00e9n es?', ca: '\u2014 Per a qui \u00e9s?', en: '\u2014 Who is it for?', fr: '\u2014 Pour qui ?' },
    'who-yes-h': { es: 'Para ti, si\u2026', ca: 'Per a tu, si\u2026', en: 'For you, if\u2026', fr: 'Pour vous, si\u2026' },
    'who-yes-1': {
      es: 'Empiezas de cero y quieres una base t\u00e9cnica s\u00f3lida.',
      ca: 'Comences de zero i vols una base t\u00e8cnica s\u00f2lida.',
      en: 'You\u2019re starting from scratch and want a solid technical foundation.',
      fr: 'Vous partez de z\u00e9ro et voulez une base technique solide.'
    },
    'who-yes-2': {
      es: 'Ya trabajas en est\u00e9tica y quieres ampliar a pesta\u00f1as.',
      ca: 'Ja treballes en est\u00e8tica i vols ampliar a pestanyes.',
      en: 'You already work in beauty and want to expand into lashes.',
      fr: 'Vous travaillez d\u00e9j\u00e0 en esth\u00e9tique et souhaitez vous \u00e9largir aux cils.'
    },
    'who-yes-3': {
      es: 'Buscas un oficio con demanda recurrente y rentable.',
      ca: 'Busques un ofici amb demanda recurrent i rendible.',
      en: 'You\u2019re looking for a profession with recurring, profitable demand.',
      fr: 'Vous cherchez un m\u00e9tier \u00e0 demande r\u00e9currente et rentable.'
    },
    'who-yes-4': {
      es: 'Te importa el criterio, no solo copiar mappings.',
      ca: 'Et preocupa el criteri, no nom\u00e9s copiar mappings.',
      en: 'You care about judgement, not just copying mappings.',
      fr: 'Vous vous souciez du discernement, pas seulement de copier des mappings.'
    },
    'who-no-eyebrow': { es: '\u2014 No es para ti', ca: '\u2014 No \u00e9s per a tu', en: '\u2014 Not for you', fr: '\u2014 Pas pour vous' },
    'who-no-h': { es: 'Sigue buscando, si\u2026', ca: 'Segueix buscant, si\u2026', en: 'Keep looking, if\u2026', fr: 'Continuez \u00e0 chercher, si\u2026' },
    'who-no-1': {
      es: 'Quieres certificarte en un fin de semana sin tocar a una clienta real.',
      ca: 'Vols certificar-te en un cap de setmana sense tocar una clienta real.',
      en: 'You want to get certified in a weekend without touching a real client.',
      fr: 'Vous voulez \u00eatre certifi\u00e9e en un week-end sans toucher une vraie cliente.'
    },
    'who-no-2': {
      es: 'Esperas que te diga \u00abel m\u00e9todo\u00bb sin ense\u00f1arte el porqu\u00e9.',
      ca: "Esperes que et digui \u00abel m\u00e8tode\u00bb sense ensenyar-te el perqu\u00e8.",
      en: 'You expect to be told \u00abthe method\u00bb without being taught the why.',
      fr: 'Vous attendez qu\u2019on vous donne \u00abla m\u00e9thode\u00bb sans vous enseigner le pourquoi.'
    },
    'who-no-3': {
      es: 'Vienes a sacar foto para Instagram y volver a casa.',
      ca: "Vens a fer fotos per a Instagram i tornar a casa.",
      en: 'You\u2019re here to snap photos for Instagram and go home.',
      fr: 'Vous venez prendre des photos pour Instagram et rentrer chez vous.'
    },
    'who-no-4': {
      es: 'No est\u00e1s dispuesta a equivocarte delante de tus compa\u00f1eras.',
      ca: "No est\u00e0s disposada a equivocar-te davant de les teves companyes.",
      en: 'You\u2019re not willing to make mistakes in front of your classmates.',
      fr: "Vous n\u2019\u00eates pas pr\u00eate \u00e0 vous tromper devant vos coll\u00e8gues."
    },

    /* ─── LOGISTICS ─── */
    'log-eyebrow': { es: '\u2014 Lo importante', ca: '\u2014 El m\u00e9s important', en: '\u2014 What matters', fr: '\u2014 L\u2019essentiel' },
    'log-h': {
      es: "Detalles<span class='ital'> pr\u00e1cticos.</span>",
      ca: "Detalls<span class='ital'> pr\u00e0ctics.</span>",
      en: "Practical<span class='ital'> details.</span>",
      fr: "D\u00e9tails<span class='ital'> pratiques.</span>"
    },
    'log-dt-date':     { es: 'Pr\u00f3xima convocatoria', ca: 'Propera convocat\u00f2ria', en: 'Next session', fr: 'Prochaine session' },
    'log-dd-date':     {
      es: '<em>[FECHA] \u2014 confirma plaza por WhatsApp</em>',
      ca: '<em>[FECHA] \u2014 confirma pla\u00e7a per WhatsApp</em>',
      en: '<em>[FECHA] \u2014 confirm your spot via WhatsApp</em>',
      fr: '<em>[FECHA] \u2014 confirmez votre place par WhatsApp</em>'
    },
    'log-dt-schedule': { es: 'Horario', ca: 'Horari', en: 'Schedule', fr: 'Horaire' },
    'log-dd-schedule': { es: 'S\u00e1bado y domingo \u00b7 09:30 a 18:00 / 18:30', ca: 'Dissabte i diumenge \u00b7 09:30 a 18:00 / 18:30', en: 'Saturday & Sunday \u00b7 09:30 to 18:00 / 18:30', fr: 'Samedi et dimanche \u00b7 09:30 \u00e0 18:00 / 18:30' },
    'log-dt-studio':   { es: 'Estudio', ca: 'Estudi', en: 'Studio', fr: 'Studio' },
    'log-dt-spots':    { es: 'Plazas', ca: 'Places', en: 'Spots', fr: 'Places' },
    'log-dd-spots':    {
      es: '4 alumnas m\u00e1ximo \u00b7 queda <strong style="color:#FFC58A">1 plaza</strong>',
      ca: '4 alumnes m\u00e0xim \u00b7 queda <strong style="color:#FFC58A">1 pla\u00e7a</strong>',
      en: '4 students max \u00b7 <strong style="color:#FFC58A">1 spot</strong> left',
      fr: '4 \u00e9l\u00e8ves maximum \u00b7 <strong style="color:#FFC58A">1 place</strong> restante'
    },
    'log-dt-invest':   { es: 'Inversi\u00f3n', ca: 'Inversi\u00f3', en: 'Investment', fr: 'Investissement' },
    'log-dd-invest':   { es: 'Consulta \u00b7 Pago aplazado en 3 cuotas disponible', ca: 'Consulta \u00b7 Pagament ajornat en 3 quotes disponible', en: 'On request \u00b7 3-instalment payment plan available', fr: 'Sur demande \u00b7 Paiement en 3 fois disponible' },
    'log-dt-lang':     { es: 'Idioma', ca: 'Idioma', en: 'Language', fr: 'Langue' },
    'log-dd-lang':     { es: 'Espa\u00f1ol \u00b7 Catal\u00e1n', ca: 'Espanyol \u00b7 Catal\u00e0', en: 'Spanish \u00b7 Catalan', fr: 'Espagnol \u00b7 Catalan' },
    'log-dt-includes': { es: 'Lo que incluye', ca: 'Qu\u00e8 inclou', en: 'What\u2019s included', fr: 'Ce qui est inclus' },
    'log-dd-includes': {
      es: 'Kit profesional, manual, certificado, modelo real, coffee y comida los dos d\u00edas',
      ca: 'Kit professional, manual, certificat, model real, caf\u00e8 i \u00e0pat els dos dies',
      en: 'Professional kit, manual, certificate, real model, coffee & lunch both days',
      fr: 'Kit professionnel, manuel, certificat, mod\u00e8le r\u00e9el, caf\u00e9 et repas les deux jours'
    },
    'log-btn':      { es: 'Reservar plaza', ca: 'Reservar pla\u00e7a', en: 'Reserve your spot', fr: 'R\u00e9server votre place' },
    'log-whatsapp': { es: 'Hablar por WhatsApp', ca: 'Parlar per WhatsApp', en: 'Chat on WhatsApp', fr: 'Parler sur WhatsApp' },
    'log-quote':    {
      es: '\u00abAqu\u00ed te equivocas tres veces antes de hacerlo bien una.\u00bb',
      ca: '\u00abAqu\u00ed t\u2019equivoques tres vegades abans de fer-ho b\u00e9 una.\u00bb',
      en: '\u00abHere you make three mistakes before getting it right once.\u00bb',
      fr: '\u00abIci on se trompe trois fois avant de r\u00e9ussir une.\u00bb'
    },

    /* ─── TESTIMONIALS ─── */
    'testi-eyebrow': { es: '\u2014 Lo que dicen', ca: '\u2014 El que diuen', en: '\u2014 What they say', fr: '\u2014 Ce qu\u2019elles disent' },

    /* ─── STUDIO ─── */
    'studio-eyebrow': { es: '\u2014 El estudio', ca: '\u2014 L\u2019estudi', en: '\u2014 The studio', fr: '\u2014 Le studio' },
    'studio-h': {
      es: "Te esperamos<span class='ital'>en Andorra.</span>",
      ca: "T\u2019esperem<span class='ital'>a Andorra.</span>",
      en: "We\u2019re waiting<span class='ital'>in Andorra.</span>",
      fr: "Nous vous attendons<span class='ital'>en Andorre.</span>"
    },
    'studio-weekdays': { es: 'Lun\u2013Vie', ca: 'Dll\u2013Div', en: 'Mon\u2013Fri', fr: 'Lun\u2013Ven' },
    'studio-sat':     { es: 'S\u00e1bado', ca: 'Dissabte', en: 'Saturday', fr: 'Samedi' },
    'studio-sun':     { es: 'Domingo', ca: 'Diumenge', en: 'Sunday', fr: 'Dimanche' },
    'studio-closed':  { es: 'Cerrado', ca: 'Tancat', en: 'Closed', fr: 'Ferm\u00e9' },
    'studio-maps':    { es: 'Abrir en Google Maps', ca: 'Obrir a Google Maps', en: 'Open in Google Maps', fr: 'Ouvrir dans Google Maps' },
    'studio-book':    { es: 'Reservar tu cita', ca: 'Reservar la teva cita', en: 'Book your appointment', fr: 'R\u00e9server votre rendez-vous' },

    /* ─── FOOTER CTA ─── */
    'fcta-eyebrow': { es: 'El \u00faltimo gesto antes de irte', ca: 'L\u2019\u00faltim gest abans de marxar', en: 'One last gesture before you go', fr: 'Un dernier geste avant de partir' },
    'fcta-h': {
      es: "Reserva <em>tu</em><br/>mirada.",
      ca: "Reserva <em>la teva</em><br/>mirada.",
      en: "Book <em>your</em><br/>gaze.",
      fr: "R\u00e9servez <em>votre</em><br/>regard."
    },
    'fcta-btn': { es: 'Reservar cita', ca: 'Reservar cita', en: 'Book appointment', fr: 'Prendre rendez-vous' },
    'fcta-wa':  { es: 'WhatsApp directo', ca: 'WhatsApp directe', en: 'Direct WhatsApp', fr: 'WhatsApp direct' },

    /* ─── NEWSLETTER ─── */
    'nl-eyebrow': { es: 'Bolet\u00edn \u00b7 Cada dos semanas', ca: 'Butllet\u00ed \u00b7 Cada dues setmanes', en: 'Newsletter \u00b7 Every two weeks', fr: 'Bulletin \u00b7 Toutes les deux semaines' },
    'nl-h': {
      es: "S\u00famate al <em>C\u00edrculo Mirada.</em>",
      ca: "Uneix-te al <em>Cercle Mirada.</em>",
      en: "Join the <em>Mirada Circle.</em>",
      fr: "Rejoignez le <em>Cercle Mirada.</em>"
    },
    'nl-sub': {
      es: 'Rituales de cuidado, lanzamientos del estudio y acceso anticipado a pr\u00f3ximas formaciones \u2014 directo a tu bandeja.',
      ca: 'Rituals de cura, llan\u00e7aments de l\u2019estudi i acc\u00e9s anticipat a properes formacions \u2014 directe a la teva safata.',
      en: 'Care rituals, studio launches and early access to upcoming trainings \u2014 straight to your inbox.',
      fr: 'Rituels de soin, lancements du studio et acc\u00e8s anticip\u00e9 aux prochaines formations \u2014 directement dans votre bo\u00eete.'
    },

    /* ─── FOOTER ─── */
    'foot-studio':     { es: 'Estudio', ca: 'Estudi', en: 'Studio', fr: 'Studio' },
    'foot-directions': { es: 'C\u00f3mo llegar', ca: 'Com arribar-hi', en: 'Directions', fr: 'Comment venir' },
    'foot-hours':      { es: 'Horarios', ca: 'Horaris', en: 'Hours', fr: 'Horaires' },
    'foot-mon': { es: 'Lun', ca: 'Dll', en: 'Mon', fr: 'Lun' },
    'foot-tue': { es: 'Mar', ca: 'Dim', en: 'Tue', fr: 'Mar' },
    'foot-wed': { es: 'Mi\u00e9', ca: 'Dc', en: 'Wed', fr: 'Mer' },
    'foot-thu': { es: 'Jue', ca: 'Dj', en: 'Thu', fr: 'Jeu' },
    'foot-fri': { es: 'Vie', ca: 'Dv', en: 'Fri', fr: 'Ven' },
    'foot-sat': { es: 'S\u00e1b', ca: 'Ds', en: 'Sat', fr: 'Sam' },
    'foot-sun': { es: 'Dom', ca: 'Dg', en: 'Sun', fr: 'Dim' },
    'foot-closed':  { es: 'Cerrado', ca: 'Tancat', en: 'Closed', fr: 'Ferm\u00e9' },
    'foot-services': { es: 'Servicios', ca: 'Serveis', en: 'Services', fr: 'Services' },
    'foot-book':     { es: 'Reservar \u2192', ca: 'Reservar \u2192', en: 'Book \u2192', fr: 'R\u00e9server \u2192' },
    'foot-shop':     { es: 'Tienda', ca: 'Botiga', en: 'Shop', fr: 'Boutique' },
    'foot-serum':    { es: 'S\u00e9rum para pesta\u00f1as', ca: 'S\u00e8rum per a pestanyes', en: 'Lash serum', fr: 'S\u00e9rum pour cils' },
    'foot-pack':     { es: 'Pack ritual', ca: 'Pack ritual', en: 'Ritual pack', fr: 'Pack rituel' },
    'foot-gift':     { es: 'Tarjeta regalo', ca: 'Targeta regal', en: 'Gift card', fr: 'Carte cadeau' },
    'foot-contact':  { es: 'Contacto', ca: 'Contacte', en: 'Contact', fr: 'Contact' },
    'foot-follow':   { es: 'Sigue', ca: 'Segueix', en: 'Follow', fr: 'Suivez' },
    'foot-copy':     { es: '\u00a9 2026 \u00b7 Hecho con cuidado en Andorra', ca: '\u00a9 2026 \u00b7 Fet amb cura a Andorra', en: '\u00a9 2026 \u00b7 Made with care in Andorra', fr: '\u00a9 2026 \u00b7 Fait avec soin en Andorre' },
    'foot-privacy':  { es: 'Privacidad', ca: 'Privacitat', en: 'Privacy', fr: 'Confidentialit\u00e9' },
    'foot-cookies':  { es: 'Cookies', ca: 'Cookies', en: 'Cookies', fr: 'Cookies' },
    'foot-terms':    { es: 'T\u00e9rminos', ca: 'Termes', en: 'Terms', fr: 'Conditions' }
  };

  /* ── Testimonials per language ── */
  var TESTIMONIALS = {
    es: [
      { quote: 'Vine por una sesi\u00f3n y volv\u00ed por la experiencia. Stephany lee tu cara como nadie.', name: 'Marta L.', role: 'Laminado de cejas', img: 'assets/lamination-3.jpg' },
      { quote: 'El s\u00e9rum me cambi\u00f3 las pesta\u00f1as en dos meses. Real, no marketing.', name: 'N\u00faria F.', role: 'S\u00e9rum para pesta\u00f1as', img: 'assets/lamination-5.jpg' },
      { quote: 'Andorra ten\u00eda deuda con un sitio como este \u2014 atendido, cuidado y bonito.', name: 'Clara V.', role: 'Clienta habitual', img: 'assets/lamination-2.jpg' },
      { quote: 'Jonathan es minucioso hasta lo enfermizo. Por eso mi laminado dura todo el mes.', name: 'Elena R.', role: 'Laminado + Lifting', img: 'assets/lamination-6.jpg' }
    ],
    ca: [
      { quote: 'Vaig venir per una sessi\u00f3 i vaig tornar per l\u2019experi\u00e8ncia. La Stephany et llegeix la cara com ning\u00fa.', name: 'Marta L.', role: 'Laminat de celles', img: 'assets/lamination-3.jpg' },
      { quote: 'El s\u00e8rum em va canviar les pestanyes en dos mesos. Real, no m\u00e0rqueting.', name: 'N\u00faria F.', role: 'S\u00e8rum per a pestanyes', img: 'assets/lamination-5.jpg' },
      { quote: 'Andorra devia un lloc com aquest \u2014 atent, cuidat i bonic.', name: 'Clara V.', role: 'Clienta habitual', img: 'assets/lamination-2.jpg' },
      { quote: 'En Jonathan \u00e9s minuci\u00f3s fins a l\u2019exager\u00e9. Per aix\u00f2 el meu laminat dura tot el mes.', name: 'Elena R.', role: 'Laminat + Lifting', img: 'assets/lamination-6.jpg' }
    ],
    en: [
      { quote: 'I came for a session and came back for the experience. Stephany reads your face like no one else.', name: 'Marta L.', role: 'Brow lamination', img: 'assets/lamination-3.jpg' },
      { quote: 'The serum transformed my lashes in two months. Real results, not marketing.', name: 'N\u00faria F.', role: 'Lash serum', img: 'assets/lamination-5.jpg' },
      { quote: 'Andorra was long overdue for a place like this \u2014 attentive, caring and beautiful.', name: 'Clara V.', role: 'Regular client', img: 'assets/lamination-2.jpg' },
      { quote: 'Jonathan is meticulous to the extreme. That\u2019s why my lamination lasts the entire month.', name: 'Elena R.', role: 'Lamination + Lift', img: 'assets/lamination-6.jpg' }
    ],
    fr: [
      { quote: 'Je suis venue pour une s\u00e9ance et je suis revenue pour l\u2019exp\u00e9rience. Stephany lit votre visage comme personne.', name: 'Marta L.', role: 'Lamination des sourcils', img: 'assets/lamination-3.jpg' },
      { quote: 'Le s\u00e9rum a transform\u00e9 mes cils en deux mois. Du vrai, pas du marketing.', name: 'N\u00faria F.', role: 'S\u00e9rum pour cils', img: 'assets/lamination-5.jpg' },
      { quote: 'Andorre avait besoin d\u2019un endroit comme celui-ci \u2014 soign\u00e9, attentif et beau.', name: 'Clara V.', role: 'Cliente r\u00e9guli\u00e8re', img: 'assets/lamination-2.jpg' },
      { quote: 'Jonathan est minutieux \u00e0 l\u2019extr\u00eame. C\u2019est pour cela que ma lamination tient tout le mois.', name: 'Elena R.', role: 'Lamination + Rehaussement', img: 'assets/lamination-6.jpg' }
    ]
  };

  /* ── Day names per language (for booking calendar) ── */
  var DAY_NAMES = {
    es: ['Dom', 'Lun', 'Mar', 'Mi\u00e9', 'Jue', 'Vie', 'S\u00e1b'],
    ca: ['Dg', 'Dll', 'Dm', 'Dc', 'Dj', 'Dv', 'Ds'],
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  };

  /* ── Service names per language (for booking summary) ── */
  var SVC_NAMES = {
    es: { laminado: 'Laminado de cejas', lifting: 'Lifting de pesta\u00f1as', extensiones: 'Extensiones cl\u00e1sicas', diseno: 'Dise\u00f1o de mirada' },
    ca: { laminado: 'Laminat de celles', lifting: 'Lifting de pestanyes', extensiones: 'Extensions cl\u00e0ssiques', diseno: 'Disseny de mirada' },
    en: { laminado: 'Brow lamination', lifting: 'Lash lift', extensiones: 'Classic extensions', diseno: 'Gaze design' },
    fr: { laminado: 'Lamination des sourcils', lifting: 'Rehaussement de cils', extensiones: 'Extensions classiques', diseno: 'Design du regard' }
  };

  /* ── Date locale mapping ── */
  var DATE_LOCALE = { es: 'es-ES', ca: 'ca-ES', en: 'en-GB', fr: 'fr-FR' };

  /* ── Current lang ── */
  var currentLang = localStorage.getItem('realza-lang') || 'es';

  /* ── setLang ── */
  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('realza-lang', lang);

    // Update <html lang>
    document.documentElement.lang = lang;

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (I18N[key] && I18N[key][lang]) el.textContent = I18N[key][lang];
    });

    // innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (I18N[key] && I18N[key][lang]) el.innerHTML = I18N[key][lang];
    });

    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (I18N[key] && I18N[key][lang]) el.placeholder = I18N[key][lang];
    });

    // Lang indicator
    var langCurrent = document.getElementById('langCurrent');
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    // Active states in dropdown
    var dropdown = document.getElementById('langDropdown');
    if (dropdown) {
      dropdown.querySelectorAll('button[data-lang]').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      });
    }

    // Update testimonials
    if (typeof window._testiShowFn === 'function' && TESTIMONIALS[lang]) {
      window._testiData = TESTIMONIALS[lang];
      window._testiShowFn(window._testiIdx || 0);
    }

    // Update booking calendar day names & svc names (if exposed)
    if (DAY_NAMES[lang]) window._dayNames = DAY_NAMES[lang];
    if (SVC_NAMES[lang]) window._svcNames = SVC_NAMES[lang];
    if (DATE_LOCALE[lang]) window._dateLocale = DATE_LOCALE[lang];

    // Rebuild booking days if visible
    if (typeof window._buildDays === 'function') {
      var step2 = document.getElementById('booking-step-2');
      if (step2 && step2.style.display !== 'none') {
        window._buildDays();
      }
    }

    // Rebuild summary if visible
    if (typeof window._buildSummary === 'function') {
      var step3 = document.getElementById('booking-step-3');
      if (step3 && step3.style.display !== 'none') {
        window._buildSummary();
      }
    }
  }

  /* ── Toggle dropdown ── */
  var langToggle = document.getElementById('langToggle');
  var langDropdown = document.getElementById('langDropdown');

  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    langDropdown.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-lang]');
      if (!btn) return;
      setLang(btn.getAttribute('data-lang'));
      langDropdown.classList.remove('open');
    });

    document.addEventListener('click', function () {
      langDropdown.classList.remove('open');
    });
  }

  /* ── Expose to global for existing JS to use ── */
  window._testiData = TESTIMONIALS[currentLang] || TESTIMONIALS.es;
  window._testiIdx = 0;
  window._dayNames = DAY_NAMES[currentLang] || DAY_NAMES.es;
  window._svcNames = SVC_NAMES[currentLang] || SVC_NAMES.es;
  window._dateLocale = DATE_LOCALE[currentLang] || DATE_LOCALE.es;

  /* ── Init on load ── */
  setLang(currentLang);

})();
