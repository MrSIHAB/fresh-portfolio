import HeroSection from "../../components/HeroSection.tsx";

export default function AndroidSection() {
  const info = {
    header: "Android Development with Flutter",
    code: `\
// Create Flutter App
void main(){
  runApp(
    MaterialApp(title: 'My App');
  );
}
`,
    image: "/images/cryptora.png",
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
        I build Android applications using the{" "}
        <span class="font-semibold text-cyan-300">Flutter</span>{" "}
        framework. My experience includes demo apps like a currency converter,
        weather app, social media templates, and e-commerce demos. For
        production, I've built apps like{" "}
        <span class="font-semibold text-cyan-300">Cryptora VPN</span> and{" "}
        <span class="font-semibold text-cyan-300">The VPN</span>—both are
        WireGuard VPNs, built for real-world use.
      </p>
    </HeroSection>
  );
}
