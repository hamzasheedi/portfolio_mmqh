export const navigationItems = [
  { label: "Financial", href: "/financial-services" },
  { label: "Web Development", href: "/web-development" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
] as const;

export function isNavigationItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
