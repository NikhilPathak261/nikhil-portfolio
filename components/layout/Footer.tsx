import Link from "next/link";

import { navItems } from "@/data/navigation";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-1 text-sm text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                {item.label}
              </Link>
            ))}
            {socialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-1 text-sm text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                {item.platform}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 py-5 text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
