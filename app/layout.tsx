import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollExtras from "@/components/ui/ScrollExtras";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "NoteQuest | Learn, Build, Grow",
  description:
    "Structured notes, learning resources and study paths for students and developers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <ScrollExtras />
        <Navbar />

        <main>{children}</main>

        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
