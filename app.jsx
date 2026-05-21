// app.jsx — Root. Variant B is the default v2.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "variant": "B",
  "palette": "warm",
  "anim": "full",
  "preloader": true
}/*EDITMODE-END*/;

const PALETTES = {
  warm: { accent: "#A35C32", bronze: "#8C4A1F", rose: "#D89764", peach: "#EFC499", warm: "#F8E6D1" },
  rose: { accent: "#C97A6A", bronze: "#8C4F45", rose: "#E5B3A4", peach: "#F1CFC4", warm: "#F5E0D6" },
  gold: { accent: "#C9A063", bronze: "#8E6E3D", rose: "#D9C29A", peach: "#F0DCB6", warm: "#F5E8CC" },
  ink:  { accent: "#5E5042", bronze: "#3C3225", rose: "#A38E76", peach: "#D4BFA3", warm: "#E7D8BF" },
};

const PALETTE_SWATCHES = {
  warm: ["#A35C32", "#EFC499", "#FAEEDD"],
  rose: ["#C97A6A", "#F1CFC4", "#F5E0D6"],
  gold: ["#C9A063", "#F0DCB6", "#F5E8CC"],
  ink:  ["#5E5042", "#D4BFA3", "#E7D8BF"],
};

function applyPalette(name) {
  const p = PALETTES[name] || PALETTES.warm;
  const r = document.documentElement;
  r.style.setProperty("--accent-gold", p.accent);
  r.style.setProperty("--accent-bronze", p.bronze);
  r.style.setProperty("--accent-rose", p.rose);
  r.style.setProperty("--bg-peach", p.peach);
  r.style.setProperty("--bg-warm", p.warm);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  useEffect(() => { document.body.setAttribute("data-anim", t.anim); }, [t.anim]);
  useEffect(() => { window.scrollTo(0, 0); }, [t.variant]);

  const variantContent = t.variant === "A"
    ? <VariantA tweaks={t} />
    : <VariantB tweaks={t} />;

  return (
    <LangProvider>
      <Preloader enabled={t.preloader} key={t.variant} />
      {variantContent}
      <TweaksPanel>
        <TweakSection label="Variante" />
        <TweakRadio
          label="Diseño"
          value={t.variant}
          options={["A", "B"]}
          onChange={(v) => setTweak("variant", v)}
        />

        <TweakSection label="Marca" />
        <TweakColor
          label="Paleta de acento"
          value={PALETTE_SWATCHES[t.palette]}
          options={[
            PALETTE_SWATCHES.warm,
            PALETTE_SWATCHES.rose,
            PALETTE_SWATCHES.gold,
            PALETTE_SWATCHES.ink,
          ]}
          onChange={(arr) => {
            const name = Object.keys(PALETTE_SWATCHES).find(
              k => JSON.stringify(PALETTE_SWATCHES[k]) === JSON.stringify(arr)
            ) || "warm";
            setTweak("palette", name);
          }}
        />

        <TweakSection label="Movimiento" />
        <TweakRadio
          label="Animaciones"
          value={t.anim}
          options={["off", "soft", "full"]}
          onChange={(v) => setTweak("anim", v)}
        />

        <TweakToggle
          label="Mostrar preloader"
          value={t.preloader}
          onChange={(v) => setTweak("preloader", v)}
        />
      </TweaksPanel>
    </LangProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
