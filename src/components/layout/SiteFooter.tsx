import React from "react";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© 2026 Selion Lab</span>
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
