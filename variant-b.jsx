// variant-b.jsx — Root of Variante B v2.

function VariantB({ tweaks }) {
  // Apply scroll-color-shift across the page.
  useScrollColorShift(SECTION_PALETTE);

  return (
    <div className="vb v2">
      <Header variant="B" />
      <StickyReserve />
      <VBHero />
      <VBMarquee />
      <VBManifest />
      <VBServices />
      <VBSerum />
      <VBBooking />
      <VBIngredients />
      <VBGallery />
      <VBDuo />
      <VBTraining />
      <VBTestimonials />
      <VBStudio />
      <Footer />
    </div>
  );
}

Object.assign(window, { VariantB });
