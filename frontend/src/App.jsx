import "./App.css";

const logos = {
  aws: "/logos/aws.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  postgres:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
};

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">
          <div className="brand-logo">◈</div>
          <span>3-Tier App</span>
        </div>

        <nav>
          <span className="active">Home</span>
          <span>About</span>
          <span>Architecture</span>
          <span>Services</span>
          <span>Contact</span>
        </nav>
      </header>


      {/* HERO */}
      <main>

        <section className="hero">

          <div className="hero-content">

            <div className="badge">
              AWS · DevOps · CI/CD
            </div>

            <h1>
              3-Tier
              <br />
              Application
            </h1>

            <p>
              A production-style web application built with
              modern technologies and deployed on AWS using
              automated CI/CD practices.
            </p>

          </div>


          {/* ARCHITECTURE */}
          <div className="architecture-card">

            <div className="architecture-header">

              <div>
                <span className="small-label">
                  INFRASTRUCTURE
                </span>

                <h2>
                  Architecture Overview
                </h2>
              </div>


              <div className="aws-brand">

                <img
                  src={logos.aws}
                  alt="Amazon Web Services"
                />

                <span>AWS</span>

              </div>

            </div>


            <div className="architecture-flow">

              {/* FRONTEND */}
              <div className="tier-card frontend-tier">

                <span className="tier-label">
                  PRESENTATION
                </span>

                <img
                  src={logos.react}
                  alt="React"
                  className="tech-logo react-logo"
                />

                <h3>React</h3>

                <p>Frontend</p>

              </div>


              <div className="flow-arrow">
                →
              </div>


              {/* BACKEND */}
              <div className="tier-card backend-tier">

                <span className="tier-label">
                  APPLICATION
                </span>

                <img
                  src={logos.node}
                  alt="Node.js"
                  className="tech-logo"
                />

                <h3>Node.js</h3>

                <p>Backend API</p>

              </div>


              <div className="flow-arrow">
                →
              </div>


              {/* DATABASE */}
              <div className="tier-card database-tier">

                <span className="tier-label">
                  DATA
                </span>

                <img
                  src={logos.postgres}
                  alt="PostgreSQL"
                  className="tech-logo"
                />

                <h3>PostgreSQL</h3>

                <p>Database</p>

              </div>

            </div>

          </div>

        </section>


        {/* FEATURES */}
        <section className="features-section">

          <div className="section-heading">

            <span className="small-label">
              APPLICATION
            </span>

            <h2>
              Built for the cloud
            </h2>

          </div>


          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">
                ◇
              </div>

              <h3>
                Secure & Scalable
              </h3>

              <p>
                Infrastructure designed using AWS
                networking and security principles.
              </p>

            </div>


            <div className="feature-card">

              <img
                src={logos.aws}
                alt="AWS"
                className="feature-logo aws-feature-logo"
              />

              <h3>
                AWS Infrastructure
              </h3>

              <p>
                VPC, private subnets, NAT Gateway,
                EC2, ALB and RDS.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon code-icon">
                &lt;/&gt;
              </div>

              <h3>
                Automated CI/CD
              </h3>

              <p>
                Jenkins automatically builds, tests,
                packages and deploys the application.
              </p>

            </div>


            <div className="feature-card">

              <img
                src={logos.postgres}
                alt="PostgreSQL"
                className="feature-logo"
              />

              <h3>
                Managed Database
              </h3>

              <p>
                PostgreSQL running on Amazon RDS
                with private network access.
              </p>

            </div>

          </div>


          {/* PROJECT OVERVIEW */}
          <div className="overview">

            <div className="overview-text">

              <span className="small-label">
                PROJECT OVERVIEW
              </span>

              <h2>
                From commit to production
              </h2>

              <p>
                Every code change follows an automated
                deployment workflow, from source control
                to a running application on AWS.
              </p>

            </div>


            <div className="pipeline">

              <PipelineItem
                image={logos.github}
                name="GitHub"
                label="SOURCE"
              />

              <div className="pipeline-arrow">
                →
              </div>

              <PipelineItem
                image={logos.jenkins}
                name="Jenkins"
                label="CI/CD"
              />

              <div className="pipeline-arrow">
                →
              </div>

              <PipelineItem
                image={logos.docker}
                name="Docker"
                label="CONTAINER"
              />

              <div className="pipeline-arrow">
                →
              </div>

              <PipelineItem
                image={logos.aws}
                name="AWS"
                label="DEPLOY"
              />

            </div>

          </div>


          {/* TECHNOLOGY STACK */}
          <section className="technologies">

            <div className="section-heading">

              <span className="small-label">
                TECHNOLOGY STACK
              </span>

              <h2>
                Technologies used
              </h2>

            </div>


            <div className="technology-list">

              <Technology
                image={logos.react}
                name="React"
                description="Frontend"
              />

              <Technology
                image={logos.node}
                name="Node.js"
                description="Backend"
              />

              <Technology
                image={logos.postgres}
                name="PostgreSQL"
                description="Database"
              />

              <Technology
                image={logos.docker}
                name="Docker"
                description="Containers"
              />

              <Technology
                image={logos.jenkins}
                name="Jenkins"
                description="CI/CD"
              />

              <Technology
                image={logos.aws}
                name="AWS"
                description="Cloud"
              />

            </div>

          </section>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-main">

          <div className="footer-brand">

            <div className="brand">

              <div className="brand-logo">
                ◈
              </div>

              <span>
                3-Tier App
              </span>

            </div>

            <p>
              A production-style application demonstrating
              modern cloud and DevOps practices.
            </p>

          </div>


          <div className="footer-stack">

            <span>React</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>Jenkins</span>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 3-Tier App
          </span>

          <span>
            Built with AWS & DevOps
          </span>

        </div>

      </footer>

    </div>
  );
}


function PipelineItem({ image, name, label }) {
  return (
    <div className="pipeline-item">

      <div className="pipeline-icon">

        <img
          src={image}
          alt={name}
        />

      </div>

      <strong>
        {name}
      </strong>

      <span>
        {label}
      </span>

    </div>
  );
}


function Technology({ image, name, description }) {
  return (
    <div className="technology">

      <img
        src={image}
        alt={name}
      />

      <div>

        <strong>
          {name}
        </strong>

        <span>
          {description}
        </span>

      </div>

    </div>
  );
}


export default App;
