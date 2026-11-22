import React from "react";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandGroup}>
          <Link href="/" aria-label="Selion Lab Home" className={styles.brandLink}>
            <img
              src="/brand/horizontal-lockup-light.png"
              alt="Selion Lab"
              className={`brand-light ${styles.footerLockup}`}
            />
            <img
              src="/brand/horizontal-lockup-dark.png"
              alt="Selion Lab"
              className={`brand-dark ${styles.footerLockup}`}
            />
          </Link>
          <span>© 2026 Selion Lab</span>
        </div>
        <div className={styles.links}>
          <Link href="/work" className={styles.link}>
            Silicon Emergence &amp; Vision
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <a href="mailto:contact@selionlab.com" className={styles.link}>
            contact@selionlab.com
          </a>
        </div>
      </div>
    </footer>
  );
}
