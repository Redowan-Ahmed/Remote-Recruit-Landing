import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RemoteRecruit — Connect Talent with Opportunity",
  description: "RemoteRecruit connects full-time, part-time, and freelance workers with businesses worldwide. No paywalls, no fees, no barriers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col antialiased overflow-x-hidden" data-new-gr-c-s-check-loaded="14.1304.0" data-gr-ext-installed="">{children}</body>
    </html>
  );
}
