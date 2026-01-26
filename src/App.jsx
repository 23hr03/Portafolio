import { useMemo, useState } from "react";
import "./App.css";
import {Kobe} from "./img/.png"

const projectsData = [
{
title: "Sistema Fiambrería",
desc: "Stock, ventas y facturación. Panel admin + CRUD.",
tags: ["React", "Node", "MongoDB"],
category: "Web App",
demo: "https://utnfinal-frontend.onrender.com/",
repo: "https://github.com/23hr03/utnFinal.git",
image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
},
{
title: "Proyecto React - Autenticación con FakeStoreAPI ",
usuar: "🔑 Para probar el login real en FakeStoreAPI, se deben usar credenciales ya existentes en la API. Por ejemplo: username: mor_2314 password: 83r5^_",
desc: "Aplicación web en React que permita simular el registro e inicio de sesión de usuarios utilizando la FakeStoreAPI, implementando un flujo básico de autenticación y navegación.",
tags: ["React", "Css", "FakeStoreAPI","Context API para manejo global de la sesión "],
category: "Web",
demo: "https://23hr03.github.io/Kobe-s-legacy/",
repo: "https://github.com/23hr03/Kobe-s-legacy.git",
image: Kobe,
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

const experience = [
{
role: "Desarrollador Web / Proyectos Curso",
company: "UTN (Full stack)",
time: "2025 - 2025",
points: [
"Desarrollo de sistemas web con CRUD (stock, facturación, turnos).",
"Integración de backend + base de datos (SQL / MongoDB).",
"Buenas prácticas: estructura, validaciones y deploy básico.",
],
tech: ["React", "Node", "SQL", "MongoDB", "PHP"],
},
{
role: "Proyectos Freelance (en progreso)",
company: "Clientes pequeños / práctica",
time: "2025 - Actualidad",
points: [
"Landing pages y sistemas simples para comercios.",
"UI responsive y optimización básica.",
"Publicación y mantenimiento de proyectos.",
],
tech: ["HTML", "CSS", "React", "Git"],
},
];

const education = [
{
title: "Tecnicatura en Desarrollo De Software",
place: "IFTS N-4",
time: "2024 - 2026 (en curso)",
detail: "Desarrollo de software, bases de datos, Modelado de datos, Arquitetura de Softwer  (Metodo-Cascada, Metodo-Agile ), Redes,prácticas con proyectos reales.",
},
{
  title: "Diplomatura Full stack",
  place: "UTN",
  time: "2025 - 2025 (Finalizado)",
  detail: "Web Full Stack, bases de datos, Frotend (React-Vite), Backend (Node.js, Typescript).",
  },
{
title: "Android Kotlin (TP1/TP2)",
place: "Proyectos académicos (IFTS N-4)",
time: "2025",
detail: "Login/Registro, SharedPreferences, RecyclerView y Room.",
},
];
const certificates = [
  {
    title: "AWS Cloud Practitioner (Cloud Foundations)",
    org: "Amazon Web Services",
    year: "2025",
    desc: "Fundamentos de la nube, servicios principales, seguridad y costos.",
    link: "https://www.credly.com/badges/e0696b46-b7e0-4a10-b36f-f609b20e4a64/public_url",
  },
  {
    title: "AWS Cloud Practitioner (Cloud Operations )",
    org: "Amazon Web Services",
    year: "2025",
    desc: "Fundamentos de la nube, servicios principales, seguridad y costos.",
    link: "https://www.credly.com/badges/d9bb22cf-f000-4dfa-822b-30f974539329/public_url",
  },
  {
    title: "Desarrollo Web Full Stack",
    org: "UTN",
    year: "2025",
    desc: "Formación integral en desarrollo web: frontend, backend y bases de datos. Proyecto final integrador.",
    link: "/certificados/Diplomatura_de_Programaci_n_Web_Full_Stack_-_Turno_Tarde.pdf",
    highlight: true,
  },
  {
    title: "Diplomatura  Desarrollo Frontend",
    org: "UTN",
    year: "2025",
    desc: "HTML, CSS, JavaScript, React y diseño de interfaces responsive.",
    link: "/certificados/Curso_de_Programador_Web_Inicial_-_Front_End_Developer_-_Turno_Tarde-1.pdf",
  },
  {
    title: "Diplomatura  Desarrollo Backend",
    org: "UTN",
    year: "2025",
    desc: "Lógica de negocio, APIs, bases de datos y backend con PHP / Node.",
    link: "/certificados/Curso_de_Backend_Developer_-_Turno_Tarde.pdf",
  },
  {
    title: "Full stack Python ",
    org: "Codo a Codo",
    year: "2024",
    desc: "HTML, CSS, Python, JavaScript, Veu.js .",
    link: "/certificados/Landaeta Hector, Dni 96157495.pdf",
  },
  
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
        <button key={c} className={`chip ${filter===c ? "active" : "" }`} onClick={()=> setFilter(c)}
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
          <h3>Hola, soy Héctor Landaeta 👋</h3>
          <p>
            Desarrollador de software, apps web y mobile. Me enfoco en crear sistemas reales
            (stock, facturación, turnos, etc.) con buenas prácticas y una UI prolija.
          </p>
          <ul className="list">
            <li>✅ Frontend: React / Vue</li>
            <li>✅ Backend: Node.js / PHP / Python</li>
            <li>✅ BD: SQL / MongoDB</li>
            <li>✅ Deploy: Render / Netlify / básico AWS</li>
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
    <section id="experience" className="section">
      <div className="sectionHead">
        <h2>Experiencia</h2>
        <p>Lo que vengo construyendo y practicando para roles trainee/jr.</p>
      </div>

      <div className="timelineGrid">
        {experience.map((e) => (
        <div className="card timelineCard" key={e.role + e.company}>
          <div className="timelineTop">
            <div>
              <h3 className="timelineTitle">{e.role}</h3>
              <p className="muted timelineMeta">
                {e.company} • {e.time}
              </p>
            </div>
          </div>

          <ul className="list timelineList">
            {e.points.map((pt) => (
            <li key={pt}>{pt}</li>
            ))}
          </ul>

          <div className="tags">
            {e.tech.map((t) => (
            <span className="pill small" key={t}>{t}</span>
            ))}
          </div>
        </div>
        ))}
      </div>
    </section>

    <section id="education" className="section alt">
      <div className="sectionHead">
        <h2>Estudios</h2>
        <p>Formación y proyectos que respaldan mi perfil.</p>
      </div>

      <div className="timelineGrid">
        {education.map((ed) => (
        <div className="card timelineCard" key={ed.title}>
          <h3 className="timelineTitle">{ed.title}</h3>
          <p className="muted timelineMeta">
            {ed.place} • {ed.time}
          </p>
          <p className="muted" style={{ marginTop: 10, lineHeight: 1.8 }}>
            {ed.detail}
          </p>
        </div>
        ))}
      </div>
    </section>

    <section id="certificates" className="section">
  <div className="sectionHead">
    <h2>Certificados</h2>
    <p>Cursos y certificaciones que respaldan mis conocimientos.</p>
  </div>

  <div className="certGrid">
    {certificates.map((c) => (
      <div className="card certCard" key={c.title}>
        <h3 className="certTitle">{c.title}</h3>

        <p className="muted certMeta">
          {c.org} • {c.year}
        </p>

        <p className="muted certDesc">
          {c.desc}
        </p>

        {c.link && (
          <a
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="btn small ghost"
            style={{ marginTop: 14 }}
          >
            Ver certificado
          </a>
        )}
      </div>
    ))}
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
        <a
          href="https://github.com/23hr03"
          target="_blank"
          rel="noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/hector-landaeta-54a17222b/"
          target="_blank"
          rel="noreferrer"
        >
          🔗 LinkedIn
        </a>

        <a href="mailto:landaetahectorrenier@gmail.com">
          ✉️ landaetahectorrenier@gmail.com
        </a>

        <a
          href="/cv/Hector-Landaeta-CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          📄 Descargar CV (PDF)
        </a>
      </div>

      <p className="muted">
        CV actualizado en PDF para búsquedas trainee / junior.
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
      <a href="#experience">Experiencia</a>
      <a href="#education">Estudios</a>
      <a href="#certificates">Certificados</a>
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
  <div className="thumb" style={{ backgroundImage: `url(${p.image})` }} aria-label={p.title} />
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
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("sending");

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // ⏱️ Timeout para evitar cuelgues (Render free)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          signal: controller.signal,
        }
      );

      const result = await res.json();

      if (!res.ok) {
        setStatus("idle");
        setError(result.message || "Error al enviar el mensaje");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("idle");

      if (err.name === "AbortError") {
        setError(
          "⏱️ El servidor tardó demasiado. Probá de nuevo en unos segundos."
        );
      } else {
        setError("❌ No se pudo conectar con el servidor");
      }
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return (
    <form className="card form" onSubmit={onSubmit}>
      <h3>Escribime</h3>

      <label>
        Nombre
        <input
          name="name"
          required
          placeholder="Tu nombre"
          disabled={status === "sending"}
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="tuemail@gmail.com"
          disabled={status === "sending"}
        />
      </label>

      <label>
        Mensaje
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Contame qué necesitás..."
          disabled={status === "sending"}
        />
      </label>

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>

      {status === "sending" && (
        <p className="muted">⏳ Enviando mensaje...</p>
      )}

      {error && (
        <p style={{ color: "salmon", margin: 0 }}>
          {error}
        </p>
      )}

      {status === "sent" && (
        <p className="ok">✅ Mensaje enviado correctamente</p>
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