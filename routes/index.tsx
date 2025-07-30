import TechStack from "../components/TechStack.tsx";
import ProfileCard from "./(_Components)/ProfileCard.tsx";
import AndroidSection from "./(_Components)/MobileSection.tsx";
import FrontendSection from "./(_Components)/FrontendSection.tsx";
import TypeScriptSection from "./(_Components)/TypeScript.tsx";
import BackendSection from "./(_Components)/BackendSection.tsx";
import DesktopSection from "./(_Components)/Desktop.tsx";
import FullstackSection from "./(_Components)/FullstackSection.tsx";
// import Project from "./(_Components)/PortfolioCard.tsx";

export default function Home() {
  return (
    <div>
      <ProfileCard />
      <TechStack />
      <FrontendSection />
      <AndroidSection />
      <TypeScriptSection />
      <BackendSection />
      <DesktopSection />
      <FullstackSection />
    </div>
  );
}
