"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Optional: For conditional classnames

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 rounded-md",
        isActive
          ? "text-emerald-700 text-shadow-nav shadow-emerald-800 shadow"
          : "text-gray-800 hover:text-emerald-500"
      )}
    >
      {children}
    </Link>
  );
}
