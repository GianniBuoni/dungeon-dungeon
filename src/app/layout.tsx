import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Provider from "./_components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dungeon Dungeon!",
  description: "One of my first attepmts at writing a simple game in next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="p-5 flex justify-center">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
