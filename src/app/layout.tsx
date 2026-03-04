import '@/styles/global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png?v=2' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png?v=2' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png?v=2' },
    { rel: 'icon', url: '/favicon.ico?v=2' },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        {props.children}
      </body>
    </html>
  );
}
