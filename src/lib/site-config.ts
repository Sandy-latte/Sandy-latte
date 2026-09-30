import type { IconName } from "@/components/icons";

export const siteConfig = {
  name: "Sandy Latte",
  description:
    "A clean, modern workspace to manage projects, customers, and your team.",
};

export type NavItem = {
  title: string;
  href: string;
};

export type DashboardNavItem = NavItem & {
  icon: IconName;
};

export const marketingNav: NavItem[] = [
  { title: "Features", href: "/#features" },
  { title: "Pricing", href: "/#pricing" },
  { title: "FAQ", href: "/#faq" },
];

export const dashboardNav: DashboardNavItem[] = [
  { title: "Overview", href: "/dashboard", icon: "home" },
  { title: "Projects", href: "/dashboard/projects", icon: "folder" },
  { title: "Customers", href: "/dashboard/customers", icon: "users" },
  { title: "Settings", href: "/dashboard/settings", icon: "settings" },
];
