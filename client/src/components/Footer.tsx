import { siteConfig } from "@/lib/data";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Let's Connect and Explore Opportunities
            </h2>
            <p className="text-xl text-white/70 mb-8">
              I'm open to opportunities where I can contribute my experience in business analysis, data analytics, and technology while exploring practical applications of AI.
            </p>
            <a 
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 text-2xl font-bold text-secondary hover:text-white transition-colors"
            >
              {siteConfig.email}
              <ArrowUpRight className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col justify-end gap-4">
            <div className="flex gap-4">
              <a 
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                aria-label="Folusho Kayode on LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                aria-label="Folusho Kayode on GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Designed & Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
