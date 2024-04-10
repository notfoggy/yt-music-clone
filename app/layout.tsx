import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import Siderbar from "@/components/Siderbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cllone YT Music",
  description: "Clone Youtube Music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <div className="bg-pink-300">
          <div className="bg-white w-[200px] h-[200px] "></div>
          <div className="bg-red-600 w-[300px] h-[300px]"></div>
          <div className="bg-blue-600 w-[400px] h-[400px] absolute"></div>
          <div className="bg-purple-400 w-[200px] h-[200px] absolute"></div>
          <div className="bg-green-400 w-[100px] h-[100px] relative"></div>
          <div className="bg-orange-500 w-[100px] h-[100px] relative"></div>
        </div> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Siderbar>{children}</Siderbar>
        </ThemeProvider>
      </body>
    </html>
  );
}
