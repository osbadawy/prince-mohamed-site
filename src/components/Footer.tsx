import { cn } from "@/lib/utils";
import React from "react";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconHome,
  IconNews,
  IconBulb,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-white dark:bg-black">
      
      {/* Grid pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      {/* Fade mask */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Footer content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <a href="/" className="flex items-center gap-2 hover:text-black dark:hover:text-white">
              <IconHome size={18} />
              Home
            </a>

            <a href="/media" className="flex items-center gap-2 hover:text-black dark:hover:text-white">
              <IconNews size={18} />
              Media
            </a>

            <a href="/initiatives" className="flex items-center gap-2 hover:text-black dark:hover:text-white">
              <IconBulb size={18} />
              Initiatives
            </a>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/mohammed-alsaud-210bb225a/"
              target="_blank"
              className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              <IconBrandLinkedin size={22} />
            </a>

            <a
              href="https://www.instagram.com/m7md_abdulrahman8/"
              target="_blank"
              className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              <IconBrandInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12  pt-6 text-sm text-neutral-500 dark:text-neutral-400">
          © 2026 All rights reserved
        </div>

      </div>
    </footer>
  );
}
