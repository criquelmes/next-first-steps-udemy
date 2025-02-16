import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

interface NavbarProps {
  children: React.ReactNode;
}

const navItems = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = (props: NavbarProps) => {
  return (
    <>
      <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link className="flex items-center" href="/">
          <HomeIcon size={24} className="mr-2" />
          <span>Home</span>
        </Link>
        <div className="flex-grow" />
        {navItems.map((item) => (
          <ActiveLink key={item.href} {...item} />
        ))}
      </nav>
      {props.children}
    </>
  );
};
