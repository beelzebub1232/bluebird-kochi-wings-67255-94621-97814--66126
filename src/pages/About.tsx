import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StatsCounter } from "@/components/StatsCounter";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Lightbulb, Users2, TrendingUp, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue excellence in every project, never settling for mediocrity."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to solve challenges."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical practices."
  },
  {
    icon: Users2,
    title: "Collaboration",
    description: "We work as partners with our clients, fostering open communication."
  },
  {
    icon: TrendingUp,
    title: "Results",
    description: "We focus on delivering measurable outcomes that drive business growth."
  },
  {
    icon: Target,
    title: "Passion",
    description: "We're passionate about helping businesses succeed in the digital world."
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-2 mb-6 glass-card rounded-full"
            >
              <span className="text-sm font-semibold text-primary">About Bluebird</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              One of the Leading Agencies in the Gulf,{" "}
              <span className="gradient-text">Now in Kochi</span>
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
              <p className="leading-relaxed">
                For over 7 years, Bluebird has been a beacon of digital marketing excellence in Asia. 
                As an integrated business solution provider in Oman and the UAE, we have one mission: 
                to deliver measurable results.
              </p>
              <p className="leading-relaxed">
                We are excited to bring our passion, expertise, and 360-degree approach to the 
                businesses of Kochi. Our team combines international best practices with local 
                insights to create solutions that truly resonate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-b from-background via-secondary/10 to-secondary/20">
        <StatsCounter />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-primary/5 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full cursor-pointer group overflow-hidden border border-primary/10 bg-gradient-to-br from-primary-light/20 via-primary/15 to-accent/20 backdrop-blur-sm">
                <CardContent className="p-10 relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-primary/5 to-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Target className="h-8 w-8 text-white" />
                    </motion.div>
                    <h2 className="text-3xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-300">Our Mission</h2>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      To empower businesses with innovative digital solutions that drive growth, 
                      enhance brand visibility, and deliver measurable ROI. We strive to be more 
                      than just a service provider – we aim to be your strategic partner in success.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full cursor-pointer group overflow-hidden border border-primary/10 bg-gradient-to-br from-accent/20 via-primary/15 to-primary-dark/20 backdrop-blur-sm">
                <CardContent className="p-10 relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-primary/5 to-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Lightbulb className="h-8 w-8 text-white" />
                    </motion.div>
                    <h2 className="text-3xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-300">Our Vision</h2>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      To be the most trusted and innovative digital agency in India, known for 
                      transforming businesses through creative excellence, cutting-edge technology, 
                      and unwavering commitment to client success.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/8 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 mb-4 glass-card rounded-full"
            >
              <span className="text-sm font-semibold text-primary">Our Values</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const gradientVariations = [
                "from-primary-light/20 via-primary/15 to-accent/20",
                "from-accent/20 via-primary/15 to-primary-dark/20",
                "from-primary/20 via-accent/15 to-primary-light/20",
                "from-primary-dark/20 via-primary-light/15 to-primary/20",
              ];
              const bgVariation = gradientVariations[index % gradientVariations.length];
              
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className={`h-full cursor-pointer group overflow-hidden border border-primary/10 bg-gradient-to-br ${bgVariation} backdrop-blur-sm`}>
                    <CardContent className="p-8 relative">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-primary/5 to-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <value.icon className="h-7 w-7 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-display font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                          {value.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
