import HeroSection from "../../components/HeroSection.tsx";
import { LinuxSvg } from "../../components/svg/Programming.tsx";

export default function DeploymentSection() {
  return (
    <HeroSection
      imageUrl="/images/hosting-banner.png"
      heading="Deployment & Hosting"
      icon="/images/tech/docker.png"
      floatingIcon="/images/tech/ubuntu.png"
      fip="left"
      code="docker compose up -d ..."
    >
      <p class="text-gray-200 mb-3">
        I handle seamless deployment and hosting for your applications, ensuring
        they are always online, secure, and scalable.
        <br />
        <br />
        Whether it’s deploying static sites, fullstack apps, or backend APIs, I
        use modern cloud platforms and CI/CD pipelines for smooth, zero-downtime
        releases.
        <br />
        <br />
        From <mark>Vercel</mark>, <mark>Netlify</mark>, and{" "}
        <mark>Cloudflare</mark> for frontend and serverless, to{" "}
        <mark>Docker</mark> and <mark>custom Ubuntu</mark>{" "}
        server for advanced needs—I make sure your project is production-ready
        and easy to maintain.
      </p>
      <div className="flex h-10 fill-primary justify-end">
        <LinuxSvg />
      </div>
    </HeroSection>
  );
}
