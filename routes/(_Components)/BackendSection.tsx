import HeroSection from "../../components/HeroSection.tsx";
import { NodeSvg } from "../../components/svg/Programming.tsx";

export default function BackendSection() {
  return (
    <HeroSection
      imageUrl="/images/backend.png"
      heading="Backend Development"
      icon="/images/tech/hono.png"
      code="deno run -RWNE --unstable-kv server.ts"
      reverse
    >
      <div className="relative h-0">
        <div className="fill-primary w-10 absolute -top-20 right-10">
          <NodeSvg />
        </div>
      </div>
      <p class="text-gray-200 mb-3">
        I build robust, scalable backend systems using <mark>Node.js</mark> and
        {" "}
        <mark>Deno</mark>, leveraging both <mark>JavaScript</mark> and{" "}
        <mark>TypeScript</mark> for maximum flexibility and safety.<br />
        <br />
        My go-to frameworks are <mark>Express</mark>{" "}
        (for classic Node.js APIs) and <mark>Hono</mark>{" "}
        (for modern, fast Deno/Edge APIs).<br />
        <br />
        I focus on clean, maintainable code and always choose the right tool for
        your project’s needs. Whether you need a REST API, server-side rendering
        via{" "}
        <mark>EJS</mark>, or a custom backend solution, I can deliver
        production-ready results.
      </p>
    </HeroSection>
  );
}
