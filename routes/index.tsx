import TechStack from "../components/TechStack.tsx";
import ProfileCard from "./(_Components)/ProfileCard.tsx";
import AndroidSection from "./(_Components)/Android.tsx";
import FrontendSection from "./(_Components)/FrontendSection.tsx";
// import Project from "./(_Components)/PortfolioCard.tsx";

export default function Home() {
  return (
    <div>
      <ProfileCard />
      <TechStack />
      <FrontendSection />
      <AndroidSection />
    </div>
  );
}
