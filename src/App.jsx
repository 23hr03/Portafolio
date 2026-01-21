import { useMemo, useState } from "react";
import "./App.css";

const projectsData = [
  {
    title: "Sistema Fiambrería",
    desc: "Stock, ventas y facturación. Panel admin + CRUD.",
    tags: ["React", "Node", "MongoDB"],
    category: "Web App",
    demo: "https://tu-demo.com",
    repo: "https://github.com/tuusuario/tu-repo",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mi Clínica (Turnos)",
    desc: "Gestión de turnos, especialidades y pacientes.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    category: "Web",
    demo: "https://tu-demo.com",
    repo: "https://github.com/tuusuario/tu-repo",
    image: "https://images.unsplash.com/photo-1580281658628-5a0e2f2b3d0e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "App Finanzas (Kotlin)",
    desc: "Login, ABM, RecyclerView y Room.",
    tags: ["Kotlin", "Room"],
    category: "Mobile",
    demo: "https://tu-demo.com",
    repo: "https://github.com/tuusuario/tu-repo",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

const skills = [
  "React", "JavaScript", "TypeScript", "Node.js", "Express",
  "MongoDB", "SQL", "PHP", "Python", "HTML", "CSS", "Git/GitHub",
  "AWS (básico)", "Kotlin (Android)",
];

export default function App() {
  const [filter, setFilter] = useState("Todos");

  const categories = useMemo(() => {
    const set = new Set(projectsData.map((p) => p.category));
    return ["Todos", ...Array.from(set)];
  }, []);

  const projects = useMemo(() => {
    if (filter === "Todos") return projectsData;
    return projectsData.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="page">
      <Header />

      <main>
        <Hero />

        <section id="projects" className="section">
          <div className="sectionHead">
            <h2>Proyectos</h2>
            <p>Algunas páginas y apps que hice (demo + repo).</p>
          </div>

          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="sectionHead">
            <h2>Skills</h2>
            <p>Tecnologías que uso en mis proyectos.</p>
          </div>

          <div className="skills">
            {skills.map((s) => (
              <span key={s} className="pill">{s}</span>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="sectionHead">
            <h2>Sobre mí</h2>
            <p>Un resumen corto para que te conozcan.</p>
          </div>

          <div className="about">
            <div className="card">
              <h3>Hola, soy Héctor 👋</h3>
              <p>
                Desarrollo apps web y mobile. Me enfoco en crear sistemas reales
                (stock, facturación, turnos, etc.) con buenas prácticas y una UI prolija.
              </p>
              <ul className="list">
                <li>✅ Frontend: React / Vue</li>
                <li>✅ Backend: Node / PHP / Python</li>
                <li>✅ BD: SQL / MongoDB</li>
                <li>✅ Deploy: Render / básico AWS</li>
              </ul>
            </div>

            <div className="card">
              <h3>Lo que busco</h3>
              <p>
                Oportunidades como dev trainee/jr o proyectos freelance.
                Me gusta trabajar con objetivos claros y entregas semanales.
              </p>
              <div className="ctaRow">
                <a className="btn" href="#contact">Contactarme</a>
                <a className="btn ghost" href="#projects">Ver proyectos</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="sectionHead">
            <h2>Contacto</h2>
            <p>Dejame tus datos o escribime por redes.</p>
          </div>

          <div className="contact">
            <div className="card">
              <h3>Links</h3>
              <div className="links">
                <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:tuemail@gmail.com">tuemail@gmail.com</a>
              </div>
              <p className="muted">
                Tip: también podés agregar tu CV en PDF y linkearlo acá.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="wrap headerInner">
        <a className="logo" href="#top">Héctor.dev</a>

        <nav className="nav">
          <a href="#projects">Proyectos</a>
          <a href="#skills">Skills</a>
          <a href="#about">Sobre mí</a>
          <a className="navBtn" href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap heroInner">
        <div className="heroText">
          <p className="badge">Portfolio</p>
          <h1>
            Desarrollo páginas y apps <span className="soft">modernas</span> para resolver problemas reales.
          </h1>
          <p className="lead">
            React • Node • SQL/Mongo • Kotlin. Mirá mis proyectos y contactame.
          </p>
          <div className="ctaRow">
            <a className="btn" href="#projects">Ver proyectos</a>
            <a className="btn ghost" href="#contact">Hablemos</a>
          </div>
        </div>

        <div className="heroCard">
          <div className="miniCard">
            <span className="kpi">+10</span>
            <span className="muted">Proyectos prácticos</span>
          </div>
          <div className="miniCard">
            <span className="kpi">Full Stack</span>
            <span className="muted">Front + Back</span>
          </div>
          <div className="miniCard">
            <span className="kpi">Deploy</span>
            <span className="muted">Render / básico AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="card project">
      <div
        className="thumb"
        style={{ backgroundImage: `url(${p.image})` }}
        aria-label={p.title}
      />
      <div className="projectBody">
        <div className="projectTop">
          <h3>{p.title}</h3>
          <span className="chip small">{p.category}</span>
        </div>

        <p className="muted">{p.desc}</p>

        <div className="tags">
          {p.tags.map((t) => (
            <span key={t} className="pill small">{t}</span>
          ))}
        </div>

        <div className="actions">
          <a className="btn small" href={p.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
          <a className="btn small ghost" href={p.repo} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

function ContactForm() {
  // Form simple (sin backend). Podés integrarlo con Formspree o tu API después.
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    e.target.reset();
  };

  return (
    <form className="card form" onSubmit={onSubmit}>
      <h3>Escribime</h3>

      <label>
        Nombre
        <input required placeholder="Tu nombre" />
      </label>

      <label>
        Email
        <input required type="email" placeholder="tuemail@gmail.com" />
      </label>

      <label>
        Mensaje
        <textarea required rows={5} placeholder="Contame qué necesitás..." />
      </label>

      <button className="btn" type="submit">
        Enviar
      </button>

      {status === "sent" && (
        <p className="ok">Listo ✅ (esto es demo; si querés, lo conectamos a un backend real)</p>
      )}
    </form>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footerInner">
        <p className="muted">© {new Date().getFullYear()} Héctor • Portfolio</p>
        <div className="footerLinks">
          <a href="#top">Arriba</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
