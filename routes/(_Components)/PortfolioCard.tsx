import ProjectIsland from "../../islands/Project.tsx";

export default function Project() {
  return (
    <div class="md:p-10" id="portfolio">
      <div className="card portfolio-card">
        <h2 class="text-primary mb-4 text-center">
          <span class="text-3xl font-bold">
            Projects
          </span>
        </h2>
        <ProjectIsland />
      </div>
    </div>
  );
}
