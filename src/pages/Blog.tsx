import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { 
  BookOpen,
  TrendingUp,
  Search,
  Users,
  Globe,
  Rocket
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why Every Business in Kochi Needs a Professional Website",
    excerpt: "Discover how a professional website can transform your Kochi business from a local player to a global competitor. Learn why your digital storefront is more important than ever in today's market.",
    content: "In today's digital-first world, your website is your brand's storefront. A professionally designed website not only improves trust but also enhances conversions. At Bluebird, we've designed websites for international brands and now bring the same expertise to Kochi businesses.",
    author: "Bluebird Team",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    icon: Globe,
    gradient: "from-primary-light to-primary"
  },
  {
    id: 2,
    title: "The Power of Social Media Marketing for Local Businesses",
    excerpt: "From traditional spice traders to tech startups, Kochi businesses are leveraging social media to reach global audiences. Discover proven strategies that work.",
    content: "Kochi is buzzing with entrepreneurs – from startups to established enterprises. Social media platforms like Instagram and Facebook are no longer optional; they are the new marketplace. Discover how Bluebird's international social media strategies can put your brand in front of thousands of potential customers daily.",
    author: "Bluebird Team", 
    date: "December 12, 2024",
    readTime: "4 min read",
    category: "Digital Marketing",
    icon: Users,
    gradient: "from-primary to-primary-dark"
  },
  {
    id: 3,
    title: "SEO – The Secret to Getting Found Online",
    excerpt: "75% of people never scroll past Google's first page. Learn how Kochi businesses are using international SEO strategies to dominate local search results and attract quality traffic.",
    content: "Did you know 75% of people never scroll past the first page of Google? SEO is the game-changer for businesses in Kochi. At Bluebird, our international SEO expertise ensures your business ranks higher, attracts the right traffic, and grows sustainably.",
    author: "Bluebird Team",
    date: "December 10, 2024", 
    readTime: "6 min read",
    category: "SEO",
    icon: Search,
    gradient: "from-accent to-primary"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen page-flow-bg">
      {/* Unified flowing background */}
      <div className="fixed inset-0 mesh-gradient opacity-40 pointer-events-none"></div>
      
      <Navigation />      

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-16 px-4 sm:pt-24 sm:pb-24 overflow-hidden seamless-section">
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full"
            >
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Insights & Expertise</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 sm:mb-8 leading-tight px-2"
            >
              Digital Marketing{" "}
              <span className="gradient-text">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Stay ahead with the latest trends, strategies, and insights from our digital marketing experts
            </motion.p>
          </div>
        </div>
      </section>      
{/* Blog Posts Section */}
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
                      <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">Latest Articles</span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 px-4">
              Expert Insights for <span className="gradient-text">Kochi Businesses</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Discover proven strategies and insights that help local businesses thrive in the digital landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 px-4">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                {...post}
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
            <Button size="lg" variant="outline" className="text-base px-8 h-12">
              <TrendingUp className="mr-2 h-4 w-4" />
              More Articles Coming Soon
            </Button>
          </motion.div>
        </div>
      </section>   
   {/* CTA Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-24 seamless-section">
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
              <span className="text-sm font-semibold">Ready to implement these strategies?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight">
              Let's Transform Your <span className="gradient-text">Digital Presence</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Ready to put these insights into action? Let's discuss how we can help your Kochi business succeed online
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                  <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                  View Our Services
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