import { LinesProvider } from "../../../contexts/linesContext";
import LinePrinciple from "./linesPrinciple";

export default function LinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LinesProvider>
        {/* @ts-expect-error Server Component */}
        <LinePrinciple />
        {children}
      </LinesProvider>
    </section>
  );
}
