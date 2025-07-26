import { useState } from "preact/hooks";
import {
  filters,
  ProjectCategory,
  projects,
} from "../lib/static-data/projects.ts";

export default function ProjectIsland() {
  const [selected, setSelected] = useState<ProjectCategory>("All");

  const filteredProjects = selected === "All"
    ? projects
    : projects.filter((p) => p.type.includes(selected));

  return (
    <>
      {/* Filter Chips */}
      <div class="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            type="button"
            class={`px-4 py-1 rounded-full border border-primary text-sm ${
              selected === filter
                ? "bg-primary text-black font-semibold"
                : "text-primary hover:bg-primary/20"
            } transition`}
            onClick={() => setSelected(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.slice(0, 6).map((project) => (
          <div
            class="project-card portfolio-card group from-[#1e3b8ac5] to-[#1e3b8a3f]"
            style={{
              padding: 0,
            }}
          >
            {/* Identifier Tag */}
            <div class="
                    text-xs bg-primary text-black px-2 py-1 rounded-full inline-block
                    absolute top-2 left-2
                    ">
              {project.type[0]}
            </div>

            {/* Preview */}
            <img
              src={project.image}
              alt={project.title}
              class="rounded-md w-full h-40 object-cover"
            />

            {/* Hover Info */}
            <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity 
                    p-4 flex flex-col justify-end">
              <h3 class="text-lg font-bold text-primary mb-1">
                {project.title}
              </h3>
              <p class="text-sm text-white mb-2 line-clamp-2">
                {project.description}
              </p>
              <a
                href={project.link}
                class="text-sm text-primary underline underline-offset-4 text-right"
              >
                Go →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
