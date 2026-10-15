import { Link, useParams } from "react-router";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const detailImages = project?.detailImages ?? [project?.image].filter(Boolean);
  const content =
    project?.content ??
    detailImages.map((image) => ({
      type: "image",
      src: image,
    }));

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
        {content.map((item, index) =>
          item.type === "heading" ? (
            <h2 key={`${project.slug}-heading-${index}`}>{item.text}</h2>
          ) : item.type === "subheading" ? (
            <h3 key={`${project.slug}-subheading-${index}`}>{item.text}</h3>
          ) : item.type === "text" ? (
            <p className="project-content-text" key={`${project.slug}-text-${index}`}>
              {item.text}
            </p>
          ) : (
            <img
              className="detail-image"
              src={item.src}
              alt={item.alt ?? `${project.title} billede ${index + 1}`}
              key={`${project.slug}-image-${index}`}
            />
          ),
        )}
      </div>
    </article>
  );
}

export default ProjectPage;
