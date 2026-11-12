import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignInApps } from "@/components/auth/SignInApps";

export const metadata: Metadata = { title: "Sign in", robots: { index: false, follow: true } };

export default function LoginPage() {
  return (
    <AuthShell title="Sign in" subtitle="Choose your Impacgo app to sign in.">
      <SignInApps />
    </AuthShell>
  );
}
