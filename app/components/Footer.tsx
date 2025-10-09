import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 pt-48 px-4 md:px-12 py-16 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center sm:items-start gap-12 md:gap-20">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <Link href="/">
            <Image
              src="/logo-light.png"
              alt="Lawu Digital Logo"
              width={150}
              height={75}
              className="object-cover aspect-[16/9]"
            />
          </Link>
          <p className="text-sm">© 2025 Lawu Digital</p>
          <div className="flex gap-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.766s.784-1.767 1.75-1.767 1.75.79 1.75 1.767-.783 1.766-1.75 1.766zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.613 1.637 4.777 4.764.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.637 4.613-4.764 4.777-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.613-1.637-4.777-4.764-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.637-4.613 4.764-4.777 1.267-.058 1.647-.07 4.85-.07zm0-2.163c-3.389 0-3.839.015-5.162.074-4.103.185-6.016 2.39-6.208 6.208-.058 1.323-.074 1.773-.074 5.162s.015 3.839.074 5.162c.185 4.103 2.39 6.016 6.208 6.208 1.323.058 1.773.074 5.162.074s3.839-.015 5.162-.074c4.103-.185 6.016-2.39 6.208-6.208.058-1.323.074-1.773.074-5.162s-.015-3.839-.074-5.162c-.185-4.103-2.39-6.016-6.208-6.208-1.323-.058-1.773-.074-5.162-.074zm0 6.827c-2.736 0-4.961 2.225-4.961 4.961s2.225 4.961 4.961 4.961 4.961-2.225 4.961-4.961-2.225-4.961-4.961-4.961zm0 8.293c-1.838 0-3.332-1.495-3.332-3.332s1.495-3.332 3.332-3.332c1.838 0 3.332 1.495 3.332 3.332s-1.495 3.332-3.332 3.332zm5.338-9.871c-.785 0-1.423.638-1.423 1.423s.638 1.423 1.423 1.423c.785 0 1.423-.638 1.423-1.423s-.638-1.423-1.423-1.423z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.898-.957-2.178-1.555-3.594-1.555-3.585 0-6.49 2.905-6.49 6.49 0 .509.056 1.001.166 1.478-5.396-.271-10.183-2.859-13.38-6.791-.56.963-.88 2.083-.88 3.267 0 2.251 1.14 4.249 2.873 5.414-.952-.03-1.848-.293-2.631-.728v.08c0 3.167 2.25 5.8 5.234 6.401-.547.149-1.12.23-1.706.23-.418 0-.825-.04-1.222-.116.834 2.592 3.245 4.482 6.136 4.532-2.23 1.758-5.045 2.812-8.093 2.812-.524 0-1.04-.03-1.553-.092 2.908 1.868 6.362 2.955 10.05 2.955 12.062 0 18.675-9.968 18.675-18.675 0-.285-.008-.568-.024-.85.808-.582 1.51-1.303 2.064-2.128z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h3 className="font-bold text-xl mb-2">Eksplor</h3>
            <ul className="flex flex-col items-center sm:items-start gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#cta" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="#footer" className="hover:text-white transition-colors">Hubungi</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h3 className="font-bold text-xl mb-2">Kontak Kami</h3>
            <ul className="flex flex-col items-center sm:items-start gap-2">
              <li>
                <a href="mailto:sejiwa718@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  sejiwa718@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281515756691" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10C22 15.5228 17.5228 20 12 20C6.47715 20 2 15.5228 2 10C2 4.47715 6.47715 0 12 0C17.5228 0 22 4.47715 22 10Z"></path>
                    <path d="M8 8V12L12 14L16 12V8H8Z"></path>
                  </svg>
                  Rizal - 081515756691
                </a>
              </li>
              <li>
                <a href="https://wa.me/6285710859720" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10C22 15.5228 17.5228 20 12 20C6.47715 20 2 15.5228 2 10C2 4.47715 6.47715 0 12 0C17.5228 0 22 4.47715 22 10Z"></path>
                    <path d="M8 8V12L12 14L16 12V8H8Z"></path>
                  </svg>
                  Alfan - 085710859720
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center sm:items-start gap-4 sm:col-span-2 md:col-span-1">
            <h3 className="font-bold text-xl mb-2">Alamat Kami</h3>
            <p className="text-center sm:text-left px-8 sm:px-0">Ds. Pencol RT 03 RW 01, Kecamatan Kartoharjo, Kabupaten Magetan, Jawa Timur 63995</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
