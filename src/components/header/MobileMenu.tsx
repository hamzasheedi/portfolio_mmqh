import { Menu, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { CtaButton } from "./CtaButton";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

interface MobileMenuProps {
  open: boolean;
  pathname: string;
  onOpenChange: (open: boolean) => void;
}

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({
  open,
  pathname,
  onOpenChange,
}: MobileMenuProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current
      ?.querySelector<HTMLElement>(focusableSelector)
      ?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [onOpenChange, open]);

  const close = () => onOpenChange(false);

  return (
    <div className="finweb-header__mobile-menu">
      <button
        ref={triggerRef}
        className="finweb-header__menu-trigger"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => onOpenChange(true)}
      >
        <Menu size={22} strokeWidth={2} aria-hidden="true" />
      </button>

      <div
        className="finweb-header__mobile-layer"
        data-open={open}
        aria-hidden={!open}
      >
        <button
          className="finweb-header__backdrop"
          type="button"
          aria-label="Close navigation menu"
          tabIndex={open ? 0 : -1}
          onClick={close}
        />
        <div
          ref={panelRef}
          id="mobile-navigation"
          className="finweb-header__mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="finweb-header__mobile-top">
            <Logo onClick={close} />
            <button
              className="finweb-header__menu-trigger"
              type="button"
              aria-label="Close navigation menu"
              onClick={close}
            >
              <X size={22} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
          <Navigation
            pathname={pathname}
            className="finweb-header__mobile-nav"
            label="Mobile navigation"
            onNavigate={close}
          />
          <div className="finweb-header__mobile-cta">
            <CtaButton active={pathname === "/contact"} onClick={close} />
          </div>
        </div>
      </div>
    </div>
  );
}
