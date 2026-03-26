import { motion } from "framer-motion";
import { Code2, Brain, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "Generative AI & LLMs", level: 88 },
      { name: "Machine Learning", level: 90 },
      { name: "NLP", level: 82 },
      { name: "Computer Vision", level: 78 },
    ],
  },
  {
    title: "Web & Database",
    icon: Database,
    skills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 88 },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    skills: [
      { name: "Cloud Computing (AWS/Oracle)", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "Data Science", level: 85 },
      { name: "DSA", level: 82 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Skills</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Technologies I <span className="gradient-text">work with</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="glass-card-hover p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <cat.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-xl">{cat.title}</h3>
            </div>
            <div className="space-y-6">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                    <span className="text-xs text-primary font-mono font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted/50 overflow-hidden relative">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/80 to-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: ci * 0.1 + si * 0.05, ease: "circOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
