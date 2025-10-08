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
  Search
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
    date: "December 15, 2024",
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
    date: "December 12, 2024",
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
    date: "December 10, 2024",
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
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-flow-bg">
      <div className="fixed inset-0 mesh-gradient opacity-40 pointer-events-none"></div>
      
      <Navigation />
      
      {/* Article Header */}
      <section className="relative pt-20 pb-16 px-4 sm:pt-24 sm:pb-24 overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link to="/blog">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
                <post.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">{post.category}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Button variant="outline" className="mb-8">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </motion.div>
          </div>
        </div>
      </section>     
 {/* Article Content */}
      <section className="py-16 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 max-w-none"
            >
              <div 
                className="text-foreground"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                }}
              />
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-24 seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-card rounded-3xl border border-primary/20 p-6 sm:p-10 md:p-16 hover-lift mx-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
              Ready to Implement These <span className="gradient-text">Strategies</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's discuss how we can help your Kochi business succeed with proven digital marketing strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="w-full sm:w-auto text-base px-8 h-12">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/blog" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-base px-8 h-12">
                  Read More Articles
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