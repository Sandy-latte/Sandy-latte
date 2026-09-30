import Link from "next/link";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col gap-6 px-4 py-5">
      <Logo href="/dashboard" className="px-2" />
      <div className="flex-1">
        <SidebarNav onNavigate={onNavigate} />
      </div>
      <div className="border-t border-slate-200 pt-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        >
          <Icon name="logout" />
          Sign out
        </Link>
      </div>
    </div>
  );
}
