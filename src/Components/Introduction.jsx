import photo from "../assets/khushi.jpg";

function Introduction() {
  return (
    <section className="intro" id="home">

      <div className="intro-left">

        <h3>Hello, I'm</h3>

        <h1>Khushi Kumari</h1>

        <h2>MCA Student</h2>

        <p>
          Dedicated MCA student with a strong foundation in Computer Applications.
          Passionate about Software Development, Problem Solving and Learning
          New Technologies.
        </p>
       <a
          href="/Khushi_Kumari.pdf"
          download="Khushi_Kumari_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>

      </div>

      <div className="intro-right">

        <img src={photo} alt="Khushi Kumari" />

      </div>

    </section>
  );
}

export default Introduction;