"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/layout/BrandLogo";
import { siteNavLinks } from "@/constants/site";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActiveHref = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopNavClass = (active: boolean) =>
    [
      "relative flex items-center gap-1.5 text-[14px] font-semibold transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:rounded-full after:bg-[#1B63FF] after:transition-all after:duration-300",
      active
        ? "text-[#1B24F2] after:w-full"
        : "text-black after:w-0 hover:text-[#1B24F2] hover:after:w-full",
    ].join(" ");

  const mobileNavClass = (active: boolean) =>
    [
      "flex items-center justify-between rounded-2xl px-3 py-2 font-semibold transition",
      active
        ? "bg-[#EEF5FF] text-[#1B24F2]"
        : "text-black hover:bg-[#F4F7FF] hover:text-[#1B24F2]",
    ].join(" ");

  const handlePageLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu?: () => void,
  ) => {
    closeMenu?.();

    if (href.includes("#") || href.startsWith("http")) return;

    if (href === pathname) {
      event.preventDefault();
      window.history.replaceState(null, "", href);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 top-0 z-50 w-full px-0 pt-0 transition-all duration-500 ${
        scrolled ? "xl:px-0 xl:pt-0" : "xl:px-4 xl:pt-7"
      }`}
    >
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className={`mx-auto flex h-[82px] max-w-full items-center justify-between rounded-none border border-white bg-white/95 px-6 shadow-[0_20px_60px_rgba(15,47,74,0.08)] backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "xl:h-[82px] xl:max-w-full xl:rounded-none"
            : "xl:h-[78px] xl:max-w-[1510px] xl:rounded-[22px]"
        }`}
      >
        <BrandLogo placement="navbar" priority />

        <div className="hidden flex-1 items-center justify-center xl:flex">
          <div className="flex items-center gap-7 whitespace-nowrap">
            {siteNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(event) => handlePageLinkClick(event, link.href)}
                className={desktopNavClass(isActiveHref(link.href))}
              >
                {link.label}
                {link.icon === "right" && <ChevronRight size={14} />}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/jobs"
            onClick={(event) => handlePageLinkClick(event, "/jobs")}
            className={[
              "inline-flex items-center justify-center gap-3 rounded-xl border bg-white px-8 py-4 font-bold shadow-sm transition hover:-translate-y-1",
              isActiveHref("/jobs")
                ? "border-[#1B63FF] text-[#1B24F2]"
                : "border-[#D8C7A8] text-[#102A43]",
            ].join(" ")}
          >
            Apply For Jobs
          </Link>
        </div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-black xl:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-4 mt-3 max-h-[calc(100vh-105px)] overflow-y-auto rounded-3xl bg-white p-6 shadow-xl xl:hidden"
          >
            <div className="flex flex-col gap-5">
              {siteNavLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={(event) =>
                      handlePageLinkClick(event, link.href, () =>
                        setMobileOpen(false),
                      )
                    }
                    className={mobileNavClass(isActiveHref(link.href))}
                  >
                    {link.label}
                    {link.icon && <ChevronRight size={16} />}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/jobs"
                onClick={(event) =>
                  handlePageLinkClick(event, "/jobs", () =>
                    setMobileOpen(false),
                  )
                }
                className={[
                  "rounded-full border-2 px-5 py-3 text-center text-sm font-bold uppercase transition",
                  isActiveHref("/jobs")
                    ? "border-[#1B24F2] bg-[#EEF5FF] text-[#1B24F2]"
                    : "border-[#1B24F2] text-[#1B24F2]",
                ].join(" ")}
              >
                Apply For Jobs
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}