import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export default function NavbarDark() {
    return (
        <div>
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
                    <ul className="flex-1 justify-center gap-8 text-md text-white items-center hidden md:flex">
                        <li><Link href='/' className="hover:text-gray-800 transition-colors">Beranda</Link></li>
                        <li><Link href='/news' className="hover:text-gray-800 transition-colors">Berita</Link></li>
                        <li><Link href='/projects' className="hover:text-gray-800 transition-colors">Layanan</Link></li>
                        <li><Link href='/portofolio' className="hover:text-gray-800 transition-colors">Portfolio</Link></li>
                        <li><Link href='#cta' className="hover:text-gray-800 transition-colors">Tentang Kami</Link></li>
                    </ul>
                    <Link
                        href='/discovery'
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 bg-opacity-70 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors border border-blue-600 backdrop-blur-sm"
                    >
                        Hubungi
                        <ArrowUpRightIcon className="w-4 h-4" />
                    </Link>
                </nav>
            </header>
        </div>
    );
}