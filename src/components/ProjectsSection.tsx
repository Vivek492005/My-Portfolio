import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, FileSearch, Mic } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    icon: Cpu,
    title: "Saarthi – OS 🗣️",
    description: "An AI-powered assistive system combining real-time hand-gesture recognition with a smart voice assistant to enhance accessibility for speech-disabled users.",
    tech: ["AI", "Hand-Gesture Recognition", "NLP", "Python"],
    features: ["Real-time gesture-to-speech", "Multilingual TTS support", "Smart voice commands", "Accessibility focused"],
    github: "https://github.com/Vivek492005",
    color: "from-primary to-neon-blue",
  },
  {
    icon: FileSearch,
    title: "AgroSense AI 🌾",
    description: "An AI-driven farming platform for hilly regions integrating soil health analysis, 3D visualization, and crop recommendations to optimize productivity.",
    tech: ["Machine Learning", "Data Analytics", "3D Visualization", "Blockchain"],
    features: ["Soil health prediction", "3D land visualization", "Crop recommendation engine", "AR plantation guidance"],
    github: "https://github.com/Vivek492005",
    color: "from-neon-purple to-primary",
  },
  {
    icon: Mic,
    title: "AI Resume Analyzer 🤖",
    description: "An intelligent resume parsing and job recommendation system that uses ML to analyze resumes, score them, and match candidates with relevant opportunities.",
    tech: ["Python", "NLP", "Machine Learning", "React"],
    features: ["Resume parsing & analysis", "Job matching algorithm", "Smart scoring system", "Skill gap suggestions"],
    github: "https://github.com/Vivek492005",
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

                <div className="flex gap-3">
                  <a href={project.github} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
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
