"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Silicon Emergence & Vision" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lighting, setLighting] = useState<"daylight" | "evening">("daylight");

  const toggleLighting = () => {
    const next = lighting === "daylight" ? "evening" : "daylight";
    setLighting(next);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-lighting", next);
    }
  };

  return (
    <header className={styles.shell}>
      <div className="container">
        <div className={styles.capsule}>
          <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)} aria-label="Selion Lab Home">
            <img
              src="/brand/horizontal-lockup-light.png"
              alt="Selion Lab"
              className={`brand-light ${styles.brandLockup}`}
            />
            <img
              src="/brand/horizontal-lockup-dark.png"
              alt="Selion Lab"
              className={`brand-dark ${styles.brandLockup}`}
            />
          </Link>

          <nav className={styles.nav} aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={toggleLighting}
              className={styles.lightToggle}
              aria-label="Toggle Frosted Light or VisionOS Evening Glass"
            >
              {lighting === "daylight" ? "Frosted Light" : "Evening Glass"}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={styles.mobileBtn}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`optical-glass ${styles.mobileDrawer}`}>
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
