import { useSignal } from "@preact/signals";
import { SocialBar } from "../../components/SocialBar.tsx";
import ExpandableDescription from "../../islands/ExpandableDescription.tsx";
import { OpenEmailButton } from "../../islands/OpenEmail.tsx";

export default function ProfileCard() {
  const expanded = useSignal(false);

  return (
    <section class="py-7 md:py-20 min-h-[70vh] content-center">
      <div class="card w-11/12 sm:w-10/12 md:flex lg:w-9/12">
        {/* //* Profile Picture */}
        <div>
          <div class="w-56 mx-auto">
            <img
              src="/images/profile.jpg"
              alt="Profile Image"
              class="rounded-full ring-4 ring-primary"
            />
          </div>
          <br />
          <SocialBar />

          <OpenEmailButton />
        </div>

        {/* //* A divider for profile and details  */}
        <div class="hidden md:flex align-middle justify-center">
          <div class="w-1 bg-primary rounded-full h-2/3 mx-10 mt-7" />
        </div>

        {/* Name with gradient background */}
        <div>
          <div class="text-center font-extrabold font-sans text-nowrap mb-3">
            <span class="text-primary  text-5xl">
              Shoaib Hossain
            </span>{" "}
            <span class="text-2xl bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
              MrSIHAB
            </span>
          </div>

          {/*description*/}
          <ExpandableDescription expanded={expanded} />
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}
