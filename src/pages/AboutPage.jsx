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
        <div>
          <h2>Tools</h2>
          <p>
            React, HTML, CSS, JavaScript, Figma, Adobe programmer.
          </p>
        </div>
        <div>
          <h2>Jeg er nysgerrig på</h2>
          <p>
            Brugeroplevelser, visuel identitet og hvordan kode bliver til noget
            brugbart.
          </p>
        </div>
      </section>
      <h2>Martin udefra</h2>
      <p className="lead">
        I forbindelse til mit arbejde med digitale løsninger.
      </p>
    </div>
  );
}

export default AboutPage;
