import { FreshSvg } from "../components/svg/Programming.tsx";
import { Code } from "../components/Utils.tsx";

export const FreshCredit = () => {
  return (
    <div class="p-7 flex justify-center">
      <a href="https://fresh.deno.dev">
        <Code>
          <div class="flex gap-3 align-middle px-4">
            <span className="w-5 inline-block fill-yellow-300">
              <FreshSvg />
            </span>
            <span class="font-semibold font-sans">Made with Fresh</span>
          </div>
        </Code>
      </a>
    </div>
  );
};
