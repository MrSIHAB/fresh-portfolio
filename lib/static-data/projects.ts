/** Portfolio Project's Schema Definitions */
export type ProjectCategory =
  | "All"
  | "Web"
  | "Dev Tools"
  | "App"
  | "Cross-Platform"
  | "Desktop"
  | "Mobile"
  | "Plugin";

interface Project {
  title: string;
  description: string;
  image: string;
  type: ProjectCategory[];
  link: string;
}

/** List of Project category for filtering */
export const filters: ProjectCategory[] = [
  "All",
  "Web",
  "Dev Tools",
  "App",
  "Cross-Platform",
  "Desktop",
  "Mobile",
  "Plugin",
];

/** All the projects For my portfolio. 6 should be in homepage and All should be displayed in project page */
export const projects: Project[] = [
  {
    title: "EasyKV",
    description: "ODM-like wrapper around Deno KV with Mongoose-style API.",
    image: "/images/easykv.png",
    type: ["Dev Tools"],
    link: "https://jsr.io/@easykv/easykv",
  },
  {
    title: "Cryptora VPN",
    description: "Flutter-based VPN app using WireGuard with split tunneling.",
    image: "/images/cryptora.png",
    type: ["App", "Mobile"],
    link:
      "https://www.freelancer.com/portfolio-items/10530266-cryptora-vpn-wireguard-protocol",
  },
  {
    title: "Material Homepage",
    description: "A modern gallery app built for Linux using Flutter.",
    image:
      "https://github.com/MrSIHAB/material-homepage/raw/main/screenshots/5th.png",
    type: ["Plugin", "Web"],
    link: "https://github.com/MrS1HAB/material-homepage",
  },
];
