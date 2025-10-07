import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  // Generate a random gradient variation for each card
  const gradientVariations = [
    "from-primary-light/20 via-primary/15 to-accent/20",
    "from-accent/20 via-primary/15 to-primary-dark/20",
    "from-primary/20 via-accent/15 to-primary-light/20",
    "from-primary-dark/20 via-primary-light/15 to-primary/20",
  ];
  
  const bgVariation = gradientVariations[Math.floor(Math.random() * gradientVariations.length)];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5, type: "tween" }}
      className="will-change-auto"
    >
      <Card className={`h-full cursor-pointer group overflow-hidden border border-primary/10 bg-gradient-to-br ${bgVariation} backdrop-blur-sm`}>
        <CardContent className="p-8 relative">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-primary/5 to-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3 group-hover:gradient-text transition-all duration-300">{title}</h3>
            <p className="text-foreground/80 leading-relaxed">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
