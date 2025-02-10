import { isEmpty } from "lodash"
import { NextURL } from "next/dist/server/web/next-url"
import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const username = req.cookies.get("username")?.value

  const { pathname, origin } = req.nextUrl

  if (isEmpty(username)) {
    if (pathname !== "/login") {
      const loginUrl = new NextURL("/login", origin)
      return NextResponse.redirect(loginUrl)
    }
  } else {
    if (["/login", "/"].includes(pathname)) {
      const feedUrl = new NextURL("/feed", origin)
      return NextResponse.redirect(feedUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/login", "/blog/:path*"],
}
