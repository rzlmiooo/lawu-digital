import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local"

const rubik = localFont({
  src: [
      {
        path: '/fonts/Rubik/rubik-v30-latin-regular.woff2',
        style: 'normal',
      },
  ],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Lawu Digital",
  description: "Halaman utama dari Tim Lawu Digital. Melayani digitalisasi seperti pembuatan web, aplikasi, desain produk, dan lain-lain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} ${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
