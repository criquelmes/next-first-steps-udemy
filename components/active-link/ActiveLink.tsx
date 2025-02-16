"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface ActiveLinkProps {
  href: string;
  label: string;
}

export const ActiveLink = ({ href, label }: ActiveLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${style.link} ${href === pathname && style["active-link"]}`}
      href={href}
    >
      {label}
    </Link>
  );
};
