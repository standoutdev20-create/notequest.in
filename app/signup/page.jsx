import { redirect } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import AuthForm from "@/components/auth/AuthForm";
import { getCurrentUser } from "@/lib/api";

export const metadata = { title: "Create your account | NoteQuest" };

export default async function SignupPage({ searchParams }) {
  const { next } = await searchParams;
  if (await getCurrentUser()) redirect(typeof next === "string" && next.startsWith("/") && !next.startsWith("//") ? next : "/");

  return (
    <AuthShell title="Create your account" subtitle="Start learning in under a minute.">
      <AuthForm mode="signup" next={typeof next === "string" ? next : ""} />
    </AuthShell>
  );
}
