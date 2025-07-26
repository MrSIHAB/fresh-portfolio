import ProfileCard from "./(_Components)/ProfileCard.tsx";
// import Project from "./(_Components)/PortfolioCard.tsx";

export default function Home() {
  return (
    <div>
      <div class="py-7 md:py-20">
        <ProfileCard />
      </div>

      {
        /*
       ! the portfolio section will be added later.
      <Project /> */
      }
    </div>
  );
}
