import { motion } from "framer-motion";
import { Trophy, Target, Star, ExternalLink, Award } from "lucide-react";

const stats = {
  solved: 235,
  total: 3879,
  easy: 111,
  easyTotal: 933,
  medium: 109,
  mediumTotal: 2030,
  hard: 15,
  hardTotal: 916,
  rating: 1492,
  ranking: 397713,
  topPercentage: 46.79,
};

const badges = [
  { name: "50 Days Badge 2025", date: "Jul 2025", icon: "💎" },
  { name: "100 Problems", date: "Mar 2025", icon: "🔥" },
];

const LeetCodeSection = () => {
  const solvedPercentage = (stats.solved / stats.total) * 100;

  return (
    <section id="leetcode" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Competitive Programming</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            LeetCode <span className="gradient-text">Progress</span>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Consistency is key. Here's a summary of my problem-solving journey and algorithmic progress.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col items-center justify-center text-center col-span-1"
          >
            <div className="relative w-48 h-48 mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted/20"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 88}
                  strokeDashoffset={2 * Math.PI * 88 * (1 - solvedPercentage / 100)}
                  className="text-primary"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">{stats.solved}</span>
                <span className="text-xs text-muted-foreground">Solved</span>
              </div>
            </div>
            <div className="space-y-4 w-full">
              <StatBar label="Easy" solved={stats.easy} total={stats.easyTotal} color="text-emerald-400" bgColor="bg-emerald-400/20" fillWidth={`${(stats.easy / stats.easyTotal) * 100}%`} />
              <StatBar label="Medium" solved={stats.medium} total={stats.mediumTotal} color="text-amber-400" bgColor="bg-amber-400/20" fillWidth={`${(stats.medium / stats.mediumTotal) * 100}%`} />
              <StatBar label="Hard" solved={stats.hard} total={stats.hardTotal} color="text-rose-400" bgColor="bg-rose-400/20" fillWidth={`${(stats.hard / stats.hardTotal) * 100}%`} />
            </div>
          </motion.div>

          {/* Ranking & Rating Card */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Trophy className="text-primary" size={24} />
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Contest Rating</p>
                  <p className="text-2xl font-bold text-primary">{stats.rating}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Global Ranking</span>
                  <span className="font-semibold">{stats.ranking.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Top Percentage</span>
                  <span className="font-semibold text-primary">{stats.topPercentage}%</span>
                </div>
              </div>
              <a
                href="https://leetcode.com/u/Vivek_Bartwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-all duration-300"
              >
                View Profile <ExternalLink size={14} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-6 text-primary">
                <Award size={20} />
                <h3 className="font-heading font-semibold">Recent Badges</h3>
              </div>
              <div className="space-y-3">
                {badges.map((badge) => (
                  <div key={badge.name} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 border border-border/50">
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{badge.name}</p>
                      <p className="text-[10px] text-muted-foreground">{badge.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Target size={14} className="text-primary" />
                <span>Next Goal: 500 Problems Solved</span>
              </div>
            </motion.div>

            {/* Language Distribution Mock or additional info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:col-span-2"
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Star size={20} />
                <h3 className="font-heading font-semibold">Core Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["C", "Java", "Python", "Dynamic Programming", "Trees", "Graphs", "Binary Search"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-muted/50 border border-border text-[10px] text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBar = ({ label, solved, total, color, bgColor, fillWidth }: any) => (
  <div className="text-left">
    <div className="flex justify-between text-[10px] mb-1">
      <span className="text-muted-foreground">{label}</span>
      <span className={color}>{solved}/{total}</span>
    </div>
    <div className={`w-full h-1.5 rounded-full ${bgColor}`}>
      <div className={`h-full rounded-full bg-current ${color}`} style={{ width: fillWidth }}></div>
    </div>
  </div>
);

export default LeetCodeSection;
