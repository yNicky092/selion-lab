import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">About Selion Lab</p>
          <h1 className={styles.title}>Small studio. Deep curiosity.</h1>
          <p className={styles.lead}>
            We started Selion Lab because we wanted to play hardware games that respected how silicon actually behaves, without needing a PhD to sit down and enjoy them.
          </p>
        </div>

        <div className={styles.essaySplit}>
          <p className={styles.pullQuote}>
            We believe the best way to understand a computer is to build one with your own hands.
          </p>
          <div className={styles.essayBody}>
            <p>
              Selion Lab is an independent studio working at the crossroads of systems programming, visual craft, and interactive play. Our focus is on <strong>Silicon Emergence</strong>, the simulated <strong>SERMM-16 / SEVM / EOS-16</strong> stack running inside it, and <strong>Virtual Fab</strong>.
            </p>
            <p>
              We’re straightforward about what we build: our architectures are software simulations crafted for interactive play rather than physical consumer silicon, engineered with real computer-science rules from the ground up.
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
