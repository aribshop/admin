import Nav from "./components/nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="w-full relative min-h-screen bg-gray-800 flex items-start">
          <Nav />

          <div className=" flex-1 overflow-x-hidden">{children}</div>
        </div>
      </body>
    </html>
  );
}
