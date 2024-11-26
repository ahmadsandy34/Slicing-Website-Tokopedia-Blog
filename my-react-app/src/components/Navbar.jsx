import React from "react";

export default function Navbar() {
  return (
    <div className="bg-black px-44 py-2">
      <div className="text-white text-xs flex justify-between">
        <ul className="flex space-x-4 font-medium">
            <li>Jual Beli Online</li>
            <li>Official Store</li>
            <li>Produk Digital</li>
            <li>Tiket Kereta</li>
            <li>Tiket Pesawat</li>
            <li>Donasi</li>
            <li>Layanan Finansial</li>
            <li>Bantuan</li>
        </ul>
        <ul className="flex space-x-4 ">
            <li><i className="bi bi-facebook"></i></li>
            <li><i className="bi bi-instagram"></i></li>
            <li><i className="bi bi-twitter"></i></li>
            <li><i className="bi bi-youtube"></i></li>
        </ul>
      </div>
    </div>
  );
}