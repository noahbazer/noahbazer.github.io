export function AboutMeContent() {
  return (
    <div className="about-me-content">
      <h3>About Me:</h3>
      <p className="about-me-desc">
        My name is Noah. I'm a 23-year-old front-end web/software developer with
        a passion for creating beautiful and innovative solutions for clients of
        all needs. I'm constantly working to expand my skillset and stay ahead
        of industry standards.
      </p>
      <h3>My Tech Stack:</h3>
      <ul className="tech-stack">
        <li className="HTML">
          <i className="fab fa-html5"></i> HTML
        </li>
        <li className="CSS">
          <i className="fab fa-css3-alt"></i> CSS (Tailwind)
        </li>
        <li className="JavaScript">
          <i className="fab fa-js"></i> Javascript
        </li>
        <li className="TypeScript">
          <img
            src="./assets/tslogo2.svg"
            className="icon"
            alt="TypeScript logo"
          />
          Typescript
        </li>
        <li className="React">
          <i className="fab fa-react"></i> React
        </li>
        <li className="Node">
          <i className="fab fa-node-js"></i> Node.js
        </li>
        <li className="Express">
          <i className="fas fa-server"></i> Express
        </li>
        <li className="MongoDB">
          <i className="fas fa-database"></i> MongoDB
        </li>
      </ul>
      <a
        href="/path/to/your/resume.pdf"
        download
        className="resume-button"
      >
        Download My Resume
      </a>
    </div>
  );
}
