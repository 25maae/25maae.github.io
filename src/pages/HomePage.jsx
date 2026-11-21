import { Link } from "react-router";
import projects from "../data/projects";

function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="home-intro">
          <p className="eyebrow">Portfolio 2026</p>
          <h1>Martin Hammerum Ærensgaard</h1>
          <p className="hero-text">
            Multimediedesign-studerende med fokus på digitale løsninger,
            brugeroplevelser og visuel identitet.
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}pb-bw-75.png`}
          alt="Portræt af Martin Hammerum Ærensgaard"
          className="home-portrait"
          fetchPriority="high"
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Mine projekter</h2>
          <p>Gå på opdagelse i mit arbejde.</p>
        </div>

        <div className="featured-work">
          {projects.map((project) => (
            <article key={project.slug}>
              <Link className="work-link" to={`/projects/${project.slug}`}>
                <img src={project.image} alt="" loading="lazy" />
                <div className="work-caption">
                  <span className="eyebrow">{project.year}</span>
                  <h3>{project.title}</h3>
                  <span className="work-arrow" aria-hidden="true">↗</span>
                </div>
              </Link>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
