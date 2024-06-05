"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './hero.css'
import Image from "next/image";
import banner1 from './images/product-banner-jpg.webp'
import banner2 from './images/banner-2.webp'

export function Hero() {
  return (
    <div className='.hero'>
        <Carousel className={`rounded-xl`} showThumbs={false}>
        <div>
        <Image
            src={banner1}
            alt="image 1"
            className="w-full"
            placeholder = "blur"
            priority={false} 
            quality={50}
        />
        </div>
        <div>
        <Image
            src={banner2}
            alt="image 2"
            className="w-full"
            placeholder = "blur"
            priority={false} 
            quality={50}
        />
        </div>
            <div>
            <Image
                    src={banner1}
                    alt="image 3"
                    className="w-full"
                    placeholder = "blur"
                    priority={false} 
                    quality={50}
                />
        </div>
    </Carousel>
    </div>
  );
}