import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UCR Pre-Therapy Student Orginization",
  description:
    "Connects, inspires, and brings opportunities to pre-therapy students at UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
