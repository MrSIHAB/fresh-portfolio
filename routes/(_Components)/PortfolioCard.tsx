import ProjectIsland from "../../islands/Project.tsx";

export default function Project() {
  return (
    <div class="md:py-10">
      <div className="card portfolio-card">
        <h2 class="text-3xl text-center font-bold text-primary mb-4">
          Projects
        </h2>
        <ProjectIsland />
      </div>
    </div>
  );
}
