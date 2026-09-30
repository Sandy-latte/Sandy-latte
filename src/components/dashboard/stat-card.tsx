import { Icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  /** Percentage change vs. the previous period, e.g. 12.5 or -3.2. */
  change: number;
}) {
  const up = change >= 0;

  return (
    <Card className="p-5">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
      <p
        className={cn(
          "mt-2 flex items-center gap-1 text-xs font-medium",
          up ? "text-emerald-600" : "text-red-600",
        )}
      >
        <Icon name={up ? "trendUp" : "trendDown"} className="size-4" />
        {up ? "+" : ""}
        {change}%
        <span className="ml-1 font-normal text-slate-500">vs last month</span>
      </p>
    </Card>
  );
}
