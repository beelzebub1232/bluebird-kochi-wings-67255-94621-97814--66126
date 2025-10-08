import { motion } from "framer-motion";
import { TrendingUp, Users, Eye, MessageCircle } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    label: "Total Articles",
    value: "3",
    color: "text-primary"
  },
  {
    icon: Users,
    label: "Monthly Readers",
    value: "1.2K+",
    color: "text-accent"
  },
  {
    icon: Eye,
    label: "Page Views",
    value: "5.8K+",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    label: "Engagement",
    value: "94%",
    color: "text-accent"
  }
];

export function BlogStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-3xl p-6 border border-primary/10"
    >
      <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        Blog Stats
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-3 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
          >
            <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
            <div className="text-lg font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}