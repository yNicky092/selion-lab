import React from "react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/navigation";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandGroup}>
          <Link href="/" aria-label="Selion Lab Home" className={styles.brandLink}>
            <img
              src="/brand/favicon-light.png"
              alt=""
              aria-hidden="true"
              className={`brand-light ${styles.footerMark}`}
            />
            <img
              src="/brand/favicon-dark.png"
              alt=""
              aria-hidden="true"
              className={`brand-dark ${styles.footerMark}`}
            />
            <span className={styles.footerWordmark}>SELION LAB</span>
          </Link>
          <span>© 2026 Selion Lab</span>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
          <a href="mailto:contact@selionlab.com" className={styles.link}>
            contact@selionlab.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
