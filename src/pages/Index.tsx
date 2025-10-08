import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  Code2,
  TrendingUp, 
  Palette, 
  Video, 
  Calendar,
  CheckCircle,
  Users,
  Award,
  Target,
  Rocket,
  MessageSquare,
  Clock,
  HeadphonesIcon,
  ShieldCheck,
  Star
} from "lucide-react";
import { StatsCounter } from "@/components/StatsCounter";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Robust, scalable, and feature-rich websites and applications built with modern technologies.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven SEO, SEM, and Social Media campaigns that deliver measurable traffic and results.",
  },
  {
    icon: Palette,
    title: "Creative Designing",
    description: "Stunning logos, branding, and packaging designs that tell your unique story.",
  },
  {
    icon: Video,
    title: "Media Production",
    description: "Captivating corporate videos, photography, and animations that engage your audience.",
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Unforgettable brand experiences, activations, and exhibitions that leave lasting impressions.",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Dedicated Client Advocacy",
    description: "Special team focused on your success with personalized attention and strategic guidance.",
  },
  {
    icon: Target,
    title: "Meet Your Revenue Goals",
    description: "Real business results for companies with the goal of growing revenue and market presence.",
  },
  {
    icon: Award,
    title: "Dedicated Project Manager",
    description: "Monitoring & controlling by experienced managers ensuring timely delivery and quality.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Developers",
    description: "Success-oriented IT solutions delivered by certified professionals with proven expertise.",
  },
  {
    icon: Clock,
    title: "24 Hours Response Time",
    description: "Professionals known for fastest turnaround time and exceptional support services.",
  },
  {
    icon: MessageSquare,
    title: "We Listen, Learn & Build",
    description: "We understand your vision, then design & develop experiences that drive innovation and growth.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart Solutions",
    content: "Bluebird transformed our digital presence completely. Their team understood our vision and delivered beyond expectations. The ROI has been remarkable.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Marketing Director, Coastal Enterprises",
    content: "Working with Bluebird was a game-changer for our business. Their strategic approach to digital marketing doubled our online engagement within months.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Founder, Maritime Logistics Co",
    content: "The professionalism and expertise of the Bluebird team is unmatched. They delivered our project on time and the quality exceeded our expectations.",
    rating: 5,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen page-flow-bg">
      {/* Unified flowing background for entire page */}
      <div className="fixed inset-0 mesh-gradient opacity-40 pointer-events-none"></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-20 pb-16 px-4 sm:pt-24 sm:pb-24 overflow-hidden seamless-section">
        {/* Floating ambient elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 45, 0],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.1, 0.9, 1.1],
              rotate: [0, -60, 0],
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent/12 to-primary-dark/8 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full"
            >
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">World-Class Digital Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 sm:mb-8 leading-tight px-2"
            >
              World-Class Digital Solutions
              <br />
              <span className="gradient-text">Now in Kochi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Your one-stop solution to grow & manage your business with proven strategies from international markets
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                  <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                  See Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar & Stats Combined Section */}
      <section className="relative overflow-hidden py-6 sm:py-8 seamless-section">
        <div className="relative z-10">
          <TrustBar />
        
          {/* Stats Section */}
          <div className="py-12 sm:py-16">
          <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 px-4">
              Top-Notch Design & Development Company
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Delivering excellence with measurable results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center glass-card p-6 sm:p-8 rounded-3xl hover-lift"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold gradient-text mb-3">
                78+
              </div>
              <p className="text-base sm:text-lg text-foreground/80">Projects completed for our respected clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center glass-card p-6 sm:p-8 rounded-3xl hover-lift"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold gradient-text mb-3">
                12+
              </div>
              <p className="text-base sm:text-lg text-foreground/80">IT Professionals providing services to reputed clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center glass-card p-6 sm:p-8 rounded-3xl hover-lift sm:col-span-2 md:col-span-1"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold gradient-text mb-3">
                25+
              </div>
              <p className="text-base sm:text-lg text-foreground/80">Clients across India and Middle East</p>
            </motion.div>
          </div>
          </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              className="mb-8"
            >
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 blur-xl rounded-full opacity-60"></div>
                  <div className="relative bg-gradient-to-r from-primary/5 via-background to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl px-8 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">Our Expertise</span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 px-4">
              Nurture Your Business With #Bluebird
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              We digitally shape your ideas while combining ultra-modern features and innovative policies. Our skilled team of designers, developers, and digital marketers render quality services with extreme dedication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 px-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-base px-8 h-12">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="flex flex-col gap-1">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full ml-1"></div>
                    <div className="w-4 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full ml-2"></div>
                  </div>
                  <div className="relative">
                    <span className="text-base font-bold text-foreground uppercase tracking-[0.1em]">Why Choose Us</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-primary to-accent rounded-full"></div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="w-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full mr-2"></div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full mr-1"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 px-4">
              The Bluebird Difference
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              We transform your business with proven strategies and dedicated expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "tween" }}
                className="bg-gradient-to-br from-primary-light/15 via-primary/10 to-accent/15 backdrop-blur-sm border border-primary/20 p-4 sm:p-6 rounded-3xl hover-lift group cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all duration-300">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-primary/40 rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-1 h-1 bg-accent rounded-full"></div>
                    </div>
                    <div className="relative px-6 py-2">
                      <span className="text-base font-semibold text-foreground tracking-[0.05em]">Client Testimonials</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-lg border border-primary/10"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-3 h-3 border-2 border-primary/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 px-4">
              Reviews From Our Customers
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear what our satisfied clients have to say
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "tween" }}
                className="glass-card p-6 sm:p-8 rounded-3xl hover-lift sm:col-span-2 lg:col-span-1 first:sm:col-span-1"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-24 seamless-section">
        {/* Subtle floating elements for this section */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 12, 0], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-[24rem] h-[24rem] bg-gradient-to-br from-primary/20 to-accent/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.05, 0.95, 1.05], rotate: [0, -15, 0], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-16 -left-10 w-[20rem] h-[20rem] bg-gradient-to-br from-accent/18 to-primary/12 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center glass-card rounded-3xl border border-primary/20 p-6 sm:p-10 md:p-16 hover-lift mx-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 glass-card rounded-full">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Let’s build something remarkable</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight">
              Ready to Elevate Your <span className="gradient-text">Brand</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Let's discuss how we can help you achieve your business goals with our proven strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                  <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Let's Start Your Project
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
