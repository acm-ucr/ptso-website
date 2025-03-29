import "./globals.css";

import { Be_Vietnam_Pro, Quicksand } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--be_vietnam_pro-font",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--Quicksand-font",
});

export const metadata = {
  title: "UCR Pre-Therapy Student Organization",
  description:
    "Connects, inspires, and brings opportunities to pre-therapy students at UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.className} ${quicksand.className}`}>
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
