import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LoaderWrapper from "@/components/LoaderWrapper";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "West Palm Construction Solutions | Pioneer in Construction Technology",
  description:
    "WPCS delivers cutting-edge construction technology solutions including BIM Modeling, VDC Coordination, Quantity Take-Off, Prefabrication, 3D Rendering, and 4D Scheduling.",
  keywords:
    "construction technology, BIM modeling, VDC coordination, quantity takeoff, prefabrication, 3D rendering, 4D scheduling, West Palm Construction",
  openGraph: {
    title: "WPCS - Pioneer in Construction Technology",
    description:
      "Cutting-edge construction technology solutions for the modern builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `nextjs-portal, nextjs-portal * { display: none !important; }`
        }} />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <LoaderWrapper />
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
