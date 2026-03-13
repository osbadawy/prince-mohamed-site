"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();

  const navItems = [
    {
      name: t("princeMohamed"),
      link: `/${locale}/Mohamed`,
    },
    {
      name: t("initiatives"),
      link: `/${locale}/Initiatives`,
    },
    {
      name: t("media"),
      link: `/${locale}/media`,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 pt-5">
      <Navbar>

        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            <NavbarButton
              as={Link}
              href={`/${locale}/Interview`}
              variant="primary"
              className="w-full"
            >
              {t("requestInterview")}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>

          <MobileNavHeader>
            <NavbarLogo />

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >

            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                as={Link}
                href={`/${locale}/Interview`}
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                {t("requestInterview")}
              </NavbarButton>
            </div>

          </MobileNavMenu>

        </MobileNav>

      </Navbar>
    </div>
  );
}

