import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  let he = new Headers(req.headers);
  he.set("theme", "dark");

  console.log("uuytyut");
  const response = NextResponse.next({
    request: { headers: he },
  });

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: ["/api/:path*", "/"],
};
