import test from "node:test";
import assert from "node:assert/strict";
import {
  ARCHITECTURE_MODULES,
  DESKTOP_NAV_ITEMS,
  FOOTER_NAV_ITEMS,
  MOBILE_NAV_ITEMS,
  PHILOSOPHY_CARDS,
  SILICON_EMERGENCE_SPECS,
  STUDIO_EMAIL,
  VIRTUAL_FAB_SPECS,
} from "./landing-data";

test("desktop navbar exposes required direct links", () => {
  const labels = DESKTOP_NAV_ITEMS.map((item) => item.label);
  assert.deepEqual(labels, [
    "Silicon Emergence & Vision",
    "Virtual Fab",
    "About",
  ]);
  assert.equal(DESKTOP_NAV_ITEMS[1].href, "/work#virtual-fab");
});

test("mobile drawer and footer preserve all site routes", () => {
  const mobileHrefs = new Set(MOBILE_NAV_ITEMS.map((i) => i.href));
  for (const required of ["/", "/work", "/work#virtual-fab", "/about", "/contact"]) {
    assert.ok(mobileHrefs.has(required), `Missing mobile route ${required}`);
  }

  const footerHrefs = new Set(FOOTER_NAV_ITEMS.map((i) => i.href));
  for (const required of ["/work", "/work#virtual-fab", "/about", "/contact"]) {
    assert.ok(footerHrefs.has(required), `Missing footer route ${required}`);
  }
});

test("philosophy section defines exactly three numbered hardware cards", () => {
  assert.equal(PHILOSOPHY_CARDS.length, 3);
  assert.deepEqual(
    PHILOSOPHY_CARDS.map((card) => card.index),
    ["01 · Tactile Play", "02 · Honest Simulation", "03 · Long-Term Craft"]
  );
});

test("Silicon Emergence and Virtual Fab spec pills are non-empty concise labels", () => {
  assert.deepEqual(SILICON_EMERGENCE_SPECS, [
    "72 Levels",
    "6 Chapters + Infinite Sandbox",
    "Desktop & Android",
  ]);
  assert.equal(VIRTUAL_FAB_SPECS.length, 3);
  for (const pill of [...SILICON_EMERGENCE_SPECS, ...VIRTUAL_FAB_SPECS]) {
    assert.ok(pill.length > 0 && pill.length <= 36);
  }
});

test("architecture breakdown defines the 3-column SERMM-16 / SEVM & FLUX / EOS-16.serm stack", () => {
  assert.equal(ARCHITECTURE_MODULES.length, 3);
  assert.deepEqual(
    ARCHITECTURE_MODULES.map((m) => m.code),
    ["SERMM-16", "SEVM & FLUX", "EOS-16.serm"]
  );
  assert.equal(ARCHITECTURE_MODULES[0].role, "16-bit RISC CPU");
  assert.equal(ARCHITECTURE_MODULES[1].role, "4-lane vector GPU");
  assert.equal(
    ARCHITECTURE_MODULES[2].role,
    "Self-hosted assembler & bare-metal OS"
  );
});

test("studio email matches expected Selion Lab contact address", () => {
  assert.equal(STUDIO_EMAIL, "contact@selionlab.com");
});
