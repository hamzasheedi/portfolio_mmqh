import Link from "next/link";

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      className="finweb-header__logo"
      href="/"
      aria-label="FINWEB home"
      onClick={onClick}
    >
      FINWEB<span aria-hidden="true">.</span>
    </Link>
  );
}
