import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Contact</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Open to internships, collaborations, and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <a href="mailto:vivekbartwal.tech@gmail.com" className="glass-card p-4 flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="p-3 rounded-lg bg-primary/10"><Mail className="text-primary" size={22} /></div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground">vivekbartwal.tech@gmail.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/vivek-bartwal-802435353" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="p-3 rounded-lg bg-primary/10"><Linkedin className="text-primary" size={22} /></div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground">linkedin.com/in/vivek-bartwal-802435353</p>
              </div>
            </a>
            <a href="https://github.com/Vivek492005" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="p-3 rounded-lg bg-primary/10"><Github className="text-primary" size={22} /></div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-foreground">github.com/Vivek492005</p>
              </div>
            </a>
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10"><MapPin className="text-primary" size={22} /></div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Dehradun, Uttarakhand, India</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
