import { Geist, Geist_Mono } from "next/font/google";
import { BracketProvider } from "../context/BracketContext";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";
import RouteLoaderWrapper from "../context/RouteLoaderWrapper";
import MobileProvider from "../context/MobileContext";
import { Anton, Oswald } from 'next/font/google'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-oswald',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bracket Madness",
  description: "Women's Basketball DFS Platform",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${oswald.variable} antialiased`}
      >
        <AuthProvider>
          <BracketProvider>
            <RouteLoaderWrapper>
              <MobileProvider>
                {children}
              </MobileProvider>
            </RouteLoaderWrapper>
          </BracketProvider>
        </AuthProvider>
        <Toaster position="top-center" toastOptions={{ duration: 3000}}/>
      </body>
    </html>
  );
}
