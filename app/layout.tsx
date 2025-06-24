import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "./AOSProvider";

export const metadata: Metadata = {
  title: "Quality Guard MSO",
  description: "Quality Guard MSO website for Life Care Planning",
  // generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
