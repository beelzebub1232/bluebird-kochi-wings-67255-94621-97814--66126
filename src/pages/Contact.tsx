import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

// Lazy load the Map component since Leaflet is heavy
const Map = lazy(() => import("@/components/Map"));

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        to_name: "Bluebird Media Solutions",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen page-flow-bg">
      {/* Unified flowing background for entire page */}
      <div className="fixed inset-0 mesh-gradient opacity-35 pointer-events-none"></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 px-4">
              Let's Build Something{" "}
              <span className="gradient-text">Great Together</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Ready to take your business to the next level? Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-20 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                  Have a project in mind? We'd love to hear from you. Send us a message 
                  and we'll respond as soon as possible.
                </p>
              </div>

              <Card className="hover-lift">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Address</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Bluebird Media Solutions<br />
                        Kochi, Kerala, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                      <a 
                        href="mailto:info@bluebirdmedias.com"
                        className="text-muted-foreground hover:text-primary transition-smooth text-sm sm:text-base break-all"
                      >
                        info@bluebirdmedias.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                      <a 
                        href="tel:+919633365300"
                        className="text-muted-foreground hover:text-primary transition-smooth text-sm sm:text-base"
                      >
                        +91 96333 65300
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">WhatsApp</h3>
                      <a 
                        href="https://wa.me/919633365300"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth text-sm sm:text-base"
                      >
                        +91 96333 65300
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="How can we help? *"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-20 relative overflow-hidden seamless-section">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 px-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground px-4 text-sm sm:text-base">
              Find us on the map and drop by for a coffee
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-6xl mx-auto"
          >
            <Suspense fallback={
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg bg-muted animate-pulse flex items-center justify-center">
                <div className="text-muted-foreground">Loading map...</div>
              </div>
            }>
              <Map />
            </Suspense>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
