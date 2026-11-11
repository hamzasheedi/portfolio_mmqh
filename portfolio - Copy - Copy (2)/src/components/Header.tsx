"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CtaButton } from "./header/CtaButton";
import { Logo } from "./header/Logo";
import { MobileMenu } from "./header/MobileMenu";
import { Navigation } from "./header/Navigation";
import { useStickyHeader } from "./header/useStickyHeader";

export function Header() {
  const pathname = usePathname();
  const scrolled = useStickyHeader();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className="finweb-header"
      data-scrolled={scrolled}
      data-menu-open={mobileOpen}
    >
      <div className="finweb-header__inner">
        <div className="finweb-header__brand-slot">
          <Logo />
        </div>
        <Navigation
          pathname={pathname}
          className="finweb-header__desktop-nav"
        />
        <div className="finweb-header__action-slot">
          <CtaButton active={pathname === "/contact"} />
          <MobileMenu
            open={mobileOpen}
            pathname={pathname}
            onOpenChange={setMobileOpen}
          />
        </div>
      </div>
    </header>
  );
}
