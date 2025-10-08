import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919633365300", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        
        {/* Pulse animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/80 rounded-full"
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </motion.button>
    </motion.div>
  );
}