import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <header className="flex justify-center items-center">
                <nav className="flex justify-center items-center gap-16">
                    <Link href="/">
                        <img
                            src="/logo-dark.png" 
                            alt="Logo" 
                            width={100} 
                            height={100} 
                            className="w-30 h-20 object-cover" 
                        />
                    </Link>
                    <ul className="flex gap-14 text-md">
                        <li>
                            <Link href='/' className="text-black">Beranda</Link>
                        </li>
                        <li>
                            <Link href='/news' className="text-black">Berita</Link>
                        </li>
                        <li>
                            <Link href='/projects' className="text-black">Layanan</Link>
                        </li>
                        <li>
                            <Link href='/portofolio' className="text-black">Portfolio</Link>
                        </li>
                        <li>
                            <a href='#cta' className="text-black">Tentang Kami</a>
                        </li>
                        <li>
                            <a href='#footer' className="text-black">Hubungi</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}