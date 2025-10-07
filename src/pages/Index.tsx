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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5">
        {/* Animated Background */}
        <div className="absolute inset-0 mesh-gradient opacity-50"></div>
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary-dark/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight"
            >
              World-Class Digital Solutions,{" "}
              <span className="gradient-text">Now in Kochi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Your one-stop solution to grow & manage your business with proven strategies from international markets
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <Button size="lg" variant="gradient" className="text-lg px-10 h-14">
                  <Rocket className="mr-2 h-5 w-5" />
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-10 h-14">
                  See Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar & Stats Combined Section */}
      <section className="py-8 bg-gradient-to-b from-secondary/5 via-secondary/10 to-primary/12">
        <TrustBar />
      
        {/* Stats Section */}
        <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Top-Notch Design & Development Company
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence with measurable results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center glass-card p-8 rounded-3xl hover-lift"
            >
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-3">
                78+
              </div>
              <p className="text-lg text-foreground/80">Projects completed for our respected clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center glass-card p-8 rounded-3xl hover-lift"
            >
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-3">
                12+
              </div>
              <p className="text-lg text-foreground/80">IT Professionals providing services to reputed clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center glass-card p-8 rounded-3xl hover-lift"
            >
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-3">
                25+
              </div>
              <p className="text-lg text-foreground/80">Clients across India and Middle East</p>
            </motion.div>
          </div>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/12 via-accent/10 to-background"></div>
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
              <span className="text-sm font-semibold text-primary">Our Expertise</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Nurture Your Business With #Bluebird
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We digitally shape your ideas while combining ultra-modern features and innovative policies. Our skilled team of designers, developers, and digital marketers render quality services with extreme dedication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-4 glass-card rounded-full"
            >
              <span className="text-sm font-semibold text-primary">Why Choose Us</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              The Bluebird Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We transform your business with proven strategies and dedicated expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "tween" }}
                className="bg-gradient-to-br from-primary-light/15 via-primary/10 to-accent/15 backdrop-blur-sm border border-primary/20 p-6 rounded-3xl hover-lift group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all duration-300">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background"></div>
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-4 glass-card rounded-full"
            >
              <span className="text-sm font-semibold text-primary">Testimonials</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Reviews From Our Customers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear what our satisfied clients have to say
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "tween" }}
                className="glass-card p-8 rounded-3xl hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark"></div>
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your business goals with our proven strategies
            </p>
            <Link to="/contact">
              <Button size="lg" variant="glass" className="text-lg px-10 h-14 bg-white text-primary hover:bg-white/90 shadow-xl">
                Let's Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
