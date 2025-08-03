import { Project } from "../lib/static-data/projects.ts";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      class="project-card group from-[#1e3b8ac5] to-[#1e3b8a3f]"
      style={{
        padding: 0,
        width: "100%",
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
        class="rounded-md w-full aspect-[7/5] object-cover"
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
  );
}
