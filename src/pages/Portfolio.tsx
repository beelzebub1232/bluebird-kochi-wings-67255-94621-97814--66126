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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-2 mb-6 glass-card rounded-full"
            >
              <span className="text-sm font-semibold text-primary">Our Portfolio</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Work That <span className="gradient-text">Speaks for Itself</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are proud to have partnered with some of the most respected brands in the world. 
              Explore a selection of our projects below. For a deeper look at our process and results, 
              download our complete portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 mb-4 glass-card rounded-full"
            >
              <span className="text-sm font-semibold text-primary">Our Clients</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover-lift">
                  <CardContent className="p-6 flex items-center justify-center h-28">
                    <span className="text-lg font-semibold text-muted-foreground text-center">
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/8 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Download className="h-10 w-10 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Get Our Full Case Study Portfolio
              </h2>
              <p className="text-xl text-muted-foreground">
                Download our comprehensive portfolio to see detailed case studies, results, and testimonials 
                from our clients across various industries.
              </p>
            </motion.div>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12"
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/5 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 mb-4 glass-card rounded-full"
            >
              <span className="text-sm font-semibold text-primary">Industries</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center flex items-center justify-center min-h-[100px] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="font-semibold text-lg relative z-10">{industry}</span>
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
