import { motion } from "framer-motion";
import { GraduationCap, Code2, Users, Target } from "lucide-react";

const experienceContent = [
  {
    title: "Technical Foundation",
    icon: GraduationCap,
    content: "During my B.Tech journey at Graphic Era Hill University, I have experienced a transformative phase of both technical and personal growth. The academic environment provided me with a strong foundation in core engineering concepts, while also encouraging me to explore emerging fields like Artificial Intelligence, Machine Learning, and Full Stack Development.",
  },
  {
    title: "Hands-on Innovation",
    icon: Code2,
    content: "I actively worked on projects that enhanced my problem-solving abilities and gave me hands-on exposure to real-world applications. From building intelligent systems to developing interactive web solutions, I focused on applying theoretical knowledge into practical implementations.",
  },
  {
    title: "Professional Growth",
    icon: Users,
    content: "Beyond academics, my time at the university helped me develop essential soft skills such as teamwork, communication, and leadership. Collaborating with peers on projects, participating in discussions, and engaging in technical learning communities strengthened my ability to work in dynamic environments.",
  },
  {
    title: "Personal Development",
    icon: Target,
    content: "On a personal level, this journey taught me discipline, adaptability, and continuous learning. Balancing academics, self-learning, and project development helped me grow into a more confident and goal-oriented individual.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">My Experience</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            My Journey at <span className="gradient-text">Graphic Era Hill University</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A transformative phase shaped by academic excellence, practical innovation, and professional growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {experienceContent.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground/90 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass-card border-primary/20 bg-primary/[0.02] text-center max-w-4xl mx-auto"
        >
          <p className="text-lg text-foreground italic leading-relaxed">
            "Overall, my experience at Graphic Era Hill University has shaped me into a passionate and dedicated tech enthusiast, ready to take on real-world challenges and contribute meaningfully to the field of technology."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
