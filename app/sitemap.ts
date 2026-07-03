import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

const routes = ["", "/projects", "/projects/vaksetu"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}
