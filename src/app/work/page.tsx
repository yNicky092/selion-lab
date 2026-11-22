"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      "Native C++20 engine built for thousands of live MOSFETs",
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
          <p className="eyebrow">Flagship Game · Desktop &amp; Android</p>
          <h1 className={styles.title}>Silicon Emergence</h1>
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
            <span>Native C++20 Speculative Wavefront Engine</span>
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
                <strong>Zero-Shortcut Hierarchy:</strong> Encapsulated Glass-Box ICs never collapse into lookup tables. Every transistor inside every nested chip stays electrically live on our C++20 speculative wavefront engine.
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

        {/* Simulated Architecture (Open Ledgers + 1 Glass Virtual Fab Feature) */}
        <section id="simulated-architecture" className={styles.section}>
          <div className={styles.intro}>
            <p className="eyebrow">Simulated Architecture</p>
            <h2 className={styles.title}>
              Virtual machines built to live inside our games.
            </h2>
            <p className={styles.lead}>
              Everything below is a software simulation built in C++20 rather than physical fabricated hardware or a standalone operating system for real PCs. We build these simulated architectures so the computing worlds inside Silicon Emergence and Virtual Fab obey real computer-science rules.
            </p>
          </div>

          <div className="open-row">
            <div>
              <p className={`mono ${styles.stepIdx}`}>
                Simulated 16-bit RISC Architecture
              </p>
              <h3 className={styles.archTitle}>SERMM-16</h3>
              <p className={styles.archMeta}>
                Selion Emergent RISC Micro-Machines · C++20 Software Simulation
              </p>
            </div>
            <div className={styles.archBody}>
              <p>
                An original 16-bit RISC instruction set and CPU architecture simulated inside Silicon Emergence over a unified 64 KB byte-addressed memory space. It provides eight ABI-aliased 16-bit registers, a 4-bit hardware flags register, and four uniform 16-bit instruction formats with consistent decoding positions.
              </p>
              <p>
                To make programming inside the simulation feel genuine, we built both a host assembler and a compact 127-word self-hosted assembler (<span className="mono">serasm</span>) that assembles source text directly inside simulated RAM and runs it.
              </p>
            </div>
          </div>

          <div className="open-row">
            <div>
              <p className={`mono ${styles.stepIdx}`}>
                Simulated 4-Lane Vector GPU
              </p>
              <h3 className={styles.archTitle}>SEVM &amp; FLUX</h3>
              <p className={styles.archMeta}>
                Selion Emergent Vector Machines · Simulated SoC Companion
              </p>
            </div>
            <div className={styles.archBody}>
              <p>
                A simulated 4-lane lockstep SIMT vector processor sharing unified 64 KB memory with the SERMM-16 core, complete with per-lane vector registers, divergence masking, warp barriers, a 256-word on-chip scratchpad, cross-lane shuffles, and fused multiply-add instructions.
              </p>
              <p>
                Through our <strong>FLUX</strong> kernel model, parallel vector programs are written alongside CPU assembly and dispatched across simulated waves.
              </p>
            </div>
          </div>

          <div className="open-row">
            <div>
              <p className={`mono ${styles.stepIdx}`}>
                Simulated In-Game OS Disk Image
              </p>
              <h3 className={styles.archTitle}>EmergenceOS-16</h3>
              <p className={styles.archMeta}>
                EOS-16.serm · Runs strictly inside the SERMM-16 simulation
              </p>
            </div>
            <div className={styles.archBody}>
              <p>
                Instead of hardcoding fake terminal responses inside C++, we created <span className="mono">EOS-16.serm</span>, a custom <span className="mono">.serm</span> simulated disk image format (not an <span className="mono">.iso</span>), so a blank simulated SERMM-16 machine boots its own kernel, pure assembly device drivers, interactive shell, and embedded filesystem from image data.
              </p>
              <p>
                Because <span className="mono">EOS-16.serm</span> runs exclusively on the virtual SERMM-16 architecture inside our simulation, it is part of the in-game experience rather than a standalone download.
              </p>
            </div>
          </div>

          {/* Virtual Fab Feature Surface */}
          <div id="virtual-fab" className={`optical-glass ${styles.vfabGlass}`}>
            <div className={styles.vfabGrid}>
              <div>
                <p className="eyebrow">Silicon Manufacturing Simulator</p>
                <h3 className={styles.sectionTitle}>Virtual Fab</h3>
                <p className={styles.archMeta}>
                  Playable Silicon Manufacturing Simulator
                </p>
              </div>
              <div className={styles.archBody}>
                <p>
                  Virtual Fab explores the full physical journey of a chip, starting from Verilog netlists, stepping through simulated photolithography, etching, doping, and metallization, and packaging the finished die for interactive real-time simulation.
                </p>
                <p>
                  Our goal is to make semiconductor fabrication feel tangible, visual, and playfully hands-on, bridging hardware engineering curiosity with the craft of building games.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
