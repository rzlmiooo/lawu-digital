import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div id="home" className="flex flex-col h-screen bg-white overflow-x-hidden">
      <Navbar/>
      <main className="flex flex-col bg-white">
        {/* hero section */}
        <section className="relative flex justify-center items-center gap-5">
          <div className="px-40 py-40">
            <h1 className="text-black text-6xl/18">Transformasi digital, tanpa ribet.</h1>
          </div>
          <div className="px-60 py-40">
            <Image src="/hero.png" alt="Hero" width={500} height={500} priority className="absolute top-0 right-0 size-150 object-contain"></Image>
          </div>
        </section>
        {/* about section */}
        <section className="flex p-40 gap-10">
          <div className="w-1/3 text-black text-2xl">
            <span className="italic text-3xl">Lawu Digital</span> adalah perusahaan startup yang bergerak pada bidang digitalisasi. Kami mendukung kemajuan teknologi daerah dengan mempercepat digitalisasi masyarakat dengan harga terjangkau, dengan kualitas pelayanan terbaik.</div>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 w-2/3">
            <div className="w-full bg-black flex justify-center items-center text-2xl text-white">Website</div>
            <div className="w-full bg-black flex justify-center items-center text-2xl text-white">Aplikasi</div>
            <div className="w-full bg-black flex justify-center items-center text-2xl text-white">Desain Produk</div>
            <div className="w-full bg-black flex justify-center items-center text-2xl text-white">Desain Banner</div>
          </div>
        </section>
        {/* portofolio section */}
        <section className="flex flex-col gap-10 py-40">
          <div className="flex flex-col gap-2 justify-center items-center text-black">
            <h2 id="projects" className="text-6xl">Puncak <span className="italic">Lawu</span>, Puncak <span className="italic">Digitalisasi</span></h2>
            <h3 className="text-2xl">Kami belajar. Beradaptasi. Menuju puncak.</h3>
          </div>
          <div className="relative flex justify-center items-end">
            <svg className="absolute bottom-0 left-0 z-0" width="284" height="270" viewBox="0 0 284 270" fill="none" xmlns="http://www.w3.org/  2000/svg">
              <path d="M128 0L283.885 270H-27.8846L128 0Z" fill="black"/>
            </svg>
            <Image src="/sejiwa.png" alt="Sejiwa" width={100} height={100} className="z-1 w-100 h-100 border-3 border-r-0 border-black object-cover object-top"></Image>
            <Image src="/polsek.png" alt="Polsek" width={100} height={100} className="z-1 w-100 h-100 border-3 border-black object-cover object-top"></Image>
            <svg className="absolute bottom-0 right-0 z-0" width="396" height="405" viewBox="0 0 396 405" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M234 0L467.827 404.25L0.173141 404.25L234 0Z" fill="black"/>
            </svg>
          </div>
          <div className="flex justify-center gap-76">
            <h5 className="-m-5 text-xl text-black italic">Sejiwa App</h5>
            <h5 className="-m-5 text-xl text-black italic">Polsek Bendo</h5>
          </div>
        </section>
        {/* cta section */}
        <section className="relative flex flex-col justify-center items-center py-10">
          <div className="grid grid-cols-2 pl-60 py-30 justify-center items-center">
            <h2 id="cta" className="flex justify-center items-center text-6xl text-black">Selanjutnya, adalah Anda.</h2>
            <h2 className="flex justify-center items-center text-6xl text-black">Wujudkan web/aplikasi impian Anda.</h2>
          </div>
          <div>
            <Link href="/" className="my-20 flex gap-2 justify-center items-center text-5xl text-black">
              Bersama <Image src="/logo-dark.png" alt="Logo" width={100} height={100} className="size-36"></Image> <ArrowUpRightIcon className="bg-black text-white size-8 rotate-45"/>
            </Link>
          </div>
          <svg className="absolute bottom-0 left-0 z-0" width="362" height="405" viewBox="0 0 362 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 0L361.827 404.25L-105.827 404.25L128 0Z" fill="black"/>
          </svg>
          <svg className="absolute bottom-0 right-0 z-0" width="299" height="270" viewBox="0 0 299 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M156 0L311.885 270H0.115433L156 0Z" fill="black"/>
          </svg>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
