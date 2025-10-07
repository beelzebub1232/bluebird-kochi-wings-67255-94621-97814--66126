import { motion } from "framer-motion";

const clients = [
  "Talabat", "Noon", "Carrefour", "Nesto", "Mercedes-Benz",
  "Al Meera", "Lulu", "Oman Oil", "Bank Muscat", "OTE"
];

export function TrustBar() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
            Trusted by Global & Gulf Brands
          </h2>
          <p className="text-muted-foreground">
            Delivering excellence for leading companies worldwide
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-16 px-8 cursor-pointer group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
