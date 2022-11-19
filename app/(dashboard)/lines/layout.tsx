"use client";

import { LinesProvider } from "../../contexts/linesContext";

export default function LinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LinesProvider>{children}</LinesProvider>
    </section>
  );
}
