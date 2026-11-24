"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const CHAPTERS = [
  {
    label: "Chapter I",
    title: "Tutorial & Silicon Foundations",
    desc: "Begin with signal continuity and bare NMOS/PMOS channels to discover how fundamental digital logic emerges.",
    items: [
      "Signal continuity & NMOS/PMOS switches",
      "CMOS Inverter, NAND, NOR, AND & OR",
      "Transmission Gates, Ratioed NOR4 & Dynamic Domino logic",
    ],
  },
  {
    label: "Chapter II",
    title: "Combinational Logic",
    desc: "Organize wider signal paths cleanly across multi-layer Manhattan copper routing.",
    items: [
      "Multiplexers & Demultiplexers",
      "3-to-8 Decoders",
      "4:1 Transmission-Gate MUX & Barrel Shifters",
    ],
  },
  {
    label: "Chapter III",
    title: "Arithmetic & Datapath",
    desc: "Tackle real carry propagation delay and build high-speed 16-bit arithmetic units.",
    items: [
      "Half & Full Adders",
      "Ripple-Carry & Carry-Lookahead Adders",
      "16-bit Kogge-Stone parallel-prefix adders, ALU slices & status flags",
    ],
  },
  {
    label: "Chapter IV",
    title: "Sequential Logic",
    desc: "Bring time, clocks, feedback loops, and real CMOS oscillation into your circuits.",
    items: [
      "SR & D Latches and Master-Slave D Flip-Flops",
      "Synchronous Registers, LFSRs & Binary Counters",
      "CMOS Ring Oscillators",
    ],
  },
  {
    label: "Chapter V",
    title: "Memory & Storage",
    desc: "Design dense memory arrays dealing with real capacitive leakage, refresh, and associative search.",
    items: [
      "6T SRAM cells & memory banks",
      "1T / 3T DRAM with real capacitive leakage & auto-refresh",
      "Associative CAM / TLB & Floating-Gate NAND Flash",
    ],
  },
  {
    label: "Chapter VI",
    title: "Processors & Accelerators",
    desc: "Combine your own Glass-Box ICs into complete programmable machines and specialized accelerators.",
    items: [
      "Custom 16-bit RISC CPU with CRT assembly challenges",
      "8×8 Dual-Shader Raster GPU & CPU+GPU Mini-SoC",
      "4×4 Systolic Matrix TPU & Capacitive Analog NPU",
    ],
  },
  {
    label: "Unlocked Sandbox",
    title: "Infinite Sandbox",
    desc: "Once you master core microarchitecture, the walls come off for unrestricted custom silicon.",
    items: [
      "Full 3D FinFET workbench & Glass-Box IC minting",
      "4-channel oscilloscope & critical-path Timing Analyzer",
      "Custom simulation engine built for thousands of live MOSFETs",
    ],
  },
];

