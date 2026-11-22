const tools = ["Figma", "GitHub", "HTML", "CSS", "React", "Supabase", "Illustrator", "Photoshop"];

function AboutPage() {
  return (
    <div className="page about-page">
      <section className="about-profile" aria-labelledby="about-heading">
        <div className="about-copy">
          <h1 id="about-heading">Hvem er jeg?</h1>
          <p>
            Jeg er Martin, en 24-årig multimediedesign-studerende med hænderne i
            både design og programmering.
            Jeg nyder at arbejde med det visuelle samt de tanker, der skaber
            fantastiske brugeroplevelser, og jeg sætter stor pris på systemer,
            når det kommer til digitale løsninger. Når jeg først er i gang med
            et projekt, slipper jeg det sjældent, før detaljerne er på plads.
            Jeg trives i teams med samarbejde og sparring, men tager også gerne
            selvstændigt ansvar. Mit arbejde kendetegnes af struktur, sans for
            detaljer og en drivkraft i at bringe idéer til live.
          </p>
        </div>
        <div className="about-portrait">
          <img src={`${import.meta.env.BASE_URL}portraet-about.jpg`}
            alt="Portræt af Martin Hammerum Ærensgaard" width="600" height="800" />
        </div>
      </section>
      <section className="about-toolbox" aria-labelledby="tools-heading">
        <h2 id="tools-heading">Mine værktøjer</h2>
        <ul>
          {tools.map((tool) => (
            <li key={tool}>
              <img src={`${import.meta.env.BASE_URL}${tool.toLowerCase()}-logo.svg`}
                alt="" width="28" height="28" loading="lazy" />
              {tool}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
