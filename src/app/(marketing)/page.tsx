import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { Section } from "@/components/marketing/section";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "chart",
    title: "Clear reporting",
    description:
      "See revenue, activity, and growth at a glance with a focused overview.",
  },
  {
    icon: "users",
    title: "Customer management",
    description:
      "Keep every account, contact, and plan organized in one place.",
  },
  {
    icon: "folder",
    title: "Project tracking",
    description:
      "Follow progress across projects and keep your team moving together.",
  },
  {
    icon: "zap",
    title: "Fast by default",
    description:
      "Built on the Next.js App Router with server rendering and streaming.",
  },
  {
    icon: "shield",
    title: "Secure foundations",
    description:
      "A clean structure that is ready for real authentication and roles.",
  },
  {
    icon: "settings",
    title: "Configurable",
    description:
      "Tune workspace settings, notifications, and preferences as you grow.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For individuals getting started.",
    features: ["1 workspace", "Up to 3 projects", "Community support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams that need more.",
    features: [
      "Unlimited projects",
      "Up to 10 team members",
      "Priority email support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$99",
    description: "For organizations at scale.",
    features: ["Unlimited members", "Advanced permissions", "Dedicated support"],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Is there a free plan?",
    a: "Yes. The Starter plan is free forever and includes everything you need to try the product.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time from your workspace settings.",
  },
  {
    q: "Do you offer team accounts?",
    a: "Pro and Business plans include shared workspaces for your whole team.",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-brand-50 to-white" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
          <span className="inline-flex items-center rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-brand-700">
            New: a cleaner dashboard experience
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Run your business from one simple dashboard
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Track projects, manage customers, and keep your team aligned — all
            in a fast, focused workspace.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/login"
              className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
            >
              Start for free
              <Icon name="arrowRight" className="size-4" />
            </Link>
            <Link
              href="#features"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "w-full sm:w-auto",
              })}
            >
              See features
            </Link>
          </div>

          {/* Product preview */}
          <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
            <div className="grid gap-3 rounded-xl bg-slate-50 p-4 sm:grid-cols-3">
              {["Revenue", "Active users", "Projects"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-200 bg-white p-4 text-left"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">
                    {["$48.2k", "2,431", "36"][i]}
                  </p>
                  <div className="mt-4 flex h-16 items-end gap-1.5">
                    {[40, 65, 50, 80, 60, 90, 75].map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm bg-brand-500/80"
                        style={{ height: `${Math.min(h + i * 8, 100)}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section
        id="features"
        eyebrow="Features"
        title="Everything you need to stay on track"
        description="A focused set of tools that cover the essentials, without the clutter."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <span className="mb-3 grid size-10 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={f.icon} />
                </span>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="Start free and upgrade when your team is ready."
        className="bg-slate-50"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col",
                plan.highlighted && "border-brand-500 ring-1 ring-brand-500",
              )}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500"> / month</span>
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <Icon name="check" className="size-4 text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/login"
                  className={buttonVariants({
                    variant: plan.highlighted ? "primary" : "outline",
                    className: "mt-8 w-full",
                  })}
                >
                  Get started
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
        <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                {item.q}
                <span className="ml-4 text-slate-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-2xl bg-brand-600 px-6 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get organized?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Create your workspace in minutes. No credit card required.
          </p>
          <Link
            href="/login"
            className={buttonVariants({
              size: "lg",
              variant: "secondary",
              className: "mt-8 bg-white hover:bg-brand-50",
            })}
          >
            Get started for free
          </Link>
        </div>
      </section>
    </>
  );
}
