import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.scss";
import dynamic from 'next/dynamic'

// don't include this component in SSR
const Header = dynamic(
  () => import('@/components/layout/Header'),
  { ssr: false }
)

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <UserProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
