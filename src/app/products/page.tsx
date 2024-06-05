import Link from 'next/link';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const products = {
  'stem-kit': [
    {
      id: 1,
      imageUrl: '/images/stem-kit.webp',
      url: 'beginner-kit',
      title: 'Beginner Kit',
      description: '1) Plug-n-play blocks for students to easily learn about electronics & science. 2) 3 Cretiles & Accessories + Construction Kit 3) 3 Sensors included in the kit! 4) 16 well defined sessions for Electronics & Science projects (no coding)',
      features: ['12 months warranty', 'Complete box'],
      isFeatured: true,
    },
    // ... other stem-kit products
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

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-5 text-slate-600">
          Products
        </h2>
        {Object.keys(products).map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-slate-600 capitalize">{category.replace('-', ' ')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products[category].map((product) => (
                <div key={product.id} className="border p-4">
                  <Link href={`/products/${category}/${product.url}`}>
                    <a>
                      <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover mb-4" />
                      <h3 className="text-lg font-bold">{product.title}</h3>
                      <p className="text-sm">{product.description}</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
