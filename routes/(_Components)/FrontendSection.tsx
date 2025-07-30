import HeroSection from "../../components/HeroSection.tsx";

export default function FrontendSection() {
  const info = {
    header: "Frontend Development | Web UI",
    code: `npx create-react-app e-commerce-app`,
    image: "/images/projects/portfolio.old.png",
  };

  return (
    <HeroSection
      heading={info.header}
      imageUrl={info.image}
      code={info.code}
      icon="/images/tech/htmlcssjs.png"
      floatingIcon="/images/tech/react.png"
    >
      <p class="text-gray-200">
        I craft beautiful and performant web user interfaces using{" "}
        <span class="font-semibold text-primary">HTML</span>,{" "}
        <span class="font-semibold text-primary">CSS</span>, and{" "}
        <span class="font-semibold text-primary">JavaScript</span>. My toolkit
        includes modern libraries like{" "}
        <span class="font-semibold text-primary">React</span>{" "}
        and frameworks like{" "}
        <span class="font-semibold text-primary">Fresh</span>{" "}
        built on Preact, embracing Island Architecture for speed and
        performance. I style my apps using{"  "}
        <span class="font-semibold text-primary">Tailwind CSS</span>, enabling
        utility-first, responsive designs that look great on any screen. Every
        element I build focuses on fast load time, clean interaction, and
        developer-friendly structure.
      </p>
    </HeroSection>
  );
}
