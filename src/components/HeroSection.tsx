import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Welcome to my portfolio</p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="gradient-text">Vivek Bartwal</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AI/ML Engineer | Full Stack Developer | CSE @ GEHU
        </motion.p>

        <motion.div
          className="h-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TypingAnimation />
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Building intelligent systems & solving real-world problems using AI and scalable technologies.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Mail size={18} /> Contact Me
          </button>
          <a href="https://drive.google.com/file/d/1stv8NeSwDMi85o6zfqRvqdL2HUl3msOB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300">
            <FileText size={18} /> Resume
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ArrowDown className="text-muted-foreground animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
