import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okutambula",
  description: "Site de Venda & Aluguel de Casa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