export default function WorkPage() {
  const [chapterIdx, setChapterIdx] = useState(0);
  const current = CHAPTERS[chapterIdx];

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Flagship Game Header */}
        <div className={styles.intro}>
          <div className={styles.gameHeaderRow}>
            <img
              src="/brand/silicon-emergence-icon.png"
              alt="Silicon Emergence app icon"
              className={styles.gameIconLg}
            />
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.3rem" }}>
                Flagship Game · Desktop &amp; Android
              </p>
              <h1 className={styles.title}>Silicon Emergence</h1>
            </div>
          </div>
          <p className={styles.tagline}>
            From a single transistor to a working computer, built with real silicon physics.
          </p>
          <p className={styles.lead}>
            A 3D VLSI hardware-engineering sandbox and campaign game where every logic gate, memory cell, CPU, GPU, TPU, and NPU emerges purely from physical NMOS and PMOS transistors, with no fake logic-gate shortcuts.
          </p>
        </div>

        {/* Hero Media Window */}
        <div className={`media-window ${styles.heroMedia}`}>
          <Image
            src="/images/silicon-emergence-vlsi.jpg"
            alt="Silicon Emergence 3D FinFET transistors, Manhattan copper traces, and Glass-Box IC"
            width={1280}
            height={714}
            priority
          />
          <div className="media-caption">
            <span>Glass-Box IC · Every nested transistor stays electrically live</span>
            <span className="mono">Speculative Wavefront Simulation Engine</span>
          </div>
        </div>

        {/* Core Gameplay Loop: Open Columns Divided by Hairline */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Core Gameplay Loop</p>
            <h2 className={styles.sectionTitle}>
              Four tactile steps from bare channel to working chip.
            </h2>
          </div>

          <div className={styles.loopGrid}>
            <div>
              <p className={`mono ${styles.stepIdx}`}>01 · Layout</p>
              <h3 className={styles.stepTitle}>Place &amp; Route in 3D</h3>
              <p className={styles.stepCopy}>
                Lay down 3D FinFET transistors (NMOS, PMOS, depletion loads), terminal pads, and multi-layer Manhattan copper traces on an interactive workbench.
              </p>
            </div>
            <div>
              <p className={`mono ${styles.stepIdx}`}>02 · Physics</p>
              <h3 className={styles.stepTitle}>Simulate Real Physics</h3>
              <p className={styles.stepCopy}>
                Watch live voltage waveforms, propagation wavefronts, thermal/contention effects, and Elmore RC timing delays ripple across your die in real time.
              </p>
            </div>
            <div>
              <p className={`mono ${styles.stepIdx}`}>03 · PPA Scorecard</p>
              <h3 className={styles.stepTitle}>Verify &amp; Optimize</h3>
              <p className={styles.stepCopy}>
                Pass automated hardware verification suites and compete on a 3-axis PPA Scorecard: Power (transistor count), Performance (delay in ps), and Area.
              </p>
            </div>
            <div>
              <p className={`mono ${styles.stepIdx}`}>04 · Hierarchy</p>
              <h3 className={styles.stepTitle}>Mint Glass-Box ICs</h3>
              <p className={styles.stepCopy}>
                Package verified circuits into auto-DIP or custom-sculpted Glass-Box ICs with X-Ray visibility into their live internal die, then scale to full computers.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Campaign Explorer: Intentional VisionOS Optical Glass Surface */}
        <section className={`optical-glass ${styles.campaignGlass}`}>
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Campaign Arc</p>
            <h2 className={styles.sectionTitle}>
              72 Levels · 6 Chapters + Infinite Sandbox
            </h2>
            <p className={styles.lead}>
              Select a chapter to explore how your designs grow from basic switches to full processors and accelerators.
            </p>
          </div>

          <div className={styles.tabRow} role="tablist" aria-label="Campaign chapters">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.label}
                type="button"
                role="tab"
                aria-selected={idx === chapterIdx}
                onClick={() => setChapterIdx(idx)}
                className={`${styles.tabBtn} ${idx === chapterIdx ? styles.tabBtnActive : ""}`}
              >
                {ch.label}
              </button>
            ))}
          </div>

          <div className={styles.campaignContent}>
            <div>
              <p className={`mono ${styles.stepIdx}`}>{current.label}</p>
              <h3 className={styles.chapterTitle}>{current.title}</h3>
              <p className={styles.chapterDesc}>{current.desc}</p>
            </div>
            <ul className={styles.chapterList}>
              {current.items.map((item) => (
                <li key={item} className={styles.chapterItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Craft & Platforms: Open Two-Column Split */}
        <section className={styles.techSplit}>
          <div>
            <p className="eyebrow">Under the Hood</p>
            <h2 className={styles.sectionTitle}>
              True switch-level physics, zero shortcuts.
            </h2>
            <div className={styles.splitBody}>
              <p>
                <strong>8-State Electrical Resolution:</strong> Models Strong, Degraded Vth drops, Weak resistive loads, High-Z, Contention shorts, capacitive charge sharing, and DRAM decay.
              </p>
              <p>
                <strong>Live Engineering Instruments:</strong> Built-in 4-channel piecewise-linear oscilloscope, interactive critical-path Timing Analyzer, and real-time die activity visualization.
              </p>
              <p>
                <strong>Zero-Shortcut Hierarchy:</strong> Encapsulated Glass-Box ICs never collapse into lookup tables. Every transistor inside every nested chip stays electrically live on our speculative wavefront simulation engine.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Platforms</p>
            <h2 className={styles.sectionTitle}>Desktop &amp; Android</h2>
            <div className={styles.splitBody}>
              <p>
                <strong>Desktop:</strong> Large-screen mouse and keyboard layout engineered for deep multi-thousand MOSFET architectures.
              </p>
              <p>
                <strong>Android:</strong> Touch-optimized 3D CAD workbench and adaptive dock built for designing custom silicon anywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Band: Separate Vision & Virtual Fab Routes */}
        <section className={styles.closingBand}>
          <div className={styles.closingCopy}>
            <p className="eyebrow">Beyond the Workbench</p>
            <h2 className={styles.closingTitle}>
              Explore our simulated architectures &amp; Virtual Fab.
            </h2>
            <p className={styles.closingText}>
              Read the dedicated Vision page for our separate <span className="mono">SERMM-16</span>, <span className="mono">SEVM &amp; FLUX</span>, and <span className="mono">EmergenceOS-16</span> proofs of concept alongside Virtual Fab.
            </p>
          </div>
          <div className={styles.closingActions}>
            <Link href="/vision" className="btn-primary">
              Explore Vision →
            </Link>
            <Link href="/vision#virtual-fab" className="btn-glass">
              Explore Virtual Fab
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
