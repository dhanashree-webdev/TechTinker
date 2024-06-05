import Link from 'next/link';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Products from '@/Components/Products/Products';

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


const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <div className="my-10">
      <div>
        <h2 className="text-2xl sm:text-4xl text-slate-500 text-center mt-10 font-bold">Our Products</h2>
      <Products products={products}/>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
