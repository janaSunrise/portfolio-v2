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
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
