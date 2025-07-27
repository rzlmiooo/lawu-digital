import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local"

const rubik = localFont({
  src: [
      {
        path: '/fonts/Rubik/rubik-v30-latin-regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: '/fonts/Rubik/rubik-v30-latin-italic.woff2',
        weight: '400',
        style: 'italic',
      },
      {
        path: '/fonts/Rubik/rubik-v30-latin-300.woff2',
        weight: '300',
        style: 'normal',
      },
      {
        path: '/fonts/Rubik/rubik-v30-latin-500.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: '/fonts/Rubik/rubik-v30-latin-700.woff2',
        weight: '700',
        style: 'normal',
      }
  ],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Lawu Digital",
  description: "Halaman utama dari Tim Lawu Digital. Melayani digitalisasi seperti pembuatan web, aplikasi, desain produk, dan lain-lain.",
  verification: {
    google: '88dA3JrWqHvGQ2XqAfG6wy6OJG5khUf-cg-vHn6ucgM'
  }
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
