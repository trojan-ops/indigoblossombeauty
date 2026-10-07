"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ICarouselImage } from "@/interfaces/ICarouselImage";

export default function BannerSlider({ images }: { images: ICarouselImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-zinc-950">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover object-center brightness-50"
          />
        </div>
      ))}
    </div>
  );
}
