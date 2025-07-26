import ProjectIsland from "../../islands/Project.tsx";

export default function Project() {
  return (
    <div class="md:py-10">
      <div className="card portfolio-card">
        <h2 class="text-primary mb-4 text-center">
          <span class="text-3xl font-bold underline underline-offset-8">
            Projects
          </span>
        </h2>
        <ProjectIsland />
      </div>
    </div>
  );
}
