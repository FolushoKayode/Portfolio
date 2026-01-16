import { heroData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 w-fit text-sm font-medium border border-green-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {heroData.status}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-tight">
            Transforming Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Decisions.</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            {heroData.subheadline}
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-white text-primary border border-primary/20 rounded-full font-medium hover:bg-gray-50 transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 bg-secondary/20 rounded-full translate-x-4 translate-y-4" />
            <img
              src="/Pic.jpg"
              alt="Mofoluwasho Kayode"
              className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl relative z-10"
            />
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 left-0 bg-white p-4 rounded-xl shadow-lg z-20 border border-gray-100"
            >
              <div className="text-sm font-bold text-primary">Analytics</div>
              <div className="text-xs text-muted-foreground">Expert</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-0 bg-white p-4 rounded-xl shadow-lg z-20 border border-gray-100"
            >
              <div className="text-sm font-bold text-secondary">Business</div>
              <div className="text-xs text-muted-foreground">Intelligence</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
