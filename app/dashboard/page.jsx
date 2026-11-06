import { redirect } from "next/navigation";

// The dashboard now lives on the home page for signed-in users.
export default function DashboardPage() {
  redirect("/");
}
