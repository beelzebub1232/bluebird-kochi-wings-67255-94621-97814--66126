import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import {
  Code2,
  TrendingUp,
  Palette,
  Video,
  Calendar,
  Search,
  Share2,
  Mail,
  MessageSquare,
  Megaphone,
  Layout,
  Package,
  Camera,
  Film,
  Sparkles,
  PrinterIcon,
  Gift,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies. From responsive designs to complex e-commerce platforms.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Improve your search rankings and drive organic traffic with our proven SEO strategies and optimization techniques.",
  },
  {
    icon: Megaphone,
    title: "SEM & PPC",
    description: "Targeted advertising campaigns on Google Ads and other platforms to maximize your ROI and reach the right audience.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience across Facebook, Instagram, LinkedIn, and more with strategic content and community management.",
  },
  {
    icon: MessageSquare,
    title: "Content Marketing",
    description: "Compelling content that tells your brand story and drives engagement across all digital channels.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Personalized email campaigns that nurture leads and drive conversions with targeted messaging.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing",
    description: "Direct customer engagement through WhatsApp Business with automated messaging and personalized campaigns.",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Memorable and impactful logos that capture your brand essence and make a lasting impression.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    description: "Complete branding solutions including visual identity, brand guidelines, and brand strategy.",
  },
  {
    icon: Layout,
    title: "Company Profile Design",
    description: "Professional company profiles and presentations that showcase your business in the best light.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Eye-catching packaging designs that stand out on shelves and connect with consumers.",
  },
  {
    icon: Video,
    title: "Corporate Video Production",
    description: "High-quality corporate videos, testimonials, and promotional content that tell your story.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional product, corporate, and event photography that captures your brand's essence.",
  },
  {
    icon: Film,
    title: "Animation & Motion Graphics",
    description: "Engaging animated videos and motion graphics that explain complex ideas simply and effectively.",
  },
  {
    icon: Calendar,
    title: "Brand Activation",
    description: "Create memorable brand experiences that engage customers and build lasting connections.",
  },
  {
    icon: TrendingUp,
    title: "Exhibition Management",
    description: "End-to-end exhibition planning and execution to showcase your brand at trade shows and events.",
  },
  {
    icon: PrinterIcon,
    title: "Printing & Packaging",
    description: "High-quality printing services for marketing materials, packaging, and branded collateral.",
  },
  {
    icon: Gift,
    title: "Gifts & Giveaways",
    description: "Customized promotional items and corporate gifts that leave a lasting impression.",
  },
];

export default function Services() {
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
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="flex gap-1">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    <div className="w-1 h-4 bg-gradient-to-b from-accent to-primary rounded-full mt-1"></div>
                  </div>
                  <span className="text-base font-bold text-primary uppercase tracking-[0.2em]">What We Offer</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-gradient-to-b from-accent to-primary rounded-full mt-1"></div>
                    <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 px-4">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-4">
              Holistic solutions designed to grow and manage your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 pb-16 sm:pb-20 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24 seamless-section">
        {/* Subtle floating elements for this section */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.06, 1], rotate: [0, 8, 0], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-[20rem] h-[20rem] bg-gradient-to-br from-primary/18 to-accent/12 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.02, 0.98, 1.02], rotate: [0, -10, 0], opacity: [0.15, 0.08, 0.15] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-16 -left-10 w-[18rem] h-[18rem] bg-gradient-to-br from-accent/15 to-primary/10 rounded-full blur-3xl"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight">
              Need a <span className="gradient-text">Custom Solution</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every business is unique. Let's discuss how we can tailor our services to meet your specific needs and goals.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
