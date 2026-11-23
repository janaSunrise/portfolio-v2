import { JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';

import { ThemeProvider } from 'next-themes';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { QueryProvider } from '@/providers/query-provider';

import './globals.css';

import type { Metadata } from 'next';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin']
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Sunrit Jana',
  description: 'Engineer and Internet Builder'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased`}
        >
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="min-h-screen flex flex-col items-center px-6 md:px-8 pt-8 pb-8 bg-background text-foreground">
                <div className="w-full max-w-2xl flex-1 flex flex-col space-y-6">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </QueryProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
