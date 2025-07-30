import TechStack from "../components/TechStack.tsx";
import ProfileCard from "./(_Components)/ProfileCard.tsx";
import AndroidSection from "./(_Components)/MobileSection.tsx";
import FrontendSection from "./(_Components)/FrontendSection.tsx";
import TypeScriptSection from "./(_Components)/TypeScript.tsx";
import BackendSection from "./(_Components)/BackendSection.tsx";
import DesktopSection from "./(_Components)/Desktop.tsx";
import FullstackSection from "./(_Components)/FullstackSection.tsx";
import DeploymentSection from "./(_Components)/Deployment.tsx";
import Project from "./(_Components)/PortfolioCard.tsx";
import { FreshSvg } from "../components/svg/Programming.tsx";
import { Code } from "../components/Utils.tsx";

export default function Home() {
  return (
    <div>
      <ProfileCard />
      <TechStack />
      <FrontendSection />
      <AndroidSection />
      <DesktopSection />
      <BackendSection />
      <TypeScriptSection />
      <FullstackSection />
      <DeploymentSection />
      <Project />

      <div class="p-7 flex justify-center">
        <a href="https://fresh.deno.dev">
          <Code>
            <div class="flex gap-3 align-middle px-4">
              <span className="w-5 inline-block fill-primary">
                <FreshSvg />
              </span>
              <span class="font-semibold">Made with Fresh</span>
            </div>
          </Code>
        </a>
      </div>
    </div>
  );
}
