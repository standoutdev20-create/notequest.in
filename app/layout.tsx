import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollExtras from "@/components/ui/ScrollExtras";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import { getCurrentUser } from "@/lib/api";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "NoteQuest | Learn, Build, Grow",
  description:
    "Tech articles, personal notes and step-by-step study paths for students and developers.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  return (
    <html lang="en" className={sans.variable}>
      <body>
        <ScrollExtras />
        <Navbar user={user ? { name: user.name, email: user.email, role: user.role } : null} />

        <main>{children}</main>

        <Footer />
        <ScrollReveal />
        <PageViewTracker />
      </body>
    </html>
  );
}
