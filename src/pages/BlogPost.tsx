import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  Clock,
  User,
  Share2,
  BookOpen,
  Globe,
  Users,
  Search,
  Calendar,
  Tag,
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  CheckCircle
} from "lucide-react";

const blogPosts = {
  "1": {
    id: 1,
    title: "Why Every Business in Kochi Needs a Professional Website",
    content: `<p class="text-lg leading-relaxed mb-6 text-muted-foreground">In today's digital-first world, your website is your brand's storefront. A professionally designed website not only improves trust but also enhances conversions. At Bluebird, we've designed websites for international brands and now bring the same expertise to Kochi businesses.</p>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">The Digital Transformation of Kochi</h2>

<p class="leading-relaxed mb-6">Kochi has emerged as a major IT hub in Kerala, with businesses ranging from traditional spice traders to cutting-edge tech startups. In this competitive landscape, having a professional website isn't just an advantage—it's a necessity.</p>

<p class="leading-relaxed mb-8">The city's business ecosystem is rapidly evolving, and customers now expect to find businesses online. Whether you're a traditional Kerala spice exporter or a modern tech startup, your digital presence determines your market reach and credibility.</p>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">Why Professional Websites Matter</h2>

<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 mb-8 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">1. First Impressions Count</h3>
<p class="leading-relaxed">Your website is often the first interaction potential customers have with your brand. A professionally designed website creates trust and credibility instantly. Studies show that users form an opinion about your website within 0.05 seconds of landing on it.</p>
</div>

<div class="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-6 mb-8 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">2. 24/7 Business Presence</h3>
<p class="leading-relaxed">Unlike physical stores, your website works round the clock, allowing customers to discover your services and make inquiries at any time. This is particularly valuable for Kochi businesses looking to serve international markets across different time zones.</p>
</div>

<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 mb-8 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">3. Competitive Advantage</h3>
<p class="leading-relaxed">Many local businesses in Kochi still rely on traditional marketing methods. A professional website gives you a significant edge over competitors who haven't embraced digital transformation yet.</p>
</div>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">Our Approach at Bluebird</h2>

<p class="leading-relaxed mb-6">We bring international design standards to Kochi businesses, ensuring your website not only looks great but also performs exceptionally well in search engines and converts visitors into customers.</p>

<p class="leading-relaxed mb-6">Our team combines global best practices with local market understanding, creating websites that resonate with both Kochi audiences and international clients.</p>

<div class="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12 border border-primary/20 text-center">
<p class="text-lg font-semibold mb-4">Ready to transform your digital presence?</p>
<p class="leading-relaxed">Contact us today for a free consultation and discover how a professional website can elevate your Kochi business to new heights.</p>
</div>`,
    author: "Bluebird Team",
    date: "October 6, 2025",
    readTime: "5 min read",
    category: "Web Development",
    icon: Globe
  },
  "2": {
    id: 2,
    title: "The Power of Social Media Marketing for Local Businesses",
    content: `<p class="text-lg leading-relaxed mb-6 text-muted-foreground">Kochi is buzzing with entrepreneurs – from startups to established enterprises. Social media platforms like Instagram and Facebook are no longer optional; they are the new marketplace. Discover how Bluebird's international social media strategies can put your brand in front of thousands of potential customers daily.</p>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">The Social Media Revolution in Kochi</h2>

<p class="leading-relaxed mb-6">With over 4.8 billion social media users worldwide, platforms like Instagram, Facebook, and LinkedIn have become essential tools for business growth. For Kochi businesses, this presents an unprecedented opportunity to reach both local and global audiences.</p>

<p class="leading-relaxed mb-8">The Kerala market is particularly active on social media, with high engagement rates and a tech-savvy population that actively discovers and supports local businesses through social platforms.</p>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">Why Social Media Marketing Works for Kochi Businesses</h2>

<div class="grid gap-6 mb-8">
<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">Local Audience Engagement</h3>
<p class="leading-relaxed">Social media allows you to connect with your local Kochi community, building relationships that translate into loyal customers. Share local stories, celebrate Kerala festivals, and showcase your connection to the community.</p>
</div>

<div class="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-6 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">Cost-Effective Marketing</h3>
<p class="leading-relaxed">Compared to traditional advertising like newspaper ads or billboards, social media marketing offers better ROI and more precise targeting options. You can reach exactly the right audience at a fraction of traditional advertising costs.</p>
</div>

<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">Real-Time Customer Interaction</h3>
<p class="leading-relaxed">Engage with customers instantly, address concerns, and build a community around your brand. This immediate connection builds trust and loyalty that traditional marketing channels simply cannot match.</p>
</div>
</div>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">Our International Strategies for Local Success</h2>

<p class="leading-relaxed mb-6">At Bluebird, we've helped international brands achieve remarkable success on social media. Now, we're bringing these proven strategies to Kochi businesses, helping them compete on a global scale while maintaining their local charm.</p>

<p class="leading-relaxed mb-6">Our approach combines global best practices with deep understanding of Kerala culture and consumer behavior, ensuring your social media presence resonates authentically with your target audience.</p>

<div class="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12 border border-primary/20 text-center">
<p class="text-lg font-semibold mb-4">Ready to amplify your social media presence?</p>
<p class="leading-relaxed">Let's discuss how we can help your Kochi business harness the power of social media to drive real, measurable business results.</p>
</div>`,
    author: "Bluebird Team",
    date: "October 4, 2025",
    readTime: "4 min read",
    category: "Digital Marketing",
    icon: Users
  },
  "3": {
    id: 3,
    title: "SEO – The Secret to Getting Found Online",
    content: `<p class="text-lg leading-relaxed mb-6 text-muted-foreground">Did you know 75% of people never scroll past the first page of Google? SEO is the game-changer for businesses in Kochi. At Bluebird, our international SEO expertise ensures your business ranks higher, attracts the right traffic, and grows sustainably.</p>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">The SEO Landscape in Kochi</h2>

<p class="leading-relaxed mb-6">As more Kochi businesses move online, competition for search engine visibility has intensified. The businesses that invest in proper SEO strategies are the ones that will dominate their markets and capture the growing digital audience in Kerala.</p>

<p class="leading-relaxed mb-8">With Kochi's emergence as a major IT and business hub, local search competition is becoming increasingly sophisticated. This presents both challenges and opportunities for businesses ready to invest in professional SEO.</p>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">Why SEO is Crucial for Your Kochi Business</h2>

<div class="grid gap-6 mb-8">
<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">Organic Traffic Growth</h3>
<p class="leading-relaxed">SEO drives high-quality, targeted traffic to your website without ongoing advertising costs. Once your rankings improve, you'll continue receiving visitors without paying for each click like with paid advertising.</p>
</div>

<div class="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-6 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">Local Search Dominance</h3>
<p class="leading-relaxed">With proper local SEO, your business can appear when people search for services "near me" or specifically in Kochi. This is crucial for capturing the growing local digital market in Kerala.</p>
</div>

<div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
<h3 class="text-xl font-display font-bold mb-4 text-primary">Long-term Results</h3>
<p class="leading-relaxed">Unlike paid advertising that stops working when you stop paying, SEO provides lasting results that compound over time. Your investment today continues paying dividends for years to come.</p>
</div>
</div>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">Our Proven SEO Methodology</h2>

<div class="space-y-6 mb-8">
<div class="border-l-4 border-primary pl-6">
<h3 class="text-xl font-display font-bold mb-3 text-primary">Technical SEO Foundation</h3>
<p class="leading-relaxed">We ensure your website is technically sound, fast-loading, and mobile-friendly. This foundation is crucial for both user experience and search engine rankings.</p>
</div>

<div class="border-l-4 border-accent pl-6">
<h3 class="text-xl font-display font-bold mb-3 text-primary">Content Strategy</h3>
<p class="leading-relaxed">Creating valuable, relevant content that answers your customers' questions and establishes your expertise in your industry. Content that serves your Kochi audience while appealing to broader markets.</p>
</div>

<div class="border-l-4 border-primary pl-6">
<h3 class="text-xl font-display font-bold mb-3 text-primary">Local SEO Optimization</h3>
<p class="leading-relaxed">Optimizing your Google My Business profile and local citations to dominate local search results. Essential for businesses serving the Kochi and Kerala markets.</p>
</div>

<div class="border-l-4 border-accent pl-6">
<h3 class="text-xl font-display font-bold mb-3 text-primary">Link Building</h3>
<p class="leading-relaxed">Building high-quality backlinks that boost your website's authority and search rankings. We focus on earning links from reputable sources relevant to your industry.</p>
</div>
</div>

<h2 class="text-3xl font-display font-bold mt-12 mb-6 gradient-text">Success Stories from International Markets</h2>

<p class="leading-relaxed mb-6">Our SEO strategies have helped businesses in competitive international markets achieve first-page rankings and significant traffic growth. We're excited to bring this expertise to Kochi businesses, combining global best practices with local market knowledge.</p>

<div class="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12 border border-primary/20 text-center">
<p class="text-lg font-semibold mb-4">Ready to dominate search results in your industry?</p>
<p class="leading-relaxed">Let's create an SEO strategy that delivers real, measurable results for your Kochi business.</p>
</div>`,
    author: "Bluebird Team",
    date: "October 2, 2025",
    readTime: "6 min read",
    category: "SEO",
    icon: Search
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen page-flow-bg flex items-center justify-center">
        <div className="fixed inset-0 mesh-gradient opacity-40 pointer-events-none"></div>
        <Navigation />
        <div className="text-center relative z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-8 mx-4 max-w-md mx-auto"
          >
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-display font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog">
              <Button variant="gradient" size="lg">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen page-flow-bg">
      <div className="fixed inset-0 mesh-gradient opacity-40 pointer-events-none"></div>
      
      <Navigation />
      
      {/* Article Header */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden seamless-section">
        {/* Floating ambient elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 30, 0],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/8 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.05, 0.95, 1.05],
              rotate: [0, -45, 0],
              x: [0, -25, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-accent/8 to-primary/6 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              {/* Navigation */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/blog">
                  <Button variant="ghost" className="hover:bg-primary/5">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
                
                {/* Article Actions */}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="hover:bg-primary/5">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/5">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full border border-primary/20"
              >
                <post.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{post.category}</span>
              </motion.div>
              
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 sm:mb-8 leading-tight"
              >
                {post.title}
              </motion.h1>
              
              {/* Article Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-primary/10"
              >
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    <span>1.2k views</span>
                  </div>
                </div>
                
                {/* Social Share */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-border/50">
                  <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="hover:bg-blue-500/10 hover:text-blue-500">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-blue-600/10 hover:text-blue-600">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-blue-700/10 hover:text-blue-700">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>     
 {/* Article Content */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-primary/10"
              >
                <div 
                  className="prose prose-sm sm:prose-base lg:prose-lg max-w-none
                    prose-headings:font-display prose-headings:font-bold
                    prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:lg:text-3xl prose-h2:mt-8 prose-h2:sm:mt-12 prose-h2:mb-4 prose-h2:sm:mb-6
                    prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mb-3 prose-h3:sm:mb-4
                    prose-p:leading-relaxed prose-p:mb-4 prose-p:sm:mb-6
                    prose-p:text-foreground/90
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-primary prose-blockquote:bg-primary/5
                    prose-code:bg-primary/10 prose-code:text-primary prose-code:px-2 prose-code:py-1 prose-code:rounded
                    [&_.gradient-text]:bg-gradient-to-r [&_.gradient-text]:from-primary [&_.gradient-text]:to-accent 
                    [&_.gradient-text]:bg-clip-text [&_.gradient-text]:text-transparent"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                  }}
                />
                
                {/* Article Footer */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="hover:bg-red-500/10 hover:text-red-500">
                        <Heart className="h-4 w-4 mr-2" />
                        24 likes
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        5 comments
                      </Button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-sm text-muted-foreground">Tags:</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {post.category}
                        </span>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                          Kochi Business
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Table of Contents */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-card rounded-2xl p-6 border border-primary/10"
                >
                  <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#introduction" className="block text-muted-foreground hover:text-primary transition-colors py-1">
                      Introduction
                    </a>
                    <a href="#main-points" className="block text-muted-foreground hover:text-primary transition-colors py-1">
                      Key Points
                    </a>
                    <a href="#methodology" className="block text-muted-foreground hover:text-primary transition-colors py-1">
                      Our Approach
                    </a>
                    <a href="#conclusion" className="block text-muted-foreground hover:text-primary transition-colors py-1">
                      Conclusion
                    </a>
                  </nav>
                </motion.div>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass-card rounded-2xl p-6 border border-primary/10"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-display font-bold mb-2">{post.author}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Digital marketing experts helping Kochi businesses grow online with international strategies.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </div>
                </motion.div>

                {/* Related Articles */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="glass-card rounded-2xl p-6 border border-primary/10"
                >
                  <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {Object.values(blogPosts)
                      .filter(relatedPost => relatedPost.id !== post.id)
                      .slice(0, 2)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <div className="p-3 rounded-xl hover:bg-primary/5 transition-all duration-300">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300 mb-2 leading-tight">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <relatedPost.icon className="h-3 w-3" />
                              <span>{relatedPost.category}</span>
                              <span>•</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </motion.div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-primary/10"
            >
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Comments & Discussion
              </h3>
              
              {/* Comment Form */}
              <div className="mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-semibold mb-4">Share your thoughts</h4>
                <div className="space-y-4">
                  <textarea
                    placeholder="What did you think about this article? Share your insights..."
                    className="w-full p-4 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-300 min-h-[120px] resize-none"
                  />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      Join the conversation and help other businesses learn
                    </span>
                    <Button variant="gradient" className="w-full sm:w-auto">
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">Rajesh Kumar</span>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      This article perfectly explains why we needed a professional website for our spice export business. The international perspective really helped us understand the global standards.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Button variant="ghost" size="sm" className="h-auto p-0 hover:text-primary">
                        <Heart className="h-3 w-3 mr-1" />
                        12
                      </Button>
                      <Button variant="ghost" size="sm" className="h-auto p-0 hover:text-primary">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">Priya Nair</span>
                      <span className="text-sm text-muted-foreground">1 day ago</span>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      As a startup founder in Kochi, this gave me great insights into digital marketing. Looking forward to implementing these strategies for our tech company.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Button variant="ghost" size="sm" className="h-auto p-0 hover:text-primary">
                        <Heart className="h-3 w-3 mr-1" />
                        8
                      </Button>
                      <Button variant="ghost" size="sm" className="h-auto p-0 hover:text-primary">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 seamless-section">
        {/* Floating ambient elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 10, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -right-8 w-80 h-80 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.02, 0.98, 1.02], rotate: [0, -12, 0], opacity: [0.15, 0.08, 0.15] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-12 -left-8 w-72 h-72 bg-gradient-to-br from-accent/12 to-primary/8 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center glass-card rounded-2xl sm:rounded-3xl border border-primary/20 p-6 sm:p-8 lg:p-12 hover-lift mx-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full border border-primary/20">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Ready to take action?</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
              Let's Implement These <span className="gradient-text">Strategies Together</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              Ready to transform your digital presence? Our team is here to help your Kochi business succeed with proven international strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/blog" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                  <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Read More Articles
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>International expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Local market knowledge</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}