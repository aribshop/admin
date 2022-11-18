import { rewrite, next } from "@vercel/edge";

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
  // if the request has a cookie, redirect to home and set "set-cookie" header
  if (
    url.pathname === "/" &&
    url.search.includes("authorized") &&
    request.headers.get("cookie")
  ) {
    url.search = "";

    return rewrite(url, {
      headers: {
        "set-cookie": request.headers.get("cookie")! + "; HttpOnly",
      },
    });
  }

  return rewrite(url);
}
