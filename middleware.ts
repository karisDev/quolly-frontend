import { NextResponse } from "next/server";

export function middleware(req: any, res: any) {
  if (req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/join";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
