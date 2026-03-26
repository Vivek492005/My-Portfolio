import { motion } from "framer-motion";
import { Github, GitCommit, Star, GitFork } from "lucide-react";

const stats = [
  { icon: GitCommit, label: "Total Commits", value: "300+" },
  { icon: Star, label: "Stars Earned", value: "10+" },
  { icon: GitFork, label: "Repositories", value: "15+" },
];

const GitHubSection = () => (
  <section id="github" className="section-padding bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Open Source</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">
          GitHub <span className="gradient-text">Activity</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="glass-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <s.icon className="mx-auto mb-3 text-primary" size={28} />
            <p className="text-3xl font-heading font-bold neon-text mb-1">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-card p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src="https://ghchart.rshah.org/00d4aa/Vivek492005"
          alt="GitHub Contribution Graph"
          className="mx-auto max-w-full rounded-lg opacity-80"
        />
        <a
          href="https://github.com/Vivek492005"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-mono text-sm"
        >
          <Github size={18} /> View GitHub Profile
        </a>
      </motion.div>
    </div>
  </section>
);

export default GitHubSection;
