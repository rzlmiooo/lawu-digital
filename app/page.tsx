"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Footer from "./components/Footer";

const Sidebar = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.button
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-30"
        />
        <motion.aside
          key="sidebar"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed top-0 right-0 h-screen w-2/3 flex flex-col justify-start items-start bg-gray-900 z-40"
        >
          <button onClick={onClose} className="flex justify-end w-full py-5 pb-24 px-4 cursor-pointer">
            <XMarkIcon className="w-8 h-auto" />
          </button>

          <Link href="/">
            <Image
              src="/logo-light.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-4 w-auto h-32 object-contain"
            />
          </Link>

          <ul className="flex flex-col justify-start items-start gap-4 p-6 text-lg text-gray-400">
            <li><Link href="/news" className="hover:text-gray-100 transition-colors">Berita</Link></li>
            <li><Link href="/projects" className="hover:text-gray-100 transition-colors">Layanan</Link></li>
            <li><Link href="/portofolio" className="hover:text-gray-100 transition-colors">Portfolio</Link></li>
            <li>
              <Link href="#cta" scroll={false} className="hover:text-gray-100 transition-colors">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </motion.aside>
      </>
    )}
  </AnimatePresence>
));
Sidebar.displayName = "Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const onClick = useCallback(() => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setHidden(currentY > lastY && currentY > 80);
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
      {/* Header */}
      <header
        className={`z-20 w-full fixed transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-3 px-4 bg-gray-950">
          <Link href="/">
            <Image
              src="/logo-light.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-auto h-12 aspect-[16/9] object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <ul className="flex-1 justify-center gap-8 text-md text-gray-400 items-center hidden md:flex">
            <li><Link href="/news" className="hover:text-gray-100">Berita</Link></li>
            <li><Link href="/projects" className="hover:text-gray-100">Layanan</Link></li>
            <li><Link href="/portofolio" className="hover:text-gray-100">Portfolio</Link></li>
            <li>
              <Link href="#cta" onClick={onClick} scroll={false} className="hover:text-gray-100">
                Tentang Kami
              </Link>
            </li>
          </ul>

          <Link
            href="#footer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 bg-opacity-70 text-gray-100 font-semibold rounded-full hover:bg-blue-700 transition-colors border border-blue-600 backdrop-blur-sm"
          >
            Hubungi
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>

          <button onClick={handleOpen} className="block sm:hidden">
            <Bars2Icon className="w-6 h-auto cursor-pointer" />
          </button>
        </nav>
      </header>

      <Sidebar isOpen={isOpen} onClose={handleClose} />

      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <motion.section
          className="relative flex justify-center items-center px-48 py-68 sm:px-36 sm:py-68 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="z-10 px-4 max-w-4xl">
            <h1 className="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Transformasi digital, <br /> tanpa ribet.
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Solusi digitalisasi bisnis Anda. Bersama Lawu Digital
            </p>
            <div className="mt-8">
              <Link href="#cta" onClick={onClick} scroll={false} className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-gray-100 font-semibold rounded-full hover:bg-blue-700 transition-colors animate-pulse">
                Pesan Sekarang <ArrowLeftIcon className="w-5 h-5 transform -rotate-45" />
              </Link>
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
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
          >
            <source src="https://res.cloudinary.com/dinw0wb0b/video/upload/v1759917139/grid-futuristic-video_xtb8m5.mp4" type="video/mp4" />
          </video>

          <div className="z-10 text-gray-400 text-base sm:text-lg md:text-2xl leading-relaxed p-2">
            <span className="italic text-gray-200 text-2xl sm:text-3xl font-semibold">Lawu Digital</span> adalah perusahaan startup yang bergerak pada bidang digitalisasi. Kami mendukung kemajuan teknologi daerah dengan mempercepat digitalisasi masyarakat dengan harga terjangkau, dengan kualitas pelayanan terbaik.
          </div>
          <div className="z-10 grid grid-cols-2 gap-4">
            <div className="p-8 border border-gray-700 rounded-lg flex flex-col items-start bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-colors hover:bg-opacity-90">
              <h4 className="text-2xl text-gray-100 font-semibold">Website</h4>
              <p className="mt-2 text-gray-400 text-sm">Solusi Website sederhana hingga kompleks. Jaminan uptime web 99%</p>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg flex flex-col items-start bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-colors hover:bg-opacity-90">
              <h4 className="text-2xl text-gray-100 font-semibold">Aplikasi</h4>
              <p className="mt-2 text-gray-400 text-sm">Solusi Aplikasi mobile ringan, responsive, dan realtime.</p>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg flex flex-col items-start bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-colors hover:bg-opacity-90">
              <h4 className="text-2xl text-gray-100 font-semibold">Desain Produk</h4>
              <p className="mt-2 text-gray-400 text-sm">Ubah ide ada menjadi Produk yang memiliki nilai market yang kuat</p>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg flex flex-col items-start bg-gray-900 bg-opacity-70 backdrop-blur-sm transition-colors hover:bg-opacity-90">
              <h4 className="text-2xl text-gray-100 font-semibold">Desain<br/>Grafis</h4>
              <p className="mt-2 text-gray-400 text-sm">Solusi kebutuhan poster, flyer, undangan, dll.</p>
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
          <div className="flex flex-col gap-2 justify-center items-center text-gray-100">
            <h2 id="projects" className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Puncak <span className="italic font-normal">Lawu</span>, Puncak <span className="italic font-normal">Digitalisasi</span></h2>
            <h3 className="text-lg sm:text-2xl text-gray-400">Kami belajar. Beradaptasi. Menuju puncak.</h3>
          </div>
          <div className="relative flex justify-center items-end sm:mt-8">
            <Link href="https://sejiwa.my.id" target='_blank' className='flex flex-col items-center'>
              <Image src="/sejiwa.png" alt="Sejiwa" width={400} height={400} className="w-full sm:w-100 h-100 object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:z-20"/>
              <h5 className="mt-4 text-xl text-gray-400 italic">Sejiwa App</h5>
            </Link>
            <Link href="https://polsek-bendo.my.id" target='_blank' className='flex flex-col items-center'>
              <Image src="/polsek.png" alt="Polsek" width={400} height={400} className="w-full sm:w-100 h-100 object-cover object-top rounded-lg shadow-2xl ml-4 transition-transform duration-300 hover:scale-105 hover:z-20"/>
              <h5 className="mt-4 text-xl text-gray-400 italic">Polsek Bendo</h5>
            </Link>
          </div>
        </motion.section>

        {/* CTA Section with Video Background */}
        <section id="cta" className="scroll-mt-24 relative flex flex-col justify-center items-center py-32 px-6 text-center overflow-hidden">
          {/* Background video for this section only */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-11/12 object-cover z-0"
          >
            {/* Using the user-provided video file */}
            <source src="https://res.cloudinary.com/dinw0wb0b/video/upload/v1759917101/blue-toggle_tpyxfg.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-gray-950 via-gray-950/75 to-gray-950 z-10"/>
          <div className="z-10 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-100">
              Selanjutnya, adalah Anda.
            </h2>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-100">
              Wujudkan web & aplikasi impian Anda.
            </h2>
          </div>
          <div className="z-10 mt-10">
            <Link href="/" className="inline-flex items-center gap-2 px-8 bg-blue-600 text-gray-100 font-semibold rounded-full hover:bg-blue-700 transition-colors">
              Bersama <Image src="/logo-light.png" alt="Logo" width={100} height={100} className="w-auto h-16 object-cover"></Image> <ArrowUpRightIcon className="w-auto h-8" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
