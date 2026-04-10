import { Footer } from "@/devlink/Footer";
import { DevLinkProvider } from "../devlink/DevLinkProvider";
import "./globals.css";
import { Navbar } from "@/devlink/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
