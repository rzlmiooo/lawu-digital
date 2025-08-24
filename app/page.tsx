"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const heroVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const portfolioVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  return (
    <div id="home" className="flex flex-col min-h-screen bg-gray-950 text-gray-200 font-sans overflow-x-hidden">

      {/* Header and Navigation */}
      <header className="z-20 w-full py-6">
        <nav className="container mx-auto flex items-center justify-between px-4">
          <Link href="/">
            <Image
              src="/logo-light.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-auto h-20 object-contain transition-transform duration-300 hover:scale-105 hover:animate-pulse"
            />
          </Link>
          <ul className="flex-1 justify-center gap-8 text-md text-gray-400 items-center hidden md:flex">
            <li><Link href='/news' className="hover:text-white transition-colors">Berita</Link></li>
            <li><Link href='/projects' className="hover:text-white transition-colors">Layanan</Link></li>
            <li><Link href='/portofolio' className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href='#cta' className="hover:text-white transition-colors">Tentang Kami</Link></li>
          </ul>
          <Link
            href='#footer'
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 bg-opacity-70 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors border border-blue-600 backdrop-blur-sm"
          >
            Hubungi
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </nav>
      </header>

      <main className="relative z-10 flex flex-col">
      
        {/* Hero Section */}
        <motion.section
          className="relative flex justify-center items-center py-40 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Background video for the Hero section */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
          >
            <source src="/12266398_1920_1080_30fps (1).mp4" type="video/mp4" />
          </video>
          <div className="z-10 px-4 max-w-4xl">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Transformasi digital, <br /> tanpa ribet.
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Unlock your business&apos;s potential with our seamless digital solutions.
            </p>
            <div className="mt-8">
              <a href="#cta" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors animate-pulse">
                Bersama <ArrowLeftIcon className="w-5 h-5 transform -rotate-45" />
              </a>
            </div>
          </div>
        </motion.section>
        
        


        {/* About Section with Video Background */}
        <motion.section
          className="relative container mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
          >
            <source src="/videos/grid-futuristic-video.mp4" type="video/mp4" />
          </video>

          <div className="z-10 text-gray-400 text-lg md:text-2xl leading-relaxed">
            <span className="italic text-gray-200 text-3xl font-semibold">Lawu Digital</span> adalah perusahaan startup yang bergerak pada bidang digitalisasi. Kami mendukung kemajuan teknologi daerah dengan mempercepat digitalisasi masyarakat dengan harga terjangkau, dengan kualitas pelayanan terbaik.
          </div>
          <div className="z-10 grid grid-cols-2 gap-4">
            <div className="p-8 border border-gray-700 rounded-lg flex flex-col items-start bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-colors hover:bg-opacity-90">
              <h4 className="text-2xl text-gray-100 font-semibold">Website</h4>
              <p className="mt-2 text-gray-400 text-sm">Responsive and powerful web solutions.</p>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg flex flex-col items-start bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-colors hover:bg-opacity-90">
              <h4 className="text-2xl text-gray-100 font-semibold">Aplikasi</h4>
              <p className="mt-2 text-gray-400 text-sm">Responsive and powerful mobile applications.</p>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg flex flex-col items-start bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-colors hover:bg-opacity-90">
              <h4 className="text-2xl text-gray-100 font-semibold">Desain Produk</h4>
              <p className="mt-2 text-gray-400 text-sm">Intuitive and user-centric product design.</p>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg flex flex-col items-start bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-colors hover:bg-opacity-90">
              <h4 className="text-2xl text-gray-100 font-semibold">Desain Banner</h4>
              <p className="mt-2 text-gray-400 text-sm">Stunning visuals for effective marketing.</p>
            </div>
          </div>
        </motion.section>

        {/* Portofolio Section (updated colors for dark theme) */}
        <motion.section
          className="flex flex-col gap-10 py-40"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="flex flex-col gap-2 justify-center items-center text-white">
            <h2 id="projects" className="text-6xl font-bold tracking-tight">Puncak <span className="italic">Lawu</span>, Puncak <span className="italic">Digitalisasi</span></h2>
            <h3 className="text-2xl text-gray-400">Kami belajar. Beradaptasi. Menuju puncak.</h3>
          </div>
          <div className="relative flex justify-center items-end mt-16">
            <Image src="/sejiwa.png" alt="Sejiwa" width={400} height={400} className="w-100 h-100 object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:z-20"></Image>
            <Image src="/polsek.png" alt="Polsek" width={400} height={400} className="w-100 h-100 object-cover object-top rounded-lg shadow-2xl ml-4 transition-transform duration-300 hover:scale-105 hover:z-20"></Image>
          </div>
          <div className="flex justify-center gap-76">
            <h5 className="mt-4 text-xl text-gray-400 italic">Sejiwa App</h5>
            <h5 className="mt-4 text-xl text-gray-400 italic">Polsek Bendo</h5>
          </div>
        </motion.section>

        {/* CTA Section with Video Background */}
        <section className="relative flex flex-col justify-center items-center py-32 text-center overflow-hidden rounded-lg shadow-xl">
          {/* Background video for this section only */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
          >
            {/* Using the user-provided video file */}
            <source src="/videos/blue-toggle.mp4" type="video/mp4" />
          </video>

          <div className="z-10 max-w-4xl">
            <h2 id="cta" className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Selanjutnya, adalah Anda.
            </h2>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Wujudkan web/aplikasi impian Anda.
            </h2>
          </div>
          <div className="z-10 mt-10">
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
              Bersama <Image src="/logo-dark.png" alt="Logo" width={40} height={40} className="w-auto h-8"></Image> <ArrowUpRightIcon className="w-5 h-5 rotate-45" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
