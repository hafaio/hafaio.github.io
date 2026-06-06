import { Niconne } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import ScrollProvider from "../components/scroll";
import ThemeProvider from "../components/theme";
import "./globals.css";

const niconne = Niconne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-niconne",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en" className={niconne.variable}>
      <body>
        <ScrollProvider />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
