import { ComponentChildren } from "preact";

export const Heading = (profs: { children?: ComponentChildren }) => (
  <h3 class="text-3xl font-bold text-primary mb-2">{profs.children}</h3>
);

export const Code = (profs: { children?: ComponentChildren }) => (
  <div class="bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg p-4 shadow-inner">
    <pre class="text-xs md:text-sm text-white overflow-x-auto">{profs.children}</pre>
  </div>
);
