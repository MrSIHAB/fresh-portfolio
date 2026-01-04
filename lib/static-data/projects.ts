import { FreelancerSvg } from "../../components/svg/Social.tsx";
import { ExternalLink, Github } from "lucide-preact";
import { DenoSvg, vsCodeSvg } from "../../components/svg/Programming.tsx";
import { PageProps } from "$fresh/server.ts";

/** Portfolio Project's Schema Definitions */
export type Component = PageProps["Component"];
export type ProjectCategory =
  | "All"
  | "Web"
  | "Dev Tools"
  | "App"
  | "Cross-Platform"
  | "Desktop"
  | "Mobile"
  | "Plugin"
  | "Backend";

export interface Project {
  title: string;
  description: string;
  image?: string;
  type: ProjectCategory[];
  link: string;
  action?: Component;
}

/** List of Project category for filtering */
export const filters: ProjectCategory[] = [
  "All",
  "App",
  "Web",
  "Mobile",
  "Desktop",
  "Cross-Platform",
  "Backend",
  "Plugin",
  "Dev Tools",
];

/** All the projects For my portfolio. 6 should be in homepage and All should be displayed in project page */
export const projects: Project[] = [
  {
    title: "Cryptora VPN",
    description: "Flutter-based VPN app using WireGuard with split tunneling.",
    image: "cryptora.png",
    type: ["App", "Mobile"],
    link:
      "https://www.freelancer.com/portfolio-items/10530266-cryptora-vpn-wireguard-protocol",
    action: FreelancerSvg,
  },
  {
    title: "Vist",
    description:
      "(AKA Material-Homepage) A modern, fresh and focus friendly browser newtab Extension.",
    image: "vist.png",
    type: ["Plugin", "Web"],
    link: "https://bit.ly/material-homepage",
    action: ExternalLink as Component,
  },
  {
    title: "Portfolio (HTML, CSS, JS only)",
    description: "A VS-code for fresh developer experience",
    image: "portfolio.old.png",
    type: ["Web"],
    link: "https://mrsihab.github.io/portfolio",
    action: ExternalLink as Component,
  },
  {
    title: "Mathab Theme",
    description: "A VS-code for fresh developer experience",
    image: "mathab.png",
    type: ["Dev Tools", "Plugin"],
    link:
      "https://marketplace.visualstudio.com/items?itemName=EIGFA.mathab-theme",
    action: vsCodeSvg,
  },
  {
    title: "EasyKV",
    description: "ODM-like wrapper around Deno KV with Mongoose-style API.",
    type: ["Dev Tools"],
    link: "https://jsr.io/@easykv/easykv",
    action: DenoSvg as Component,
  },
  {
    title: "Favicon Fetcher",
    description:
      "A developer api to get favicon of any website hosted in deno deploy.",
    image: "favicon-fetcher.png",
    type: ["Dev Tools", "Backend"],
    link: "https://github.com/mrsihab/favicon-fetcher",
    action: Github as Component,
  },
];
