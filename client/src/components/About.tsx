import { aboutData } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Bridging Technical Precision with Business Strategy
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {aboutData.content}
          </p>

          <div className="mt-12 pt-12 border-t border-gray-100">
            <h4 className="text-xl font-bold text-primary mb-6">Skills & Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {aboutData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 rounded-full bg-slate-50 text-primary font-medium border border-slate-200 shadow-sm hover:shadow-md hover:border-secondary/30 hover:text-secondary transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
