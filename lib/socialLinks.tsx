import { JSX } from "preact";

import {
  FacebookSvg,
  FreelancerSvg,
  GithubSvg,
  XSvg,
  YouTubeSvg,
} from "../components/svg/Social.tsx";

interface SocialLinks {
  name: string;
  icon: JSX.Element;
  url: string;
}

export const socialLinks: SocialLinks[] = [
  {
    name: "Facebook",
    icon: <FacebookSvg />,
    url: "https://www.facebook.com/MrSIHAB.h",
  },
  {
    name: "YouTube",
    icon: <YouTubeSvg />,
    url: "https://www.youtube.com/@ShoaibHossain",
  },
  {
    name: "Github",
    icon: <GithubSvg />,
    url: "https://github.com/MrSIHAB",
  },

  {
    name: "Twitter",
    icon: <XSvg />,
    url: "https://x.com/ShoaibSihab",
  },
  {
    name: "Freelancer",
    icon: <FreelancerSvg />,
    url: "https://freelancer.com/u/sbshoaib",
  },
];
