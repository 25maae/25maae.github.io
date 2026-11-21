import { Link } from "react-router";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

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
          <h2>Nyeste projekter</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt={`Preview af ${project.title}`} loading="lazy" />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link to={`/projects/${project.slug}`}>Se projektet<span className="sr-only"> om {project.title}</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
