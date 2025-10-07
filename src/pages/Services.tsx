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
              <span className="text-sm font-semibold text-primary">What We Offer</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Holistic solutions designed to grow and manage your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/8 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary to-primary-dark"></div>
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Every business is unique. Let's discuss how we can tailor our services to meet your specific needs and goals.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
