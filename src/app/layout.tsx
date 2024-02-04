import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Basket",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {/* CONTAINER */}
          <div className="h-full w-full max-w-7xl mx-auto p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
