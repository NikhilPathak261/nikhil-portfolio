import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nikhil Pathak Portfolio",
    short_name: "Nikhil Portfolio",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#0b0f19",
    icons: [
      {
        src: "/favicon/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
