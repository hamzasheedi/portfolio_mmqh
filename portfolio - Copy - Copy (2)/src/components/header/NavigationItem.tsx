import Link from "next/link";

interface NavigationItemProps {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}

export function NavigationItem({
  href,
  label,
  active,
  onClick,
}: NavigationItemProps) {
  return (
    <li>
      <Link
        className="finweb-header__nav-link"
        href={href}
        aria-current={active ? "page" : undefined}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}
