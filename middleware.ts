import { NextRequest, NextResponse } from "next/server";

const authRoutes = [
    "/login",
    "/register",
    "/forgot-password",
];

export function middleware(request: NextRequest) {
    const token = request.cookies.get("access_token")?.value;
    const pathname = request.nextUrl.pathname;
    const isAuthRoute = authRoutes.includes(pathname);
    const isDashboard = pathname.startsWith("/dashboard");

    /*
        Not login yet
    */
    if (!token && isDashboard) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }

    /*
        Already Login
    */
    if (token && isAuthRoute) {
        return NextResponse.redirect(
            new URL("/dashboard", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/login",
        "/register",
        "/forgot-password",
    ],
};