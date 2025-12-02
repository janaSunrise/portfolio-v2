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
  description: 'Engineer and Internet Builder'
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
          <div className="min-h-screen flex flex-col items-center px-6 pt-4 bg-background text-foreground">
            <div className="w-full max-w-2xl space-y-6">
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
