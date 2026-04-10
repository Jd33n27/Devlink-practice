import { Footer } from "@/devlink/Footer";
import { DevLinkProvider } from "../devlink/DevLinkProvider";
import "./globals.css";
import "../devlink/global.css";
import { Navbar } from "@/devlink/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          <Navbar />
          {children}
          <Footer/>
        </DevLinkProvider>
      </body>
    </html>
  );
}
