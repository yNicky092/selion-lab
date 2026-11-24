import test from "node:test";
import assert from "node:assert/strict";
import {
  NAV_ITEMS,
  FOOTER_LINKS,
  isNavItemActive,
  normalizePath,
} from "./navigation";
import { SIMULATED_ARCHITECTURES } from "./architecture";

test("Silicon Emergence and Vision are separate links in header and footer", () => {
  const navLabels = NAV_ITEMS.map((item) => item.label);
  const footerLabels = FOOTER_LINKS.map((item) => item.label);

  assert.equal(navLabels.includes("Silicon Emergence"), true);
  assert.equal(navLabels.includes("Vision"), true);
  assert.equal(navLabels.includes("Virtual Fab"), true);
  assert.equal(navLabels.includes("About"), true);
  assert.equal(
    navLabels.some((label) => /silicon emergence\s*&\s*vision/i.test(label)),
    false
  );

  assert.equal(footerLabels.includes("Silicon Emergence"), true);
  assert.equal(footerLabels.includes("Vision"), true);
  assert.equal(
    footerLabels.some((label) => /silicon emergence\s*&\s*vision/i.test(label)),
    false
  );
});

test("SERMM-16, SEVM & FLUX, and EmergenceOS-16 are three separate distinct items", () => {
  assert.equal(SIMULATED_ARCHITECTURES.length, 3);
  assert.deepEqual(
    SIMULATED_ARCHITECTURES.map((item) => item.title),
    ["SERMM-16", "SEVM & FLUX", "EmergenceOS-16"]
  );
  assert.deepEqual(
    SIMULATED_ARCHITECTURES.map((item) => item.index),
    ["01", "02", "03"]
  );
  assert.equal(
    new Set(SIMULATED_ARCHITECTURES.map((item) => item.id)).size,
    3
  );
});

test("normalizePath and isNavItemActive handle trailing slashes and hash anchors", () => {
  assert.equal(normalizePath("/work/"), "/work");
  assert.equal(normalizePath("/"), "/");

  assert.equal(isNavItemActive("/work/", "", "/work"), true);
  assert.equal(isNavItemActive("/vision/", "", "/vision"), true);
  assert.equal(isNavItemActive("/vision/", "", "/vision#virtual-fab"), false);
  assert.equal(
    isNavItemActive("/vision/", "#virtual-fab", "/vision#virtual-fab"),
    true
  );
  assert.equal(isNavItemActive("/vision/", "#virtual-fab", "/vision"), false);
});
