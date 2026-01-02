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

        {/* //* short detail  */}

        <div>
          <div class="flex align-middle justify-center mb-3">
            <div>
              <h1 class="text-4xl font-bold text-primary">
                Shoaib Hossain
              </h1>
              <h3 class="text-right text-2xl font-bold italic text-primary">
                MrSIHAB
              </h3>
            </div>
          </div>
          <ExpandableDescription expanded={expanded} />
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}
