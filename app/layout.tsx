import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { BookingModalWrapper } from "@/components/ui/BookingModalWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Premium Car Care | Showroom Shine",
  description: "Professional car washing and detailing services that bring back the factory-fresh look.",
  keywords: ["Car Wash Service", "Car Detailing", "Premium Car Cleaning", "Ceramic Coating", "Auto Spa"],
  openGraph: {
    title: "Premium Car Care",
    description: "Professional car washing and detailing services.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(poppins.variable, "antialiased font-sans")}>
        <Navbar />
        {children}
        <Footer />
        <BookingModalWrapper />
      </body>
    </html>
  );
}
