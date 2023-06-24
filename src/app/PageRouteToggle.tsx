"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPenFancy, FaRandom } from "react-icons/fa";

export const PageRouteToggle = () => {
  const pathname = usePathname();

  const isPad = pathname === "/pad";
  const nextRoute = isPad ? "/" : "/pad";
  const Icon = isPad ? FaRandom : FaPenFancy;
  return (
    <Link
      href={nextRoute}
      className="text-yellow-100 text-2xl cursor-pointer mb-1"
      aria-label={
        isPad ? "Route to random word generator" : "Route to drawing pad"
      }
    >
      <Icon />
    </Link>
  );
};
