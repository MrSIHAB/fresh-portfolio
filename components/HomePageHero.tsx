import { HomepageHeroParticles } from "../islands/HomeHeroParticle.tsx";

const canvasStyle = /*css*/ `.particles-js-canvas-el {
	position: absolute;
	inset: 0;
	z-index: 0;
	animation: fade-in-opacity 1s linear forwards;
	opacity: 0;
	transition: opacity 1s linear;
}
body {
	overflow-x: hidden;
}`;

export function HomepageHero() {
  return (
    <div
      class="w-screen -ml-[calc(50vw-50%)] -mt-6 bg-repeat py-32 lg:pt-48 relative before:absolute before:left-0 before:right-0 before:h-32 before:bg-gradient-to-t before:from-white dark:before:from-jsr-gray-950 before:bottom-0 before:z-10 before:pointer-events-none"
      id="particles-js"
    >
      <script
        src="https://jsr.io/scripts/particles.js?__frsh_c=5ad254d7c3507089ba256ba5c319cc82d85f481c"
        defer
      >
      </script>
      <style>{canvasStyle}</style>
      <HomepageHeroParticles />
      <canvas
        class="particles-js-canvas-el"
        width="1280"
        height="778"
        aria-hidden="true"
        style="width: 100%; height: 100%; opacity: 1;"
      >
      </canvas>
      <div class="section-x-inset-xl flex flex-col items-center justify-center gap-12 relative pointer-events-none">
      </div>
    </div>
  );
}
