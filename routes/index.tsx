import FrontendSection from "./(_components)/FrontendSection.tsx";
import ProfileCard from "./(_components)/ProfileCard.tsx";
import TechStack from "./(_components)/TechStack.tsx";
import AndroidSection from "./(_components)/MobileSection.tsx";
import DesktopSection from "./(_components)/Desktop.tsx";
import BackendSection from "./(_components)/BackendSection.tsx";
import TypeScriptSection from "./(_components)/TypeScript.tsx";
import FullstackSection from "./(_components)/FullstackSection.tsx";
import DeploymentSection from "./(_components)/Deployment.tsx";
import { FreshCredit } from "../components/FreshCredit.tsx";
import Projects from "./(_islands)/Projects.tsx";

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
