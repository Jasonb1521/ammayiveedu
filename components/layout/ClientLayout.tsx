"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}