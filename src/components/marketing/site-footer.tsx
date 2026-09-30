import Link from "next/link";
import { Logo } from "@/components/logo";
import { marketingNav, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="max-w-xs text-sm text-slate-500">
            {siteConfig.description}
          </p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Log in
          </Link>
        </nav>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
