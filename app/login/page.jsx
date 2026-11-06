import { redirect } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import AuthForm from "@/components/auth/AuthForm";
import { getCurrentUser } from "@/lib/api";

export const metadata = { title: "Welcome back | NoteQuest" };

export default async function LoginPage({ searchParams }) {
  const { next } = await searchParams;
  if (await getCurrentUser()) redirect(typeof next === "string" && next.startsWith("/") && !next.startsWith("//") ? next : "/");

  return (
    <AuthShell title="Welcome back" subtitle="Log in to pick up right where you left off.">
      <AuthForm mode="login" next={typeof next === "string" ? next : ""} />
    </AuthShell>
  );
}
