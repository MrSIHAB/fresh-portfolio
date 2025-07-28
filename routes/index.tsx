import TechStack from "../components/TechStack.tsx";
import ProfileCard from "./(_Components)/ProfileCard.tsx";
import AndroidSection from "./(_Components)/Android.tsx";
// import Project from "./(_Components)/PortfolioCard.tsx";

export default function Home() {
  return (
    <div>
      <ProfileCard />
      <TechStack />
      <AndroidSection />
    </div>
  );
}
