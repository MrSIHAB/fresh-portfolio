import { ComponentChildren } from "preact";
import { Code, Heading } from "./Utils.tsx";

interface HeroSectionOption {
  imageUrl: string;
  heading: string;
  children: ComponentChildren;
  reverse?: boolean;
  code?: string;
  icon?: string;
  floatingIcon?: string;
}

export default function HeroSection(
  {
    imageUrl,
    heading,
    children,
    code,
    icon,
    reverse,
    floatingIcon,
  }: HeroSectionOption,
) {
  return (
    <section
      class={`w-full flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 
    py-10 md:py-20 px-3 sm:px-8 min-h-[70vh]`}
    >
      {/* left: Description and code preview */}
      <div class="flex-1 max-w-xl">
        <Heading>
          {icon && <img src={icon} class="max-w-10 max-h-10 inline m-2" />}
          {heading}
        </Heading>
        <br />
        {children}
        <br />
        <Code>{code}</Code>
      </div>

      {/* right: Flutter/Android visual */}
      <div class="fex flex-col align-middle items-center flex-1 gap-4 relative">
        {floatingIcon && (
          <img
            src={floatingIcon}
            class="absolute top-[-25px] left-[-25px] w-[50px] -rotate-12"
          />
        )}
        <img
          src={imageUrl}
          alt="Cryptora VPN App Screenshot"
          class="w-full object-cover rounded-xl shadow-lg border border-primary/30 bg-black"
        />
      </div>
    </section>
  );
}
