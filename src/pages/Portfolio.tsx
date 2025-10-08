import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Award, Code, BarChart3, Users } from "lucide-react";
import { toast } from "sonner";

const clients = [
  "Talabat", "Noon", "Carrefour", "Nesto", "Mercedes-Benz",
  "Al Meera", "Lulu", "Oman Oil", "Bank Muscat", "OTE",
  "Shell", "Vodafone", "Samsung", "LG", "Panasonic"
];

export default function Portfolio() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      // Redirect to Google Drive link for company profile download
      handleCompanyProfileDownload();
      toast.success("Company profile download started!");
      setName("");
      setEmail("");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const handleCompanyProfileDownload = () => {
    // Your Google Drive company profile link
    const googleDriveUrl = "https://drive.google.com/file/d/1ammOVnDiSBfzlCXBtssTpxhttFRAQ9gC/view?usp=sharing";
    
    // Convert Google Drive view link to direct download link
    const fileId = googleDriveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    const downloadUrl = fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : googleDriveUrl;
    
    // Open download in new tab
    window.open(downloadUrl, '_blank');
    toast.success("Company profile download started!");
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
              Our <span className="gradient-text">Company Profile</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
              Discover everything you need to know about Bluebird - our expertise, services, achievements, 
              and capabilities. Download our comprehensive company profile to understand how we can help 
              transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Company Profile Overview */}
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
                    <span className="text-sm font-bold text-primary/90 uppercase tracking-[0.2em]">Company Overview</span>
                    <div className="w-4 h-px bg-gradient-to-l from-accent/50 to-primary/50"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold px-4 mb-6">
                Everything You Need to Know About <span className="gradient-text">Bluebird</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Our comprehensive company profile contains detailed information about our services, expertise, 
                team capabilities, past projects, and how we can help transform your business.
              </p>
            </motion.div>

            {/* Company Profile Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 px-4">
              {[
                {
                  icon: Award,
                  title: "Company Overview",
                  description: "Our mission, vision, values, and what makes us unique in the digital landscape."
                },
                {
                  icon: Users,
                  title: "Team & Expertise",
                  description: "Meet our talented professionals and their specialized skills across all departments."
                },
                {
                  icon: Code,
                  title: "Services & Solutions",
                  description: "Comprehensive breakdown of our web development, design, and marketing services."
                },
                {
                  icon: BarChart3,
                  title: "Case Studies & Results",
                  description: "Real project outcomes, client testimonials, and measurable business impact."
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="transform-gpu will-change-transform"
                  >
                    <Card className="h-full transition-all duration-300 rounded-2xl border-0 bg-card/50 backdrop-blur-sm group hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-card/80">
                      <CardContent className="p-6 relative overflow-hidden rounded-2xl">
                        {/* Animated glow background */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-primary/15 group-hover:to-accent/10 transition-all duration-500 ease-out" />
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                        </div>
                        
                        {/* Border glow */}
                        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/25 transition-all duration-300" />
                        
                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Main Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="hover-lift mx-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8 sm:p-12">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <Download className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
                    Download Our Complete Company Profile
                  </h3>
                  
                  <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Get instant access to our comprehensive company profile PDF. Everything you need to understand 
                    our capabilities, experience, and how we can help your business succeed.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Button 
                      onClick={() => handleCompanyProfileDownload()}
                      size="lg" 
                      className="text-base px-8 py-3 h-auto"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Company Profile
                    </Button>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Instant download • No signup required</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <p className="text-xs text-muted-foreground">
                      PDF includes: Company overview, services, team expertise, case studies, and contact information
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
              Our Team Has Worked With
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
                Request Our Company Profile
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
                Provide your details to receive our comprehensive company profile directly in your inbox, 
                along with additional resources and case studies.
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
                    Send Company Profile to Email
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information will only be used to send you the company profile.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
