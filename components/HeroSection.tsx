import { ComponentChildren } from "preact";
import { Code, Heading } from "./Utils.tsx";

interface HeroSectionOption {
  imageUrl: string;
  bgImage?: string;
  heading: string;
  children: ComponentChildren;
  reverse?: boolean;
  code?: string;
  icon?: string;
  floatingIcon?: string;
  fip?: "left" | "right";
}

export default function HeroSection(
  {
    imageUrl,
    bgImage,
    heading,
    children,
    code,
    icon,
    reverse,
    floatingIcon,
    fip,
  }: HeroSectionOption,
) {
  const position = fip == "right" ? "right-[-15px]" : "left-[-15px]";

  return (
    <section
      class={`w-full flex flex-col items-center gap-8 py-10 md:py-20 px-3 sm:px-8 min-h-[80vh] ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* //* left: Description and code preview */}
      <div class="flex-1 max-w-xl">
        <Heading>
          {icon && <img src={icon} class="max-h-14 m-2" />}
          {heading}
        </Heading>
        <br />
        {children}
        <br />
        <Code>{code}</Code>
      </div>

      {/* //* right: Flutter/Android visual */}
      <div class="fex flex-col align-middle items-center flex-1 gap-4 relative">
        {floatingIcon && (
          // Floating Icon
          <img
            src={floatingIcon}
            class={`absolute top-[-15px] ${position} w-[55px] -rotate-12 z-20`}
          />
        )}
        {/* bg image */}
        <img
          src={imageUrl}
          alt="Banner"
          class="w-full object-cover rounded-xl shadow-lg border border-primary/15 relative z-10"
        />
        {/* absolute image  */}
        <img
          src={bgImage ?? imageUrl}
          alt="Banner"
          class="w-full object-cover rounded-xl shadow-lg border border-primary/30 absolute top-0 left-0 rotate-6"
        />
      </div>
    </section>
  );
}
