import type { Metadata } from "next";
import { Merriweather, DM_Serif_Text } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import DarkLight from '@/components/DarkLight';
import "./globals.css";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-text',
});

export const metadata: Metadata = {
  title: "Syafi Athar Aidan",
  description: "Hello World, my name is Syafi Athar Aidan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${merriweather.variable} ${dmSerifText.variable} font-serif`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DarkLight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}