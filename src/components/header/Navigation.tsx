import { NavigationItem } from "./NavigationItem";
import {
  isNavigationItemActive,
  navigationItems,
} from "./navigationConfig";

interface NavigationProps {
  pathname: string;
  className?: string;
  label?: string;
  onNavigate?: () => void;
}

export function Navigation({
  pathname,
  className,
  label = "Primary navigation",
  onNavigate,
}: NavigationProps) {
  return (
    <nav className={className} aria-label={label}>
      <ul className="finweb-header__nav-list">
        {navigationItems.map(({ label: itemLabel, href }) => (
          <NavigationItem
            key={href}
            href={href}
            label={itemLabel}
            active={isNavigationItemActive(pathname, href)}
            onClick={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
}
