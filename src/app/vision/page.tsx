import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vision · Selion Lab",
  description:
    "Selion Lab's studio vision and simulated architectures: SERMM-16 (16-bit RISC CPU), SEVM & FLUX (4-lane vector GPU), EmergenceOS-16 (EOS-16.serm), and Virtual Fab.",
  alternates: {
    canonical: "/vision/",
  },
  openGraph: {
    title: "Vision · Selion Lab",
    description:
      "Original software-simulated machines — SERMM-16, SEVM & FLUX, EmergenceOS-16 — and Virtual Fab.",
    url: "https://selionlab.com/vision/",
  },
};

export default function VisionPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Studio Vision Hero */}
        <div className={styles.intro}>
          <p className="eyebrow">Studio Vision</p>
          <h1 className={styles.title}>
            Simulated CPU, vector GPU, and OS proofs of concept on our switch-level engine.
          </h1>
          <p className={styles.lead}>
            SERMM-16, SEVM &amp; FLUX, and EmergenceOS-16 are original simulated
            architectures—a <span className="mono">16-bit</span> RISC processor,
            a <span className="mono">4-lane</span> vector GPU, and a bare-metal
            operating system—built on our switch-level engine as end-to-end
            proofs of concept.
          </p>
        </div>

        {/* Simulated Architecture: Three Separate, Distinct Items */}
        <section id="simulated-architecture" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Proofs of Concept</p>
            <h2 className={styles.sectionTitle}>
              Three original architectures running on switch-level silicon.
            </h2>
          </div>

          <article id="sermm-16" className="open-row">
            <div>
              <p className={`mono ${styles.stepIdx}`}>
                01 · Simulated 16-bit RISC CPU
              </p>
              <h3 className={styles.archTitle}>SERMM-16</h3>
              <p className={styles.archMeta}>
                Selion Emergent RISC Micro-Machines · Processor PoC
              </p>
              <p className={`mono ${styles.specLine}`}>
                16-bit RISC · 64 KB Unified RAM · 8 ABI Registers · 4-bit Flags
              </p>
            </div>
            <div className={styles.archBody}>
              <p>
                An original <span className="mono">16-bit</span> RISC
                instruction set and processor architecture simulated over a
                unified <span className="mono">64 KB</span> byte-addressed
                memory space. It defines eight ABI-aliased{" "}
                <span className="mono">16-bit</span> registers, a{" "}
                <span className="mono">4-bit</span> hardware flags register, and
                four uniform <span className="mono">16-bit</span> instruction
                formats with consistent decoding positions. Executing real
                instruction streams across physical transistor datapaths serves
                as a processor-level proof of concept for our switch-level
                simulation engine.
              </p>
            </div>
          </article>

          <article id="sevm-flux" className="open-row">
            <div>
              <p className={`mono ${styles.stepIdx}`}>
                02 · Simulated 4-Lane Vector GPU
              </p>
              <h3 className={styles.archTitle}>SEVM &amp; FLUX</h3>
              <p className={styles.archMeta}>
                Selion Emergent Vector Machines · Vector GPU PoC
              </p>
              <p className={`mono ${styles.specLine}`}>
                4-Lane SIMT GPU · 256-Word Scratchpad · Unified 64 KB · FLUX Kernels
              </p>
            </div>
            <div className={styles.archBody}>
              <p>
                A simulated <span className="mono">4-lane</span> lockstep SIMT
                vector GPU sharing unified{" "}
                <span className="mono">64 KB</span> memory with the SERMM-16
                processor, complete with per-lane vector registers, divergence
                masking, warp barriers, a{" "}
                <span className="mono">256-word</span> on-chip scratchpad,
                cross-lane shuffles, and fused multiply-add instructions.
                Dispatching parallel <strong>FLUX</strong> kernels across
                simulated waves serves as a graphics and parallel-compute proof
                of concept on our switch-level engine.
              </p>
            </div>
          </article>

          <article id="emergenceos-16" className="open-row">
            <div>
              <p className={`mono ${styles.stepIdx}`}>
                03 · Self-Hosted Assembler &amp; Bare-Metal OS
              </p>
              <h3 className={styles.archTitle}>EmergenceOS-16</h3>
              <p className={styles.archMeta}>
                <span className="mono">EOS-16.serm</span> · Bare-Metal System PoC
              </p>
              <p className={`mono ${styles.specLine}`}>
                EOS-16.serm · 127-Word serasm · Bare-Metal Kernel · Assembly Drivers
              </p>
            </div>
            <div className={styles.archBody}>
              <p>
                A self-hosted software stack anchored by{" "}
                <span className="mono">serasm</span>, a{" "}
                <span className="mono">127-word</span> assembler that compiles
                source text directly inside simulated RAM. Packaged as a custom{" "}
                <span className="mono">.serm</span> disk image,{" "}
                <span className="mono">EOS-16.serm</span> boots its own kernel,
                pure assembly device drivers, interactive shell, and embedded
                filesystem natively on simulated SERMM-16 hardware as a
                full-system proof of concept.
              </p>
            </div>
          </article>
        </section>

        {/* Dedicated Virtual Fab Section */}
        <section id="virtual-fab" className={styles.vfabSection}>
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Silicon Manufacturing Simulator</p>
            <h2 className={styles.sectionTitle}>
              From Verilog netlists to packaged silicon.
            </h2>
          </div>

          <div className={`optical-glass ${styles.vfabGlass}`}>
            <div className={styles.vfabGrid}>
              <div>
                <p className={`mono ${styles.stepIdx}`}>
                  04 · Playable Fabrication Pipeline
                </p>
                <h3 className={styles.vfabTitle}>Virtual Fab</h3>
                <p className={styles.archMeta}>
                  Playable Silicon Manufacturing Simulator
                </p>
                <p className={`mono ${styles.specLine}`}>
                  Verilog · Photolithography · Etching · Doping · Metallization
                </p>
              </div>
              <div className={styles.archBody}>
                <p>
                  Virtual Fab explores the full physical journey of a chip,
                  starting from <span className="mono">Verilog</span> netlists,
                  stepping through simulated photolithography, etching, doping,
                  and metallization, and packaging the finished die for
                  interactive real-time simulation.
                </p>
                <p>
                  Our goal is to make semiconductor fabrication feel tangible,
                  visual, and playfully hands-on, bridging hardware engineering
                  curiosity with the craft of building games.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Editorial Navigation Band */}
        <section className={styles.closingBand}>
          <div className={styles.closingCopy}>
            <h2 className={styles.closingTitle}>
              See where these architectures come alive.
            </h2>
            <p className={styles.closingText}>
              Start from a single FinFET transistor in Silicon Emergence, or
              write to us about the engineering behind the studio.
            </p>
          </div>
          <div className={styles.closingActions}>
            <Link href="/work" className="btn-primary">
              Explore Silicon Emergence →
            </Link>
            <Link href="/contact" className="btn-glass">
              Say Hello
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
