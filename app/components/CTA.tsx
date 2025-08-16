import React from 'react';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="relative my-12 h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      <Image
        src="/images/nasa-earth.jpg"
        alt="Elevate your space"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
          Elevate your space with a<br />
          distinctive touch
        </h2>
        <button className="mt-8 px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

