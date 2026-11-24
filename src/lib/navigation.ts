export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/work", label: "Silicon Emergence" },
  { href: "/vision", label: "Vision" },
  { href: "/vision#virtual-fab", label: "Virtual Fab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS: readonly NavItem[] = [
  { href: "/work", label: "Silicon Emergence" },
  { href: "/vision", label: "Vision" },
  { href: "/vision#virtual-fab", label: "Virtual Fab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

export function isNavItemActive(
  pathname: string,
  hash: string,
  href: string
): boolean {
  const [targetPathRaw, targetHash] = href.split("#");
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(targetPathRaw || "/");

  if (currentPath !== targetPath) {
    return false;
  }

  const normalizedHash = hash.replace(/^#/, "");
  if (targetHash) {
    return normalizedHash === targetHash;
  }

  // On /vision, keep "Vision" active unless specifically targeting #virtual-fab
  if (targetPath === "/vision" && normalizedHash === "virtual-fab") {
    return false;
  }

  return true;
}
