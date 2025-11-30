import type { Metadata } from 'next';
import { JetBrains_Mono, Playfair_Display } from 'next/font/google';

import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/providers/theme-provider';

import './globals.css';

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
  description: 'Engineer. Builder on the internet.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 pt-4 sm:pt-6 pb-8 sm:pb-12 bg-background text-foreground">
            <div className="w-full max-w-2xl space-y-8 sm:space-y-10">
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
