import { motion } from "framer-motion";
import { Brain, Rocket, Code2, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI/ML Focused", desc: "Deep expertise in machine learning and intelligent systems" },
  { icon: Code2, label: "Full Stack Dev", desc: "Building scalable applications from frontend to backend" },
  { icon: Rocket, label: "Innovation", desc: "Passionate about startups and impactful technology" },
  { icon: Lightbulb, label: "Problem Solver", desc: "Tackling real-world challenges with creative solutions" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">About Me</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Turning ideas into <span className="gradient-text">reality</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a Computer Science Engineering student specialized in <span className="text-foreground font-medium">Artificial Intelligence and Machine Learning</span> at <span className="text-primary">Graphic Era Hill University</span> (Batch of 2027). With a current CGPA of <span className="text-foreground font-semibold">8.12</span>, I am dedicated to bridging the gap between complex AI research and practical, impactful applications.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My work focuses on building intelligent systems that solve real-world challenges. From developing <span className="text-primary">CompileFlow</span>, an interactive compiler pipeline visualizer, to innovating in anomaly detection with <span className="text-primary">TopoForge</span>, I strive to create technology that makes a difference.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I am a continuous learner, constantly exploring Generative AI, Cloud Computing, and scalable full-stack architectures. I'm always looking for opportunities to collaborate on innovative projects and contribute to the tech community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass-card-hover p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <item.icon className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-heading font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
