import HeroSection from "../../components/HeroSection.tsx";

export default function AndroidSection() {
  const info = {
    header: `Mobile Development | Android & iOS`,
    code: `MaterialApp(\n  title: 'My App',\n  home: HomePage(),\n);`,
    image: "/images/projects/cryptora.png",
  };

  return (
    <HeroSection
      heading={info.header}
      imageUrl={info.image}
      code={info.code}
      icon="/images/tech/flutter.png"
      reverse
    >
      <p class="text-gray-200">
        I build mobile applications using the{" "}
        <span class="font-semibold text-cyan-300">Flutter</span>{" "}
        framework. It supports Android & iOS application from one single
        codebase. My experience includes demo apps like a currency converter,
        weather app, social media templates, and e-commerce demos. For
        production, I've built apps like{" "}
        <span class="font-semibold text-cyan-300">Cryptora VPN</span> and{" "}
        <span class="font-semibold text-cyan-300">The VPN</span>—both are
        WireGuard VPNs, built for real-world use.
      </p>
    </HeroSection>
  );
}
