function ContactPage() {
  return (
    <div className="page narrow">
      <h1>Lad os kreere sammen.</h1>
      <p className="lead">Du kan kontakte mig via:</p>

      <ul className="contact-list">
        <li>
          <a href="mailto:martinhammerum2@gmail.com">
            Mail
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/martin-%C3%A6rensgaard-a649a026b/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactPage;
