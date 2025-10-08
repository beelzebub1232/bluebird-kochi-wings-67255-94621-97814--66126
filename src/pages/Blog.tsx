import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";

import { BlogStats } from "@/components/BlogStats";
import { Button } from "@/components/ui/button";
import { 
  BookOpen,
  TrendingUp,
  Search,
  Users,
  Globe,
  Rocket,
  Filter,
  Calendar,
  Tag,
  Mail,
  ArrowRight,
  Star,
  Clock
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why Every Business in Kochi Needs a Professional Website",
    excerpt: "Discover how a professional website can transform your Kochi business from a local player to a global competitor. Learn why your digital storefront is more important than ever in today's market.",
    content: "In today's digital-first world, your website is your brand's storefront. A professionally designed website not only improves trust but also enhances conversions. At Bluebird, we've designed websites for international brands and now bring the same expertise to Kochi businesses.",
    author: "Bluebird Team",
    date: "October 6, 2025",
    readTime: "5 min read",
    category: "Web Development",
    icon: Globe,
    gradient: "from-primary-light to-primary",
    featured: true
  },
  {
    id: 2,
    title: "The Power of Social Media Marketing for Local Businesses",
    excerpt: "From traditional spice traders to tech startups, Kochi businesses are leveraging social media to reach global audiences. Discover proven strategies that work.",
    content: "Kochi is buzzing with entrepreneurs – from startups to established enterprises. Social media platforms like Instagram and Facebook are no longer optional; they are the new marketplace. Discover how Bluebird's international social media strategies can put your brand in front of thousands of potential customers daily.",
    author: "Bluebird Team", 
    date: "October 4, 2025",
    readTime: "4 min read",
    category: "Digital Marketing",
    icon: Users,
    gradient: "from-primary to-primary-dark",
    featured: false
  },
  {
    id: 3,
    title: "SEO – The Secret to Getting Found Online",
    excerpt: "75% of people never scroll past Google's first page. Learn how Kochi businesses are using international SEO strategies to dominate local search results and attract quality traffic.",
    content: "Did you know 75% of people never scroll past the first page of Google? SEO is the game-changer for businesses in Kochi. At Bluebird, our international SEO expertise ensures your business ranks higher, attracts the right traffic, and grows sustainably.",
    author: "Bluebird Team",
    date: "October 2, 2025", 
    readTime: "6 min read",
    category: "SEO",
    icon: Search,
    gradient: "from-accent to-primary",
    featured: true
  }
];

const categoriesData = [
  { name: "All", count: 3 },
  { name: "Web Development", count: 1 },
  { name: "Digital Marketing", count: 1 },
  { name: "SEO", count: 1 },
];

const recentPosts = [
  {
    id: 1,
    title: "Why Every Business in Kochi Needs a Professional Website",
    date: "Oct 6, 2025",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "The Power of Social Media Marketing for Local Businesses", 
    date: "Oct 4, 2025",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "SEO – The Secret to Getting Found Online",
    date: "Oct 2, 2025",
    readTime: "6 min"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className="min-h-screen page-flow-bg">
      {/* Unified flowing background */}
      <div className="fixed inset-0 mesh-gradient opacity-40 pointer-events-none"></div>
      
      <Navigation />      



      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-8 pb-16 px-4 sm:pt-12 sm:pb-20 overflow-hidden seamless-section">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full"
            >
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Insights & Expertise</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 sm:mb-8 leading-tight px-2"
            >
              Digital Marketing{" "}
              <span className="gradient-text">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Stay ahead with the latest trends, strategies, and insights from our digital marketing experts
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">3 Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">3 Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Weekly Updates</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>      
{/* Search and Filter Section */}
      <section className="py-8 sm:py-12 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-primary/10"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 lg:items-center">
                {/* Search Bar */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-300"
                    />
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">Filter:</span>
                  </div>
                  <div className="flex gap-2 flex-wrap w-full lg:w-auto">
                    {categoriesData.map((category) => (
                      <Button
                        key={category.name}
                        variant={activeCategory === category.name ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleCategoryClick(category.name)}
                        className="whitespace-nowrap flex-shrink-0 cursor-pointer text-xs sm:text-sm"
                      >
                        {category.name}
                        <span className="ml-1 sm:ml-2 text-xs opacity-70">({category.count})</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-8 sm:py-12 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Featured Articles</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4 px-4">
              Must-Read <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Our most popular and impactful articles for growing your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 px-4">
            {filteredPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="lg:col-span-1"
              >
                <BlogCard {...post} delay={index * 0.1} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8 sm:py-12 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4">
            {/* Main Articles */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-2">
                      Latest <span className="gradient-text">Articles</span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Discover actionable insights and proven strategies to grow your business
                    </p>
                  </div>
                  {(activeCategory !== "All" || searchQuery) && (
                    <div className="mt-4 sm:mt-0">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Showing:</span>
                        {activeCategory !== "All" && (
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                            {activeCategory}
                          </span>
                        )}
                        {searchQuery && (
                          <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs">
                            "{searchQuery}"
                          </span>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setActiveCategory("All");
                            setSearchQuery("");
                          }}
                          className="text-xs h-6 px-2"
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {filteredPosts.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                  </p>
                </div>
              )}

              <div className="space-y-6 sm:space-y-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <BlogCard
                      key={post.id}
                      {...post}
                      delay={index * 0.1}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="glass-card rounded-3xl p-8 border border-primary/10">
                      <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-display font-bold mb-2">No articles found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search or filter criteria
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setActiveCategory("All");
                          setSearchQuery("");
                        }}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <div className="glass-card rounded-3xl p-6 border border-primary/10">
                  <h3 className="text-base sm:text-lg font-display font-bold mb-3">More Content Coming Soon</h3>
                  <p className="text-muted-foreground mb-4 text-xs sm:text-sm">
                    We're constantly creating new content to help your business succeed
                  </p>
                  <Button size="lg" variant="outline" className="text-sm sm:text-base px-4 sm:px-8 h-10 sm:h-12 w-full sm:w-auto">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Subscribe for Updates
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Blog Stats */}
                <BlogStats />

                {/* Newsletter Signup */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass-card rounded-3xl p-6 border border-primary/10"
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground">Get the latest insights delivered to your inbox</p>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-300"
                    />
                    <Button className="w-full" variant="gradient">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>

                {/* Recent Posts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass-card rounded-3xl p-6 border border-primary/10"
                >
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block group"
                      >
                        <div className="p-3 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300 mb-2 leading-tight">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="glass-card rounded-3xl p-6 border border-primary/10"
                >
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                    <Tag className="h-5 w-5 text-primary" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categoriesData.filter(cat => cat.name !== "All").map((category) => (
                      <Button
                        key={category.name}
                        variant={activeCategory === category.name ? "default" : "ghost"}
                        onClick={() => handleCategoryClick(category.name)}
                        className="w-full justify-between h-auto p-3 rounded-2xl hover:bg-primary/5 cursor-pointer"
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
              Let's Transform Your <span className="gradient-text">Digital Presence</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
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