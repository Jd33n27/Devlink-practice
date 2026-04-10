import { Footer } from "@/devlink/Footer";
import { DevLinkProvider } from "../devlink/DevLinkProvider";
import { Navbar } from "@/devlink/Navbar";

// Webflow DevLink Styles
import "../devlink/global.css";
// Custom Project Styles
import "./globals.css";

export const metadata = {
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=DM+Sans:300,400,500,600,700&subset=latin"
        />
      </head>
      <body className="body">
        <DevLinkProvider>
          <Navbar />
          {children}
          <Footer />
        </DevLinkProvider>
      </body>
    </html>
  );
}
