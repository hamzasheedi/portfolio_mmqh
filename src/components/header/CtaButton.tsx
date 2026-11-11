import Link from "next/link";

interface CtaButtonProps {
  active?: boolean;
  onClick?: () => void;
}

export function CtaButton({ active = false, onClick }: CtaButtonProps) {
  return (
    <Link
      className="finweb-header__cta"
      href="/contact"
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      Start a Conversation
    </Link>
  );
}
