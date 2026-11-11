import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsentBanner } from "@/components/ConsentBanner";

export const metadata: Metadata = { title: { default: "FINWEB SOLUTION", template: "%s | FINWEB SOLUTION" }, description: "Financial operations and digital architecture for ambitious international businesses." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><ConsentBanner/></body></html>; }
