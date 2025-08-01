import type { Metadata } from "next";
import RootStyleRegistry from "./emotion";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snaplog",
  description: "track your exposure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <RootStyleRegistry> {children} </RootStyleRegistry>
      </body>
    </html>
  );
}
