export interface NavLinkItem {
  readonly href: string;
  readonly label: string;
}

export interface PhilosophyCard {
  readonly index: string;
  readonly title: string;
  readonly body: string;
}

export interface ArchitectureModule {
  readonly id: string;
  readonly code: string;
  readonly role: string;
  readonly summary: string;
}

export const DESKTOP_NAV_ITEMS: readonly NavLinkItem[] = [
  { href: "/work", label: "Silicon Emergence" },
  { href: "/vision", label: "Vision" },
  { href: "/vision#virtual-fab", label: "Virtual Fab" },
  { href: "/about", label: "About" },
];

export const MOBILE_NAV_ITEMS: readonly NavLinkItem[] = [
  { href: "/", label: "Home" },
  ...DESKTOP_NAV_ITEMS,
  { href: "/contact", label: "Contact" },
];

export const FOOTER_NAV_ITEMS: readonly NavLinkItem[] = [
  { href: "/work", label: "Silicon Emergence" },
  { href: "/vision", label: "Vision" },
  { href: "/vision#virtual-fab", label: "Virtual Fab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const PHILOSOPHY_CARDS: readonly PhilosophyCard[] = [
  {
    index: "01 · Tactile Play",
    title: "Built to feel alive",
    body: "Watching voltage ripples race across copper traces and peeking inside translucent Glass-Box chips makes hardware feel physical, playful, and genuinely yours.",
  },
  {
    index: "02 · Honest Simulation",
    title: "Real rules in software",
    body: "Every architecture we design, from individual FinFET channels to our simulated 16-bit RISC processor, runs in real-time switch-level physics simulation built specifically for play.",
  },
  {
    index: "03 · Long-Term Craft",
    title: "Growing layer by layer",
    body: "We start with transistor-level design in Silicon Emergence and extend into full Verilog-to-packaged-chip manufacturing with Virtual Fab.",
  },
];

export const SILICON_EMERGENCE_SPECS: readonly string[] = [
  "72 Levels",
  "6 Chapters + Infinite Sandbox",
  "Desktop & Android",
];

export const ARCHITECTURE_MODULES: readonly ArchitectureModule[] = [
  {
    id: "sermm-16",
    code: "SERMM-16",
    role: "16-bit RISC CPU",
    summary:
      "Unified 64 KB byte-addressed memory, 8 ABI-aliased registers, 4-bit hardware flags, and 4 uniform instruction formats.",
  },
  {
    id: "sevm-flux",
    code: "SEVM & FLUX",
    role: "4-lane vector GPU",
    summary:
      "Lockstep SIMT vector companion sharing 64 KB RAM with divergence masking, 256-word scratchpad, and FLUX kernels.",
  },
  {
    id: "eos-16",
    code: "EOS-16.serm",
    role: "Self-hosted assembler & bare-metal OS",
    summary:
      "127-word serasm assembler, assembly device drivers, interactive shell, and custom .serm simulated disk image.",
  },
];

export const VIRTUAL_FAB_SPECS: readonly string[] = [
  "Verilog Netlists",
  "Simulated Fabrication",
  "Wafer Packaging",
];

export const STUDIO_EMAIL = "contact@selionlab.com";
