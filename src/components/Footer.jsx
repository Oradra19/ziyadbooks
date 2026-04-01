"use client";

import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";

const MAP_URL = "https://maps.app.goo.gl/k5MXszb1NWDMAQoP7";
const SOCIAL_URL = "https://ziyadbooks.com";

export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold mb-4">ZiyadBooks</h2>

          <p className="text-sm opacity-90 max-w-md">
            ZiyadBooks adalah platform yang menyediakan berbagai buku islami
            berkualitas untuk anak dan keluarga. Kami berkomitmen menghadirkan
            produk edukatif dengan harga terbaik.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[FaInstagram, FaTiktok, FaFacebook, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href={SOCIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-sky-600 hover:scale-110 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT (MAP) */}
        <div>
          <h3 className="font-semibold mb-3">Find Us</h3>

          <a
            href="https://maps.app.goo.gl/k5MXszb1NWDMAQoP7"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden border border-white/20"
          >
            <img
              src="/map.png"
              alt="Map location"
              className="w-full h-56 object-cover hover:scale-105 transition"
            />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-sky-700 text-center text-sm py-3">
        ©2026 Ogya Rajendra
      </div>
    </footer>
  );
}
