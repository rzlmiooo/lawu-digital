"use client";

import { usePathname } from "next/navigation";
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Share2 } from "lucide-react";

export default function ShareButtons() {
  const pathname = usePathname();
  const shareUrl = `https://lawu-digital.vercel.app${pathname}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link disalin ke clipboard!");
  };

  const btnClass =
    "flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-100 px-4 py-2 rounded-2xl transition-all duration-200 hover:scale-105";

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
      >
        <Facebook size={18} />
        <span>Facebook</span>
      </a>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=Artikel+bagus+nih!`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
      >
        <Twitter size={18} />
        <span>Twitter</span>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
      >
        <Linkedin size={18} />
        <span>LinkedIn</span>
      </a>

      {/* Copy Link */}
      <button onClick={handleCopy} className={btnClass}>
        <LinkIcon size={18} />
        <span>Copy Link</span>
      </button>

      {/* Generic Share (navigator.share, kalau support) */}
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: document.title,
              url: shareUrl,
            });
          } else {
            handleCopy();
          }
        }}
        className={btnClass}
      >
        <Share2 size={18} />
        <span>Bagikan</span>
      </button>
    </div>
  );
}
