import React, { useState } from "react";
import CardThree from "../components/CardThree";

export default function CardThreeContainer() {
  const [content, setContent] = useState([
    {
      id: 1,
      title: "Sambut Hari Pelanggan Nasional 2023, Intip Inovasi Customer Experience di...",
      image:
        "https://images.tokopedia.net/img/KRMmCm/2023/10/6/b883a8a5-66f9-4546-a6d5-e64c697f30a7.jpg",
      date: "6 October 2023",
    },
    {
      id: 2,
      title:
        "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries...",
      image:
        "https://images.tokopedia.net/img/KRMmCm/2023/10/4/7595bffd-ceca-45e4-be13-c73ac8be9312.jpg",
      date: "4 October 2023",
    },
    {
      id: 3,
      title:
        "Tokopedia Luncurkan Fitur ‘Dipromosikan Affiliate’, Pengguna Makin Mudah Dapat...",
      image:
        "https://images.tokopedia.net/img/KRMmCm/2023/9/13/5f575be0-eedd-4372-9e4d-c0ae89dd88d1.jpg",
      date: "13 September 2023",
    },
  ]);
  const [content1, setContent1] = useState([
    {
      id: 1,
      title: "Mengenal Sosok Kartini Masa Kini: NakaBunda Tim Tokopedia Care",
      image:
        "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/04/NakaBunda-1-324x160.png",
      date: "8 November 2023",
    },
    {
      id: 2,
      title:
        "Perayaan 1 Dekade Tokopedia: Berbagi Tawa Bersama Keluarga Besar Nakama",
      image:
        "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/IMG_0464-324x160.jpg",
      date: "19 October 2023",
    },
    {
      id: 3,
      title:
        "Evoware: Produksi Gelas yang Bisa Dimakan untuk Mengurangi Sampah...",
      image:
        "https://images.tokopedia.net/img/KRMmCm/2023/8/29/e5ccdc10-fbb0-4158-9011-420702a793e6.jpg",
      date: "29 August 2023",
    },
  ]);
  const [content2, setContent2] = useState([
    {
      id: 1,
      title: "Beraksi untuk Sesama di Tahun ke-13 Tokopedia",
      image:
        "https://images.tokopedia.net/img/KRMmCm/2022/9/15/e588a5b4-5d18-4af9-a1c0-c15f65c9498d.jpg",
      date: "15 September 2022",
    },
    {
      id: 2,
      title:
        "Wujudkan Komitmen Jaga Kelestarian Lingkungan, Tokopedia Tanam Ribuan...",
      image:
        "https://images.tokopedia.net/img/KRMmCm/2022/8/24/b8fad339-c804-4db0-8df4-e3bb906f7963.jpg",
      date: "24 August 2022",
    },
    {
      id: 3,
      title:
        "Kontribusi Nakama untuk Lingkungan Lewat Tanam Pohon Mangrove di Progra...",
      image:
        "https://images.tokopedia.net/img/KRMmCm/2022/8/4/9d5f5e0d-1e40-42b7-b0ed-d9bf6528f650.jpg",
      date: "4 August 2022",
    },
  ]);
  const [title, setTitle] = useState("Siaran Pers");
  const [title1, setTitle1] = useState("Behind The Scene");
  const [title2, setTitle2] = useState("Social Impact");
  const [isFirst, setIsFirst] = useState(false);

  return (
    <>
      <CardThree title={title} content={content} isFirst={true} />
      <CardThree title={title1} content={content1} />
      <CardThree title={title2} content={content2} />
    </>
  );
}
