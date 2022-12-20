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
  // => no, because the stuff can be new user without site, is going to create new one

  return (
    <html lang="en">
      <head />
      <body>
        <LayoutClient stuff={stuff}>{children}</LayoutClient>
      </body>
    </html>
  );
}
