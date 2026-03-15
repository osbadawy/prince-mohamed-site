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

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export function Nav() {
  const t = useTranslations("Home.Nav");
  const locale = useLocale();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

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

  const languages = [
    {
      code: "en",
      label: "English",
      flag: "🇬🇧",
    },
    {
      code: "ar",
      label: "العربية",
      flag: "🇸🇦",
    },
  ];

  const currentLanguage = useMemo(() => {
    return languages.find((lang) => lang.code === locale) || languages[0];
  }, [locale]);

  const getLocalizedPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;

    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${targetLocale}`;
    }

    if (segments[0] === "en" || segments[0] === "ar") {
      segments[0] = targetLocale;
      return `/${segments.join("/")}`;
    }

    return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 pt-5">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-2 py-1 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50"
              >
                <span className="text-base">{currentLanguage.flag}</span>
                <span className="text-xs">▼</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={getLocalizedPath(lang.code)}
                      onClick={() => setIsLangOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-800 transition hover:bg-neutral-100"
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

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

            {/* Mobile Language Selector */}
            <div className="w-full">
              <button
                type="button"
                onClick={() => setIsMobileLangOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{currentLanguage.flag}</span>
                  <span>{currentLanguage.label}</span>
                </div>
                <span className="text-xs">▼</span>
              </button>

              {isMobileLangOpen && (
                <div className="mt-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={getLocalizedPath(lang.code)}
                      onClick={() => {
                        setIsMobileLangOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-800 transition hover:bg-neutral-100"
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

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