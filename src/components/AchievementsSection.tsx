import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Code } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Best Startup Idea", desc: "Secured at SAARTHI’25, a national-level hackathon for Persons with Disabilities (PwDs)" },
  { icon: Code, title: "SIH 2025 Participant", desc: "Participated in Smart India Hackathon with AgroSense AI, developing AR and ML modules" },
  { icon: Award, title: "AWS Certified", desc: "Earned the AWS Skill Builder certification in cloud foundations and architecture" },
  { icon: BookOpen, title: "GenAI & LLMs", desc: "Certified in Fundamentals of Generative AI and Large Language Models by Deeplearning.io" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Achievements</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Milestones & <span className="gradient-text">Recognition</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            className="glass-card-hover p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <a.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-heading font-semibold mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
