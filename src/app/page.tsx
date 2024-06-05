
import Navbar from "@/Components/Navbar/Navbar";
import Footer from './../Components/Footer/Footer'
import { Hero } from "@/Components/Hero/Hero";
import Modal from "@/Components/Modal/Modal";
import Products from "@/Components/Products/Products";
import Head from 'next/head';

const products = [
  {
    id: 1,
    imageUrl: '/images/category-images/stem-kit/stem-kit.webp',
    title: "STEM Education Solution",
    description: "Choose from Junior, Senior, or Combined kits to suit different age groups and learning levels. Each kit is designed to provide age-appropriate learning experiences.",
    features: ["12 months warranty", "Complete box"],
    url:'products/stem-kit',
    isFeatured: true,
  },
  {
    id: 2,
    imageUrl: '/images/category-images/laptop/laptop.png',
    title: "Laptops",
    url:'products/laptops',
    description: "Effortlessly take your productivity on the go. This laptop's sleek, compact design makes it perfect for working from anywhere.",
    features: ["12 months warranty", "Complete box"],
    isFeatured: true,
  },
  {
    id: 3,
    imageUrl: '/images/category-images/mini-pc/mini-pc.png',
    title: "Mini PC",
    url:'products/mini-pc',
    description: "Perfect for everyday tasks and entertainment, this versatile mini PC is also energy-efficient, helping you save on your electricity bills.",
    features: ["12 months warranty", "Complete box"],
    isFeatured: true,
  },
];


export default function Home() {
  return (
    <>
    <Head>
    <link rel="icon" href="./tech-link.svg" sizes="16x16" type="image/x-icon" />
    </Head>
      <Navbar/>
      <Hero/>
      <div>
        <h2 className="text-2xl sm:text-4xl text-slate-500 text-center mt-10 font-bold">Our Products</h2>
      <Products products={products}/>
      </div>
      <Modal/>
      <Footer/>
    </>
  );
}
