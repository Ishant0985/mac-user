import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import ScrollToTopWrapper from "@/components/ScrollToTop/ScrollToTopWrapper";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import { Metadata } from "next";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://motorautocare.com'),
  title: {
    template: '%s | Motor Auto Care',
    default: 'Motor Auto Care - Expert Bike & E-Bike Repair Services'
  },
  description: 'Motor Auto Care - Professional bike and e-bike repair services',
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="light" style={{ colorScheme: 'light' }}>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTopWrapper />
            <GoogleOneTap />
            <Toaster position="top-center" />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}