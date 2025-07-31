import { ComponentChildren } from "preact";

export const Heading = (profs: { children?: ComponentChildren }) => (
  <h3 class="text-3xl font-bold text-primary mb-2">{profs.children}</h3>
);

export const Code = (profs: { children?: ComponentChildren }) => (
  <div class="code scrollbar-hide">
    <pre class="text-xs md:text-sm text-white overflow-x-auto p-4">{profs.children}</pre>
  </div>
);
