import HeroSection from "../../components/HeroSection.tsx";
import {
  DenoSvg,
  ExpressSvg,
  FreshSvg,
  HonoSvg,
  NextSvg,
  NodeSvg,
  ReactSvg,
} from "../../components/svg/Programming.tsx";

export default function FullstackSection() {
  return (
    <HeroSection
      imageUrl="/images/projects/vist.png"
      heading="Fullstack Web Development"
      icon="/images/tech/next.png"
      floatingIcon="/images/tech/fresh.png"
      fip="right"
      reverse
      code={`GET(request){\n  return new Response('Hello Survivors');\n}`}
    >
      <p class="text-gray-200 mb-3">
        For fullstack web development, I use <mark>Fresh.js</mark> and{" "}
        <mark>Next.js</mark>—two powerful frameworks for building modern,
        scalable, and SEO-friendly applications.
        <br />
        <br />
        <mark>Fresh.js</mark> leverages the speed and simplicity of{" "}
        <mark>Preact</mark>{" "}
        with an island architecture, delivering near-native performance and
        minimal JavaScript for users.
        <br />
        <br />
        <mark>Next.js</mark>{" "}
        is my go-to for complex, production-grade React apps, offering
        server-side rendering, API routes, and a rich ecosystem for building
        robust fullstack solutions.
        <br />
        <br />
        Whether you need a lightning-fast landing page or a feature-rich web
        platform, I can deliver a seamless fullstack experience tailored to your
        needs.
      </p>
      <div className="fill-primary/55 h-7 gap-3 flex">
        <NextSvg />
        <FreshSvg />
        <DenoSvg />
        <HonoSvg />
        <NodeSvg />
        <ExpressSvg />
        <ReactSvg />
      </div>
    </HeroSection>
  );
}
