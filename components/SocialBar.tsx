import { socialLinks } from "../lib/static-data/socialLinks.tsx";

export const SocialBar = () => {
  return (
    <div>
      <div class="flex justify-center gap-3">
        {socialLinks.map((site) => (
          <div
            class="fill-cyan-100 w-7 hover:fill-primary duration-500"
            title={site.name}
          >
            <a href={site.url} target="_blank">
              {site.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
