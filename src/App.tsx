import { useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Database,
  BrainCircuit,
  GraduationCap,
  Award
} from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.1 5.1 0 0 0 19 5.2a5.2 5.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.8 12.8 0 0 0-6 0C7.1 1.7 6 2 6 2a5.2 5.2 0 0 0-.1 3.2A5.1 5.1 0 0 0 4 8.02c0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 9.5 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            (entry.target as HTMLElement).style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="container nav-container">
          <div className="logo text-gradient"></div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-content animate-fade-in-up">
                <div className="hero-tags delay-1">
                  <span>&lt;SoftwareEngineer /&gt;</span>
                  <span>[AI_Enthusiast]</span>
                </div>
                <h1 className="hero-title">
                  Hi, I'm <span className="text-gradient">Nagaraju Yaswanth</span>
                </h1>
                <p className="hero-subtitle delay-2">
                  Computer Science undergraduate building end-to-end AI/ML systems and scalable full-stack applications.
                </p>

                <div className="contact-icons delay-3" style={{ marginBottom: '2rem' }}>
                  <a href="mailto:n.yashwanth7095@gmail.com" title="Email" target="_blank" rel="noreferrer">
                    <Mail size={24} />
                  </a>
                  <a href="tel:+917780140204" title="Phone">
                    <Phone size={24} />
                  </a>
                  <a href="https://linkedin.com/in/n-yashwanth-6a64102bb" target="_blank" rel="noreferrer" title="LinkedIn">
                    <LinkedinIcon size={24} />
                  </a>
                  <a href="https://github.com/Yashu-650" target="_blank" rel="noreferrer" title="GitHub">
                    <GithubIcon size={24} />
                  </a>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <MapPin size={20} /> Mallanur, AP, India
                  </span>
                </div>

                <div className="delay-4">
                  <a href="#projects" className="btn btn-primary">
                    View My Work
                  </a>
                  <a href="#about" className="btn btn-outline" style={{ marginLeft: '1rem' }}>
                    About Me
                  </a>
                </div>
              </div>

              <div className="hero-image-container animate-fade-in-up delay-2">
                <div className="profile-image-wrapper">
                  <div className="profile-image">
                    <img src="/portfolio profile.webp" alt="Nagaraju Yaswanth" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Professional Summary</h2>
          <div className="glass-panel animate-on-scroll delay-1" style={{ padding: '3rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Computer Science Engineering undergraduate (2023–2027) with hands-on expertise in Python, JavaScript, React.js, and MongoDB. Successfully built and deployed 2 end-to-end AI/ML projects achieving 88%+ model accuracy, demonstrating practical command of the full Software Development Life Cycle (SDLC).
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Proficient in Object-Oriented Programming (OOP), Data Structures & Algorithms, REST API development, and version control using Git and GitHub. Familiar with Agile development principles and collaborative engineering workflows. Seeking a software engineering internship to contribute technical skills and deliver production-ready, impactful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Technical Arsenal</h2>
          <div className="grid-3">
            <div className="glass-panel project-card animate-on-scroll delay-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Code2 size={32} color="var(--accent-primary)" />
                <h3 style={{ fontSize: '1.3rem' }}>Languages & Web</h3>
              </div>
              <div className="project-tags">
                <span className="badge">Python</span>
                <span className="badge">JavaScript (ES6+)</span>
                <span className="badge">Java</span>
                <span className="badge">C</span>
                <span className="badge">React.js</span>
                <span className="badge">HTML5/CSS3</span>
                <span className="badge">REST API</span>
              </div>
            </div>

            <div className="glass-panel project-card animate-on-scroll delay-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <BrainCircuit size={32} color="var(--accent-secondary)" />
                <h3 style={{ fontSize: '1.3rem' }}>AI & Machine Learning</h3>
              </div>
              <div className="project-tags">
                <span className="badge">Scikit-learn</span>
                <span className="badge">Pandas</span>
                <span className="badge">NumPy</span>
                <span className="badge">NLTK</span>
                <span className="badge">Predictive Modeling</span>
                <span className="badge">Data Preprocessing</span>
              </div>
            </div>

            <div className="glass-panel project-card animate-on-scroll delay-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Database size={32} color="var(--accent-primary)" />
                <h3 style={{ fontSize: '1.3rem' }}>Tools & CS Core</h3>
              </div>
              <div className="project-tags">
                <span className="badge">MongoDB</span>
                <span className="badge">Git / GitHub</span>
                <span className="badge">DSA</span>
                <span className="badge">OOP</span>
                <span className="badge">SDLC & Agile</span>
                <span className="badge">Unit Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Featured Projects</h2>
          <div className="grid-2">
            <div className="glass-panel project-card animate-on-scroll delay-1">
              <h3 className="project-title">Heart Rate Prediction using ML</h3>
              <div className="project-tags">
                <span className="badge">Python</span>
                <span className="badge">Scikit-learn</span>
                <span className="badge">Pandas</span>
                <span className="badge">NumPy</span>
              </div>
              <div className="project-desc">
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                  <li style={{ marginBottom: '0.8rem' }}>Engineered a supervised ML regression model on a 6,000-record dataset achieving 88% prediction accuracy.</li>
                  <li style={{ marginBottom: '0.8rem' }}>Implemented preprocessing pipeline including missing value imputation, StandardScaler scaling, and 80/20 train-test split.</li>
                  <li>Optimized model performance using GridSearchCV, reducing RMSE by 22% across 5-fold cross-validation.</li>
                </ul>
              </div>
              <a href="https://github.com/Yashu-650" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                <GithubIcon size={18} /> View on GitHub
              </a>
            </div>

            <div className="glass-panel project-card animate-on-scroll delay-2">
              <h3 className="project-title">AI-Based Exam Evaluator</h3>
              <div className="project-tags">
                <span className="badge">Python</span>
                <span className="badge">NLTK</span>
                <span className="badge">TF-IDF</span>
                <span className="badge">Cosine Similarity</span>
              </div>
              <div className="project-desc">
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                  <li style={{ marginBottom: '0.8rem' }}>Built an NLP-powered automated grading system evaluating 100+ student answer sheets per run, reducing manual effort by 70%.</li>
                  <li style={{ marginBottom: '0.8rem' }}>Used TF-IDF vectorization paired with cosine similarity for semantic answer comparison.</li>
                  <li>Achieved 91% grading consistency vs. human evaluator benchmarks and engineered a scalable architecture using OOP.</li>
                </ul>
              </div>
              <a href="https://github.com/Yashu-650" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                <GithubIcon size={18} /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Experience</h2>
          <div className="glass-panel animate-on-scroll delay-1" style={{ padding: '3rem' }}>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">Jan 2025 – Present</div>
                <h3 className="timeline-title">Associate Sales Person</h3>
                <div className="timeline-subtitle">Reliance Digital, Kurnool, AP</div>
                <div className="timeline-content">
                  <ul>
                    <li>Consulted 50+ customers weekly, consistently meeting all monthly revenue targets and KPIs for 4 quarters.</li>
                    <li>Delivered structured, needs-based technical consultations, increasing upsell conversion by 30%.</li>
                    <li>Maintained 95%+ customer satisfaction score and resolved complex technical queries at first contact.</li>
                    <li>Mastered 200+ active SKUs including Android, iOS, macOS, smart home ecosystems, and networking devices.</li>
                    <li>Diagnosed in-store device issues (connectivity, OS), building practical debugging skills applicable to software development.</li>
                    <li>Trained and mentored 3 new associates, cutting onboarding time by 40%.</li>
                    <li>Managed 15–20 simultaneous customer interactions during peak hours, demonstrating resilience for Agile environments.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section" id="education">
        <div className="container">
          <div className="grid-2">
            <div className="animate-on-scroll delay-1">
              <h2 className="section-title">Education</h2>
              <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <GraduationCap size={28} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: '1.25rem' }}>B.Tech - Computer Science & Eng.</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Kuppam Engineering College, AP</p>
                <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '1rem' }}>2023 – 2027 (Expected) | CGPA: 6.4/10</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <strong>Coursework:</strong> DSA, OOP, DBMS, OS, Computer Networks, Software Eng, AI, Web Tech.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Intermediate - MPC</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>IRM Junior College, AP</p>
                <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>2021 – 2023 | 50%</p>
              </div>
            </div>

            <div className="animate-on-scroll delay-2">
              <h2 className="section-title">Certifications</h2>
              <div className="glass-panel" style={{ padding: '2rem', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Award size={24} color="var(--accent-secondary)" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>MongoDB Developer Path</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>MongoDB University (2024)</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>NoSQL database design, CRUD operations & aggregation pipelines.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Award size={24} color="var(--accent-secondary)" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Generative AI Fundamentals</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Google Cloud / Coursera (2024)</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Large language model architecture, prompt engineering & responsible AI.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Award size={24} color="var(--accent-secondary)" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Digital 101</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>NASSCOM FutureSkills (2023)</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Digital tools, cybersecurity fundamentals & workplace productivity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >

      <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--border-subtle)', marginTop: '4rem' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Nagaraju Yaswanth. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Built with React & Vanilla CSS.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
