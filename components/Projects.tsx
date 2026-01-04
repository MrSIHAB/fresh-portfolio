import { Github } from "lucide-preact";
import ScrollReveal from "../islands/ScrollReveal.tsx";
import { projects } from "../lib/static-data/projects.ts";

export default function Projects() {
  return (
    <section id="projects" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Featured <span class="text-primary">Projects</span>
          </h2>
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={`delay-${(index * 100 + 100).toString()}`}
            >
              <div class="group bg-slate-900 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300 flex flex-col h-full border border-white/15">
                {/* Project Image */}
                <div class="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent">
                  </div>
                </div>

                <div class="p-6 flex-1 flex flex-col">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gray-400 hover:text-white"
                      aria-label={`View ${project.title}`}
                    >
                      {Github({ class: "w-6 h-6" })}
                    </a>
                  </div>

                  <p class="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div class="flex flex-wrap gap-2 mt-auto">
                    {project.type.map((tag) => (
                      <span
                        key={tag}
                        class="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
