import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Work", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const done = sessionStorage.getItem("navAnimatedOnce");
    if (!done) {
      setShouldAnimate(true);
      sessionStorage.setItem("navAnimatedOnce", "1");
    } else {
      setShouldAnimate(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Spacer for fixed nav */}
      <div className="h-20" />
      
      <motion.nav
        initial={shouldAnimate ? { y: -100, opacity: 0 } : false}
        animate={shouldAnimate ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="w-full max-w-7xl">
          <div className={`glass-nav rounded-full px-6 py-3 shadow-lg border-2 border-primary/30 transition-all duration-500 ${
            isScrolled ? "scale-[0.98]" : "scale-100"
          }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-11 h-11 bg-gradient-to-br from-primary-light to-primary-dark rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-xl" aria-label="Bluebird logo">B</span>
              </motion.div>
              <span className="font-display text-xl font-bold hidden sm:block">
                Bluebird<span className="gradient-text">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-accent/10 text-foreground"
                      }`}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <Link to="/contact">
                <Button variant="gradient" size="sm" className="shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="rounded-full"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </Button>
            </div>
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-nav rounded-3xl mt-2 p-4 shadow-[var(--shadow-premium)] w-full max-w-7xl"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={item.path} className="block">
                      <Button
                        variant={location.pathname === item.path ? "default" : "ghost"}
                        className="w-full justify-start"
                      >
                        {item.name}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-2"
                >
                  <Link to="/contact" className="block">
                    <Button variant="gradient" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.nav>
    </>
  );
}
