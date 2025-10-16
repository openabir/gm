import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LenisProvider } from "@/components/ui/lenis-provider";
import { Borel, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const borel = Borel({
  weight: "400",
  variable: "--font-borel",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growth Marg — AI Driven Marketing Agency",
  description:
    "Tripura's first AI driven marketing agency. We build networks and grow networth with strategic digital marketing solutions.",
  keywords: [
    "digital marketing",
    "AI marketing",
    "Tripura",
    "marketing agency",
    "SEO",
    "social media marketing",
  ],
  authors: [{ name: "Growth Marg" }],
  openGraph: {
    title: "Growth Marg — AI Driven Marketing Agency",
    description:
      "Tripura's first AI driven marketing agency. We build networks and grow networth.",
    type: "website",
    locale: "en_IN",
    siteName: "Growth Marg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Marg — AI Driven Marketing Agency",
    description: "Tripura's first AI driven marketing agency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolageGrotesque.variable} ${borel.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
