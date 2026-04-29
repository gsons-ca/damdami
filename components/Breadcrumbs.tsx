"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(segment => segment !== "");

  const breadcrumbs = [{ label: "Home", href: "/" }];

  pathSegments.forEach((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    breadcrumbs.push({ label, href });
  });

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs on the home page or root-level pages without segments
  }

  return (
    <nav className="bg-white py-3 px-6 sm:px-8 lg:px-12 border-b border-slate-100">
      <ol className="flex items-center space-x-2 text-sm text-slate-500">
        {breadcrumbs.map((crumb, index) => (
          <Fragment key={crumb.href}>
            {index > 0 && <span className="text-slate-300">/</span>}
            <li>
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-[#002b7a]">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-[#002b7a] transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}