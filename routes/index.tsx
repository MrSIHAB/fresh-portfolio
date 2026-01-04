import TechStack from "./(_Components)/TechStack.tsx";
import ProfileCard from "./(_Components)/ProfileCard.tsx";
import AndroidSection from "./(_Components)/MobileSection.tsx";
import FrontendSection from "./(_Components)/FrontendSection.tsx";
import TypeScriptSection from "./(_Components)/TypeScript.tsx";
import BackendSection from "./(_Components)/BackendSection.tsx";
import DesktopSection from "./(_Components)/Desktop.tsx";
import FullstackSection from "./(_Components)/FullstackSection.tsx";
import DeploymentSection from "./(_Components)/Deployment.tsx";
import { FreshCredit } from "../components/FreshCredit.tsx";
import Projects from ".//(_Islands)/Projects.tsx";

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
      <Projects />

      {/* Simple Made with Fresh credit */}
      <FreshCredit />
    </div>
  );
}
