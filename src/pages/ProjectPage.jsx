import { Link, useParams } from "react-router";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const detailImages = project?.detailImages ?? [project?.image].filter(Boolean);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className="page narrow">
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>
      <p className="eyebrow">{project.year}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="actions">
        {project.links.map((link) => (
          <a
            className="button secondary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="detail-image-gallery">
        {detailImages.map((image, index) => (
          <img
            className="detail-image"
            src={image}
            alt={`${project.title} billede ${index + 1}`}
            key={`${project.slug}-${index}`}
          />
        ))}
      </div>
    </article>
  );
}

export default ProjectPage;
