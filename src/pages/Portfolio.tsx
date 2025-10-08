import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { toast } from "sonner";

const clients = [
  "Talabat", "Noon", "Carrefour", "Nesto", "Mercedes-Benz",
  "Al Meera", "Lulu", "Oman Oil", "Bank Muscat", "OTE",
  "Shell", "Vodafone", "Samsung", "LG", "Panasonic"
];

const industries = [
  "Retail & E-commerce",
  "Food & Beverage",
  "Automotive",
  "Banking & Finance",
  "Healthcare",
  "Real Estate",
  "Technology",
  "Hospitality",
];

export default function Portfolio() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast.success("Portfolio will be sent to your email shortly!");
      setName("");
      setEmail("");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen page-flow-bg">
      {/* Unified flowing background for entire page */}
      <div className="fixed inset-0 mesh-gradient opacity-35 pointer-events-none"></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-base font-bold text-primary uppercase tracking-[0.25em]">Our Portfolio</span>
                  <div className="w-3 h-3 border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 px-4">
              Work That <span className="gradient-text">Speaks for Itself</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
              We are proud to have partnered with some of the most respected brands in the world. 
              Explore a selection of our projects below. For a deeper look at our process and results, 
              download our complete portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-12 sm:py-16 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-6 h-px bg-gradient-to-r from-transparent to-primary/70"></div>
                  <span className="text-sm font-bold text-primary/90 uppercase tracking-[0.15em]">Trusted Clients</span>
                  <div className="w-6 h-px bg-gradient-to-l from-transparent to-primary/70"></div>
                </div>
              </div>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold px-4">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="transform-gpu will-change-transform"
              >
                <Card className="h-full transition-all duration-300 rounded-2xl border-0 bg-card/50 backdrop-blur-sm group hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-card/80">
                  <CardContent className="p-6 text-center flex items-center justify-center min-h-[100px] relative overflow-hidden rounded-2xl">
                    {/* Animated glow background */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-primary/15 group-hover:to-accent/10 transition-all duration-500 ease-out" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    </div>
                    
                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/25 transition-all duration-300" />
                    
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-muted-foreground group-hover:text-foreground relative z-10 text-center transition-colors duration-300">
                      {client}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Download CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Download className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 px-4">
                Get Our Full Case Study Portfolio
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
                Download our comprehensive portfolio to see detailed case studies, results, and testimonials 
                from our clients across various industries.
              </p>
            </motion.div>

            <Card className="hover-lift mx-4">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-11 sm:h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 sm:h-12"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Download Portfolio Now
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information will only be used to send you the portfolio.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <div className="w-4 h-px bg-gradient-to-r from-accent/50 to-primary/50"></div>
                  <span className="text-sm font-bold text-primary/90 uppercase tracking-[0.2em]">Industries We Serve</span>
                  <div className="w-4 h-px bg-gradient-to-l from-accent/50 to-primary/50"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold px-4">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="transform-gpu will-change-transform"
              >
                <Card className="h-full transition-all duration-300 rounded-2xl border-0 bg-card/50 backdrop-blur-sm group hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-card/80">
                  <CardContent className="p-6 text-center flex items-center justify-center min-h-[100px] relative overflow-hidden rounded-2xl">
                    {/* Animated glow background */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-primary/15 group-hover:to-accent/10 transition-all duration-500 ease-out" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    </div>
                    
                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/25 transition-all duration-300" />
                    
                    <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground relative z-10 text-center transition-colors duration-300">
                      {industry}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
