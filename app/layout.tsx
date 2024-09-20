import { ThemeProvider } from "@/components/ui/theme-provider";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/InterTight.ttf",
  variable: "--font-inter-tight",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/InterTightItalic.ttf",
  variable: "--font-inter-tight-italic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A simple task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
