const certificates = [
  {
    title: "Microsoft Azure",
    icon: "☁️",
    description:
      "Successfully completed a 25-hour Microsoft Azure course under Microsoft Elevate in collaboration with Microsoft Learn and FICE.",
    issuer: "Microsoft Elevate",
    link: "#",
  },

  {
    title: "IBM SkillsBuild",
    icon: "🏆",
    description:
      "Completed IBM SkillsBuild courses focused on professional development and emerging technologies.",
    issuer: "IBM SkillsBuild",
    link: "#",
  },

  {
    title: "Edunet Foundation",
    icon: "🎓",
    description:
      "Successfully completed internship and industry-oriented AI learning programs.",
    issuer: "Edunet Foundation",
    link: "#",
  },

  {
    title: "IBM AI Internship",
    icon: "🤖",
    description:
      "Successfully completed an AI internship focused on IBM Granite, watsonx.ai, Generative AI and Agentic AI.",
    issuer: "IBM SkillsBuild",
    link: "#",
  },

  {
    title: "Marketing Skills Certification",
    icon: "📈",
    description:
      "Completed marketing and communication skills certification organized by InfoTECH Club.",
    issuer: "InfoTECH Club",
    link: "#",
  },
];

function Certificate() {
  return (
    <section className="certificate" id="certificate">
      <h2>Certificates</h2>

      <p className="certificate-subtitle">
        Professional certifications and training programs that strengthened my
        technical knowledge and industry skills.
      </p>

      <div className="certificate-container">
        {certificates.map((item, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span>Issued by {item.issuer}</span>

            <br />

            <a href={item.link} target="_blank" rel="noreferrer">
              <button>View Certificate</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;