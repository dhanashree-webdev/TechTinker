"use client"
import React from 'react';
import './products.css';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  isFeatured?: boolean; // Optional property
  url?:string;
  features: string[];
}

function Products({ products }: { products: Product[] }): JSX.Element {
  return (
    <div className="">
      <div className="mx-auto container py-8 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.id} className="product lg:mb-0 mb-8">
                
              <div>
                <Image
                  src={product.imageUrl}
                  className="w-full h-48"
                  alt={product.title}
                  width={100}
                  height={100}
                  priority={true}
                />
              </div>
             
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  {product.isFeatured && (
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                  <Link href={product.url || "#"}>
                    <h2 className="text-lg font-semibold">{product.title}</h2>               
                    </Link>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{product.description}</p>
                  <div className="flex mt-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;