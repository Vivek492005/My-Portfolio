import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

const ResumeSection = () => (
  <section id="resume" className="section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Resume</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Download my resume to learn more about my education, experience, and technical skills.
        </p>
      </motion.div>

      <motion.div
        className="glass-card-hover p-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
          <FileText className="text-primary" size={36} />
        </div>
        <h3 className="font-heading font-semibold text-xl mb-2">Vivek Bartwal</h3>
        <p className="text-muted-foreground text-sm mb-8">B.Tech Student | AI/ML Enthusiast | Full Stack Developer</p>
        <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/1stv8NeSwDMi85o6zfqRvqdL2HUl3msOB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="https://drive.google.com/file/d/1stv8NeSwDMi85o6zfqRvqdL2HUl3msOB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            <Eye size={18} /> Preview
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
