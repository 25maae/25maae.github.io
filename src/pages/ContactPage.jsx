function ContactPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Kontakt</p>
      <h1>Lad os tale sammen.</h1>
      <p className="lead">
        Kontakt mig via:
      </p>

      <ul className="contact-list">
        <li>
          <a href="mailto:martinhammerum2@gmail.com">
            martinhammerum2@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/25maae"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
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
