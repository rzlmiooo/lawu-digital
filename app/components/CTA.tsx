import React from 'react';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="relative mt-12 mb-4 h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      <Image
        src="/images/nasa-earth.jpg"
        alt="Elevate your space"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
          Naikkan Level Usaha Anda<br />
          dengan Digitalisasi
        </h2>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 transition duration-300 cursor-pointer">
          Hubungi Kami
        </button>
      </div>
    </section>
  );
};

