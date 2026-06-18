import type { Metadata } from "next";
import "./globals.css"; 
import { NavBar } from "@/components/NavBar"; 
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Santorini Ships Solutions | Premium Maritime Excellence",
  description: "Technical precision and luxury hospitality for global fleet management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-secondary selection:text-on-secondary overflow-x-hidden">
        
        <NavBar />

        <main>
          {children}
        </main>

        <Footer/>

        <WhatsAppButton/>

      </body>
    </html>
  );
}