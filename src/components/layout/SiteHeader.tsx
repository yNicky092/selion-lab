"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, isNavItemActive } from "@/lib/navigation";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash || "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const [, targetHash] = href.split("#");
    setHash(targetHash ? `#${targetHash}` : "");
  };

  return (
    <header ref={headerRef} className={styles.shell}>
      <div className="container">
        <div className={styles.capsule}>
          <Link
            href="/"
            className={styles.brand}
            onClick={() => handleNavClick("/")}
            aria-label="Selion Lab Home"
          >
            <img
              src="/brand/favicon-light.png"
              alt=""
              aria-hidden="true"
              className={`brand-light ${styles.brandMark}`}
            />
            <img
              src="/brand/favicon-dark.png"
              alt=""
              aria-hidden="true"
              className={`brand-dark ${styles.brandMark}`}
            />
            <span className={styles.brandWordmark}>SELION LAB</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const active = isNavItemActive(pathname, hash, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={styles.mobileBtn}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav-drawer"
            className={`optical-glass ${styles.mobileDrawer}`}
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => {
              const active = isNavItemActive(pathname, hash, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`${styles.navLink} ${styles.mobileNavLink} ${active ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
