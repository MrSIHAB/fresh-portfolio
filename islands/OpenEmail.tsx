import { ActionButton } from "../components/ActionButton.tsx";
import { LucideMails } from "lucide-preact";

export function OpenEmailButton() {
  const emailUrl =
    `mailto:MrSIHAB@hotmail.com?subject=Project Inquiry&body=Hi SIHAB, I'm interested in working with you on...`;

  return (
    <ActionButton
      title="email"
      style={{ margin: "1.75rem 0" }}
      onClick={() => globalThis.open(emailUrl)}
    >
      <div class="flex align-middle justify-between">
        <div class="w-[28px]">
          {LucideMails({})}
        </div>
        <span class="font-bold ">Get in Touch</span>
        <div class="w-[28px]">{/* Dummy Div for center align */}</div>
      </div>
    </ActionButton>
  );
}
