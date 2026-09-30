import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Placeholder data — swap for real queries once a backend is connected.
const stats = [
  { label: "Total revenue", value: "$48,210", change: 12.4 },
  { label: "Active customers", value: "2,431", change: 4.1 },
  { label: "Open projects", value: "36", change: -2.3 },
  { label: "Conversion rate", value: "3.8%", change: 0.6 },
];

const monthlyRevenue = [
  { month: "Apr", value: 28 },
  { month: "May", value: 34 },
  { month: "Jun", value: 31 },
  { month: "Jul", value: 39 },
  { month: "Aug", value: 43 },
  { month: "Sep", value: 48 },
];

const recentOrders = [
  { id: "INV-1042", customer: "Acme Inc.", amount: "$1,200", status: "Paid" },
  { id: "INV-1041", customer: "Globex", amount: "$860", status: "Pending" },
  { id: "INV-1040", customer: "Initech", amount: "$2,450", status: "Paid" },
  { id: "INV-1039", customer: "Umbrella", amount: "$540", status: "Overdue" },
  { id: "INV-1038", customer: "Hooli", amount: "$3,100", status: "Paid" },
] as const;

const statusTone = {
  Paid: "success",
  Pending: "info",
  Overdue: "warning",
} as const;

const activity = [
  { who: "Maya", what: "created project “Website refresh”", when: "2h ago" },
  { who: "Jordan", what: "added customer Hooli", when: "5h ago" },
  { who: "Alex", what: "updated billing settings", when: "Yesterday" },
  { who: "Sam", what: "closed 3 tasks in “Q3 Launch”", when: "2 days ago" },
];

export default function DashboardPage() {
  const max = Math.max(...monthlyRevenue.map((m) => m.value));

  return (
    <>
      <PageHeader
        title="Overview"
        description="Here’s what’s happening with your business today."
        actions={
          <Link href="/dashboard/projects" className={buttonVariants()}>
            New project
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>Last 6 months, in thousands (USD)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-56 items-end gap-3 sm:gap-6">
              {monthlyRevenue.map((m) => (
                <div
                  key={m.month}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <span className="text-xs font-medium text-slate-700">
                    ${m.value}k
                  </span>
                  <div
                    className="w-full rounded-t-md bg-brand-500"
                    style={{ height: `${(m.value / max) * 100}%` }}
                  />
                  <span className="text-xs text-slate-500">{m.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {activity.map((a) => (
                <li key={a.what} className="flex gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                    {a.who[0]}
                  </span>
                  <div className="text-sm">
                    <p className="text-slate-700">
                      <span className="font-medium text-slate-900">{a.who}</span>{" "}
                      {a.what}
                    </p>
                    <p className="text-xs text-slate-500">{a.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent invoices</CardTitle>
          <CardDescription>Your latest billing activity</CardDescription>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="border-y border-slate-200 bg-slate-50 text-xs text-slate-500 uppercase">
              <tr>
                <th className="px-6 py-3 font-medium">Invoice</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {recentOrders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{o.id}</td>
                  <td className="px-6 py-4 text-slate-700">{o.customer}</td>
                  <td className="px-6 py-4 text-slate-700">{o.amount}</td>
                  <td className="px-6 py-4">
                    <Badge tone={statusTone[o.status]}>{o.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
