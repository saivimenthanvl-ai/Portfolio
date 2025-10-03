import React, { useEffect, useMemo, useState } from "react";

// Simple dark-mode toggle with persistence
function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

// Chip/tag component
const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full text-xs px-2 py-1 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200">
    {children}
  </span>
);

// Card wrapper
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 shadow-sm ${className || ""}`}>
    {children}
  </div>
);

// Main component (default export)
export default function Portfolio() {
  const { theme, toggle } = useTheme();
  const year = useMemo(() => new Date().getFullYear(), []);

  const projects = [
    {
      title: "Monkeypox Classification",
      desc:
        "Research on automated classification of Monkeypox using computer vision and deep learning techniques. Implemented models for early detection from medical images.",
      tags: ["Research", "Computer Vision", "Deep Learning"],
      href: "https://github.com/saivimenthanvl-ai/Monkeypox-Classification",
      linkLabel: "View Research Paper",
    },
    {
      title: "LLM Language Modeling",
      desc:
        "Developed and experimented with LLMs (incl. GPT-2) — fine-tuning, data preparation, and optimization for domain-specific text generation.",
      tags: ["LLM", "PyTorch", "NLP"],
      href: "https://github.com/saivimenthanvl-ai/LLM",
      linkLabel: "View Code",
    },
    {
      title: "Farmculture",
      desc:
        "Agriculture-focused data analysis and insights. Built with modern data science tooling to provide actionable recommendations for farming practices.",
      tags: ["Agriculture", "Data Analysis", "Jupyter"],
      href: "https://github.com/saivimenthanvl-ai/Farmculture",
      linkLabel: "View Project",
    },
    {
      title: "Computer Vision & ML Projects",
      desc:
        "A collection of ML/CV projects — image classification, object detection, and pattern recognition with practical applications.",
      tags: ["Machine Learning", "Computer Vision", "Research"],
      href: "https://github.com/saivimenthanvl-ai",
      linkLabel: "View Portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-lg">SV</a>
          <nav className="flex items-center gap-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              title="Toggle theme"
              className="rounded-xl px-3 py-1 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I am <span className="text-indigo-600 dark:text-indigo-400">Sai Vimenthan</span>
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">LLM developer, and builder of useful things.</p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700" href="#projects">See my work</a>
            <a className="px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700" href="https://github.com/saivimenthanvl-ai" target="_blank" rel="noopener">GitHub</a>
            <a className="px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700" href="https://www.linkedin.com/in/sai-vimenthan-b432b537b/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <div className="md:col-span-1">
          <Card className="p-5">
            <h3 className="font-semibold mb-2">Focus</h3>
            <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Large Language Models (GPT‑2)</li>
              <li>React front end</li>
              <li>Productizing ML experiments</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">About</h2>
        <div className="mt-4 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            Aspiring Fresher recently graduated in Computer Science at Sri Ramachandra Institute of Higher Education and Research. I’ve worked across web development, machine learning, optical character recognition (OCR), deep learning, and large language model (LLM) development.
          </p>
          <p>
            Skilled in Python, Java, HTML, CSS, JavaScript, C Programming, and MySQL. I apply my skills to real-world projects in document automation, computer vision, and AI-based solutions.
          </p>
          <p>
            Passionate about using AI/ML and modern development practices to build innovative, scalable, and user‑friendly applications.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="p-5 flex flex-col">
              <div className="flex gap-2 flex-wrap mb-3">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 flex-1">{p.desc}</p>
              <div className="mt-4">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {p.linkLabel}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          The fastest way to reach me is via {" "}
          <a
            href="https://www.linkedin.com/in/sai-vimenthan-b432b537b/"
            target="_blank"
            rel="noopener"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            LinkedIn
          </a>
          . I am open to collaborations and interesting problems.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400">
          © {year} Sai Vimenthan • {" "}
          <a className="hover:underline" href="https://github.com/saivimenthanvl-ai" target="_blank" rel="noopener">GitHub</a> • {" "}
          <a className="hover:underline" href="https://www.linkedin.com/in/sai-vimenthan-b432b537b/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
