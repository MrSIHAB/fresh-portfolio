import { knownTechList } from "../lib/static-data/knownTechList.ts";

/**
 * ZigZagBrandList displays brand names in a zig-zag (alternating left/right) layout.
 */
export default function TechStack() {
  return (
    <div class="w-full flex flex-col gap-6 items-center p-3 sm:p-8 my-5">
      {
        /* <h2 class="text-2xl font-bold mb-4 text-white">
        Tools & Frameworks
      </h2> */
      }
      <div class="flex flex-wrap align-middle justify-center gap-3 sm:gap-8 w-full">
        {knownTechList.map((brand) => (
          <div class="flex items-center justify-start" key={brand.name}>
            <div class="bg-gradient-to-r from-primary/20 to-accent/10 rounded-xl px-3 sm:px-5 py-1 sm:py-3 
            shadow-md flex items-center gap-1 sm:gap-4 min-w-[55px]">
              {/* Optionally add an icon here if available: <img src={brand.icon} alt={brand.name} class="w-8 h-8" /> */}
              <div class="w-5 drop-shadow-sm fill-cyan-200">
                <brand.icon />
              </div>
              <span class="sm:text-lg font-semibold text-white">
                {brand.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
