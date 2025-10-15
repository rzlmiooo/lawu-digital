'use client'

import { ArrowUpRightIcon, XMarkIcon, Bars2Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useState, useEffect } from "react";

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

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const handleOpen = useCallback(() => setIsOpen(true), []);
    const handleClose = useCallback(() => setIsOpen(false), []);
    const onClick = useCallback(() => {
        document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
    }, []);
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
        <div>
            <header className={`z-20 w-full fixed transition-transform duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
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
        </div>
    );
}