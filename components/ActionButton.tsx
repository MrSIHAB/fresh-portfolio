import { JSX } from "preact/src/index.d.ts";

export function ActionButton(
  profs: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...profs}
      type="button"
      class="bg-primary px-4 py-2 rounded-full outline-none border-none w-full text-black
      hover:cursor-pointer hover:bg-accent"
    >
      {profs.children}
    </button>
  );
}
export function OutlinedButton(
  profs: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...profs}
      type="button"
      class={`text-white px-4 py-2 rounded-full border-solid border-primary
      border-2 w-full 
      hover:cursor-pointer hover:text-slate-100 hover:border-accent ${profs.class}`}
    >
      {profs.children}
    </button>
  );
}
