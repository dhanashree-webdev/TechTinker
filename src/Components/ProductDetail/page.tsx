import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img className="w-full" alt="Product" src={product.imageUrl} />
      </div>
      <div className="md:hidden">
        <img className="w-full" alt="Product" src={product.imageUrl} />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">Electronics & Robotics</p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
            {product.title}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Description</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600">{product.description}</p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Features</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600">{product.features.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
