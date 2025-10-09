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
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
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
    <>
      {/* Spacer for fixed nav */}
      <div className="h-16 sm:h-20" />

      <motion.nav
        initial={shouldAnimate ? { y: -100, opacity: 0 } : false}
        animate={shouldAnimate ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4"
      >
        <div className="w-full max-w-7xl">
          <div className={`glass-nav rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border-2 border-primary/60 hover:border-primary/80 transition-all duration-500 ${isScrolled ? "scale-[0.98] border-primary/80" : "scale-100"
            }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-7 w-24 sm:h-8 sm:w-28"
                >
                  <img
                    src={theme === "dark" ? "/bluebird-logo.png" : "/bluebird-logo-d.png"}
                    alt="Bluebird"
                    className="h-full w-full object-contain"
                  />
                </motion.div>
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
                        className={`transition-all duration-300 ${location.pathname === item.path
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-primary/10 hover:text-primary text-foreground"
                          }`}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Right Section */}
              <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                <ThemeToggle />
                <Link to="/contact">
                  <Button variant="gradient" size="sm" className="shadow-lg text-sm px-4">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                  className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
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
              className="md:hidden glass-nav rounded-3xl mt-2 p-3 sm:p-4 shadow-[var(--shadow-premium)] w-full max-w-7xl border-2 border-primary/60"
            >
              <div className="space-y-1 sm:space-y-2">
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
                        className="w-full justify-start text-sm sm:text-base h-10 sm:h-11"
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
                    <Button variant="gradient" className="w-full text-sm sm:text-base h-10 sm:h-11">
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
