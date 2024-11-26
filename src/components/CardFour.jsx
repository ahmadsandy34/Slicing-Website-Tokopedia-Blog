import React from "react";

export default function CardFour() {
  return (
    <div className="bg-white px-56 py-2 my-4">
        
      <div className="grid grid-cols-2 gap-1">
        <div className="relative group overflow-hidden cursor-pointer">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            src="https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg"
            alt=""
          />
          <div className="absolute bottom-4 left-4 text-white text-xl w-4/5 z-20">
            <h3 className="font-medium">
              Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion
              Week Punya Kejutan Buat Kamu!
            </h3>
            <p className="text-sm mt-1">21 March 2024</p>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-1">
          <div className="relative group overflow-hidden cursor-pointer">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              src="https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg"
              alt=""
            />
            <div className="absolute bottom-4 left-4 text-white text-xl w-3/5 z-20">
              <h3 className="font-medium">
                Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama
                Tokopedia
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="relative group overflow-hidden cursor-pointer">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 "
                src="https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg"
                alt=""
              />
              <div className="absolute bottom-4 left-4 text-white w-3/4 z-20">
                <h3 className="font-medium">
                  Implementasi Al di Tokopedia, dari Gudang Pintar sampai
                  Sistem...
                </h3>
              </div>
            </div>

            <div className="relative group overflow-hidden cursor-pointer">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                src="https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg"
                alt=""
              />
              <div className="absolute bottom-4 left-4 text-white w-3/4 z-20">
                <h3 className="font-medium">
                  CPO Tokopedia Berbagi Cara Menerapkan Data- Driven Decision
                  Making...
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
