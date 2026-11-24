export interface SimulatedArchitectureItem {
  id: string;
  index: string;
  category: string;
  title: string;
  meta: string;
  specs: readonly string[];
  homeSummary: string;
  ctaLabel: string;
  href: string;
}

export const SIMULATED_ARCHITECTURES: readonly SimulatedArchitectureItem[] = [
  {
    id: "sermm-16",
    index: "01",
    category: "Simulated 16-bit RISC CPU",
    title: "SERMM-16",
    meta: "Selion Emergent RISC Micro-Machines · Processor PoC",
    specs: ["16-bit RISC", "64 KB Unified RAM", "8 ABI Registers", "4-bit Flags"],
    homeSummary:
      "An original 16-bit RISC instruction set and processor architecture simulated over a unified 64 KB byte-addressed memory space. Executing real instruction streams across physical transistor datapaths serves as a processor-level proof of concept for our switch-level simulation engine.",
    ctaLabel: "Explore SERMM-16 →",
    href: "/vision#sermm-16",
  },
  {
    id: "sevm-flux",
    index: "02",
    category: "Simulated 4-Lane Vector GPU",
    title: "SEVM & FLUX",
    meta: "Selion Emergent Vector Machines · Vector GPU PoC",
    specs: ["4-Lane SIMT GPU", "256-Word Scratchpad", "Unified 64 KB", "FLUX Kernels"],
    homeSummary:
      "A simulated 4-lane lockstep SIMT vector GPU sharing unified 64 KB memory with the SERMM-16 processor, complete with divergence masking, warp barriers, and a 256-word scratchpad. Dispatching parallel FLUX kernels across simulated waves serves as a graphics and parallel-compute proof of concept.",
    ctaLabel: "Explore SEVM & FLUX →",
    href: "/vision#sevm-flux",
  },
  {
    id: "emergenceos-16",
    index: "03",
    category: "Self-Hosted Assembler & Bare-Metal OS",
    title: "EmergenceOS-16",
    meta: "EOS-16.serm · Bare-Metal System PoC",
    specs: ["EOS-16.serm", "127-Word serasm", "Bare-Metal Kernel", "Assembly Drivers"],
    homeSummary:
      "A self-hosted software stack anchored by serasm, a 127-word assembler that compiles source text directly inside simulated RAM. Packaged as EOS-16.serm, it boots its own kernel, pure assembly drivers, interactive shell, and embedded filesystem as a full-system proof of concept.",
    ctaLabel: "Explore EmergenceOS-16 →",
    href: "/vision#emergenceos-16",
  },
];
