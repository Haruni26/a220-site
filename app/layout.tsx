import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbus A220",
  description: "Made by Aaron Seymour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
