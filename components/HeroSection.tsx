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
      class={`w-full flex flex-col items-center gap-8 py-10 md:py-20 px-3 sm:px-8 min-h-[80vh] ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* //* left: Description and code preview */}
      <div class="flex-1 max-w-xl">
        <Heading>
          {icon && <img src={icon} class="max-w-14 max-h-14 m-2" />}
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
            class="absolute top-[-15px] left-[-15px] w-[50px] -rotate-12 z-10"
          />
        )}
        {/* main image */}
        <img
          src={imageUrl}
          alt="Cryptora VPN App Screenshot"
          class="w-full object-cover rounded-xl shadow-lg border border-primary/30 rotate-6"
        />
        {/* absolute image  */}
        <img
          src={imageUrl}
          alt="Cryptora VPN App Screenshot"
          class="w-full object-cover rounded-xl shadow-lg border border-primary/15 absolute top-0 left-0"
        />
      </div>
    </section>
  );
}
