import type { Metadata } from "next";
import "./globals.css";
import Background from "../components/background";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Urbanist } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Prevent Font Awesome from adding CSS automatically
import "../lib/fontawesome"; // Import the fontawesome setup

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Mads Kristensen",
  description: "The personal portfolio of Mads Kristensen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title) ?? ""}</title>
        <meta name="description" content={metadata.description ?? ""} />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={urbanist.className}>
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
