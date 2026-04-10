import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/devlink/Footer";
import { DevLinkProvider } from "../devlink/DevLinkProvider";
import { Navbar } from "@/devlink/Navbar";

// Webflow DevLink Styles
import "../devlink/global.css";
// Custom Project Styles
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "My DevLink App",
  description: "Built with Next.js and Webflow DevLink",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} body`}>
        <DevLinkProvider>
          <Navbar />
          {children}
          <Footer />
        </DevLinkProvider>
      </body>
    </html>
  );
}
