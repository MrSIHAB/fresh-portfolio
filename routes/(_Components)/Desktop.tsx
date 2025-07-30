import HeroSection from "../../components/HeroSection.tsx";
import { ElectronSvg, FlutterSvg } from "../../components/svg/Programming.tsx";

export default function DesktopSection() {
  return (
    <HeroSection
      imageUrl="/images/projects/flutter-shop.png"
      heading="Desktop Application Development"
      floatingIcon="/images/tech/wml.png"
      fip="right"
      code="snap install flutter-shop"
    >
      <div className="flex gap-4 mb-4">
        <span className="w-10 h-10 fill-primary" title="Electron">
          {/* Electron SVG */}
          <ElectronSvg />
        </span>
        <span className="w-10 h-10 fill-primary" title="Flutter">
          {/* Flutter SVG */}
          <FlutterSvg />
        </span>
      </div>
      <p class="text-gray-200 mb-3">
        I build modern, cross-platform desktop applications using{" "}
        <mark>Flutter</mark> and <mark>Electron</mark>.
        <br />
        <br />
        With <mark>Electron</mark>, I can use any frontend technology—<mark>
          React
        </mark>,{" "}
        <mark>React Native</mark>, or even plain HTML/CSS/JS—to deliver
        native-feeling apps for Windows, Linux, and macOS.
        <br />
        <br />
        <mark>Flutter</mark>{" "}
        allows me to go deeper: I can access and modify native code using{" "}
        <mark>Platform Channels</mark> and <mark>dart:ffi</mark>{" "}
        for C/C++ integration, enabling high-performance and truly native
        features.
        <br />
        <br />
        Whether you need a beautiful UI, native integrations, or a fast
        cross-platform solution, I can deliver a desktop app tailored to your
        needs.
      </p>
    </HeroSection>
  );
}
