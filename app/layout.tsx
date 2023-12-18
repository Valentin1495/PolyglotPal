import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UniTalks | Your Place to Talk and Hang Out',
  description:
    'UniTalks is a dynamic communication platform where users engage in seamless text messaging, voice calls, and collaborative file sharing, fostering a unified and interactive virtual environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
