import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "@/src/config/firebaseConfig";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/signIn" || path === "/signUp";
  const token = request.cookies.get("firebaseAuthToken")?.value || "";
  //   console.log(token);
  let authenticated;
  if (token) {
    authenticated = true;
  } else {
    authenticated = false;
  }
  //   console.log(authenticated, auth?.currentUser);
  if (isPublicPath && authenticated) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !authenticated) {
    return NextResponse.redirect(new URL("/signIn", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/backgroundRemoveScreen",
    "/blurScreen",
    "/colorizeScreen",
    "/upscaleScreen",
    "/signUp",
    "/signIn",
  ],
};
