"use client"
import { usePathname } from 'next/navigation'
import ProductDetail from '../../../../Components/ProductDetail/page';
import Navbar from '../../../../Components/Navbar/Navbar';
import Footer from '../../../../Components/Footer/Footer';
import stemkit from './../../../../Components/images/stem-kit.webp'

const products = {
  'stem-kit': [
    {
      id: 1,
      imageUrl: stemkit,
      url: 'beginner-kit',
      title: 'Beginner Kit',
      description: '1) Plug-n-play blocks for students to easily learn about electronics & science. 2) 3 Cretiles & Accessories + Construction Kit 3) 3 Sensors included in the kit! 4) 16 well defined sessions for Electronics & Science projects (no coding)',
      features: ['12 months warranty', 'Complete box'],
      isFeatured: true,
    },
    {
        id: 2,
        imageUrl: stemkit,
        url: 'plug-play-robo-kit',
        title: "Plug N Play Robo Kit",
        description: `1) 13 Cretiles & accessories + Construction Kit. 2) Plug-n-play blocks for students to easily learn 
        Robotics , electronics & science concepts
        3) 16 well defined sessions for Robotics , Electronics & Science projects (no coding)
        4) Interesting robotics and motors based project
        
        `,
        features: ["12 months warranty", "Complete box"],
        isFeatured: true,
      },
      {
        id: 3,
        imageUrl: stemkit,
        url:'junior-kit',
        title: "Junior Kit",
        description: `1) 19 Cretiles & Accessories + Construction Kit
        2) Plug-n-play blocks for students to easily learn about electronics & Robotics
        3) Interesting Motors Based Projects
    4) 24 well defined sessions for Electronics & Robotics (no coding)   
    5) Light & Sound blocks`,
        features: ["12 months warranty", "Complete box"],
        isFeatured: true,
      },
      {
        id: 4,
        imageUrl: stemkit,
        url:'robocode-kit',
        title: "RoboCode Kit ",
        description: `1) 16 Cretiles & accessories + Construction Kit
        2) Wireless connection with phone and PC/Laptop
        3) Learn Robotics, Coding, IoT, Artificial Intelligence, electronics & science concepts
    4)4 Sensors included in the kit!   
    5) Light & Sound blocks
    6) 16 well defined sessions for Coding, Robotics & Science projects`,
        features: ["12 months warranty", "Complete box"],
        isFeatured: true,
      },
      {
        id: 5,
        imageUrl: stemkit,
        url:'jr-sr-combined-kit',
        title: "Jr. & Sr. Combined Kit",
        description: `1)  20 Cretiles & Accessories + Construction Kit
        2) Function of both Jr Kit and Sr Kit available
        3) 24 Well defined sessions for Jr Grades & Sr Grades each`,
        features: ["12 months warranty", "Complete box"],
        isFeatured: true,
      },
      {
        id: 6,
        imageUrl: stemkit,
        
        title: "Mini School Kit",
        url:"mini-school-kit",
        description: `1) 40 Cretiles, Accessories
        2) 100+ Pieces of Construction kit
        3) Three Year long Video curriculum (another 2 years 
          will be added
          4) 24 well defined sessions per year
          5) Includes SmartSwitch for Home Automation
    6) Variety of sensor, 3 types of Motors, water pump etc.      `,
        features: ["12 months warranty", "Complete box"],
        isFeatured: true,
      },
      {
        id: 7,
        imageUrl: stemkit,
        title: "School KIT",
        url:'school-kit',
        description: `1) 62 Cretiles, Accessories & 100+ Pieces of Construction kit
        2) Function of both Jr Kit and Sr Kit & Much More
        3)Includes SmartSwitch for Home Automation
        4) Includes interesting functions such as remote transmitter/receiver, timer & Logic Gates etc.
        5) 13 types of sensor, 4 Different types of Motors, water pump etc 
        6) Covers 5 Years curriculum
        7) 24 well defined sessions per year`,
        features: ["12 months warranty", "Complete box"],
        isFeatured: true,
      },
      {
        id: 8,
        imageUrl: stemkit,
        url: 'rapid-iot-kit',
        title: "Rapid IoT Kit",
        description: `1) 62 Cretiles, Accessories + Android Tablet + 100+ Pieces of Construction kit
        2) Function of both Jr Kit and Sr Kit & Much More
        3)Includes SmartSwitch for Home Automation & Android App Development
        4) Includes interesting functions such as remote transmitter/receiver, timer & Logic Gates etc.
        5) 13 types of sensor, 4 Different types of Motors, water pump etc 
        6) Covers 5 Years curriculum
        7) 24 well defined sessions per year`,
        features: ["12 months warranty", "Complete box"],
        isFeatured: true,
      },
  ],
  'laptops': [
    {
      id: 1,
      imageUrl: '/images/laptop.webp',
      url: 'gaming-laptop',
      title: 'Gaming Laptop',
      description: 'High performance gaming laptop with latest GPU and CPU.',
      features: ['2 years warranty', 'Complete box'],
      isFeatured: true,
    },
    // ... other laptop products
  ],
  // ... other categories
};

const ProductPage = () => {
  const pathname = usePathname();
  console.log(pathname)
   // Split the pathname and extract the category and productId
   const pathSegments = pathname.split("/").filter(segment => segment);
   const category = pathSegments[1];  // Index 1 because the path starts with an empty string due to the leading '/'
   const productId = pathSegments[2]; // Index 2 for the productId

   console.log(category,productId)

  const product = products[category]?.find((product) => product.url === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
};

export default ProductPage;