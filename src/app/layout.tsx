import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NewsHub - Noticias en Tiempo Real",
  description: "Mantente informado con las noticias más recientes del mundo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
