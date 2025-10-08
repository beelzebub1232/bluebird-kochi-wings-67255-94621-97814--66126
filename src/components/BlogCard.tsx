import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight, LucideIcon } from "lucide-react";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  gradient: string;
  featured?: boolean;
  delay?: number;
}

export function BlogCard({
  id,
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  icon: Icon,
  gradient,
  featured = false,
  delay = 0
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.5, type: "tween" }}
        className={`group glass-card rounded-3xl overflow-hidden hover-lift cursor-pointer h-full flex flex-col transition-all duration-300 relative ${
          featured 
            ? "border-2 border-primary/30 hover:border-primary/50 shadow-[var(--shadow-glow)] bg-gradient-to-br from-primary/5 via-background to-accent/5" 
            : "border border-primary/10 hover:border-primary/20"
        }`}
      >
      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${
            featured 
              ? "bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30" 
              : "bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
          }`}>
            <Icon className="h-3 w-3 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{category}</span>
          </div>
          <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
            {readTime}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-300 leading-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed flex-1 text-sm sm:text-base">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-6 pt-4 border-t border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 p-0.5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300">
          <div className="bg-background rounded-2xl">
            <Button 
              variant="ghost" 
              className="w-full justify-between h-12 rounded-2xl group-hover:bg-transparent transition-all duration-300 group-hover:text-primary"
            >
              <span className="font-semibold">Read Full Article</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
    </Link>
  );
}