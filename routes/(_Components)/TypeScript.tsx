import HeroSection from "../../components/HeroSection.tsx";

export default function TypeScriptSection() {
  const info = {
    header: "TypeScript | Production Safety",
    code: `deno run main.ts`,
    image: "/images/tech/ts_code.png",
  };

  return (
    <HeroSection
      heading={info.header}
      imageUrl={info.image}
      code={info.code}
      icon="/svg/ts.svg"
      floatingIcon="/images/tech/deno.png"
    >
      <p class="text-gray-200">
        TypeScript is my primary language for building both frontend and backend
        applications. I love how TypeScript brings type safety intellisense, and
        developer confidence to{" "}
        <mark>JavaScript</mark>. Whether it’s building full-stack apps with{" "}
        <mark>Deno&nbsp;&&nbsp;Node</mark>, designing scalable interfaces in
        {" "}
        <mark>React</mark>, utilizing backend power with <mark>Hono</mark>{" "}
        or crafting reusable modules in{" "}
        <mark>Fresh</mark>, TypeScript is always at the core of my workflow.
      </p>
    </HeroSection>
  );
}
