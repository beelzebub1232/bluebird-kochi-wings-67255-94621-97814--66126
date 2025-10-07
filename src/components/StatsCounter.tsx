import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
}

function StatItem({ end, suffix = "", label }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem end={1000} suffix="+" label="Projects Completed" />
          <StatItem end={50} suffix="+" label="IT Professionals" />
          <StatItem end={500} suffix="+" label="Clients Worldwide" />
        </div>
      </div>
    </section>
  );
}
