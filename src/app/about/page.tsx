import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Selion Lab",
  description:
    "About Selion Lab, an independent studio building hardware games and simulated computer architectures with real silicon physics.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "Selion Lab",
    description:
      "About Selion Lab, an independent studio building interactive worlds on real silicon physics.",
    url: "https://selionlab.com/about/",
  },
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.intro}>
            <p className="eyebrow">About Selion Lab</p>
            <h1 className={styles.title}>Small studio. Deep curiosity.</h1>
            <p className={styles.lead}>
              We started Selion Lab to create hardware games that honor how silicon actually behaves, designed to be welcoming and immediately playable for anyone curious about computing.
            </p>
          </div>

          <div className={styles.crestWrap}>
            <img
              src="/brand/logo-light.png"
              alt="Selion Lab Studio Emblem"
              className={`brand-light ${styles.crest}`}
            />
            <img
              src="/brand/logo-dark.png"
              alt="Selion Lab Studio Emblem"
              className={`brand-dark ${styles.crest}`}
            />
          </div>
        </div>

        <div className={styles.essaySplit}>
          <p className={styles.pullQuote}>
            We believe the best way to understand a computer is to build one with your own hands.
          </p>
          <div className={styles.essayBody}>
            <p>
              Selion Lab is an independent studio working at the crossroads of systems programming, visual craft, and interactive play. Our focus is on <strong>Silicon Emergence</strong>, our simulated architectures (<strong>SERMM-16</strong>, <strong>SEVM &amp; FLUX</strong>, and <strong>EmergenceOS-16</strong>), and <strong>Virtual Fab</strong>.
            </p>
            <p>
              Every architecture we build is a live software simulation crafted for interactive play and engineered with real computer-science rules from the ground up.
            </p>
          </div>
        </div>

        <div className={styles.closingBand}>
          <div>
            <h2 className={styles.closingTitle}>
              Want to collaborate or say hello?
            </h2>
            <p className={styles.closingText}>
              We love hearing from fellow builders, players, and hardware enthusiasts.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
