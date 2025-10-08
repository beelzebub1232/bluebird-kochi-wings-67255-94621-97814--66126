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
    <div className="min-h-screen page-flow-bg">
      {/* Unified flowing background for entire page */}
      <div className="fixed inset-0 mesh-gradient opacity-35 pointer-events-none"></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
                  <div className="relative">
                    <span className="text-base font-bold text-primary uppercase tracking-[0.25em] relative z-10">About Bluebird</span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-xl rounded-full"></div>
                  </div>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/60"></div>
                </div>
              </div>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 sm:mb-8 leading-tight px-4">
              One of the Leading Agencies in the Gulf,{" "}
              <span className="gradient-text">Now in Kochi</span>
            </h1>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              <p className="leading-relaxed">
                At Bluebird, we believe creativity should deliver measurable impact. Founded in the Gulf, Bluebird has become a trusted partner for businesses across Oman, UAE, and beyond.
              </p>
              <p className="leading-relaxed">
                Our Kochi hub – Bluebird Media Solutions – is designed to deliver 360° marketing and branding services tailored to Indian and global clients. We are excited to bring our passion, expertise, and international approach to the businesses of Kochi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden py-8 sm:py-12 seamless-section">
        <div className="relative z-10">
          <StatsCounter />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full cursor-pointer group overflow-hidden border border-primary/10 bg-gradient-to-br from-primary-light/20 via-primary/15 to-accent/20 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 lg:p-10 relative">
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
                    <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-300">Our Mission</h2>
                    <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
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
                <CardContent className="p-6 sm:p-8 lg:p-10 relative">
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
                    <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-300">Our Vision</h2>
                    <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
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
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-1 h-1 rounded-full bg-accent animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-bold text-primary/90 uppercase tracking-[0.2em] mx-2">Our Core Values</span>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-1 h-1 rounded-full bg-accent animate-pulse"></div>
                </div>
              </div>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 px-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
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
                    <CardContent className="p-6 sm:p-8 relative">
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
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                          {value.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">{value.description}</p>
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
