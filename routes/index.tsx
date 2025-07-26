import ProfileCard from "./(_Components)/ProfileCard.tsx";
import Project from "./(_Components)/PortfolioCard.tsx";

export default function Home() {
  return (
    <div>
      <div class="md:py-20">
        <ProfileCard />
      </div>
      <Project />
    </div>
  );
}
