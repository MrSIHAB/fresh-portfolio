import { useState } from "preact/hooks";
import {
  filters,
  ProjectCategory,
  projects,
} from "../lib/static-data/projects.ts";
import ProjectCard from "../components/ProjectCard.tsx";

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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredProjects.slice(0, 6).map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </>
  );
}
