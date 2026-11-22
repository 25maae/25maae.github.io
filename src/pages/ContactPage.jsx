function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-inner">
        <h1>Lad os kreere <em>sammen.</em></h1>
        <div className="contact-details">
          <a className="contact-email" href="mailto:martinhammerum2@gmail.com">
            martinhammerum2<wbr />@gmail.com
          </a>
          <ul className="contact-socials">
            <li>
              <a
                href="https://www.linkedin.com/in/martin-%C3%A6rensgaard-a649a026b/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/25maae" rel="noreferrer" target="_blank">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
