import { projectsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Download, ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Featured Projects</h3>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0">
            A collection of my work in data analysis, visualization, and business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-4 border-t border-gray-50 bg-gray-50/50">
                  {project.buttons.map((btn, idx) => (
                    <Button
                      key={idx}
                      variant={btn.type === "primary" ? "default" : "outline"}
                      className={`w-full justify-between group/btn ${
                        btn.type === "primary" 
                          ? "bg-primary hover:bg-primary/90" 
                          : "border-primary/20 text-primary hover:bg-primary/5"
                      }`}
                      asChild
                    >
                      <a 
                        href={btn.link} 
                        target={btn.isExternal ? "_blank" : undefined}
                        rel={btn.isExternal ? "noopener noreferrer" : undefined}
                      >
                        {btn.label}
                        {btn.isDownload ? (
                          <Download className="w-4 h-4 opacity-70" />
                        ) : (
                          <ExternalLink className="w-4 h-4 opacity-70 group-hover/btn:translate-x-1 transition-transform" />
                        )}
                      </a>
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
