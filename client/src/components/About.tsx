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
          <div className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {aboutData.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div id="what-i-bring" className="mt-12 pt-12 border-t border-gray-100">
            <h4 className="text-xl font-bold text-primary mb-6">What I Bring</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {aboutData.whatIBring.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="h-full rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-secondary/30"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h5 className="text-lg font-bold text-primary mb-2">{item.title}</h5>
                    <p className="text-base leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
