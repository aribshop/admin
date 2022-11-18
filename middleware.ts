import { rewrite } from "@vercel/edge";
import { hostname } from "os";

export const config = {
  // Only run the middleware on the home route
};

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/_next")) {
    return rewrite(url);
  }

  // if page is not login or doesn't have a cookie, redirect to login
  if (url.pathname !== "/login" && !request.headers.get("cookie")) {
    url.pathname = "/login";
    return Response.redirect(url);
  }

  return rewrite(url);
}
