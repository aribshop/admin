"use client";
import Nav from "./components/nav";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <QueryClientProvider client={queryClient}>
        <body>
          <div className="w-full relative min-h-screen bg-gray-800 flex items-start">
            <Nav />

            <div className=" flex-1 overflow-x-hidden">{children}</div>
          </div>
        </body>
      </QueryClientProvider>
    </html>
  );
}
