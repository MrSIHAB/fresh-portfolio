import { SocialBar } from "../../components/SocialBar.tsx";

export default function ProfileCard() {
  return (
    <div class="card sm:flex">
      {/* Profile Picture */}
      <div>
        <div class="w-56">
          <img
            src="/images/profile.jpg"
            alt="Profile Image"
            class="rounded-full ring-4 ring-primary"
          />
        </div>
        <br />
        <SocialBar />
      </div>

      {/* A divider for profile and details  */}
      <div class="flex align-middle justify-center">
        <div class="w-1 bg-primary rounded-full h-2/3 mx-10 mt-7" />
      </div>

      {/* short detail  */}

      <div>
        <div class="flex align-middle justify-center mb-3">
          <div>
            <h1 class="text-5xl font-bold text-primary">Shoaib Hossain</h1>
            <h3 class="text-right text-2xl font-bold italic text-primary">
              MrSIHAB
            </h3>
          </div>
        </div>
        <p>
          A self-taught developer who loves building useful tools, systems, and
          cross-platform apps. I work with Deno and TypeScript on the backend,
          and Flutter to create apps for Android and Linux. I enjoy solving real
          problems—like making a custom VPN app or a simple database tool like
          EasyKV. My goal is to keep things fast, clean, and easy to use—for
          both developers and users.
        </p>
      </div>
      <div>
      </div>
    </div>
  );
}
