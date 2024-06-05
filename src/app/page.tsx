
import Navbar from "@/Components/Navbar/Navbar";
import Footer from './../Components/Footer/Footer'
import { Hero } from "@/Components/Hero/Hero";
import Modal from "@/Components/Modal/Modal";
import stemkit from './../Components/images/stem-kit.webp'
import Products from "@/Components/Products/Products";

const products = [
  {
    id: 1,
    imageUrl: stemkit,
    title: "STEM Education Solution",
    description: "Choose from Junior, Senior, or Combined kits to suit different age groups and learning levels. Each kit is designed to provide age-appropriate learning experiences.",
    features: ["12 months warranty", "Complete box"],
    url:'/stem-kit',
    isFeatured: true,
  },
  {
    id: 2,
    imageUrl: stemkit,
    title: "STEM Education Solution",
    description: "Choose from Junior, Senior, or Combined kits to suit different age groups and learning levels. Each kit is designed to provide age-appropriate learning experiences.",
    features: ["12 months warranty", "Complete box"],
    isFeatured: true,
  },
  {
    id: 3,
    imageUrl: stemkit,
    title: "STEM Education Solution",
    description: "Choose from Junior, Senior, or Combined kits to suit different age groups and learning levels. Each kit is designed to provide age-appropriate learning experiences.",
    features: ["12 months warranty", "Complete box"],
    isFeatured: true,
  },
];


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div>
        <h2 className="text-4xl text-slate-500 text-center mt-10 font-bold">Our Products</h2>
      <Products products={products}/>
      </div>
      <Modal/>
      <Footer/>
    </>
  );
}
