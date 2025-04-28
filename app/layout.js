import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek - Karan",
  description: "Full Stack Projects",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}
