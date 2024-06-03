import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather app next.js for education purpose",
  description: "Weather for education purpose next.js and test one",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children} <SpeedInsights /></body>
    </html>
  );
}
