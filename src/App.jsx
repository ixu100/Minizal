const features = [
  {
    title: "Simple Setup",
    detail: "A clean layout with just the essentials.",
  },
  {
    title: "Clear Sections",
    detail: "Hero, features, stats, and contact in one page.",
  },
  {
    title: "Lightweight",
    detail: "No heavy visuals or complex interactions.",
  },
];

const stats = [
  { label: "Active Projects", value: "12" },
  { label: "Avg. Response", value: "2 hrs" },
  { label: "Tasks Tracked", value: "148" },
];

const steps = [
  {
    title: "Plan",
    detail: "Outline what needs to be done with a simple checklist.",
  },
  {
    title: "Build",
    detail: "Work through tasks in a steady, predictable flow.",
  },
  {
    title: "Share",
    detail: "Send a quick summary to keep everyone aligned.",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-row">
          <div className="brand">
            <span className="brand-mark">S</span>
            <div>
              <p className="brand-name">SlopApp</p>
              <p className="brand-tagline">A basic UI with a few features</p>
            </div>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#stats">Stats</a>
            <a href="#steps">Steps</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Basic product landing</p>
              <h1>Keep the UI minimal and easy to scan.</h1>
              <p className="lead">
                This layout avoids heavy styling and interactions while still
                providing structure, content, and a few practical sections.
              </p>
              <div className="hero-actions">
                <button type="button">Get started</button>
                <button type="button" className="secondary">
                  See overview
                </button>
              </div>
              <p className="subtle">No sign-up required for this demo.</p>
            </div>
            <div className="panel">
              <h2>Today</h2>
              <ul>
                <li>Review the weekly plan</li>
                <li>Update two project notes</li>
                <li>Send progress summary</li>
              </ul>
              <div className="divider"></div>
              <p className="small">Next check-in: 3:00 PM</p>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Features</h2>
              <p>Small set of practical elements, no fancy effects.</p>
            </div>
            <div className="grid">
              {features.map((feature) => (
                <article className="card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stats" className="section muted">
          <div className="container">
            <div className="section-header">
              <h2>Stats</h2>
              <p>Quick overview of the current workload.</p>
            </div>
            <div className="stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="steps" className="section">
          <div className="container">
            <div className="section-header">
              <h2>How it works</h2>
              <p>Simple workflow with three steps.</p>
            </div>
            <div className="grid">
              {steps.map((step, index) => (
                <article className="card" key={step.title}>
                  <p className="step-index">0{index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section muted">
          <div className="container contact">
            <div>
              <h2>Contact</h2>
              <p>
                Use this simple form to capture name, email, and a short note.
              </p>
              <div className="contact-info">
                <p>hello@slopapp.local</p>
                <p>Mon–Fri, 9am–5pm</p>
              </div>
            </div>
            <form className="form">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea rows="4" placeholder="Short message"></textarea>
              </label>
              <button type="button">Send message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <p>© 2026 SlopApp</p>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#stats">Stats</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
