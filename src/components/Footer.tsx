import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "dark";
    setTheme(savedTheme);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <footer className="relative overflow-hidden">
      {/* Seamless gradient transition into footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-secondary/60"></div>
      
      {/* Subtle mesh overlay for texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary-dark/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="h-8 w-28 sm:h-10 sm:w-32"
                >
                  <img 
                    src={theme === "dark" ? "/bluebird-logo.png" : "/bluebird-logo-d.png"} 
                    alt="Bluebird" 
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </Link>
            </div>
            <p className="text-foreground/80 text-sm sm:text-base mb-6 leading-relaxed">
              World-class digital solutions now in Kochi. Leveraging 7+ years of international expertise.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a 
                href="https://www.facebook.com/bluebirdkochi" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a 
                href="https://wa.me/919633365300" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/bluebirdmediasi" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-bold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display font-bold mb-4 sm:mb-6 text-base sm:text-lg">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-foreground/70 text-sm sm:text-base">Web Development</li>
              <li className="text-foreground/70 text-sm sm:text-base">Digital Marketing</li>
              <li className="text-foreground/70 text-sm sm:text-base">Creative Design</li>
              <li className="text-foreground/70 text-sm sm:text-base">Media Production</li>
              <li className="text-foreground/70 text-sm sm:text-base">Event Management</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-display font-bold mb-4 sm:mb-6 text-base sm:text-lg">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                </div>
                <span className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                  Bluebird Media Solutions<br />Kochi, Kerala, India
                </span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                </div>
                <a href="mailto:info@bluebirdmedias.com" className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm sm:text-base break-all">
                  info@bluebirdmedias.com
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                </div>
                <a href="tel:+919633365300" className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm sm:text-base">
                  +91 96333 65300
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                </div>
                <a 
                  href="https://wa.me/919633365300" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm sm:text-base"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section with subtle gradient border */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          {/* Gradient border instead of hard border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          <div className="text-center">
            <p className="text-foreground/60 text-sm sm:text-base">
              © {new Date().getFullYear()} Bluebird Media Solutions. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
