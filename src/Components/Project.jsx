function Project() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-container">

        {/* ================= ResearchMind AI ================= */}

       <div className="project-card">

  <div className="project-status live">
    ✅ Live Project
  </div>

  <h3>ResearchMind AI – Intelligent Research Assistant</h3>

  <p>
    ResearchMind AI is an AI-powered research assistant designed to simplify
    academic research using IBM watsonx.ai and IBM Granite models. It helps
    students and researchers analyze research papers, generate literature
    reviews, identify research gaps, summarize PDF documents and provide
    AI-powered research assistance through Retrieval-Augmented Generation (RAG).
  </p>

  <h4>Key Features</h4>

  <ul>
    <li>Research Paper Analysis</li>
    <li>Literature Review Generation</li>
    <li>Research Gap Identification</li>
    <li>PDF Document Summarization</li>
    <li>Retrieval-Augmented Generation (RAG)</li>
    <li>AI-powered Research Recommendations</li>
    <li>User-Friendly Web Interface</li>
  </ul>

  <h4>Technologies Used</h4>

  <div className="tech-stack">
    <span>Python</span>
    <span>Flask</span>
    <span>IBM watsonx.ai</span>
    <span>IBM Granite</span>
    <span>IBM Bob</span>
    <span>RAG</span>
    <span>PyPDF2</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
  </div>

  <div className="project-buttons">

    <a
      href="https://github.com/Ksingh1811/ResearchMind-AI"
      target="_blank"
      rel="noreferrer"
    >
      <button>GitHub</button>
    </a>

    <a
      href="https://research-mind-ai-silk.vercel.app"
      target="_blank"
      rel="noreferrer"
    >
      <button>Live Demo</button>
    </a>

  </div>

</div>

        {/* ================= Secure Sakhi ================= */}

        <div className="project-card">

          <div className="project-status">
            🚧 Currently Under Development
          </div>

          <h3>Secure Sakhi – Women Safety Application</h3>

          <p>
            Secure Sakhi is a women safety mobile application that provides
            instant emergency assistance through one-tap SOS alerts, live GPS
            tracking, emergency contact notification and safe route guidance.
            The application aims to enhance women's safety by enabling quick
            communication during emergencies.
          </p>

          <h4>Key Features</h4>

          <ul>
            <li>One-Tap SOS Alert</li>
            <li>Real-Time GPS Tracking</li>
            <li>Emergency Contact Notification</li>
            <li>Safe Route Navigation</li>
            <li>Google Maps Integration</li>
            <li>Cloud Data Storage</li>
            <li>User Authentication</li>
          </ul>

          <h4>Technologies Used</h4>

          <div className="tech-stack">
            <span>Dart</span>
            <span>Flutter</span>
            <span>Firebase</span>
            <span>Cloud Firestore</span>
            <span>Firebase Storage</span>
            <span>Google Maps API</span>
          </div>

          <div className="project-buttons">

            <button disabled>GitHub (Private)</button>

            <button disabled>Coming Soon</button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Project;