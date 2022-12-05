import { cookies } from "next/headers";
import { getStuff } from "../../repository/server";

import "./globals.css";
import LayoutClient from "./layoutClient";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("token")!.value;

  const stuff = await getStuff(token);

  // todo should we fetch the site too "/site"?

  return (
    <html lang="en">
      <head />
      <body>
        <LayoutClient stuff={stuff}>{children}</LayoutClient>
      </body>
    </html>
  );
}
