import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SIMULATED_ARCHITECTURES } from "@/lib/architecture";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* Hero: Open Centered VisionOS Layout on Frosted Light Canvas */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroCenter}>
            <div className={styles.welcomePill}>
              <span className={styles.welcomeDot} />
              <span>Welcome to Selion Lab</span>
            </div>
            <h1 className={styles.heroTitle}>
              We turn real silicon physics into places you can play.
            </h1>
            <p className={styles.heroLead}>
              Hello, we are Selion Lab, an independent game studio fascinated by how computers actually work underneath the hood. We build interactive worlds where transistors, processors, and fabrication are not just background lore, they are the medium you play with.
            </p>
            <div className={styles.heroActions}>
              <Link href="/work" className="btn-primary">
                Explore Silicon Emergence
              </Link>
              <Link href="/vision" className="btn-glass">
                Explore Our Vision
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className="media-window">
              <Image
                src="/images/selion-lab-monolith.jpg"
                alt="Selion Lab anodized graphite monolith and monocrystalline silicon wafer"
                width={1280}
                height={714}
                priority
              />
              <div className="media-caption">
                <span className={styles.captionBrand}>Selion Lab</span>
                <span>Independent game craft · Real physics in software simulation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy: Open Editorial Typography & Hairlines (No Card Boxes) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className={styles.sectionTitle}>
              Curiosity is better when nothing is faked.
            </h2>
            <p className={styles.sectionLead}>
              Most hardware games simplify computing into abstract puzzles that only look like electronics from a distance. Our vision is simpler and more exciting: simulate the real behavior in software, strip away the intimidation, and let you discover how a single switch grows into a working machine.
            </p>
          </div>

          <div className={styles.openGrid3}>
            <div>
              <p className={`mono ${styles.pillarIdx}`}>01 · Tactile Play</p>
              <h3 className={styles.pillarTitle}>Built to feel alive</h3>
              <p className={styles.pillarBody}>
                Watching voltage ripples race across copper traces and peeking inside translucent Glass-Box chips makes hardware feel physical, playful, and genuinely yours.
              </p>
            </div>

            <div>
              <p className={`mono ${styles.pillarIdx}`}>02 · Honest Simulation</p>
              <h3 className={styles.pillarTitle}>Real rules in software</h3>
              <p className={styles.pillarBody}>
                Every architecture we design, from individual FinFET channels to our simulated 16-bit RISC machine, runs in fast C++20 software simulation built specifically for play.
              </p>
            </div>

            <div>
              <p className={`mono ${styles.pillarIdx}`}>03 · Long-Term Craft</p>
              <h3 className={styles.pillarTitle}>Growing layer by layer</h3>
              <p className={styles.pillarBody}>
                We start with transistor-level design in Silicon Emergence and extend into full Verilog-to-packaged-chip manufacturing with Virtual Fab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Game Spotlight: ONE Intentional VisionOS Optical Glass Showcase Surface */}
      <section className={styles.section}>
        <div className="container">
          <div className={`optical-glass ${styles.spotlightGlass}`}>
            <div className={styles.spotlightGrid}>
              <div>
                <div className={styles.spotlightTitleRow}>
                  <img
                    src="/brand/silicon-emergence-icon.png"
                    alt="Silicon Emergence app icon"
                    className={styles.gameIcon}
                  />
                  <div>
                    <p className="eyebrow" style={{ marginBottom: "0.3rem" }}>
                      Flagship Game · Desktop &amp; Android
                    </p>
                    <h2 className={styles.spotlightTitle}>Silicon Emergence</h2>
                  </div>
                </div>
                <p className={styles.spotlightTagline}>
                  From a single transistor to a working computer, built with real silicon physics.
                </p>
                <p className={styles.spotlightCopy}>
                  Place 3D FinFET transistors, route multi-layer Manhattan copper traces, watch real switch-level waveforms and Elmore RC delays propagate across your die, and mint verified circuits into Glass-Box ICs you can see straight inside.
                </p>
                <div className={styles.spotlightCta}>
                  <Link href="/work" className="btn-primary">
                    Inside Silicon Emergence →
                  </Link>
                </div>
              </div>

              <div className="media-window">
                <Image
                  src="/images/silicon-emergence-vlsi.jpg"
                  alt="Silicon Emergence 3D FinFET transistors and Glass-Box IC"
                  width={1280}
                  height={714}
                />
                <div className="media-caption">
                  <span className="mono">72 Levels · 6 Chapters + Infinite Sandbox</span>
                  <span>Desktop &amp; Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Machines & Virtual Fab: Separate, Distinct Editorial Rows */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Where We’re Headed</p>
            <h2 className={styles.sectionTitle}>
              Original simulated machines, and the fab that makes them.
            </h2>
            <p className={styles.sectionLead}>
              None of these are physical consumer chips. They are original software architectures we design and simulate in <span className="mono">C++20</span> to make our game worlds deeper and more believable.
            </p>
          </div>

          {SIMULATED_ARCHITECTURES.map((arch) => (
            <article key={arch.id} className={`open-row ${styles.archRow}`}>
              <div>
                <p className={`mono ${styles.pillarIdx}`}>
                  {arch.index} · {arch.category}
                </p>
                <h3 className={styles.rowTitle}>{arch.title}</h3>
                <p className={styles.rowMeta}>{arch.meta}</p>
                <p className={`mono ${styles.rowSpecs}`}>
                  {arch.specs.join(" · ")}
                </p>
              </div>
              <div>
                <p className={styles.rowCopy}>{arch.homeSummary}</p>
                <Link href={arch.href} className="text-action">
                  {arch.ctaLabel}
                </Link>
              </div>
            </article>
          ))}

          <article className={`open-row ${styles.archRow}`}>
            <div>
              <p className={`mono ${styles.pillarIdx}`}>
                04 · Silicon Manufacturing Simulator
              </p>
              <h3 className={styles.rowTitle}>Virtual Fab</h3>
              <p className={styles.rowMeta}>
                Playable Silicon Manufacturing Simulator
              </p>
              <p className={`mono ${styles.rowSpecs}`}>
                Verilog Netlists · Simulated Fabrication · Wafer Packaging
              </p>
            </div>
            <div>
              <p className={styles.rowCopy}>
                A tactile silicon manufacturing simulator that begins with Verilog netlists, steps through simulated fabrication and wafer packaging, and lets you drop the finished chip straight into real-time simulation.
              </p>
              <Link href="/vision#virtual-fab" className="text-action">
                Explore Virtual Fab →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Open Invitation */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.closingBand}>
            <div className={styles.closingCopy}>
              <h2 className={styles.closingTitle}>Come follow the journey.</h2>
              <p className={styles.closingText}>
                Whether you love hardware games, enjoy talking computer architecture, or just want to say hello, our inbox is always open at{" "}
                <a href="mailto:contact@selionlab.com" className={styles.emailLink}>
                  contact@selionlab.com
                </a>
                .
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link href="/contact" className="btn-primary">
                Say Hello
              </Link>
              <Link href="/about" className="btn-glass">
                About the Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
