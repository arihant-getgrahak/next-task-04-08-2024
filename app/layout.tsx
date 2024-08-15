import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Post Display App",
  description: "This is post display app created using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
