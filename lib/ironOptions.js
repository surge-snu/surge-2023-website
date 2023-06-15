import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
export const ironOptions = {
    cookieName: "SURGE_SESSION_COOKIE",
    password: process.env.APPLICATION_SECRET,
};

export function withSessionSSR(handler) {
    return withIronSessionSsr(handler, ironOptions)
}