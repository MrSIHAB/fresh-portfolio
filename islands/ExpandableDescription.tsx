import { Signal } from "@preact/signals";
import { description } from "../lib/static-data/information.tsx";

export default function ExpandableDescription(
  { expanded }: { expanded: Signal<boolean> },
) {
  return (
    <div class="relative text-sm leading-relaxed text-gray-200">
      {/* hide scrollbar for this div  */}
      <div
        class={`transition-all duration-300 scroll-smooth overflow-y-scroll scrollbar-hide ${
          expanded.value ? "max-h-[550px]" : "max-h-[255px]"
        }`}
      >
        <p>{description}</p>
      </div>

      <div class="flex justify-end mt-2">
        <button
          type="button"
          onClick={() => expanded.value = !expanded.value}
          class="text-primary font-semibold text-sm hover:underline focus:outline-none"
        >
          {expanded.value ? "Show less ▲" : "Show more ▼"}
        </button>
      </div>
    </div>
  );
}
