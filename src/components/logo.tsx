import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Logo({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 font-semibold text-slate-900",
        className,
      )}
    >
      <span className="grid size-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white">
        SL
      </span>
      <span>{siteConfig.name}</span>
    </Link>
  );
}
