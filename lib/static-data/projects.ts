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

export interface Project {
  title: string;
  description: string;
  image: string;
  type: ProjectCategory[];
  link: string;
}

/** List of Project category for filtering */
export const filters: ProjectCategory[] = [
  "All",
  "App",
  "Web",
  "Mobile",
  "Desktop",
  "Cross-Platform",
  "Plugin",
  "Dev Tools",
];

/** All the projects For my portfolio. 6 should be in homepage and All should be displayed in project page */
export const projects: Project[] = [
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
    description: "A modern new tab for all Browsers.",
    image:
      "https://github.com/MrSIHAB/material-homepage/raw/main/screenshots/5th.png",
    type: ["Plugin", "Web"],
    link: "https://github.com/MrS1HAB/material-homepage",
  },
  {
    title: "Portfolio (HTML, CSS, JS only)",
    description: "A VS-code for fresh developer experience",
    image: "/images/projects/portfolio.old.png",
    type: ["Web"],
    link: "https://mrsihab.github.io/portfolio",
  },
  {
    title: "Mathab Theme",
    description: "A VS-code for fresh developer experience",
    image: "/images/mathab.png",
    type: ["Dev Tools", "Plugin"],
    link: "https://github.com/vscode-mathab",
  },
  {
    title: "EasyKV",
    description: "ODM-like wrapper around Deno KV with Mongoose-style API.",
    image: "/images/easykv.png",
    type: ["Dev Tools"],
    link: "https://jsr.io/@easykv/easykv",
  },
  {
    title: "Favicon Fetcher",
    description:
      "A developer api to get favicon of any website hosted in deno deploy.",
    image: "/images/favicon.png",
    type: ["Dev Tools"],
    link: "https://github.com/mrsihab/favicon-fetcher",
  },
];
