function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        I'm always open to internship opportunities, collaborations,
        and exciting tech projects. Feel free to connect with me!
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>khushikumari1811@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>📱 Phone</h3>
            <p>+91 8797051816</p>
          </div>

          <div className="info-box">
            <h3>📍 Location</h3>
            <p>Greater Noida, Uttar Pradesh, India</p>
          </div>

          <div className="info-box">
            <h3>💻 GitHub</h3>

            <a
              href="https://github.com/Ksingh1811"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Ksingh1811
            </a>

          </div>

          <div className="info-box">
            <h3>💼 LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/khushi-kumari18"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/khushi-kumari18
            </a>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;