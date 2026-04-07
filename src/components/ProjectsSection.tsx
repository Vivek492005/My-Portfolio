import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal, Sparkles, Activity } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    icon: Terminal,
    title: "CompileFlow ⚡",
    description: "An interactive multi-language compiler pipeline visualizer that demonstrates lexical analysis, parsing, and Intel x86 code generation.",
    tech: ["React", "TypeScript", "Compiler Design", "Intel x86"],
    features: ["Multi-language support (C++, Python)", "Real-time AST visualization", "Intel x86 code generation", "Interactive token stream"],
    github: "https://github.com/Vivek492005/CompileFlow-An-Interactive-Multi-Language-Compiler-Pipeline-Visualizer-with-Intel-Code-Generation",
    demo: "https://vivek492005.github.io/CompileFlow-An-Interactive-Multi-Language-Compiler-Pipeline-Visualizer-with-Intel-Code-Generation/",
    color: "from-primary to-neon-blue",
  },
  {
    icon: Sparkles,
    title: "AI Career Assistant 🚀",
    description: "A comprehensive platform for resume analysis, job recommendations, and research paper intelligence using advanced NLP.",
    tech: ["NLP", "Generative AI", "Python", "React"],
    features: ["Resume-match scoring", "Job recommendation engine", "Research paper deconstructor", "PDF generation"],
    github: "https://github.com/Vivek492005/AI-Career-Research-Assistant-Resume-Analysis-Job-Recommendation-Research-Paper-Intelligence-Platform",
    demo: "https://vivek492005.github.io/AI-Career-Research-Assistant-Resume-Analysis-Job-Recommendation-Research-Paper-Intelligence-Platform/",
    color: "from-neon-purple to-primary",
  },
  {
    icon: Activity,
    title: "TopoForge 💠",
    description: "A real-time anomaly detection platform using Topological Data Analysis (TDA) to identify patterns in complex network traffic.",
    tech: ["TDA", "Machine Learning", "Python", "Dashboard"],
    features: ["Persistent homology visualization", "Real-time network monitoring", "Anomaly scoring system", "Interactive 3D manifolds"],
    github: "https://github.com/Vivek492005/TopoForge---Real-time-Anomaly-Detection-Platform-using-Topological-Data-Analysis-TDA-",
    demo: "https://vivek492005.github.io/TopoForge---Real-time-Anomaly-Detection-Platform-using-Topological-Data-Analysis-TDA-/",
    color: "from-neon-blue to-neon-purple",
  },
];

const filters = ["All", "AI/ML", "Web", "Automation"];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="flex gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-300 ${
                active === f ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-card-hover group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`h-1 rounded-t-xl bg-gradient-to-r ${project.color}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <project.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{project.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">{t}</span>
                  ))}
                </div>

                <ul className="text-xs text-muted-foreground space-y-1 mb-6 flex-1">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▹</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-auto pt-4 border-t border-border/40">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
