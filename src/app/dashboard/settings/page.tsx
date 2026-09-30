import type { Metadata } from "next";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your profile and workspace preferences."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-sm font-semibold text-slate-900">Profile</h2>
          <p className="mt-1 text-sm text-slate-500">
            This information is shown to your teammates.
          </p>
        </div>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal information</CardTitle>
            <CardDescription>Update your name and email address.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Not wired to a backend yet. */}
            <form className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" defaultValue="Sandy" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" defaultValue="Latte" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="settingsEmail">Email</Label>
                <Input
                  id="settingsEmail"
                  name="email"
                  type="email"
                  defaultValue="sandy@example.com"
                />
              </div>
              <div className="flex justify-end sm:col-span-2">
                <Button>Save changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
