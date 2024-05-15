import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alyson Souza",
  description: "Explore meu repositório e descubra o que estou construindo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
