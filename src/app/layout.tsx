import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://simondev.com"),
  title: {
    default: "SimonDev",
    template: "%s | SimonDev",
  },
  description: "This is a My app with Next.js",
  keywords: ["My", "app", "next.js"],
  authors: [{ name: "Gustavo Dos Santos" }],
  creator: "Gustavo Dos Santos",
  applicationName: "SimonDev",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/es-AR",
      // "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "SimonDev",
    description: "This is a My app with Next.js",
    siteName: "SimonDev",
    images: "/favicon.png",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: { rel: "apple-touch-icon", url: "/favicon.png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " antialiased min-h-screen flex flex-1 flex-col justify-between md:gap-y-2"
        }
      >
        <header
          role="banner"
          className="flex justify-start items-center gap-x-5 ml-3 mt-1 md:ml-5 md:mt-2"
        >
          <h1 className="text-4xl font-bold text-center">SimonDev</h1>
          <p className="text-amber-600 dark:text-amber-400 bg-gray-200 dark:bg-gray-800 py-1 px-2 rounded-md text-sm font-bold ">
            Page in development
          </p>
        </header>
        <nav
          role="navigation"
          className="mx-auto w-full md:max-w-3xl lg:max-w-7xl flex justify-center items-center gap-x-4 flex-wrap p-4"
        >
          <NavBar />
        </nav>
        <main
          role="main"
          className="flex flex-col items-center justify-between p-5 md:p-10 flex-1 mx-auto w-full md:max-w-3xl lg:max-w-7xl"
        >
          {children}
        </main>
        <footer role="contentinfo" className="text-center p-10">
          <p className="text-gray-600 dark:text-gray-300">
            Powered by Next.js & Gustavo Dos Santos © {new Date().getFullYear()}
          </p>
        </footer>
      </body>
    </html>
  );
}
