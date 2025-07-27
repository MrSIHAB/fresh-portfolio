import { Signal } from "@preact/signals";

export default function ExpandableDescription(
  { expanded }: { expanded: Signal<boolean> },
) {
  return (
    <div class="relative text-sm leading-relaxed text-gray-200">
      <div
        class={`overflow-hidden ${expanded.value ? "max-h-[500px]" : "max-h-24"}
            transition-all duration-300`}
      >
        <p class="">
          A self-taught developer who loves building useful tools, systems, and
          cross-platform apps. I work with Deno and TypeScript on the backend,
          and Flutter to create apps for Android and Linux. I enjoy solving real
          problems—like making a custom VPN app or a simple database tool like
          EasyKV. My goal is to keep things fast, clean, and easy to use—for
          both developers and users.
        </p>
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
