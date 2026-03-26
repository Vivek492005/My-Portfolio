import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, Code2 } from "lucide-react";

const timelineData = [
  {
    type: "education",
    date: "2023 - 2027",
    title: "B.Tech in Computer Science (AI/ML)",
    subtitle: "Graphic Era Hill University",
    description: "Specializing in Artificial Intelligence and Machine Learning. Maintaining a CGPA of 8.12.",
    icon: GraduationCap,
  },
  {
    type: "project",
    date: "2024",
    title: "Saarthi – OS",
    subtitle: "AI-Powered Assistive System",
    description: "Developed an innovative system for speech-disabled users using hand-gesture recognition and NLP.",
    icon: Code2,
  },
  {
    type: "project",
    date: "2024",
    title: "AgroSense AI",
    subtitle: "Smart Agriculture Platform",
    description: "Built a platform for hilly regions integrating soil health analysis and 3D visualization.",
    icon: Trophy,
  },
  {
    type: "milestone",
    date: "2025",
    title: "LeetCode Proficiency",
    subtitle: "Consistent Problem Solver",
    description: "Reached 235+ problems solved with a focus on DSA and complex algorithmic challenges.",
    icon: Briefcase,
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-border/50 ml-4 md:ml-0 md:left-1/2 md:-translate-x-px">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Dot on the timeline */}
              <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] z-10" 
                   style={index % 2 !== 0 ? { left: '-9px', right: 'auto' } : {}} />
              
              <div className="glass-card p-6 hover:border-primary/30 transition-colors">
                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-xs font-mono text-primary font-bold">{item.date}</span>
                </div>
                <h3 className="text-lg font-heading font-bold mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">{item.subtitle}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
