import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="mt-2 text-slate-500">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-8" })}>
        Go home
      </Link>
    </div>
  );
}
