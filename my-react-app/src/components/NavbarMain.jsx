import React, { useState } from "react";
import logo from "../assets/tokopedia.png";

export default function NavbarMain() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="bg-white px-56 pb-4 shadow-lg">
      <div>
        <img className="h-24 w-56" src={logo} alt="Logo Tokopedia" />
      </div>
      <div className="text-black font-bold text-sm">
        <ul className="flex space-x-12">
          <li>HOME</li>
          <li>COMPANY</li>
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("menu1")}
            onMouseLeave={handleMouseLeave}
          >
            COMMUNITY <i className="bi bi-chevron-down"></i>
            {activeDropdown === "menu1" && (
              <ul className="absolute left-0 mt-0 font-normal bg-white border shadow-md rounded-lg z-50 group-hover:block">
                <li className="px-4 py-2">Seller Story</li>
                <li className="px-4 py-2">Life at Tokopedia</li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("menu2")}
            onMouseLeave={handleMouseLeave}
          >
            STORIES <i className="bi bi-chevron-down"></i>
            {activeDropdown === "menu2" && (
              <ul className="absolute left-0 mt-0 font-normal bg-white border shadow-md rounded-lg z-50 group-hover:block">
                <li className="px-4 py-2">Behind The Scene</li>
                <li className="px-4 py-2">Innovation</li>
                <li className="px-4 py-2">Milestone</li>
                <li className="px-4 py-2">Operation</li>
                <li className="px-4 py-2">Product</li>
                <li className="px-4 py-2">Social Impact</li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("menu3")}
            onMouseLeave={handleMouseLeave}
          >
            INSIGHT <i className="bi bi-chevron-down"></i>
            {activeDropdown === "menu3" && (
              <ul className="absolute left-0 mt-0 font-normal bg-white border shadow-md rounded-lg z-50 group-hover:block">
                <li className="px-4 py-2">Fashion Wanita</li>
                <li className="px-4 py-2">Toys & Gaming</li>
                <li className="px-4 py-2">Komputer & Laptop</li>
                <li className="px-4 py-2">Otomotif</li>
                <li className="px-4 py-2">Edukasi</li>
                <li className="px-4 py-2">Elektronik</li>
                <li className="px-4 py-2">Kerja</li>
                <li className="px-4 py-2">Perawatan Hewan</li>
                <li className="px-4 py-2">Sports & Football</li>
                <li className="px-4 py-2">Salam</li>
                <li className="px-4 py-2">Travel dan Kuliner</li>
                <li className="px-4 py-2">Topik Seru Lainnya</li>
                <li className="px-4 py-2">Top List</li>
                <li className="px-4 py-2">Relationship</li>
                <li className="px-4 py-2">Kids and Parenting</li>
                <li className="px-4 py-2">Keuangan</li>
                <li className="px-4 py-2">Kesehatan</li>
                <li className="px-4 py-2">Kecantikan</li>
                <li className="px-4 py-2">Home and Living</li>
                <li className="px-4 py-2">Hobi dan Gaya Hidup</li>
                <li className="px-4 py-2">Gaya dan Fashion Pria</li>
                <li className="px-4 py-2">Gadget dan Teknologi</li>
                <li className="px-4 py-2">Entertainment</li>
              </ul>
            )}
          </li>
          <li>TOP LIST</li>
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("menu4")}
            onMouseLeave={handleMouseLeave}
          >
            NEWSROOM <i className="bi bi-chevron-down"></i>
            {activeDropdown === "menu4" && (
              <ul className="absolute left-0 mt-0 font-normal bg-white border shadow-md rounded-lg z-50 group-hover:block">
                <li className="px-4 py-2">Press Release</li>
                <li className="px-4 py-2">Siaran Pers</li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("menu5")}
            onMouseLeave={handleMouseLeave}
          >
            KALKUPEDIA <i className="bi bi-chevron-down"></i>
            {activeDropdown === "menu5" && (
              <ul className="absolute left-0 mt-0 font-normal bg-white border shadow-md rounded-lg z-50 group-hover:block">
                <li className="px-4 py-2">Kalkulator BMI</li>
              </ul>
            )}
          </li>
          <li>
            <i className="bi bi-search"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
