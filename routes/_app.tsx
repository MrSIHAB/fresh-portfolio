import { type PageProps } from "$fresh/server.ts";
import ParticlesBackground from "../islands/ParticlesBackground.tsx";

export default function App({ Component }: PageProps) {
  const themes = [
    "bg-gradient-to-br from-cyan-500 to-blue-600",
    "bg-[#090222]",
  ];

  const currentTheme = themes[Math.floor(Math.random() * themes.length)];

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Shortcut icons */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/images/icon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />

        {/* google font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />

        {/* <!-- og meta --- --> */}
        <meta property="og:title" content="Shoaib Hossain" />
        <meta property="og:site_name" content="MrSIHAB" />
        <meta property="og:type" content="Portfolio" />
        <meta
          property="og:description"
          content="A developer portfolio showcasing MrSIHAB's projects and Skills."
        />
        <meta
          property="og:image"
          content="https://sihab.deno.dev/screenshots/ss.png"
        />
        <meta property="og:url" content="sihab.deno.dev" />
        {/* <!-- twitter Card ------ --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://sihab.deno.dev/screenshots/ss.png"
        />
        <meta name="twitter:title" content="MrSIHAB" />
        <meta name="twitter:site" content="@ShoaibSihab" />
        <meta name="twitter:url" content="https://sihab.deno.dev" />
        <meta name="twitter:domain" content="https://sihab.deno.dev" />
        <meta
          name="twitter:description"
          content="A developer portfolio showcasing MrSIHAB's projects and Skills."
        />

        {/* Other titles */}
        <title>MrSIHAB | Shoaib Hossain</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <ParticlesBackground />
        <div
          className={`${currentTheme} bg-no-repeat min-h-screen font-arimo relative z-10`}
        >
          <Component />
        </div>
      </body>
    </html>
  );
}
