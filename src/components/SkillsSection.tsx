import { motion } from "framer-motion";

const categories = [
  {
    title: "💻 Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    title: "🤖 AI / ML",
    skills: [
      { name: "Generative AI & LLMs", level: 88 },
      { name: "Machine Learning", level: 90 },
      { name: "NLP", level: 82 },
      { name: "Computer Vision", level: 78 },
    ],
  },
  {
    title: "🌐 Web & Database",
    skills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 88 },
    ],
  },
  {
    title: "🛠️ Tools & Cloud",
    skills: [
      { name: "Cloud Computing (AWS/Oracle)", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "Data Science", level: 85 },
      { name: "DSA", level: 82 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/30">
    <div className="max-w-6xl mx-auto">
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
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            <h3 className="font-heading font-semibold text-lg mb-5">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-secondary-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: ci * 0.1 + si * 0.1, ease: "easeOut" }}
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
