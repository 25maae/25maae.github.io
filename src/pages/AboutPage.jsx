function AboutPage() {
  return (
    <div className="page narrow">
      <h1>Hvem er jeg?</h1>
      <p className="lead">
        Jeg er Martin, en 23 årig, multimediedesign-studerende med hænderne i
        både design og programmering. Jeg nyder at arbejde med det visuelle samt
        de tanker, der skaber fantastiske brugeroplevelser og jeg sætter stor
        pris på systemmer, når det kommer til digitale løsninger. Når jeg først
        er i gang med et projekt, slipper jeg det sjældent før detaljerne er på
        plads. Jeg trives i teams med samarbejde og sparing, men tager også
        gerne selvstændigt ansvar. Mit arbejde kendetegnes af struktur, sans for
        detaljer og en drivkraft i at bringe idéer til live.
      </p>
      <section className="info-list" aria-label="Om mig detaljer">
        <h2>Tools</h2>
        <div className="about-tools">
          <img
            className="figma-logo"
            alt="Figma logo"
            src={`${import.meta.env.BASE_URL}figma-logo.svg`}
            loading="lazy"
          />
          <img
            className="github-logo"
            alt="GitHub logo"
            src={`${import.meta.env.BASE_URL}github-logo.svg`}
            loading="lazy"
          />
          <img
            className="html-logo"
            alt="HTML logo"
            src={`${import.meta.env.BASE_URL}html-logo.svg`}
            loading="lazy"
          />
          <img
            className="css-logo"
            alt="CSS logo"
            src={`${import.meta.env.BASE_URL}css-logo.svg`}
            loading="lazy"
          />
          <img
            className="react-logo"
            alt="React logo"
            src={`${import.meta.env.BASE_URL}react-logo.svg`}
            loading="lazy"
          />
          <img
            className="supabase-logo"
            alt="Supabase logo"
            src={`${import.meta.env.BASE_URL}supabase-logo.svg`}
            loading="lazy"
          />
          <img
            className="illustrator-logo"
            alt="illustrator logo"
            src={`${import.meta.env.BASE_URL}illustrator-logo.svg`}
            loading="lazy"
          />
          <img
            className="photoshop-logo"
            alt="Photoshop logo"
            src={`${import.meta.env.BASE_URL}photoshop-logo.svg`}
            loading="lazy"
          />
        </div>
      </section>
      <img
        className="portraet"
        alt="portræt"
        src={`${import.meta.env.BASE_URL}portraet.png`}
        loading="lazy"
      />
    </div>
  );
}

export default AboutPage;
